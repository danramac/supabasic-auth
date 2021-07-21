import { NavigationContainerRef, StackActions } from "@react-navigation/native";
import { observable } from "mobx";
import React from "react";

export enum authRoutes {
  SignUp = "SignUp",
  Login = "Login",
}

export enum mainRoutes {
  UserOnboard = "UserOnboard",
  Dashboard = "Dashboard",
  AppView = "AppView",
  TestView = "TestView",
}

export const authLinks = {
  [authRoutes.Login]: "login",
  [authRoutes.SignUp]: "sign-up",
};

export const mainLinks = {
  [mainRoutes.UserOnboard]: "onboard",
  [mainRoutes.Dashboard]: "dashboard",
  [mainRoutes.AppView]: "app/:id",
  [mainRoutes.TestView]: "test/:id",
};

export type AuthNavigatorParamList = {
  [authRoutes.SignUp]: undefined;
  [authRoutes.Login]: undefined;
};

export type MainNavigatorParamList = {
  [mainRoutes.UserOnboard]: undefined;
  [mainRoutes.Dashboard]: undefined;
  [mainRoutes.AppView]: { id: string };
  [mainRoutes.TestView]: { id: string };
};

/* Web Linking */
export const mainLinking = {
  prefixes: [],
  config: {
    screens: {
      ...mainLinks,
    },
  },
};

export const authLinking = {
  prefixes: [],
  config: {
    screens: {
      ...authLinks,
    },
  },
};

class NavigationService {
  @observable navigationRef = React.createRef<NavigationContainerRef>();

  navigate(name: authRoutes | mainRoutes, params?: object) {
    return this.navigationRef.current?.navigate(name, params);
  }

  popToTop = () => {
    return this.navigationRef.current?.dispatch(StackActions.popToTop());
  };

  goBack = () => {
    return this.navigationRef.current?.goBack();
  };
}

const navigationService = new NavigationService();

export default navigationService;
