import React, {useEffect, useState} from "react";
import './App.css'
import Tmdb from './tmdb';
import MovieRow from './components/MovieRow';
import Moviecover from "./components/Moviecover";
import Header from "./components/Header";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

  const [movieList, setMovieList] = useState([]);
  const [coverData, setcoverData] = useState(null);
  const [blackHeader] = useState(true);

  useEffect(() => {
    const loadAll = async () => { //async espera o resultado
      //pegando a lista total
      let list = await Tmdb.getHomeList();
      setMovieList(list);  

      //pegando o cover
      let originals = list.filter(i=>i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length -1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setcoverData(chosenInfo);

    }
    loadAll();
  },[]);
  
  return (
    <div className="page">

      <Header black={blackHeader}/>
      
      {coverData && 
        <Moviecover item = {coverData} /> }

      <section className="lists">
        {movieList.map((item, key)=>(
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>

      <footer>
        Feito por github.com/livialim. Direitos de imagem para Netflix. Dados do www.themoviedb.org 
      </footer>

      {movieList.length <= 0 &&  
      <div className="loading">
        <img src="https://media.giphy.com/media/3y0oCOkdKKRi0/giphy.gif" alt="Carregando"></img>
      </div>
      }
    </div>
  );
}