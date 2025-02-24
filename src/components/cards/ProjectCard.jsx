import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: "transparent";
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 0 12px 4px ${({ theme }) => theme.shadow};
  overflow: hidden;
  padding: 20px;
  transition: all 0.5s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 24px 6px ${({ theme }) => theme.shadowHover};
    filter: brightness(1.05);
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Image = styled.img`
  width: 40%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
  }
`;

const Details = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const Date = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
`;

const Description = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.4;
`;

const Members = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 8px;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border: 3px solid ${({ theme }) => theme.card};
`;

const Button = styled.a`
  margin-top: 10px;
  display: inline-block;
  padding: 10px 16px;
  background: ${({ theme }) => theme.primary};
  color: white;
  font-weight: 600;
  text-decoration: none;
  border-radius: 6px;
  text-align: center;
  width: max-content;
`;

const ProjectCard = ({ project }) => {
  return (
    <Card>
      <Image src={project.image} />
      <Details>
        <Title>{project.title}</Title>
        <Date>{project.date}</Date>
        <Description>{project.description}</Description>
        <Members>
          {project.member?.map((member, index) => (
            <Avatar key={index} src={member.img} />
          ))}
        </Members>
        <Button href={project.github} target="_blank">
          View Code
        </Button>
      </Details>
    </Card>
  );
};

export default ProjectCard;
