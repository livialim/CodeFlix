import React, {useState} from "react";
import './MovieRow.css';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

//div listarea é a area total e a outra é resposavél por todos os items
// eslint-disable-next-line import/no-anonymous-default-export
export default ({title, items}) => {
    const [scrollX, setScrollX] = useState(0);

    const handleLeftArrowClick = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if (x > 0) {
            x = 0;
        }
        setScrollX(x);
    };

    const handleRightArrowClick = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = items.results.length * 150;
        if ((window.innerWidth - listW) > x) {
            x = (window.innerWidth - listW) -60;
        }
        setScrollX(x);
    };

    return(
        <div className="MovieRow">
            <h2>{title}</h2>
            <div className="MovieRow--left" onClick={handleLeftArrowClick}>
                <NavigateBeforeIcon style={{fontSize: 50}}/>
            </div>
            <div className="MovieRow--right" onClick={handleRightArrowClick}>
                <NavigateNextIcon style={{fontSize: 50}}/>
            </div>
            <div className="MovieRow--listarea"> 
                <div className="MovieRow--list" style={{
                    marginLeft: scrollX,
                    width: `${items.results.length * 150}px`
                }}>
                    {items.results.length > 0 && items.results.map((item, key) => 
                        <div className="MovieRow--item" key={key}>
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                        </div>
                    )}  
                </div>
            </div>
        </div>
    );
};
