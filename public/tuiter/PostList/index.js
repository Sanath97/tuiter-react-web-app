import PostItem from "./PostItem.js";
import post from "./posts.js"
const PostList = () => {
    return (`
           <ul class="list-group">
           <ul>${PostItem(post[0])}</ul>
           <ul>${PostItem(post[1])}</ul>
           </ul>
`); }

export default PostList;
