import './App.css';
import React, {useEffect} from 'react'
import {BaseLayout} from "./layouts";
import {moviesService} from "./services";
import {Home} from "./pages";

function App() {
    useEffect(() => {
        moviesService.getMovies().then(value => console.log(value))
    }, [])

    return (
        <BaseLayout>
            <Home></Home>
        </BaseLayout>
    );
}

export default App;
