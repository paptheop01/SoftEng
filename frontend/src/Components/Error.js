import React from 'react';
import { Link } from 'react-router-dom';

/*
  This page is used for all 404 errors.
*/
function ErrorPage() {
  return (
    <div style={{backgroundColor: 'rgba(144, 238, 144, 0.479)'}}>
        <center>
            <h1 style={{color: 'blue'}}>404 - Not Found</h1>
            <p style={{ fontSize: '35px'}}>The page you requested could not be found.</p>
            {/*
              Not usual to have one, but there is a button that leads to the
              Homepage, for anyone who didn't manage to input the correct URL
            */}
            <Link to={`/`}>
              <button className="button">Back to Homepage</button>
            </Link>
        </center>
    </div>
  );
};

export default ErrorPage;
