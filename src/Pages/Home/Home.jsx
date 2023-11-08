import { useEffect, useState } from 'react';
import crols1 from '../../assets/As11 (1).png'
import crols2 from '../../assets/creative-nerd-logo-template_23-2149217528 (1).jpg'
import crols3 from '../../assets/digital1.png'

import Jobcard from './Jobcard';
import Services1 from '../../Component/Services1';
import Services2 from '../../Component/Services2';
import Services3 from '../../Component/Services3';



const Home = () => {
    const [activeButton, setActiveButton] = useState(0);


    const handleButtonClick = (index) => {
        setActiveButton(index);
    };

    const [alljobs, setalljobs] = useState([]);
    useEffect(() => {
        fetch('https://b8a11-server-side-opal.vercel.app/jobs')
            .then(res => res.json())
            .then(data => setalljobs(data))



    }, [])


    const filteredJobs = alljobs.filter((job) => job.category === 'Web Development');
    console.log("tafsirul data", filteredJobs);

    return (
        <div>

            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/xLLSTGy/digital1.png)' }}>
                <div className="hero-overlay bg-opacity-40"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="text-blue-600/100">
                        <h1 className="mb-5 text-5xl font-bold">Wellcome to Express Skill</h1>
                        <p className="mb-5 text-amber-400">We aim to streamline the job search process, providing a user-friendly interface
                            <br />
                            where employers and job seekers can easily find their perfect match</p>
                        <button className="btn btn-primary">Express Yourself</button>
                    </div>
                </div>
            </div>
            <div >

                <div>
                    <div
                        className="button-container  "
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            gap: "20px",
                            marginTop: "100px",
                            marginBottom: "100px",
                        }}
                    >
                        <button
                            className={` btn btn-primary text-white  radius-30 ${activeButton === 0 ? "active" : ""
                                }`}
                            onClick={() => handleButtonClick(0)}
                        >
                            Web Development
                        </button>
                        <button
                            className={`btn btn-primary text-white radius-30 ${activeButton === 1 ? "active" : ""
                                }`}
                            onClick={() => handleButtonClick(1)}
                        >
                            Graphics Design
                        </button>
                        <button
                            className={`btn btn-primary text-white ${activeButton === 2 ? "active" : ""
                                }`}
                            onClick={() => handleButtonClick(2)}
                        >
                            
                            Digital Marketing
                        </button>



                    </div>
                    <div className="content-container">
                        {activeButton === 0 && (
                            <div>
                                <Services1></Services1>
                            </div>
                        )}
                        {activeButton === 1 && (
                            <div>
                                <Services2></Services2>
                            </div>
                        )}
                        {activeButton === 2 && (
                            <div>
                                <Services3></Services3>
                            </div>
                        )}



                    </div>

                </div>
            </div>


            <div className='bg-gray-200'>
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="text-center mb-20">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">You may want to know</h1>
                            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">WE offers a wide range of features to cater to both job seekers and employers.
                                Here are some key features commonly found in such platforms:</p>
                            <div className="flex mt-6 justify-center">
                                <div className="w-16 h-1 rounded-full bg-yellow-500 inline-flex"></div>
                            </div>
                        </div>
                        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-5 flex-shrink-0">
                                    <img className='w-20 h-20 rounded-full' src={crols1} alt="" />
                                </div>

                                <div className="flex-grow">
                                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Job Posting:</h2>
                                    <p className="leading-relaxed text-base"> Easy job posting process with the ability to specify job details,
                                        requirements, and application procedures.</p>
                                    <a className="mt-3 text-yellow-500 inline-flex items-center">Learn More
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-5 flex-shrink-0">
                                    <img className='w-20 h-20 rounded-full' src={crols2} alt="" />
                                </div>
                                <div className="flex-grow">
                                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Resume Database</h2>
                                    <p className="leading-relaxed text-base"> Access to a database of job seeker profiles and resumes for finding potential candidates.</p>
                                    <a className="mt-3 text-yellow-500 inline-flex items-center">Learn More
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-5 flex-shrink-0">
                                    <img className='w-20 h-20 rounded-full' src={crols3} alt="" />
                                </div>
                                <div className="flex-grow">
                                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Employer Branding</h2>
                                    <p className="leading-relaxed text-base"> Company profiles with detailed information, images, and videos to showcase the workplace culture and values.</p>
                                    <a className="mt-3 text-yellow-500 inline-flex items-center">Learn More
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <button className="flex mx-auto mt-16 text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg">Button</button>
                    </div>
                </section>
            </div>

            <div className='bg-gray-200'>
                <section className="text-gray-600 body-font">

                    <div className="container px-5 py-24 mx-auto">
                        <p className=" text-3xl text-sky-950 text-center font-bold py-5">About  Us</p>
                        <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
                                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                            </svg>
                            <p className="leading-relaxed text-lg">Welcome to [Express Skill], where our passion is [briefly describe the website's core mission, e.g., 'connecting people with their dream jobs']. Founded in [Year of Establishment], we've been dedicated to [mention the purpose or commitment, e.g., 'helping individuals achieve their career goals and assisting employers in finding the perfect talent'].

                                Our team is driven by the belief that [mention your guiding principles, e.g., 'every person deserves a fulfilling career'], and we're here to make that a reality. With [number of years] of experience and a deep understanding of the job market, we're your trusted partner in [mention what makes your platform unique, e.g., 'offering a wide range of job categories and resources to support your journey'].

                                Join us on this exciting journey, and together, let's shape a brighter future in the world of work."

                                Feel free to customize this note to reflect the specific mission and values of your website.





                            </p>
                            <span className="inline-block h-1 w-10 rounded bg-yellow-500 mt-8 mb-6"></span>
                            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
                            <p className="text-gray-500">CEO of EXPRESS-SKILL</p>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    );
};

export default Home;