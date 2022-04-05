import React from "react";
import Greetings from "../../components/Greetings";

function UserDtata({ userFirstName }) {
  return (
    <div>
      <Greetings userFirstName={userFirstName} />
    </div>
  );
}
export default UserDtata;
