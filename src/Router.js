import React,{lazy,Suspense} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './Header'
const LazyHome= lazy(() => import('./pages/home'));
const lazyBlongs = lazy(() => import('./pages/blogs'));
const lazyQuestions= lazy(() => import('./pages/questions'));
const lazySearch= lazy(() => import('./pages/search'));
const lazyEror = lazy(() => import('./pages/error'))
function AppRouter() {
  const fallback = () => {
    return (
      <div>
        loding...
      </div>
    )
  }
  return (
    <>
    <Router>
    <Header></Header>
        {/* 首页 问答 专栏 */}
        <Suspense fallback={fallback()}>
          <Route path="/" exact component={LazyHome} />
          <Route path="/blongs" exact component={lazyBlongs} />
          <Route path="/questions" exact component={lazyQuestions} />
          <Route path="/search" exact component={lazySearch} />
          <Route path="/error" component={lazyEror} />
        </Suspense>
    </Router>
    </>
  );
}
export default AppRouter;