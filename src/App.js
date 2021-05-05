import './App.css';
import React from 'react'
import {BaseLayout} from "./layouts";
import {Home} from "./pages";
import {Route, Switch, useHistory} from 'react-router-dom';
import MovieDetails from "./pages/movie-details/MovieDetails";

function App() {
    const history = useHistory();

    return (
        <BaseLayout>
            <Switch>
                {/*хз чи треба екзект*/}
                <Route path={'/'} exact render={() => <Home/>}/>

                <Route path={'/movie/:id'} exact render={() => <MovieDetails/>}/>

                {/*<Redirect to={'/'}/>*/}

                <Route exact
                       render={() =>
                           <h1>PAGE NOT FOUND
                               <button onClick={() => history.push('/')}>
                                   go home
                               </button>
                           </h1>
                       }/>
            </Switch>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </BaseLayout>
    );
}

export default App;
