import React from 'react';
import { TextField, MenuItem, Grid, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setFilters, clearFilters } from '../actions/filterActions';

const Filters = () => {
  const dispatch = useDispatch();
  const filters = useSelector(state => state.filters);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setFilters({ ...filters, [name]: value }));
  };

  const handleClear = () => {
    dispatch(clearFilters());
  };

  const isFiltersApplied = Object.values(filters).some(filter => filter);

  return (
    <Grid container spacing={2} style={{ marginBottom: '20px', alignItems: 'center' }}>
      <Grid item xs={12} sm={6} md={2}>
        <TextField
          label="Roles"
          name="role"
          value={filters.role || ''}
          onChange={handleChange}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6} md={2}>
        <TextField
          label="Number of Employees"
          name="numberOfEmployees"
          value={filters.numberOfEmployees || ''}
          onChange={handleChange}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6} md={2}>
        <TextField
          label="Experience"
          name="experience"
          value={filters.experience || ''}
          onChange={handleChange}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6} md={2}>
        <TextField
          label="Location"
          name="location"
          select
          value={filters.location || ''}
          onChange={handleChange}
          fullWidth
        >
          <MenuItem value="remote">Remote</MenuItem>
          <MenuItem value="on-site">On-Site</MenuItem>
        </TextField>
      </Grid>
      <Grid item xs={12} sm={6} md={2}>
        <TextField
          label="Minimum Base Pay Salary"
          name="minBasePay"
          value={filters.minBasePay || ''}
          onChange={handleChange}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6} md={2}>
        <TextField
          label="Search Company Name"
          name="companyName"
          value={filters.companyName || ''}
          onChange={handleChange}
          fullWidth
        />
      </Grid>
      {isFiltersApplied && (
        <Grid item xs={12} style={{ textAlign: 'right' }}>
          <Button variant="contained" color="secondary" onClick={handleClear}>
            Clear Filters
          </Button>
        </Grid>
      )}
    </Grid>
  );
};

export default Filters;
