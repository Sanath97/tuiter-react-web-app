/*eslint-disable */

import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const ProfileComponent = () => {
    const profile = useSelector(state => state.profile);
    console.log(profile);
    return (
        <>
            <div className="card mb-3">
                <div className="card-body">
                    <div className="row">
                        <div className="col-1">
                            <i className="fa fa-arrow-left"></i>
                        </div>
                        <div className="col-6">
                            <h2 className="card-title">{profile.userName}</h2>
                            <p className="card-subtitle">{profile.numberOfTweets} Tweets</p>
                        </div>
                    </div>
                </div>

                <img className="card-img-top" src={profile.bannerPicture} alt="Card image cap"
                     height={"350px"}/>
                <div className="card-body">
                    <div className="wd-grid-row">
                        <img className="wd-circular-image3  rounded-circle"
                             src={profile.profilePicture}/>
                        <Link to="../edit-profile">
                            <button className="rounded-pill float-end bg-white">Edit Profile
                            </button>
                        </Link>
                    </div>
                    <br/>
                    <br/>
                    <h1 className="float-left">{profile.userName}</h1>
                    <p>{profile.handle}</p>

                    <p>{profile.bio}</p>

                    <div className="row">
                        <div className="col-auto">
                            <span className="wd-grid-row"><i
                                className="fa-solid fa-location-dot"></i> {profile.location}</span>
                        </div>
                        <div className="col-auto">
                            <p><i
                                className="fa-solid fa-cake-candles"></i> Born {profile.dateOfBirth}
                            </p>
                        </div>
                        <div className="col-auto">
                            <i className="fa-solid fa-calendar-days"></i> Joined {profile.dateJoined}
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-auto">
                            <span><span className="fw-bold">{profile.followingCount}</span> Following </span>
                        </div>
                        <div className="col-auto">
                            <span><span className="fw-bold">{profile.followersCount}</span> Followers</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default ProfileComponent;

