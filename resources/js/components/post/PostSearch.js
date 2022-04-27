function PostSearch(props) {
    let SetValue = props.setValue;
    function handleChange(event) {
        SetValue(event.target.value);
    }
    return (
        <div className="sidebar-widget-singel-item widget-box-bg gray-bg mt-4">
            <h4 className="title">Search</h4>
            <form className="widget-search" action="#" method="post">
                <input type="search" placeholder="Search here" onChange={handleChange} name='value'/>
                <button type="submit">Run</button>
            </form>
        </div>
    )
}

export default PostSearch;
