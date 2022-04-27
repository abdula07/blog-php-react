import PostFormList from './PostFormList';
import {useState} from "react";

function PostList(props) {
    let posts = props.posts;
    let searchValue = props.searchValue;
    let [page, setPage] = useState(3);
    let [start, setStart] = useState(0);
    function increamentPage() {
        if (page + 3 > posts.length) {
            return;
        }
        setPage(page+3);
        setStart(start+3);
    }
    function decrementPage() {
        if (start <= 0) {
            return;
        }
        setPage(page-3);
        setStart(start-3);
    }
    if (searchValue !== '') {
        return (
            <div>
                {posts.filter((post) =>
                    post.title.slice(0, searchValue.length) === searchValue
                ).slice(0,3).map((post) => {
                    return (
                        <PostFormList key={post.id} post={post}/>
                    )
                })}
            </div>
        )
    } else {
        return (
            <div>
                {posts.slice(start, page).map((post) => {
                        return (
                            <PostFormList key={post.id} post={post}/>
                        )
                })}
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item"><a className="page-link" onClick={decrementPage}>Previous</a></li>
                        <li className="page-item"><a className="page-link" onClick={increamentPage}>Next</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default PostList;
