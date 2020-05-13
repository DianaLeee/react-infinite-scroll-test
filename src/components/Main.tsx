import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Feed from "./Feed";
import { IFeedData } from "../constants/interface";

interface IPagingData {
  next: string | undefined;
}

const baseUrl = "https://graph.instagram.com/me/media";
const token =
  "IGQVJXVm9aZAmFZAa2lwSFh5Uy1GRE9tVmVTcXN3RWpPOFNGaWdJaUxLS3g5WkNjSndKdDJBY1IxelRzMTRuYVB5djZAfS0FmNWFDTFFvQ2llbHN3Uk01VklodXFFNGo5N2IxdTNGcFF3";

const FeedsContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 614px;
  margin: 60px auto;
`;

const CenteredFeedsContainer = styled(FeedsContainer)`
  margin: calc((100vh / 2) - 60px) auto;
`;

const ScrollLoaderWrapper = styled.div`
  z-index: 100;
  position: absolute;
  bottom: calc((100vh / 100) - 60px);
`;

const Main = () => {
  const [loading, setLoading] = useState(true);
  const [fetching, setFetching] = useState(false);
  const [instaData, setInstaData] = useState([]);
  const [instaPaging, setInstaPaging] = useState<IPagingData>({ next: undefined });

  const fetchInstaFeeds = async () => {
    setLoading(true);
    await axios
      .get(`${baseUrl}?fields=id,caption,media_url,media_type&access_token=${token}`)
      .then((response) => {
        setInstaData(response.data.data);
        setInstaPaging(response.data.paging);
      })
      .catch((error) => {
        console.log(error);
      });
    setLoading(false);
  };

  const fetchMoreInstaFeeds = async () => {
    setFetching(true);
    if (instaPaging.next !== undefined) {
      await axios.get(instaPaging.next).then((response) => {
        const fetchedData = response.data.data;
        const mergedData = instaData.concat(...fetchedData);
        setInstaData(mergedData);
      });
    }
    setFetching(false);
  };

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight && fetching === false) {
      fetchMoreInstaFeeds();
    }
  };

  useEffect(() => {
    fetchInstaFeeds();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  if (loading)
    return (
      <CenteredFeedsContainer>
        <i className="fab fa-instagram fa-3x" style={{ color: "gray" }} />
      </CenteredFeedsContainer>
    );

  return (
    <FeedsContainer>
      {instaData.map((data: IFeedData, idx: number) => (
        <Feed
          key={idx}
          id={data.id}
          caption={data.caption}
          media_url={data.media_url}
          media_type={data.media_type}
        />
      ))}
      {fetching ? (
        <ScrollLoaderWrapper>
          <i className="fab fa-instagram fa-3x" style={{ color: "gray" }} />
        </ScrollLoaderWrapper>
      ) : (
        <></>
      )}
    </FeedsContainer>
  );
};

export default Main;
