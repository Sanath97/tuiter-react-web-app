const WhoToFollowListItem = (who) => {
return(`

            <div class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col-2">
                        <img src=${who['avatarIcon']}  class="rounded-circle" width="40" height="40">
                    </div>
                    <div class="col-lg-6">
                        <span class="fw-bold">${who['userName']}</span> <i class="fa fa-circle"></i>
                        <h6 class="text-secondary"><small>@${who['handle']}</small>
                        </h6>
                    </div>
                    <div class="col-2">
                        <button class="btn float-right text-white bg-primary rounded-pill">Follow</button>
                    </div>
                </div>
  
`)
}
export default WhoToFollowListItem