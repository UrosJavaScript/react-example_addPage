import { useNavigate } from 'react-router-dom';

import AddNewPage from "../components/all-pages/AddNewPage";

function NewPage() {
    const nav = useNavigate();

    function addNewPageProprs(displayData) {
        fetch('https://react-first-project-f33cc-default-rtdb.firebaseio.com/pages.json', {
            method: 'POST',
            body: JSON.stringify(displayData),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => {
            nav('/');
        });
    }

    return <section>
        <h1>Add New Page</h1>
        <AddNewPage onAddNewPage={addNewPageProprs} />
    </section>;
}

export default NewPage; 