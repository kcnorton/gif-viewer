import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchView from './views/SearchView';
import GifDetailView from './views/GifDetailView';

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<SearchView />} />

                <Route exact path={'/gif/:id'} element={<GifDetailView />} />
            </Routes>
        </Router>
    );
}

export default App;
