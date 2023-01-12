import PageItem from './PageItem';
import './PageList.css';

function PageList(props) {
    return <ul className='list'>
        {props.res.map((results) => {
            return (
                <PageItem 
                key={results.id} 
                id={results.id} 
                image={results.images} 
                address={results.address} 
                description={results.description}
            />
            );
        })}
    </ul>;
}

export default PageList;
