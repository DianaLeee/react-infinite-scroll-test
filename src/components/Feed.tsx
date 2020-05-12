import React, { useState } from "react";
import styled from "styled-components";
import { IFeedData } from "../constants/interface";
import HeartSVG from "./HeartIcon";

interface IMainProps {
  marginLeft?: boolean;
}

const FeedContainer = styled.article`
  background-color: #ffffff;
  border: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
  border-radius: 3px;
  margin-bottom: 16px;
  max-width: 614px;
`;

const ProfileContainer = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
`;

const ProfileImg = styled.img`
  border-radius: 50%;
  width: 32px;
  height: 32px;
`;

const ProfileUsername = styled.span<IMainProps>`
  margin-left: ${(props) => (props.marginLeft === true ? "10px" : "0")};
  color: #262626;
  font-size: 14px;
  font-weight: 600;
`;

const IconContainer = styled.section`
  padding: 4px 16px;
`;

const CaptionContainer = styled.section`
  padding: 0 16px;
  font-size: 14px;
  padding-bottom: 16px;
`;

const CaptionText = styled.span`
  margin-left: 5px;
`;

const MoreButton = styled.button`
  color: #8e8e8e;
  background-color: transparent;
  font-weight: 600;
  padding: 0;
  border: 0;
  outline: 0;
`;

const ImageContainer = styled.div`
  width: 100%;
`;

const Feed = (feed: IFeedData) => {
  const [moreButton, setMoreButton] = useState(false);
  const [likeButton, setLikeButton] = useState(false);

  return (
    <FeedContainer>
      <ProfileContainer>
        <ProfileImg src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/18253305_1922829301264420_536497533313089536_a.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=yeXlXs38nsUAX9JMMw_&oh=f3f50a1ba10818958759940230440742&oe=5EE376F0" />
        <ProfileUsername marginLeft={true}>dianaleee_</ProfileUsername>
      </ProfileContainer>
      <ImageContainer>
        {feed.media_type === "VIDEO" ? (
          <video src={feed.media_url} style={{ width: "100%" }} controls />
        ) : (
          <img src={feed.media_url} style={{ width: "100%" }} alt={feed.id} />
        )}
      </ImageContainer>
      <IconContainer onClick={() => setLikeButton(!likeButton)}>
        <HeartSVG fill={likeButton} />
      </IconContainer>
      <CaptionContainer>
        <ProfileUsername marginLeft={false}>dianaleee_</ProfileUsername>
        <CaptionText>
          {feed.caption ? feed.caption.slice(0, 10) : <></>}
          {moreButton ? (
            <span>{feed.caption.slice(10)}</span>
          ) : (
            <span>
              ...
              <MoreButton onClick={() => setMoreButton(true)}>더 보기</MoreButton>
            </span>
          )}
        </CaptionText>
      </CaptionContainer>
    </FeedContainer>
  );
};

export default Feed;
