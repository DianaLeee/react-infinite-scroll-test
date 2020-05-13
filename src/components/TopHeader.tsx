import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";

const HeaderContainer = styled.div`
  background-color: #ffffff;
  border-bottom: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
  padding: 0 20px;
  display: flex;
  flex-direction: row;
  align-items: center;

  height: 50px;
  justify-content: space-between;
`;

const Logo = styled.img`
  height: 30px;
`;

const Profile = styled.img`
  border-radius: 50%;
  width: 30px;
`;

const MY_PROFILE_IMG =
  "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/18253305_1922829301264420_536497533313089536_a.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=yeXlXs38nsUAX9JMMw_&oh=f3f50a1ba10818958759940230440742&oe=5EE376F0";

const TopHeader = () => {
  return (
    <HeaderContainer>
      <Logo src={logo} />
      <a href="https://www.instagram.com/dianaleee_/" target="_blank" rel="noopener noreferrer">
        <Profile src={MY_PROFILE_IMG} />
      </a>
    </HeaderContainer>
  );
};
export default TopHeader;
