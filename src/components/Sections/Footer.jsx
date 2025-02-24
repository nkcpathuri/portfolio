import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import {
  GitHub,
  Instagram,
  LinkedIn,
  Telegram,

} from "@mui/icons-material";

const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 10;
  padding: 2rem 0;
`;

const FooterBox = styled.div`
  width: 90%;
  max-width: 1200px;
  padding: 2rem;
  border-radius: 12px;
  border: 2px solid ${({ theme }) => theme.primary}; /* Border to enclose */
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.primary} 0%,
    ${({ theme }) => theme.secondary} 100%
  );
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2); /* Soft shadow for depth */
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.text_primary};
  transition: background 0.5s ease-in-out;
`;

const Logo = styled.div`
  font-weight: 700;
  font-size: 20px;
  color: ${({ theme }) => theme.text_secondary};
`;

const Nav = styled.ul`
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin-top: 0.5rem;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    font-size: 12px;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.text_secondary};
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.text_secondary};
  }
`;

const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;
const ContactInfo = styled.div`
  display: flex;
  gap: 2rem; /* Adjust spacing */
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
`;

const ContactLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const ContactText = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;


const Footer = () => {
  return (
    <FooterContainer>
      <FooterBox>
        <Logo>N Krishna Chowdary Pathuri</Logo>

        <ContactInfo>
  <ContactLink href="tel:+918688152369">+91 8688152369</ContactLink>
  <ContactText>nkcpathuri@gmail.com</ContactText>
</ContactInfo>

        
        <SocialMediaIcons>
        <SocialMediaIcon href={Bio.linkedin} target="display">
            <LinkedIn />
          </SocialMediaIcon>
        <SocialMediaIcon href={Bio.github} target="display">
            <GitHub />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.Telegram} target="display">
            <Telegram />
          </SocialMediaIcon>
         
          <SocialMediaIcon href={Bio.insta} target="display">
            <Instagram />
          </SocialMediaIcon>
        </SocialMediaIcons>
        <Copyright>
          &copy; {new Date().getFullYear()} N Krishna Chowdary Pathuri. All Rights Reserved.
        </Copyright>
      </FooterBox>
    </FooterContainer>
  );
};

export default Footer;
