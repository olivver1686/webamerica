import React, { useEffect, useState } from 'react';
import './App.css';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';



export default () => {

  const [movielist, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(()=>{
    const loadAll = async () => {
      // Pegado lalista
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      //Pegando la lista
      let Recientes = list.filter(i=>i.slug === 'Recientes');
      let randomChosen = Math.floor(Math.random() * (Recientes[0].items.results.length - 1));
      let chosen = Recientes[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);

      console.log(chosen);
    }

    loadAll();

  }, []);

  useEffect(()=>{
    const scrollListener = () => {
        if(window.scrollY > 10) {
          setBlackHeader(true);
        } else {
          setBlackHeader(false);
        }
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }

  }, []);

  return (
    <div className='page'>
      <Header black={blackHeader} />

      {featuredData &&
        <FeaturedMovie item={featuredData} />
      }

      <section className='lists'>
        {movielist.map((item, key)=>(
          <MovieRow key={key} title={item.title} items={item.items} />

        ))}
      </section>

      <footer>
      <a href="https://bit.ly/americaclub">
                    <img src="https://i.postimg.cc/Ls0Gk82K/qqqqqweqwe.png" alt="Usuario" />
                </a>
        <br/>
        Americatel + es un servicio por suscripción de pago, su contenido está variado juntando todo en uno.
        <br/> +51 946324747
      </footer>

      {movielist.length <= 0 &&
        <div className='Loading'>
          <img src="https://blog.hubspot.com/hs-fs/hubfs/7a8f8d634013568124e130728834d47a.gif?width=1500&name=7a8f8d634013568124e130728834d47a.gif" alt="cargando" />
        </div>
      }
    </div>
  );
}
