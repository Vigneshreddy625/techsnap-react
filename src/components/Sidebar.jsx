import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation if you haven't already
import "./Profile.css";
import projectManagementIcon from '../assets/rsc/icons8-project-management-48.png';
import chevronDownIcon from '../assets/rsc/icons8-chevron-down-30.png';
import chevronUpIcon from '../assets/rsc/icons8-chevron-up-30.png';
import dashboardIcon from '../assets/rsc/icons8-dashboard-layout-48.png';
import eLearningIcon from '../assets/rsc/icons8-e-learning-48.png';
import userGroupsIcon from '../assets/rsc/icons8-user-groups-48.png';
import commercialIcon from '../assets/rsc/icons8-commercial-48.png';
import supportIcon from '../assets/rsc/icons8-support-60.png';

function Sidebar({ isPanelOpen, toggleSidebar }) {
  const [expandedPanels, setExpandedPanels] = useState({
    0: true,
    1: true
  });

  const location = useLocation(); 

  const togglePanel = (index) => {
    setExpandedPanels((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const panels = [
    {
      title: 'Dashboard',
      items: [
        { icon: dashboardIcon, text: 'Analytics', link: '/analytics' },
        { icon: eLearningIcon, text: 'Manage access', link: '/index.html' },
        { icon: eLearningIcon, text: 'Management', link: '/manage' },
        { icon: userGroupsIcon, text: 'Doubts', link: '/groups.html' }
      ]
    },
    {
      title: 'Snap it',
      items: [
        { icon: dashboardIcon, text: 'Career Paths', link: '/career-path' },
        { icon: eLearningIcon, text: 'Skill Paths', link: '/index.html' },
        { icon: userGroupsIcon, text: 'Courses', link: '/course' },
        { icon: commercialIcon, text: 'Projects', link: '/groups.html' },
        { icon: userGroupsIcon, text: 'Assignments', link: '/groups.html' },
      ]
    },
  ];

  return (
    <div className={`side-panel-container ${isPanelOpen ? "block" : "hidden"} lg:block z-50`}>
      <div className="side-panel">
        <button className="sidebar-close-btn" onClick={toggleSidebar}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" color='white' xmlns="http://www.w3.org/2000/svg">
            <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <div className="panel-item logo-item">
          <div className="logo">
            <img src={projectManagementIcon} alt="managesnap logo" className="logo-image" />
            <p className="logo-name">Create Snap</p>
          </div>
        </div>

        {panels.map((panel, index) => (
          <div key={index}>
            <div className="panel-heading" onClick={() => togglePanel(index)}>
              <h3>{panel.title}</h3>
              <img
                src={expandedPanels[index] ? chevronUpIcon : chevronDownIcon}
                alt="Toggle"
                className="arrow"
              />
            </div>
            {expandedPanels[index] && (
              <div className="details">
                {panel.items.map((item, idx) => (
                  <div
                    className={`panel-item ${location.pathname.includes(item.link) ? 'active' : ''}`}
                    key={idx}
                  >
                    <img src={item.icon} alt="" className="item" />
                    <p className="name"><a href={item.link}>{item.text}</a></p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        <div className="panel-item support">
          <button>
            <img src={supportIcon} alt="Support" />
            <p>Get Support</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
