import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import { About } from './pages/About'
import { Category } from './pages/Category'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { Recipe } from './pages/Recipe'

function App() {
    return (
        <>
            <Router>
                <Header />
                <main className='container content'>
                    <Switch>
                        <Route exact path='/react-recipe-website'>
                            <Home />
                        </Route>
                        <Route path='/react-recipe-website/contact' component={Contact} />
                        <Route path='/react-recipe-website/about' component={About} />
                        <Route path='/react-recipe-website/category/:name' component={Category} />
                        <Route path='/react-recipe-website/meal/:id' component={Recipe} />
                        <Route component={NotFound} />
                    </Switch>
                </main>
                <Footer />
            </Router>
        </>
    )
}

export default App
