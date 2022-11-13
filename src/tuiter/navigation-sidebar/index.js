import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";


const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    let active = paths[2];
    if (paths.length===2 || active===''){
        active='home'
    }
    return (
        <div className="list-group">
            <a className="list-group-item">Tuiter</a>
            <Link to="/tuiter" className={`list-group-item ${active === 'home'?'active':''}`}>
                <i className="fa fa-home"></i> Home
            </Link>
            <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore'?'active':''}`}>
                <i className="fa fa-hashtag"></i> Explore
            </Link>
            <Link to="/" className="list-group-item">
                <i className="fa fa-asterisk"></i> Labs
            </Link>
            <a className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
                <i className="fa fa-envelope"></i> Messages
            </a>
            <a className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
                <i className="fa fa-bookmark"></i> Bookmarks
            </a>
            <a className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
                <i className="fa fa-list"></i> Lists
            </a>
            <Link to="/tuiter/profile" className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
                <i className="fa fa-user"></i> Profile
            </Link>
            <a className={`list-group-item
                    ${active === 'more'?'active':''}`}>
                <i className="fa fa-circle "></i> More
            </a>
        </div>

    );
};
export default NavigationSidebar;

