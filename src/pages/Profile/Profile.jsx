import React, { useContext, useEffect, useState } from "react";
import "./Profile.css";
import PageHeader from "../../components/PageHeader/PageHeader";
import MyInput from "../../components/ui/MyInput/MyInput";
import emptyUserLogo from "../../components/assets/empty-user.jpg";
import { UserContext } from "../../context/UserContextProvider";
import { compareObjects, updateUserData } from "../../utils/utils";

const Profile = () => {
  const { userData, setUserData, updateUserData } = useContext(UserContext);
  const [email, setEmail] = useState(null);
  const [fullName, setFullName] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [password, setPassword] = useState(null);
  useEffect(() => {
    if (userData) {
      setEmail(userData.email);
      setFullName(userData.fullName);
      setPhoneNumber(userData.phoneNumber);
      setPassword(userData.password);
    }
  }, [userData]);

  function handleUpdate() {
    const newUserData = { email, fullName, phoneNumber, password };
    if (compareObjects(userData, newUserData)) return;
    updateUserData(userData.userId, newUserData);
    setUserData(newUserData);
  }

  return (
    <div className="profile">
      <PageHeader sidePadding={true}>
        <h2>My Profile</h2>
      </PageHeader>
      <div className="profile__logo">
        <img src={emptyUserLogo} alt="Your profile pic" />
      </div>
      <MyInput
        required
        min="5"
        max="30"
        value={email}
        setValue={setEmail}
        label="Email"
      />
      <MyInput
        required
        min="2"
        max="30"
        value={fullName}
        setValue={setFullName}
        label="Full name"
      />
      <MyInput
        required
        min="5"
        max="30"
        value={phoneNumber}
        setValue={setPhoneNumber}
        label="Phone number"
      />
      <MyInput
        required
        min="5"
        max="30"
        value={password}
        setValue={setPassword}
        label="Password"
        type="password"
        showHideBtn={true}
      />
      <button type="button" className="myBtn" onClick={handleUpdate}>
        Update
      </button>
    </div>
  );
};

export default Profile;
