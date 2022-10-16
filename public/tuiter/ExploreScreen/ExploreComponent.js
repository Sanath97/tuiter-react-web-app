import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="row ms-3 mb-1">
                       <!-- search field and cog -->
                       <div class="col-11">
                    <div class="form-group wd-has-search">
                        <span class="fa fa-search text-black form-control-feedback"></span>
                        <input type="text" class="form-control rounded-pill" placeholder="Search Twitter">
                    </div>
            </div>
            <div class="col-1">
                <i class="fa fa-cog text-primary fa-2x"></i>
            </div>
           </div>
           <ul class="nav ms-4 mb-2 nav-tabs">
                      <!-- tabs -->
                      <li class="nav-item">
                <a class="nav-link active text-white" href="for-you.html">For You</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-white" href="trending.html">Trending</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-white" href="news.html">News</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-white" href="sports.html">Sports</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-white d-none d-xxl-block d-xl-block d-lg-block d-md-block" href="entertainment.html">Entertainment</a>
            </li>
                      
           </ul>
            <img src="../../images/starship.jpg" width="96%" class="ms-4 mb-2">
            <div class="wd-container1 ms-4">
                <div class="wd-bottom-left">
                    <h4 class="text-black">SpaceX's Starship</h4>
                </div>
            </div>
           <!-- image with overlaid text -->
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;

