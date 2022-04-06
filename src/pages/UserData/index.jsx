import React from "react";
import PropTypes from "prop-types";
import Greetings from "../../components/Greetings";

function UserDtata({ userFirstName }) {
  return (
    <div>
      <Greetings userFirstName={userFirstName} />
    </div>
  );
}
UserDtata.propTypes = {
  trackerIcon: PropTypes.string.isRequired,
};

UserDtata.defaultProps = {
  trackerIcon: "",
};
export default UserDtata;
