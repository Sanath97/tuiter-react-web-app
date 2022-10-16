const NavigationSidebar = () => {
    return(`
   <div class="list-group">
     <a class="list-group-item" href="/public">
       <i class="fab fa-twitter"></i></a>
       <!-- continue rest of list, e.g.,
            Home, Explore, Notifications,  Messages, etc. -->
            
        <a class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-1">
                    <i class="fa fa-home"></i>
                </div>
                <div class="col-2">
                    <span class="d-none d-xxl-block d-xl-block"> Home</span>
                </div>
            </div>
        </a>
        
        <a class="list-group-item list-group-item-action active">
            <div class="row">
                <div class="col-1">
                    <i class="fa fa-hashtag"></i>
                </div>
                <div class="col-2">
                    <span class="d-none d-xxl-block d-xl-block"> Explore</span>
                </div>
            </div>
        </a>
        
        <a class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-1">
                    <i class="fa fa-bell"></i>
                </div>
                <div class="col-2">
                    <span class="d-none d-xxl-block d-xl-block"> Notifications</span>
                </div>
            </div>
        </a>
        
        <a class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-1">
                    <i class="fa fa-envelope"></i>
                </div>
                <div class="col-2">
                    <span class="d-none d-xxl-block d-xl-block"> Messages</span>
                </div>
            </div>
        </a>
        
        <a class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-1">
                    <i class="fa fa-bookmark"></i>
                </div>
                <div class="col-2">
                    <span class="d-none d-xxl-block d-xl-block"> Bookmarks</span>
                </div>
            </div>
        </a>
        
        <a class="list-group-item list-group-item-action">

            <div class="row">
                <div class="col-1">
                    <i class="fa fa-list"></i>
                </div>
                <div class="col-2">
                    <span class="d-none d-xxl-block d-xl-block"> Lists</span>
                </div>
            </div>
        </a>
        <a class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-1">
                    <i class="fa fa-user"></i>
                </div>
                <div class="col-2">
                    <span class="d-none d-xxl-block d-xl-block"> Profile</span>
                </div>
            </div>
        </a>
        <a class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-1">
                    <i class="fa fa-circle "></i>
                </div>
                <div class="col-2">
                    <span class="d-none d-xxl-block d-xl-block"> More</span>
                </div>
            </div>
        </a>
            
   </div>
   <div class="d-grid mt-2">
     <a href="/public"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;

