function Modal(props) {
    return (
        <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Operation completed successfully</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                aria-label="Close"/>
                    </div>
                    <div className="modal-body">
                        <h1>Title post:{props.postTitle}</h1>
                        <p>Body post: {props.postBody}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;
