import React from "react";
import '@fortawesome/fontawesome-free/css/all.css';
import "../tuits-list/index.css";

const TuitStats = (
{
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
}) => {
console.log("In Tuit stats")
    console.log(tuit.retuits)
    return(
        <ul className="list-group">
            <div className="wd-grid-row-icons">
                <div className="wd-grid-row-first">
                    <i className="fa fa-regular fa-comment"></i><span
                    className="wd-comments-style">{tuit.replies}</span>
                </div>
                <div className="wd-grid-row-first">
                    <i className="fa  fa-retweet"></i><span
                    className="wd-comments-style">{tuit.retuits}</span>
                </div>
                <div className="wd-grid-row-first">

                    <i className={tuit.liked ? "fa fa-heart" : "fa fa-regular fa-heart"}
                       style={{color: tuit.liked ? 'red' : 'gray'}}></i><span
                    className="wd-comments-style">{tuit.likes}</span>
                </div>
                <div className="wd-grid-row-first">
                    <i className="fa fa-regular fa-share-from-square"></i><span
                    className="wd-comments-style"></span>
                </div>
            </div>
        </ul>
    );
};
export default TuitStats;

