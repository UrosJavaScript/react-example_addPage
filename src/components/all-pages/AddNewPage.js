import { useRef } from 'react';

import './AddNewPage.css';
import Card from "../ui/Card";

function AddNewPage(props) {
    const titleInputRef = useRef();
    const imgInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImg = imgInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const displayData = {
            title: enteredTitle,
            images: enteredImg,
            address: enteredAddress,
            description: enteredDescription
        };

        props.onAddNewPage(displayData);
    }

    return <Card>
        <form className="form" onSubmit={submitHandler}>
            <div className="control">
                <label htmlFor="title">Page Title</label>
                <input type="text" required id="title" ref={titleInputRef} />
            </div>
            <div className="control">
                <label htmlFor="image">Page Image</label>
                <input type="url" required id="image" ref={imgInputRef} />
            </div>
            <div className="control">
                <label htmlFor="address">Address</label>
                <input type="text" required id="address" ref={addressInputRef} />
            </div>
            <div className="control">
                <label htmlFor="description">Description</label>
                <textarea id="description" required rows='5' ref={descriptionInputRef}></textarea>
            </div>
            <div className="actions">
                <button>Add Page</button>
            </div>
        </form>
    </Card>;
}

export default AddNewPage;