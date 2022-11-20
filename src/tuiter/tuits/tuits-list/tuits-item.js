import React from "react";
import TuitStats from "../tuits-stats";
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../../services/tuits-thunks";


const TuitItem = ({
                      tuit
                  }

) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
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