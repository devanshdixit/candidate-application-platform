import React from 'react';
import { Card, CardContent, Typography, Button, Box, Avatar } from '@mui/material';
import styled from '@emotion/styled';
import './JobCard.css';
import user from '../utils/user.png';
const StyledCard = styled(Card)`
  margin-bottom: 16px;
`;

const ButtonBox = styled(Box)`
  display: flex;
  gap: 8px;
  margin-top: 16px;
`;

const getDefault = (value, defaultValue = 'N/A') => (value === null ? defaultValue : value);

const JobCard = ({ job }) => {
  const {
    companyName,
    jdLink,
    jobDetailsFromCompany,
    jobRole,
    location,
    logoUrl,
    maxExp,
    maxJdSalary,
    minExp,
    minJdSalary,
    salaryCurrencyCode
  } = job;

  return (
    <div className="job-card">
      <div className="job-card-header">
        <img src={logoUrl} alt={`${companyName} logo`} />
        <div>
          <h2>{companyName}</h2>
          <h1>{jobRole}</h1>
          <p>{location}</p>
        </div>
      </div>
      <div className="job-card-salary">
        <p>Estimated Salary:</p>
        <p>
          {salaryCurrencyCode} {minJdSalary} - {maxJdSalary} LPA ✅
        </p>
      </div>
      <p className='job-card-p'>About Company:</p>
      <p className='job-card-p'>About us</p>
      <div className='job-card-section'>
        <p className="job-card-description">{jobDetailsFromCompany}</p>
        <div>
          <a href={jdLink} target="_blank" rel="noopener noreferrer">View job</a>
        </div>
      </div>
      <div className="job-card-experience">
        <p>Minimum Experience:</p>
        <p>{minExp} years</p>
      </div>
      <div className="job-card-actions">
        <button className='job-card-actions-button'>⚡️ Easy Apply</button>
        <button className='job-card-actions-button-referral job-card-actions-button'>
          <img src={user} alt='' className='job-card-actions-button-user' />
          <img src={user} alt='' className='job-card-actions-button-user' />
          Unlock referral asks
        </button>
      </div>
    </div>
  );
};

export default JobCard;
