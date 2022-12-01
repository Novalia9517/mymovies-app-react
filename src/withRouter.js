import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function withRouter(Component) {
  function Wrapper(props) {
    const navigate = useNavigate();
    const location = useLocation();
    return (
      <Component navigate={navigate} location={location} {...props} />
    );
  }
  return Wrapper;
}

export default withRouter