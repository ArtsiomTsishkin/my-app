import React from 'react';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersConteiner from "./components/Users/UsersConteiner";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";



let App = (props) => {

    return (
        <div className='app-wrapper'>

            <HeaderContainer/>
            <NavBar/>

            <div className='app-wrapper-content'>

                <Route path='/dialogs/' render={() => <DialogsContainer/>}/>

                <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                <Route path='/news/' component={News}/>
                <Route path='/music/' component={Music}/>
                <Route path='/users/' render={() => <UsersConteiner/>}/>
                <Route path='/setting/' component={Setting}/>
                <Route path='/login/' render={() => <Login/>}/>
            </div>

        </div>

    )
}

export default App;
