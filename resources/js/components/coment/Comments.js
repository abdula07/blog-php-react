import {useEffect, useState} from "react";
import dateFormat, {masks} from "dateformat";

function Comments(props) {
    let postId = props.postId;
    let [comments, SetComments] = useState([]);
    let [commentIndex, setIndex] = useState(3);
    let index = -1;
    useEffect(() => {
        let cleanupFunction = true;
        if (cleanupFunction) {
            axios.get(`/api/comments/${postId}`)
                .then(function (response) {
                    // handle success
                    if (response['data'].length === undefined) {
                        let m = [];
                        for (let key of Object.keys(response['data'])) {
                            m.push(response['data'][key]);
                        }
                        SetComments(m);
                    } else {
                        SetComments(response['data']);
                    }
                })
        }
        return () => cleanupFunction = false;
    }, [])

    function updateIndex() {
        setIndex(commentIndex + 3);
    }

    return (<div className="blog-comment-section section-top-gap-100">
            <div className="box-wrappper">
                <div className="comment-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="comment-area">{comments.slice(0, commentIndex).map((comment) => {
                                    index += 1;
                                    return (<div key={comment.id}><h4 className="title">Comments ({index})</h4>
                                            <ul className="comment-list-items">
                                                <li className="comment-list-single-item">
                                                    <div className="comment-list-single-wrap">
                                                        <div className="top">
                                                            <div className="user-details">
                                                                <div className="user-info">
                                                                    <h5 className="name">{comment.name}</h5>
                                                                    <div className="user-info-details">
                                                                <span
                                                                    className="profession">Product Designer, USA </span>
                                                                        <span
                                                                            className="time">{dateFormat(new Date(comment.created), "dddd, mmmm dS, yyyy, h:MM:ss TT")}</span>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <button className="reply-btn"><i
                                                                className="icofont-reply"></i> Reply
                                                            </button>
                                                        </div>
                                                        <div className="bottom">
                                                            <p>{comment.message}</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>)
                                })}
                                </div>
                                <button className='btn btn-primary mt-3' onClick={updateIndex}>Show more</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}

export default Comments;
