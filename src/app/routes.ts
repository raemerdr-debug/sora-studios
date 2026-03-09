import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TeamPage from './pages/TeamPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: 'about', Component: AboutPage },
      { path: 'team', Component: TeamPage },
      { path: 'projects', Component: ProjectsPage },
      { path: 'contact', Component: ContactPage },
      { path: '*', Component: HomePage },
    ],
  },
]);
