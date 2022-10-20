const PostItem = (post) => {

    return (`
    <div class="wd-border-thin wd-grid-row">
 
    <img class="wd-grid-col-avatar-minor wd-circular-image" src=${post['profile_image']}>
            <div class="wd-grid-col-major-page wd-grid-col-tuit-major wd-grid-row">
                <p style="color: white; font-size: 15px">${post['userName']} <i class="fa fa-check-circle"></i> <span style="color: rgb(110, 118, 125)">
                   @${post['handle']}  .  ${post['time']}</span> <span  class="wd-grid-col-minor-page">&hellip;</span> </p>
                <p class="wd-main-tuit-content">${post['post_title']}</p>
            </div>
        </div> 
           
            <img class="wd-border-thin wd-tuit-image" src=${post['post_image']}>
            <div class="wd-border-bottom-corners">
                <p class="wd-tuit-image-description-title">${post['image_title']}</p>
                <p class="wd-tuit-image-description-content">${post['image_content']}</p>
            </div>
            <div class="wd-grid-row-icons">
                <div class="wd-grid-row-first">
                <i class="fa fa-regular fa-comment"></i><span style="padding-left: 12px">${post['comments']}</span>

                </div>
                <div class="wd-grid-row-first">
                <i class="fa  fa-retweet"></i><span style="padding-left: 12px">${post['retweets']}</span>
                </div>
                <div class="wd-grid-row-first">
                <i class="fa fa-regular fa-heart"></i><span style="padding-left: 12px">${post['Likes']}</span>

                </div>
                <div class="wd-grid-row-first">
                <i class="fa fa-regular fa-share-from-square"></i><span style="padding-left: 12px"></span>

                </div>
            </div>
            
             
    `)
}
export default PostItem;