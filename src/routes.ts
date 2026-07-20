import { createBrowserRouter } from 'react-router'
import Root from './App'
import Home from './pages/Home'
import News from './pages/News'
import ArticleDetail from './pages/ArticleDetail'
import ExamPage from './pages/ExamPage'
import Dashboard from './pages/Dashboard'
import EducationReform from './pages/EducationReform'
import StudentResources from './pages/StudentResources'
import About from './pages/About'
import Contact from './pages/Contact'
import Search from './pages/Search'
import NotFound from './pages/NotFound'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'news', Component: News },
      { path: 'news/:id', Component: ArticleDetail },
      { path: 'exams/:slug', Component: ExamPage },
      { path: 'dashboard', Component: Dashboard },
      { path: 'education-reform', Component: EducationReform },
      { path: 'resources', Component: StudentResources },
      { path: 'about', Component: About },
      { path: 'contact', Component: Contact },
      { path: 'search', Component: Search },
      { path: '*', Component: NotFound },
    ],
  },
])
