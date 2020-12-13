import React from 'react'
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from 'react-router-dom'
import Footer from './components/common/footer'
import Header from './components/common/navigation'
import ScrollToTop from './components/common/scrollToTop'
import PageRenderer from './page-renderer'

function App() {
    const user = {
        firstName: 'Juhee',
        lastName: 'Kim',
    }
    return (
        <Router>
            <ScrollToTop />
            <div className="App">
                <Header user={user} />
                <Switch>
                    <Route path="/:page" component={PageRenderer} />
                    <Route path="/" render={() => <Redirect to="/home" />} />
                    <Route component={() => 404} />
                </Switch>
                <Footer />
            </div>
        </Router>
    )
}

export default App
