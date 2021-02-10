// import React, {Component} from 'react';
// import './App.css';
// import Navbar from './components/Navbar/Navbar';
// import {BrowserRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
// import 'antd/dist/antd.css'
// import UsersContainer from "./components/Users/UsersContainer";
// import HeaderContainer from "./components/Header/HeaderContainer";
// import LoginPage from "./components/Login/Login";
// import {connect, Provider} from "react-redux";
// import {compose} from "redux";
// import {initializeApp} from "./redux/app-reducer";
// import Preloader from "./components/common/Preloader/Preloader";
// import store from "./redux/redux-store";
// import {withSuspense} from "./hoc/withSuspense";
//
//
// const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
// const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
//
//
// class App extends Component {
//     state = {
//         collapsed: false,
//     };
//
//     onCollapse = collapsed => {
//         console.log(collapsed);
//         this.setState({ collapsed });
//     };
//     catchAllUnhandledErrors = (reason, promise) => {
//         alert("Some error occured");
//         //console.error(promiseRejectionEvent);
//     }
//     componentDidMount() {
//         this.props.initializeApp();
//         window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
//     }
//     componentWillUnmount() {
//         window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
//     }
//
//     render() {
//         const { collapsed } = this.state;
//         if (!this.props.initialized) {
//             return <Preloader/>
//         }
//
//         return (
//             <Layout style={{ minHeight: '100vh' }}>
//                 <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
//                     <div className="logo" />
//                     <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
//                         <Menu.Item key="1" icon={<ProfileOutlined /> }>
//                             Profile
//                         </Menu.Item>
//                         <Menu.Item key="2" icon={<MessageOutlined />}>
//                             Messages
//                         </Menu.Item>
//                         <Menu.Item key="3" icon={<UserOutlined />}>
//                             Members
//                         </Menu.Item>
//                         <Menu.Item key="4" icon={<NotificationOutlined />}>
//                             Notifications
//                         </Menu.Item>
//                         <Menu.Item key="5" icon={<SettingOutlined />}>
//                             Settings
//                         </Menu.Item>
//                     </Menu>
//                 </Sider>
//                 <Layout className="site-layout">
//                     <Header className="site-layout-background" style={{ padding: 0 }} />
//                     <Content style={{ margin: '0 16px' }}>
//                         <Breadcrumb style={{ margin: '16px 0' }}>
//                             <Breadcrumb.Item>User</Breadcrumb.Item>
//                             <Breadcrumb.Item>Bill</Breadcrumb.Item>
//                         </Breadcrumb>
//                         <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
//                         </div>
//                     </Content>
//                     <Footer style={{ textAlign: 'center' }}> Created by MR</Footer>
//                 </Layout>
//             </Layout>
//
//             // <div className='app-wrapper'>
//             //     <HeaderContainer/>
//             //     <Navbar/>
//             //     <div className='app-wrapper-content'>
//             //         <Switch>
//             //             <Route exact path='/'
//             //                    render={() => <Redirect to={"/profile"}/>}/>
//             //
//             //             <Route path='/dialogs'
//             //                    render={withSuspense(DialogsContainer)}/>
//             //
//             //             <Route path='/profile/:userId?'
//             //                    render={withSuspense(ProfileContainer)}/>
//             //
//             //             <Route path='/users'
//             //                    render={() => <UsersContainer/>}/>
//             //
//             //             <Route path='/login'
//             //                    render={() => <LoginPage/>}/>
//             //
//             //             <Route path='*'
//             //                    render={() => <div>404 NOT FOUND</div>}/>
//             //         </Switch>
//             //
//             //     </div>
//             // </div>
//         )
//     }
// }
//
// const mapStateToProps = (state) => ({
//     initialized: state.app.initialized
// })
//
// let AppContainer = compose(
//     withRouter,
//     connect(mapStateToProps, {initializeApp}))(App);
//
// const MyNetworkApp = (props) => {
//     return <BrowserRouter>
//         <Provider store={store}>
//             <AppContainer/>
//         </Provider>
//     </BrowserRouter>
// }
//
// export default MyNetworkApp;
