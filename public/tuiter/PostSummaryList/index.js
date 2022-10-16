import PostSummaryItem from "./PostSummaryItem.js";
import post from "./posts.js"
const PostSummaryList = () => {
    //console.log(post[0])
    return (`
           <ul class="list-group">
           <ul>${PostSummaryItem(post[0])}</ul>
           <ul>${PostSummaryItem(post[1])}</ul>
           <ul>${PostSummaryItem(post[2])}</ul>
           <ul>${PostSummaryItem(post[3])}</ul>
           </ul>
`); }

export default PostSummaryList;
