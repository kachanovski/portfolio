import React from 'react';
import './App.css';
import NavBar from "./main/navbar/navBar";
import HomePage from "./main/content/homePage/homePage";
import AboutMe from "./main/content/aboutMe/aboutMe";
import MySkills from "./main/content/services/mySkills";
import Portfolio from "./main/content/portfolio/porfolio";
import Contacts from "./main/content/contacts/contacts";
import Footer from "./main/content/footer/footer";
import {Switch, Route} from 'react-router-dom';


const App = () => {
    return (
        <div className="App">
            <NavBar/>
            <div className={'main'}>
                <HomePage/>
                <AboutMe/>
                <MySkills/>
                <Portfolio/>
                <Contacts/>
                <Footer/>

               {/* <Switch>
                    <Route path={['/home', '/']} render={() => (<HomePage/>)}/>
                    <Route path='/aboutMe' render={() => (<AboutMe/>)}/>
                    <Route path='/mySkills' render={() => (<MySkills/>)}/>
                    <Route path={'/portfolio'} render={() => (<Portfolio/>)}/>
                    <Route path='/contacts' render={() => (<Contacts/>)}/>
                    <Route render={() => (<h1>404</h1>)}/>
                </Switch>
                <Footer/>*/}
            </div>
        </div>
    );
}

export default App;
