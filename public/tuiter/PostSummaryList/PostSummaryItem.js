
const PostSummaryItem = (post) => {

    return(`
    <div class="list-group-item list-group-item-action ">
                <div class="row">
                    <div class="col-9">
                    <span class="text-secondary">${post['topic']}</span>
                    <br>
                        <span class="fw-bold">${post['userName']}</span> <i class="fa fa-circle"></i><span class="text-secondary"> - ${post['time']}</span></span>
                        <br>
                        <span class="fw-bold">
                        ${post['title']}                           
                        </span>
                    </div>
                    <div class="col-1">
                        <span ><img src=${post['image']} class="float-right wd-tuit-image-style"/></span></p>
                    </div>
                </div>
            </div>
    `)
}
export default PostSummaryItem;