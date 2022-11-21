import React from "react";
import './Middle.css';

function Middle(props) {
    return ( 
        <div className="mid">
            <div className="mid1">
                <img src="cam1.jpg" width="200px"/>
                <div>
                    Camera 1
                </div>
                <div className="rate1">
                    {props.price}
                </div>
            </div>
            <div className="mid2">
                <img src="cam1.jpg" width="150px"/>
                <div>
                    Camera 2
                </div>
                <div className="rate1">
                {props.price1}
                </div>
            </div>
            <div className="mid3">
                <img src="cam1.jpg" width="200px"/>
                <div>
                    Camera 3
                </div>
                <div className="rate1">
                {props.price2}
                </div>
            </div>
            <div className="mid4">
                <img src="cam1.jpg" width="200px"/>
                <div>
                    Camera 4
                </div>
                <div className="rate1">
                {props.price3}
                </div>
            </div>
            <div className="mid5">
                <img src="cam1.jpg" width="200px"/>
                <div>
                    Camera 5
                </div>
                <div className="rate1">
                {props.price4}
                </div>
            </div>
        </div>
     );
}

export default Middle;