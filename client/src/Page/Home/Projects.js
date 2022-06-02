import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Project from './Project';

const Projects = () => {
    const {data:projects , isLoading } = useQuery('projects', () =>
        fetch('http://localhost:5000/projects').then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <Loading/>  
    } 

    return (
        <div className='max-w-7xl mx-auto px-4 mt-[100px]'>
            <div className='text-center mb-[80px]'>
                <h1 className='text-lg font-semibold'>Projects</h1>
                <p className='text-4xl font-bold'>Discover the latest Interior Design <br /> available today</p>
            </div>
            <div className="mb-[80px] grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-6">
                {
                    projects.map(project => <Project
                        key={project._id}
                        project={project}
                    ></Project>)
                }
            </div>
        </div>
    );
};

export default Projects;