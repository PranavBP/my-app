import React from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowRight16 } from '@carbon/icons-react';

import { HeaderContainer, Header, Image, ViewResumeLink } from './styles';

const UserHeader = ({ user }) => {
  const location = useLocation();

  return (
    <HeaderContainer isHome={location.pathname === '/'}>
      <Header>
        <Image src={user.basics.picture} />
        <div>
          <h2>{user.basics.name}</h2>
          <h4>
            <a
              href={`https://gitconnected.com/${user.basics.username}`}
              target="_blank"
              rel="noreferrer noopener"
            >
            </a>
          </h4>
          <p>{user.basics.label}</p>
          <p>{user.basics.headline}</p>
          <p>Email: bellam.pranav@gmail.com</p>
          <p>Phone: +91-8951516142, +91-7019334556</p>

        </div>
      </Header>
      <div>
        <ViewResumeLink
          href={"https://drive.google.com/file/d/1BuqnRs7q3K22QHjR5Jhi_wFK7duXqYAC/view"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>View Resume</span>
          <ArrowRight16 />
        </ViewResumeLink>
      </div>
    </HeaderContainer>
  );
};

export default UserHeader;