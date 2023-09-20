import MainPage from './components/MainPage';
import Sidebar from './components/Sidebar';

const App = () => {
    return (
        <div className='react-app container-fluid'>
            <div className='row'>
                <Sidebar />
                <MainPage />
            </div>
        </div>
    );
};

export default App;
