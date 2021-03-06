import React from 'react';
import banner from '../../../assets/images/chair.png'
import SharedButton from '../../../shared/SharedButton'
import './Banner.css'

const Banner = () => {
    return (
        <div className='container mx-auto banner-bg bg-cover'>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={banner} alt='' className="lg:max-w-2xl rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-3xl lg:text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <SharedButton>Get STARTED</SharedButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;