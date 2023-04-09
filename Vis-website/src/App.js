import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import './styles/App.css';
import Ranking from './Ranking.js';
import Recommender from "./Recommender";

export default function App() {
    return (
        <Router>
            <div>
                <div className='navigation'>
                    <div className='nav'>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/ranking" className='linkName'>Game Ranking</Link>
                                </li>
                                <li>
                                    <Link to="/recommender" className='linkName' >Game Recommender</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Routes>
                    <Route path="/ranking" element={<Ranking/>}/>
                    <Route path="/recommender" element={<Recommender/>}/>
                </Routes>
            </div>
        </Router>
    );
}

function Home() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}