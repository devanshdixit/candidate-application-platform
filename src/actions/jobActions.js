import { getSampleJdJSON } from '../utils/data';

export const FETCH_JOBS_REQUEST = 'FETCH_JOBS_REQUEST';
export const FETCH_JOBS_SUCCESS = 'FETCH_JOBS_SUCCESS';
export const FETCH_JOBS_FAILURE = 'FETCH_JOBS_FAILURE';

const applyFilters = (jobs = [], filters) => {
    return jobs.filter(job => {
      const { role, numberOfEmployees, experience, location, minBasePay, companyName } = filters;
  
      const isLocationMatch = !location || 
                              (location === 'remote' && job.location && job.location.toLowerCase().includes('remote')) || 
                              (location === 'on-site' && job.location && !job.location.toLowerCase().includes('remote'));
  
      if (!isLocationMatch) {
        return;
      }
  
      return (
        (!role || (job.jobRole && job.jobRole.toLowerCase().includes(role.toLowerCase()))) &&
        (!numberOfEmployees || (job.numberOfEmployees && job.numberOfEmployees <= numberOfEmployees)) &&
        (!experience || (job.minExp && job.minExp >= experience)) &&
        (!minBasePay || (job.minJdSalary && job.minJdSalary >= minBasePay)) &&
        (!companyName || (job.companyName && job.companyName.toLowerCase().includes(companyName.toLowerCase())))
      );
    }).map(job => ({
      ...job,
      jobRole: job.jobRole || 'N/A',
      numberOfEmployees: job.numberOfEmployees || 'N/A',
      minExp: job.minExp || 'N/A',
      maxExp: job.maxExp || 'N/A',
      minJdSalary: job.minJdSalary || 'N/A',
      maxJdSalary: job.maxJdSalary || 'N/A',
      location: job.location || 'N/A',
      companyName: job.companyName || 'N/A'
    }));
  };
  
export const fetchJobs = (filters, page) => async dispatch => {
  dispatch({ type: FETCH_JOBS_REQUEST });

  try {
    const res = getSampleJdJSON();

    let filteredJobs = applyFilters(res, filters);
    if (filteredJobs.length === 0) {    
        filteredJobs = [...res];
    }
    dispatch({
      type: FETCH_JOBS_SUCCESS,
      payload: {
        jobs: filteredJobs,
        page,
      },
    });
  } catch (error) {
    dispatch({
      type: FETCH_JOBS_FAILURE,
      error: error.message,
    });
  }
};
