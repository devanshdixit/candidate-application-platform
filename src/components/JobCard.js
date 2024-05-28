import React from 'react';
import { Card, CardContent, Typography, Button, Box, Avatar } from '@mui/material';
import styled from '@emotion/styled';

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
    <StyledCard>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
          <Avatar src={getDefault(logoUrl, '')} sx={{ marginRight: 2 }} />
          <Typography variant="h5">{getDefault(companyName,"N/A")}</Typography>
        </Box>
        <Typography variant="subtitle1" gutterBottom>{getDefault(jobRole,"N/A")}</Typography>
        <Typography variant="body2" gutterBottom>{getDefault(location, 'N/A')}</Typography>
        <Typography variant="body2" gutterBottom>
          {getDefault(jobDetailsFromCompany)}
        </Typography>
        <Typography variant="body2" gutterBottom>
          Minimum Experience: {getDefault(minExp)} years
        </Typography>
        <Typography variant="body2" gutterBottom>
          Salary: {getDefault(salaryCurrencyCode)} {getDefault(minJdSalary)} - {getDefault(maxJdSalary)}
        </Typography>
        <ButtonBox>
          <Button variant="contained" color="primary" href={getDefault(jdLink, '#')}>View Job</Button>
          <Button variant="outlined" href={getDefault(jdLink, '#')}>Unlock referral asks</Button>
        </ButtonBox>
      </CardContent>
    </StyledCard>
  );
};

export default JobCard;
