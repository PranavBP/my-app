import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Paragraph } from '../../styles';
import { WorkItem, WorkTitle, JobTitle } from './styles';

const Work = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <SectionTitle>Work</SectionTitle>
        <ul>
          {user.work.map((work, i) => (
            <WorkItem key={i}>
              <WorkTitle>{work.position}</WorkTitle>
              <div>
                <JobTitle>{work.company}</JobTitle> <span>{work.location}</span>
                <span> &sdot; </span>
                <span>
                  Jan, 2020 to June, 2020
                </span>
              </div>
              <Paragraph>{work.summary}</Paragraph>

              <p><hr></hr></p>

              <WorkTitle>Intern</WorkTitle>
              <div>
                <JobTitle>Karnataka State Pollution Control Board</JobTitle> <span>Bangalore</span>
                <span> &sdot; </span>
                <span>
                  May, 2019 to July, 2019
                </span>
              </div>
              <Paragraph>a) Survey on air and noise pollution.</Paragraph>
              <Paragraph>b) Front end development of various official KSPCB documents using HTML and CSS</Paragraph>
            </WorkItem>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Work;