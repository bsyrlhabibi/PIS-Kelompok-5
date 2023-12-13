import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { getContentById } from '../utils/data-content';

const CourseContentDetailWrapper = styled.div`
  max-width: 800px;
  width: 100%;
  margin: auto;
  text-align: center; /* Untuk membuat judul di tengah */
  margin-top: 20px; /* Atur jarak antara judul dan video */
`;

const VideoContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  margin-top: 20px; /* Atur jarak antara judul dan video */
`;

const ResponsiveIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const CourseContent = () => {
  const { id, idx } = useParams();
  const content = getContentById(id, idx);

  return (
    <CourseContentDetailWrapper>
      <h2>{content.title}</h2>
      <VideoContainer>
        <ResponsiveIframe
          src={content.videoUrl}
          title={content.title}
          frameBorder="0"
          allowFullScreen
        ></ResponsiveIframe>
      </VideoContainer>
    </CourseContentDetailWrapper>
  );
};

export default CourseContent;
