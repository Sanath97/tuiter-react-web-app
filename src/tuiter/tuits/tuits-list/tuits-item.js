import React from "react";
import TuitStats from "../tuits-stats";
import {useDispatch} from "react-redux";
import {deleteTuit} from "../tuits-reducer";

const TuitItem = ({
                      tuit = {
                          "_id": 234,
                          "topic": "Space",
                          "userName": "SpaceX",
                          "time": "2h",
                          "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
                          "image": "spacex.jpg",
                          "liked": true,
                          "replies": 123,
                          "retuits": 432,
                          "likes": 2345,
                          "handle": "@spacex",
                          "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
                      }

                  }

) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }
    return(
        <li className="list-group-item">

            <div className="wd-grid-row">
                <div className="pt-2 ps-1">
                    <img className="wd-circular-image  rounded-circle "
                         src={`/images/${tuit.image}`}/>
                </div>

                <div className="wd-grid-col-major-page wd-grid-col-tuit-major wd-grid-row">

                    <p className="wd-username-style"><span className="fw-bold">{tuit.userName}</span> <i
                        className="fa fa-check-circle"></i> <span
                        style={{"color": "rgb(110, 118, 125)"}}>
                   {tuit.handle} . {tuit.time}</span>  <i className="bi bi-x-lg float-end"
                                                          onClick={() => deleteTuitHandler(tuit._id)}></i>
                    </p>
                    <p className="wd-main-tuit-content">{tuit.tuit}</p>
                    <TuitStats key={tuit._id} tuit={tuit}></TuitStats>
                </div>

            </div>
        </li>
    );
};
export default TuitItem;