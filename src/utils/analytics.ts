import ReactGA from "react-ga4";

export const initializeAnalytics = (measurementId: string) => {
  ReactGA.initialize(measurementId);
};

export const logPageView = () => {
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
};
