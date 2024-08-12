import React from "react";
import { useLocation } from "react-router-dom";

function withLocation(Component) {
  return function WithLocation(props) {
    const location = useLocation();
    return <Component {...props} location={location} />;
  };
}

export default withLocation;
