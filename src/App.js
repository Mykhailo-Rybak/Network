import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, NavLink, Redirect, Route, Switch, withRouter} from "react-router-dom";
import 'antd/dist/antd.css'
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";
import {withSuspense} from "./hoc/withSuspense";
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined,
    ProfileOutlined,
    NotificationOutlined,
    MessageOutlined,
    SettingOutlined
} from '@ant-design/icons';
import s from "./components/Navbar/Navbar.module.css";


const { Header, Content, Sider } = Layout;

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


class App extends Component {

    catchAllUnhandledErrors = (reason, promise) => {
        alert("Some error occured");
        //console.error(promiseRejectionEvent);
    }
    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }
    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <Layout>
                <Header className="header">
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        <HeaderContainer/>
                    </Menu>
                </Header>
                <Layout>

                    <Sider width={200} className="site-layout-background">
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            style={{ height: '100%', borderRight: 0 }}
                        >
                            <Menu.Item key="1" icon={<ProfileOutlined /> }>
                                <NavLink to="/profile" >Profile</NavLink>
                            </Menu.Item>
                            <Menu.Item key="2" icon={<MessageOutlined />}>
                                <NavLink to="/dialogs" >Messages</NavLink>
                            </Menu.Item>
                            <Menu.Item key="3" icon={<UserOutlined />}>
                                <NavLink to="/users" >Members</NavLink>
                            </Menu.Item>
                            <Menu.Item key="4" icon={<NotificationOutlined />}>
                                <NavLink to="/notifications">Notifications</NavLink>
                            </Menu.Item>
                            <Menu.Item key="5" icon={<SettingOutlined />}>
                                <NavLink to="/settings" >Settings</NavLink>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '12px 0' }}>

                        </Breadcrumb>
                        <Content
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                            }}
                        >
                            <Switch>
                                <Route exact path='/'
                                       render={() => <Redirect to={"/profile"}/>}/>

                                <Route path='/dialogs'
                                       render={withSuspense(DialogsContainer)}/>

                                <Route path='/profile/:userId?'
                                       render={withSuspense(ProfileContainer)}/>

                                <Route path='/users'
                                       render={() => <UsersContainer/>}/>

                                <Route path='/login'
                                       render={() => <LoginPage/>}/>

                                <Route path='/notifications'/>

                                <Route path='/settings'/>


                                <Route path='*'
                                       render={() => <div>404 NOT FOUND</div>}/>
                            </Switch>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const MyNetworkApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

export default MyNetworkApp;
