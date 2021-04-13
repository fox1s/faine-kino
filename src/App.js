import './App.css';
import React from 'react'
import {BaseLayout} from "./layouts";
import {Home} from "./pages";

function App() {
    return (
        <BaseLayout>
            <Home></Home>
        </BaseLayout>
    );
}

export default App;
