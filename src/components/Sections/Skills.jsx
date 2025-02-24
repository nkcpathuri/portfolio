import React from 'react';
import styled from 'styled-components';
import { skills } from '../../data/constants';
import { Tilt } from 'react-tilt';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  padding: 40px 20px;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const SkillsGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Divides screen into 4 equal parts */
  gap: 15px; /* Reduced gap for a balanced look */
  margin-top: 30px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr); /* 3 columns for medium screens */
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* 2 columns for tablets */
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr); /* 1 column for mobile */
  }
`;

const SkillCardContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const SkillCard = styled.div`
  width: 160px;
  height: 160px;
   background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.125);
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 1024px) {
    width: 140px;
    height: 140px;
  }

  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
  }

  @media (max-width: 480px) {
    width: 100px;
    height: 100px;
  }
`;

const SkillImage = styled.img`
  width: 90px;
  height: 90px;

  @media (max-width: 1024px) {
    width: 80px;
    height: 80px;
  }

  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
  }

  @media (max-width: 480px) {
    width: 60px;
    height: 60px;
  }
`;

const Skills = () => {
  return (
    <Container id="Skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc>Here are some of my key skills</Desc>
        <SkillsGrid>
          {skills.flatMap((skillCategory) =>
            skillCategory.skills.map((skill, index) => (
              <SkillCardContainer key={`skill-${index}`}>
                <Tilt>
                  <SkillCard>
                    <SkillImage src={skill.image} alt={skill.name} />
                  </SkillCard>
                </Tilt>
              </SkillCardContainer>
            ))
          )}
        </SkillsGrid>
      </Wrapper>
    </Container>
  );
};

export default Skills;
