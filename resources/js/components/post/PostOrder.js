import {useState} from 'react';

function PostOrder(props) {
    let [buttonClassCreated, SetButtonClassCreated] = useState('btn-primary');
    let [buttonClassTitle, SetButtonClassTitle] = useState('btn-primary');
    let setFieldsOrder = props.setFieldsOrder;
    function ChangeOrder(event) {
        setFieldsOrder(event.target.name)
        if (event.target.name === 'created') {
            if (buttonClassCreated === 'btn-primary') {
                SetButtonClassCreated('btn-light');
            } else {
                SetButtonClassCreated('btn-primary');
            }
        } else {
            if (buttonClassTitle === 'btn-primary') {
                SetButtonClassTitle('btn-light');
            } else {
                SetButtonClassTitle('btn-primary');
            }
        }
    }

    return (
        <div className="sidebar-widget-singel-item widget-box-bg gray-bg mt-4">
            <h4 className="title">Order Posts</h4>
            <button type="submit" name='created' className={'btn ' + buttonClassCreated}
                    onClick={ChangeOrder}>Created
            </button>
            <button type="submit" name='title' className={'ms-2 btn ' + buttonClassTitle}
                    onClick={ChangeOrder}>title
            </button>
        </div>
    );
}

export default PostOrder;
