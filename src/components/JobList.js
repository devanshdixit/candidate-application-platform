import React, { useEffect, useRef, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid } from '@mui/material';
import JobCard from './JobCard';
import { fetchJobs } from '../actions/jobActions';

const JobList = () => {
  const dispatch = useDispatch();
  const { jobs, loading, error, page } = useSelector(state => state.jobs);
  const filters = useSelector(state => state.filters);
  const observer = useRef();

  // Fetch jobs when filters change or on initial render
  useEffect(() => {
    dispatch(fetchJobs(filters, 1));
  }, [dispatch, filters]);

  // Infinite scroll logic
  const lastJobElementRef = useCallback((node) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        dispatch(fetchJobs(filters, page + 1));
      }
    });
    if (node) observer.current.observe(node);
  }, [loading, dispatch, filters, page]);

  if (loading && page === 1) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Grid container spacing={2}>
      {jobs.map((job, index) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          key={job.id}
          ref={jobs.length === index + 1 ? lastJobElementRef : null}
        >
          <JobCard job={job} />
        </Grid>
      ))}
    </Grid>
  );
};

export default JobList;
