import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"
const WhoToFollowList = () => {
    return (`

           <ul class="list-group">
           <!-- continue here -->
<!--           <span style="width: 150px"><ul class="list-group-item">Who to follow</ul></span>-->


           <ul>${WhoToFollowListItem(who[0])}</ul>
           <ul>${WhoToFollowListItem(who[1])}</ul>
           <ul>${WhoToFollowListItem(who[2])}</ul>
           <ul>${WhoToFollowListItem(who[3])}</ul>
           <ul>${WhoToFollowListItem(who[4])}</ul>
           </ul>
`); }

export default WhoToFollowList;