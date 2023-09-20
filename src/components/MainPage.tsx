import Comments from './Comments';
import Items from './Items';

const MainPage = () => {
    return (
        <div className='main'>
            <main className='main-container'>
                <div className='row'>
                    <Items />
                    <Comments />
                </div>
            </main>
        </div>
    );
};

export default MainPage;
