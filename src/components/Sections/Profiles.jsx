import React from "react";
import styled from "styled-components";

const ProfileContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 50px auto;
  padding: 20px;
  border-radius: 12px;
  background: ${({ theme }) => theme.background_secondary};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const ProfileHeader = styled.h2`
  margin-bottom: 20px;
  color: ${({ theme }) => theme.text_primary};
`;

const ProfileGrid = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
`;

const ProfileCard = styled.div`
  width: 300px;
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 8px;
  background: ${({ theme }) => theme.background};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 250px;  // Increased size
  height: 140px; // Rectangular shape
  object-fit: cover;
  margin-bottom: 15px;
  border-radius: 10px;
  border: 0.25px solid ${({ theme }) => theme.primary};
`;

const ProfileName = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 8px;
`;

const ProfileLink = styled.a`
  display: block;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  color: ${({ theme }) => theme.text_primary};
  margin-top: 10px;
  padding: 8px 12px;
  border-radius: 5px;
  background: ${({ theme }) => theme.primary};
  color: white;
  transition: 0.3s;

  &:hover {
    background: ${({ theme }) => theme.text_primary};
    color: ${({ theme }) => theme.background};
  }
`;

const RealTimeProfiles = () => {
  const profiles = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/n-krishna-chowdary-pathuri-943960243/",
      image: "/images/plinkedin.png", // Local image path
    },
    {
      name: "GitHub",
      url: "https://github.com/nkcpathuri",
      image: "/images/pgithub.png", // Local image path
    },
    {
      name: "Behance",
      url: "https://www.behance.net/nkcpathuri",
      image: "/images/pbehance.png", // Local image path
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/infinitewizcrafts/",
      image: "/images/pinsta.png", // Local image path
    },
    {
      name: "Hacker Rank",
      url: "https://www.hackerrank.com/profile/h2100032143",
      image: "/images/phr.png", // Local image path
    },
    {
      name: "Kaggle",
      url: "https://www.kaggle.com/nkcpathuri",
      image: "/images/pkaggle.png", // Local image path
    },

    
  ];

  return (
    <ProfileContainer>
      <ProfileHeader>My Real-Time Profiles</ProfileHeader>
      <ProfileGrid>
        {profiles.map((profile, index) => (
          <ProfileCard key={index}>
            <ProfileImage src={profile.image} alt={profile.name} />
            <ProfileName>{profile.name}</ProfileName>
            <ProfileLink href={profile.url} target="_blank" rel="noopener noreferrer">
              Visit {profile.name}
            </ProfileLink>
          </ProfileCard>
        ))}
      </ProfileGrid>
    </ProfileContainer>
  );
};

export default RealTimeProfiles;
