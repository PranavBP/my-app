import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Paragraph } from '../../styles';
import { EducationItem, Institution, Degree } from './styles';

const Education = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <SectionTitle>Education</SectionTitle>
        <ul>
          {user.education.map((education, i) => (
            <EducationItem key={i}>
              <Institution>R.V College of Engineering, Bangalore</Institution>
              <div>
                <Degree>
                  {education.studyType}, {education.area}
                </Degree>{' '}
                <span> &sdot; </span>
                <span>
                  {education.start.year} to {education.end.year}
                </span>
              </div>
              <Paragraph>{education.description.replace('\n\n', '\n')}</Paragraph>
              <p><hr></hr></p>
              <Institution>Narayana PU College, Bangalore</Institution>
              <div>
                <Degree>
                  PCMC
                </Degree>{' '}
                <span> &sdot; </span>
                <span>
                  May, 2014 to June,2016
                </span>
              </div>
              <Paragraph>Percentage: 81.5%</Paragraph>
              <p><hr></hr></p>
              <Institution>Narayana E-Techno School, Bangalore</Institution>
              <div>
                <Degree>
                  10th
                </Degree>{' '}
                <span> &sdot; </span>
                <span>
                  June, 2013 to May,2014
                </span>
              </div>
              <Paragraph>CGPA: 10</Paragraph>
            </EducationItem>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Education;