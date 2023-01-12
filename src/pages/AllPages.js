import { useState, useEffect } from "react";

import PageList from "../components/all-pages/PageList";
import './All.css';


function AllPages() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedPages, setLoadedPages] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch(
            'https://react-first-project-f33cc-default-rtdb.firebaseio.com/pages.json'
        ).then(response => {
            return response.json(); //daje pristup podacima konvertovanim iz json
        }).then(data => {
            const dataResult = [];

            for (const key in data) {
                const pageData = {
                    id: key,
                    ...data[key]
                };

                dataResult.push(pageData);
            }
            
            setIsLoading(false);
            setLoadedPages(dataResult);
        });
    }, []);

    if(isLoading) {
        return (
            <section className="loading">
                <p>Loading...</p>
            </section>
        );
    }

    return (
        <section>
            <h1>All pages</h1>
            <PageList res={loadedPages} />
        </section>
    );
}

export default AllPages;