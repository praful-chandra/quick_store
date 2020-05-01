import React from "react";
import { withRouter } from "react-router-dom";
import Axios from "axios";
import { connect } from "react-redux";
import { setCurrentUser } from "../redux/actions/user-actions";

function AuthTokenHandler(props) {
  const token = props.match.params.token;

  localStorage.setItem("jwtToken", token);

  const getUser = async () => {
    Axios.defaults.headers.post["Authorization"] = token;
    const result = await Axios.post("/api/auth/user/validateuser");
    return result;
  };
  getUser().then((usr) => {
    props.setCurrentUser(usr.data);
    props.history.push("/")
  }).catch(err=>console.log("err"));

  return (
    <div>
      Please Wait .....
    </div>
  );
}

export default connect(null, { setCurrentUser })(withRouter(AuthTokenHandler));
