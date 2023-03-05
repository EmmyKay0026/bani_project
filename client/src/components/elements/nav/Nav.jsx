import React, { useState } from "react";
import Image from "../../atoms/img/Image";
import Text from "../../atoms/text/Text";
import Logout from "../logout/Logout";
import NavWrapper, {
  NavFlexColumn,
  NavIcon,
  NavIconNotify,
  NavLeftLayout,
  NavLogoWrapper,
  NavUserDDIcon,
  NavUserDp,
  NavCompTxt,
  NavMailTxt,
  NavUserLayout,
} from "./Nav.styles";
import logo from "../../../assets/logo.svg";
import { HiOutlineBell } from "react-icons/hi";
import { RxCaretDown, RxCaretUp } from "react-icons/rx";

const Nav = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <NavWrapper>
      <NavLogoWrapper>
        <Image src={logo} width="100%" />
      </NavLogoWrapper>
      <NavLeftLayout>
        <NavIcon>
          <HiOutlineBell />
          <NavIconNotify />
        </NavIcon>
        <NavUserLayout onClick={() => setClicked(!clicked)}>
          <NavUserDp>JT</NavUserDp>
          <NavFlexColumn>
            <NavCompTxt>JT Industry Limit..</NavCompTxt>
            <NavMailTxt>JamesT@gmail.com</NavMailTxt>
          </NavFlexColumn>
          <NavUserDDIcon>
            {clicked ? <RxCaretUp /> : <RxCaretDown />}
          </NavUserDDIcon>
          {clicked && <Logout />}
        </NavUserLayout>
      </NavLeftLayout>
    </NavWrapper>
  );
};

export default Nav;
