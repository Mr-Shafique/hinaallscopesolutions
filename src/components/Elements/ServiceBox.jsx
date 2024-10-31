import React from "react";
import styled from "styled-components";
// Assets
import Webdev from "../../assets/svg/Webdev";
import Web from "../../assets/svg/Web";
import App from "../../assets/svg/Mobile";
import Graphic from "../../assets/svg/Graphicdesign";

export default function ServiceBox({icon, title, subtitle}) {
  let getIcon;

  switch (icon) {
    case "roller":
      getIcon =<Graphic/> ;
      break;
    case "monitor":
      // getIcon = <MonitorIcon />;
      getIcon = <Webdev />;
      break;
    case "browser":
      getIcon = <Web />;
      break;
    case "mobile":
      getIcon = <App />;
      break;
    default:
      break;
    } 


  return (
    <Wrapper className="flex flexColumn">
      <IconStyle>{getIcon}</IconStyle>
      <TitleStyle className="font20 extraBold">{title}</TitleStyle>
      <SubtitleStyle className="font13">{subtitle}</SubtitleStyle>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const IconStyle = styled.div`
  @media (max-width: 860px) {
    margin: 0 auto;
  }
`;
const TitleStyle = styled.h2`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: 40px 0;
  @media (max-width: 860px) {
    padding: 20px 0;
  }
`;
const SubtitleStyle = styled.p`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
`;