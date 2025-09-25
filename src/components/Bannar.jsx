import React from 'react';
import bannarImage from '../assets/bannar.png'
import PlayStoreButton from './PlayStoreButton';

const Bannar = () => {
    return (
        <div className='flex items-center border mb-10'>
            <div className='border'>
                {/* Text section */}
                <h2 className='font-bold text-primary text-6xl'>All Your Jobs
                    One Smart App</h2>
                <p>Built for business owners, employees, and clients streamline job scheduling, service tracking, and team management in one powerful app.</p>
                <PlayStoreButton/>
            </div>
            <div className='border'>
                {/* Image section */}
                <img src={bannarImage} alt="Bannar image" className='w-[720px] h-[656px]' />
            </div>
        </div>
    );
};

export default Bannar;