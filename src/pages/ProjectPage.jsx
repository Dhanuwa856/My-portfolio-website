"use client";

import React from "react";
import styled from "styled-components";
import TitleTag from "../components/TitleTag/TitleTag";

const ProjectPage = ({ darkMode }) => {
  // Placeholder data; replace with props or fetch logic
  const project = {
    title: "AI Chatbot",
    screenshots: [
      "/images/ai-chatbot-1.png",
      "/images/ai-chatbot-2.png",
      "/images/ai-chatbot-3.png",
    ],
    description: `Built a conversational AI chatbot using NLP techniques and deep learning. Features include intent detection, context management, and dynamic response generation. Integrated with a web interface for real-time user queries.`,
  };

  return (
    <PageContainer>
      {/* Header with background image and project title */}
      <Header>
        <HeaderOverlay></HeaderOverlay>
      </Header>
      <TitleTag sub_title={project.title} />
      {/* Main content */}
      <Content darkMode={darkMode}>
        {/* Screenshots Section */}
        <Section>
          <SectionTitle darkMode={darkMode}>Screenshots</SectionTitle>
          <Screenshots>
            {project.screenshots.map((src, idx) => (
              <Screenshot
                key={idx}
                src={src}
                alt={`${project.title} screenshot ${idx + 1}`}
              />
            ))}
          </Screenshots>
        </Section>

        {/* Description Section */}
        <Section>
          <SectionTitle darkMode={darkMode}>Description</SectionTitle>
          <Description darkMode={darkMode}>{project.description}</Description>
        </Section>
      </Content>
    </PageContainer>
  );
};

export default ProjectPage;

// Styled Components
const PageContainer = styled.div`
  width: 100%;
`;

const Header = styled.div`
  height: 50vh;
  min-height: 300px;
  background-image: url("/project_header.jpg");
  background-size: cover;
  background-position: center;
  position: relative;
`;

const HeaderOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderTitle = styled.h1`
  color: #fff;
  font-size: 3rem;
  text-align: center;
  padding: 0 1rem;
  @media (max-width: 640px) {
    font-size: 2rem;
  }
`;

const Content = styled.div`
  max-width: 800px;
  width: 90%;
  margin: 2rem auto;
  background: ${({ darkMode }) => (darkMode ? "#1e2939" : "#fff")};
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  color: ${({ darkMode }) => (darkMode ? "#ddd" : "#333")};

  @media (max-width: 640px) {
    margin: 40px auto 1rem;
    padding: 1.5rem;
  }
`;

const Section = styled.div`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.75rem;
  margin-bottom: 1rem;
  color: ${({ darkMode }) => (darkMode ? "#fff" : "#333")};
`;

const Screenshots = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
`;

const Screenshot = styled.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  @media (max-width: 640px) {
    min-height: 120px;
    object-fit: cover;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${({ darkMode }) => (darkMode ? "#ccc" : "#555")};
`;
