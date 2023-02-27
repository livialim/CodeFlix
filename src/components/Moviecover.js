/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import './Moviecover.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default ({item}) => {
    console.log(item);

    let genres = [];
    for (let i in item.genres){
        genres.push( item.genres[i].name );
    }

    let description = item.overview;
    if(description.length > 200){
        description = description.substring(0,200)+'...'
    }

    return (
       <section className="cover" style={{
           backgroundSize: 'cover',
           backgroundPosition: 'center',
           backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className ="cover--vertical">
                <div className = "cover--horizontal"> 
                    <div className = "cover--name">{item.original_name}</div>
                    <div className = "cover--info">
                        <div className = "cover--seasons">Assista à temporada {item.number_of_seasons} agora </div>
                    </div>
                    <div className = "cover--description">{description}</div>
                    <div className = "cover--buttons">
                        <a href = {`/wath/${item.id}`} className = "cover--watch"> ▶ Assistir</a>
                        <a href = {`/list/add/${item.id}`} className = "cover--mylist"> ⓘ Mais informações</a>
                    </div>
                    <div className = "cover--genres"><strong>Gêneros: </strong>{genres.join(', ')}</div>
                </div>
            </div>
       </section>
    );
}