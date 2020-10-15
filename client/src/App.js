import React, { useEffect, lazy, Suspense } from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import Header from "./components/header/header.component"
import { selectCurrentUser } from "./redux/user/user.selectors"
import { checkUserSession } from "./redux/user/user.actions"
import Spinner from "./components/spinner/spinner.component"
import ErrorBoundary from "./components/error-boundary/error-boundary.component"
import "./app.scss"

import HomePage from "./pages/homepage/homepage.component"
import ShopPage from "./pages/shop/shop.component"
const CheckoutPage = lazy(() => import("./pages/checkout/checkout.component"))
const SignInAndSignUpPage = lazy(() => import("./pages/sign-in-sign-up/sign-in-sign-up.component"))

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])

  return (
    <div>
      <Header />
      <Switch>
        <ErrorBoundary>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Suspense fallback={<Spinner />}>
            <Route exact path="/checkout" component={CheckoutPage} />
            <Route exact path="/signin" render={() => (currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />)} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
