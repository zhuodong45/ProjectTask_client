import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import { Layout } from 'antd';
import Navbar from './components/navbar/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/project/ProjectDetails';
import CreateProject from './components/project/CreateProject';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';

const { Header, Footer, Content } = Layout;

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Layout>
                    <Header style={{ backgroundColor: 'white' }}>
                        <Navbar />
                    </Header>
                    <Content
                        style={{ padding: '5vh 15vw', minHeight: '100vh' }}
                    >
                        <Switch>
                            <Route exact path="/" component={Dashboard} />
                            <Route
                                path="/project/:id"
                                component={ProjectDetails}
                            />
                            <Route path="/signin" component={SignIn} />
                            <Route path="/signup" component={SignUp} />
                            <Route
                                path="/createproject"
                                component={CreateProject}
                            />
                        </Switch>
                    </Content>
                    <Footer>Footer</Footer>
                </Layout>
            </div>
        </BrowserRouter>
    );
}

export default App;
