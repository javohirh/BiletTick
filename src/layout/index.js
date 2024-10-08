import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import Root from '../sections/root';
import LoginScreen from '../sections/auth/login-screen';
import PrivateRouter from './PrivateRouter';
import { Routes } from '../constants/routes';
import Home from '../sections/home';
import UserScreen from '../sections/user';
import UserItem from '../sections/user/user-item';
import CategoriesScreen from '../sections/categories';
import CreateCategory from '../sections/categories/create-category';
import StaffsScreen from '../sections/staffs';
import CreateStaff from '../sections/staffs/create-staff';
import EditCategory from '../sections/categories/edit-category';
import FaqScreen from '../sections/settings/faq';
import CreateFaq from '../sections/settings/faq/create-faq';
import DocumentsScreen from '../sections/settings/documents';
import CreateDocument from '../sections/settings/documents/create-document';
import StoriesScreen from '../sections/story';
import CreateStory from '../sections/story/create-story';
import AppLanguages from '../sections/settings/app-languages';
import HallsScreen from '../sections/hall/halls';
import CreateHallScreen from '../sections/hall/halls/modules/create-hall-screen';
import HallWrapper from '../sections/hall/halls/modules/HallWrapper';
import HallsElements from '../sections/hall/hall-elements';

function AppLayout() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Root />}>
          <Route
            index
            path={Routes.HOME}
            element={
              <PrivateRouter>
                {' '}
                <Home />{' '}
              </PrivateRouter>
            }
          />
          <Route
            path={Routes.USER}
            element={
              <PrivateRouter>
                {' '}
                <UserScreen />{' '}
              </PrivateRouter>
            }
          />
          <Route
            path={Routes.USER_ITEM}
            element={
              <PrivateRouter>
                {' '}
                <UserItem />{' '}
              </PrivateRouter>
            }
          />
          <Route
            path={Routes.CATEGORY}
            element={
              <PrivateRouter>
                {' '}
                <CategoriesScreen />{' '}
              </PrivateRouter>
            }
          />
          <Route
            path={Routes.EDIT_CATEGORY}
            element={
              <PrivateRouter>
                <EditCategory />{' '}
              </PrivateRouter>
            }
          />
          <Route
            path={Routes.ADD_CATEGORY}
            element={
              <PrivateRouter>
                {' '}
                <CreateCategory />{' '}
              </PrivateRouter>
            }
          />
          <Route
            path={Routes.STAFF}
            element={
              <PrivateRouter>
                {' '}
                <StaffsScreen />{' '}
              </PrivateRouter>
            }
          />
          <Route
            path={Routes.CREATE_STAFF}
            element={
              <PrivateRouter>
                {' '}
                <CreateStaff />{' '}
              </PrivateRouter>
            }
          />

          <Route
            path={Routes.SETTINGS_FAQ}
            element={
              <PrivateRouter>
                {' '}
                <FaqScreen />{' '}
              </PrivateRouter>
            }
          />
          <Route
            path={Routes.CREATE_SETTINGS_FAQ}
            element={
              <PrivateRouter>
                {' '}
                <CreateFaq />{' '}
              </PrivateRouter>
            }
          />
          <Route
            path={Routes.SETTINGS_DOCUMENTS}
            element={
              <PrivateRouter>
                {' '}
                <DocumentsScreen />{' '}
              </PrivateRouter>
            }
          />
          <Route
            path={Routes.APP_LANGUAGES}
            element={
              <PrivateRouter>
                {' '}
                <AppLanguages />{' '}
              </PrivateRouter>
            }
          />

          <Route
            path={Routes.ADD_DOCUMENTS}
            element={
              <PrivateRouter>
                {' '}
                <CreateDocument />{' '}
              </PrivateRouter>
            }
          />
          <Route
            path={Routes.STORY}
            element={
              <PrivateRouter>
                {' '}
                <StoriesScreen />{' '}
              </PrivateRouter>
            }
          />
          <Route
            path={Routes.CREATE_STORY}
            element={
              <PrivateRouter>
                {' '}
                <CreateStory />{' '}
              </PrivateRouter>
            }
          />
          <Route
            path={Routes.ELEMENTS}
            element={
              <PrivateRouter>
                {' '}
                <HallsElements />{' '}
              </PrivateRouter>
            }
          />
          <Route
            path={Routes.HALLS}
            element={
              <PrivateRouter>
                {' '}
                <HallsScreen />{' '}
              </PrivateRouter>
            }
          />
          <Route
            path={Routes.CREATE_HALL}
            element={
              <PrivateRouter>
                {' '}
                <CreateHallScreen />{' '}
              </PrivateRouter>
            }
          />
          <Route
            path={Routes.HALL_EDITOR}
            element={
              <PrivateRouter>
                {' '}
                <HallWrapper />{' '}
              </PrivateRouter>
            }
          />

          <Route path="*" element={<div>404 Not found</div>} />
        </Route>
        <Route path="/login" element={<LoginScreen />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default AppLayout;
