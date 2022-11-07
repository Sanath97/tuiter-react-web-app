import React, {useState} from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {updateProfile} from "../profile/profile-reducer";
import Form from 'react-bootstrap/Form';
import  "../home/index.css"

const EditProfileComponent = () => {
    const profile = useSelector(state => state.profile);
    let [username, setUserName] = useState(profile.userName);
    let [bio, setBio] = useState(profile.bio);
    let [location, setLocation] = useState(profile.location);
    let [website, setWebsite] = useState(profile.website);
    let [birthdate, setBirthdate] = useState(profile.dateOfBirth);

    const dispatch = useDispatch();
    const saveProfile = (new_profile) => {
        dispatch(updateProfile(new_profile));
    }

    return (
        <>
            <div className="card mb-3">
                <div className="card-body">
                    <div className="row">
                        <div className="col-1">
                            <Link to="../profile">
                                <i className="bi bi-x-lg float-left"></i>
                            </Link>
                        </div>
                        <div className="col-9">
                            <h4 className="card-title">Edit Profile</h4>
                        </div>
                        <div className="col-2">
                            <Link to="../profile">
                                <button className="rounded-pill float-end bg-black text-white"
                                        onClick={() => saveProfile({
                                                                       ...profile,
                                                                       "userName": username,
                                                                       "bio": bio,
                                                                       "website": website,
                                                                       "location": location,
                                                                       "dateOfBirth": birthdate
                                                                   })}>Save
                                </button>
                            </Link>

                        </div>

                    </div>
                </div>

                <div className="card-img-top backpic">
                    <img className="profilepic__image" src="/images/react.jpg" alt="Card image cap"
                         height={"350px"}/>
                    <div className="profilepic__content">
                        <span className="profilepic__icon"><i className="fas fa-camera"></i><i className="fas fa-xmark ps-5"></i></span>
                    </div>
                </div>


                <div className="card-body">
                    <div className="wd-grid-row">
                        <div className="wd-circular-image3 profilepic ">
                            <img className=" profilepic__image rounded-circle"
                                 src="/images/tesla.jpg" width={"128px"} height={"128px"}/>
                            <div className="profilepic__content">
                                <span className="profilepic__icon"><i className="fas fa-camera"></i></span>
                            </div>
                        </div>

                    </div>
                </div>

                <Form.Control className="form-control form-control-lg" type="text"
                              placeholder="Name" value={username}
                              onChange={(event) => setUserName(event.target.value)}
                />
                <br/>
                <Form.Control className="form-control form-control-lg"
                              placeholder="Bio" value={bio}
                              onChange={event => setBio(event.target.value)}
                />
                <br/>
                <Form.Control className="form-control form-control-lg" type="text"
                              placeholder="Location" value={location}
                              onChange={event => setLocation(event.target.value)}
                />
                <br/>
                <Form.Control className="form-control form-control-lg" type="text"
                              placeholder="Website" value={website}
                              onChange={event => setWebsite(event.target.value)}
                />
                <br/>
                <div className="small">Birth Date &#183; <a href="#"
                                                            className="link-primary text-decoration-none">Edit</a>
                </div>
                <Form.Control className="form-control form-control-lg" type="text" value={birthdate}
                              onChange={event => setBirthdate(event.target.value)}
                />

            </div>
            <div className="row">
                <div className="col-11">
                    Switch to professional
                </div>
                <div className="col-1">
                    <i className="fa-solid float-end fa-greater-than"></i>
                </div>
            </div>


        </>
    )
}

export default EditProfileComponent;