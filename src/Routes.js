import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import { RouteWithLayout } from './layout/common';
import { MainLayout, MainLayoutSidebar } from './layout';

import {
  Home as HomePage,
  Category as CategoryPage,
  Products as ProductPage,
  Dashboard as DashboardPage,
  Customer as customerPage,
  ShopPerformance as ReportPage,
  AddCust,EditCust,
  AddProduct, EditProduct,
  PageNotFound
} from './pages';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

export default function Routes() {
  return (
    <Switch>
      {/* <Redirect exact from="/" to="/artaka/home" /> */}
      <Redirect exact from="/" to="/artaka/seller/dashboard" />
      <Redirect exact from="/signin/" to="/artaka/signin" />
      <Route path="/artaka/signup" component={SignUp} />
      <Route path="/artaka/signin" component={SignIn} />
      <RouteWithLayout
        component={HomePage}
        exact
        layout={MainLayout}
        pageTitle=""
        path="/artaka/home"
      />

      <RouteWithLayout
        component={DashboardPage}
        exact
        layout={MainLayoutSidebar}
        pageTitle="Dashboard"
        path="/artaka/seller/dashboard"
      />

      <RouteWithLayout
        component={PageNotFound}
        exact
        layout={MainLayoutSidebar}
        pageTitle="404"
        path="/artaka/not-found"
      />

      <RouteWithLayout
        component={CategoryPage}
        exact
        layout={MainLayoutSidebar}
        pageTitle="Category"
        path="/artaka/seller/category"
      />
      <RouteWithLayout
        component={ProductPage}
        exact
        layout={MainLayoutSidebar}
        pageTitle="Products"
        path="/artaka/seller/product"
      />
      <RouteWithLayout
        component={AddProduct}
        exact
        layout={MainLayoutSidebar}
        pageTitle="Products"
        path="/artaka/seller/product/add"
      />
      <RouteWithLayout
        component={EditProduct}
        exact
        layout={MainLayoutSidebar}
        pageTitle="Products"
        path="/artaka/seller/product/edit"
      />
      <RouteWithLayout
        component={customerPage}
        exact
        layout={MainLayoutSidebar}
        pageTitle="Daftar Pelanggan"
        path="/customer"
      />
      <RouteWithLayout
        component={AddCust}
        exact
        layout={MainLayoutSidebar}
        pageTitle="Tambahkan Pelanggan"
        path="/customer/add"
      />
      <RouteWithLayout
        component={EditCust}
        exact
        layout={MainLayoutSidebar}
        pageTitle="Info Pelanggan"
        path="/customer/edit"
      />
      <RouteWithLayout
        component={ReportPage}
        exact
        layout={MainLayoutSidebar}
        pageTitle="Performansi Toko"
        path="/report/shopperformance"
      />
      <Redirect to="/artaka/not-found" status="404" />
    </Switch>
  );
};


