"use client";

import React, { useEffect } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import TitleTag from "../components/TitleTag/TitleTag";

const ProjectPage = ({ darkMode }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const project = location.state?.project;

  // Redirect if no project passed
  useEffect(() => {
    if (!project) navigate("/");
  }, [project, navigate]);

  if (!project) return null;

  return (
    <PageContainer>
      {/* Header with background image */}
      <Header>
        <HeaderOverlay />
      </Header>

      {/* Project Title */}
      <h1 class="text-3xl md:text-4xl lg:text-5xl font-semibold text-center text-indigo-600 font-header mt-5 hover:text-accent w-fit mx-auto duration-1000">
        {project.title}
      </h1>
      {/* Main content */}
      <Content darkMode={darkMode}>
        {/* Tags Section */}
        {project.tags?.length > 0 && (
          <Section>
            <SectionTitle darkMode={darkMode}>Tags</SectionTitle>
            <TagList>
              {project.tags.map((tag, idx) => (
                <Tag key={idx}>{tag}</Tag>
              ))}
            </TagList>
          </Section>
        )}

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

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tag = styled.span`
  background-color: #3b82f6;
  color: white;
  padding: 0.3rem 0.7rem;
  font-size: 0.875rem;
  border-radius: 9999px;
  white-space: nowrap;
`;
