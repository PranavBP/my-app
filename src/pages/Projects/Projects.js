import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Pill } from '../../styles';
import { ProjectItem, ProjectTitle, SkillContainer } from './styles';

const Projects = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <SectionTitle>Projects</SectionTitle>
        <ul>
          {user.projects.map((project, i) => (
            <ProjectItem key={i}>
              <ProjectTitle>1. RESTful API</ProjectTitle>
              <p>RESTful API designed using Node.js, Express, Sequelize for CRUD operations.</p>
              <p>{project.summary}</p>
              <SkillContainer>
                {[...project.languages, ...project.libraries].map((item, j) => (
                  <Pill key={j}>{item}</Pill>
                ))}
              </SkillContainer>
              
              <ProjectTitle>2. Bluetooth Controlled Remote Controlled Car </ProjectTitle>
              <p>Developed a remote controlled car using HC 05 Bluetooth module interfaced with Arduino Uno. An Android phone was used as a remote control to drive the car.</p>
              <SkillContainer>
                {["Arduino", "Microcontroller", "Embedded-C"].map((item,l) => (
                  <Pill key={l}>{item}</Pill>
                ))}
              </SkillContainer>

              <ProjectTitle>3. Fingerprint based Attendance system Using LabVIEW</ProjectTitle>
              <p>
                Developed a prototype to automate a classroom attendance procedure by using a fingerprint recognition module( R307) interfaced with LabVIEW, to improve security and reduce time wasted on manual attendance.
              </p>
              <SkillContainer>
                {["LabVIEW", "Arduino", "Embedded-C",].map((item,l) => (
                  <Pill key={l}>{item}</Pill>
                ))}
              </SkillContainer>
              
            </ProjectItem>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Projects;