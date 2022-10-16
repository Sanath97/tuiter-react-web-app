import NavigationSidebar from "../NavigationSidebar/index.js"
import WhoToFollowList from "../WhoToFollowList/index.js";

import ExploreComponent from "./ExploreComponent.js";

function exploreComponent() {
    // eslint-disable-next-line no-undef
    $('#wd-explore').append(`
       <div class="row mt-2">
   <div class="col-2 col-md-2 col-lg-1 col-xl-2">
<!--    <h3>NavigationSidebar</h3>-->
    ${NavigationSidebar("explore")}

   </div>
   <div class="col-10 col-lg-7 col-xl-6">
    ${ExploreComponent()}
   </div>
   <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 ">
   <ul class="list-group">
<span class="list-group-item ms-4" style="width: 335px;">
                Who to follow</span>
</ul>
      ${WhoToFollowList()}
   </div>
  </div>

   `);
}

// eslint-disable-next-line no-undef
$(exploreComponent);

