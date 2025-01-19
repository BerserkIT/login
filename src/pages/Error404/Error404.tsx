import React from 'react';
import { Link } from 'react-router-dom';

const Error404: React.FC = () => {
    return (
        <div style={{ textAlign: 'center', padding: '2rem' }}>
            <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>404</h1>
            <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
                Oops! The page you are looking for does not exist.
            </p>
            <Link
                to="/"
                style={{
                    display: 'inline-block',
                    padding: '0.75rem 1.5rem',
                    fontSize: '1rem',
                    backgroundColor: '#007BFF',
                    color: '#fff',
                    textDecoration: 'none',
                    borderRadius: '4px',
                    transition: 'background-color 0.3s',
                }}
                onMouseOver={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.backgroundColor = '#0056b3')}
                onMouseOut={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.backgroundColor = '#007BFF')}
            >
                Go Back Home
            </Link>
        </div>
    );
};

export default Error404;
