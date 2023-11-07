import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const CategoryTabs = () => {
    // const [selectedCategory, setSelectedCategory] = useState(categories[0]);


    const [webDevelopmentJobs, setWebDevelopmentJobs] = useState([]);
    const [digitalMarketingJobs, setDigitalMarketingJobs] = useState([]);
    const [graphicsDesignJobs, setGraphicsDesignJobs] = useState([]);

    
    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab>Web Development</Tab>
                    <Tab>Digital Marketing</Tab>
                    <Tab>Graphics Design</Tab>
                </TabList>

                <TabPanel>
                    {webDevelopmentJobs.map((job, index) => (
                        <JobCard key={index} title={job.title} description={job.description} />
                    ))}
                </TabPanel>

                <TabPanel>
                    {digitalMarketingJobs.map((job, index) => (
                        <JobCard key={index} title={job.title} description={job.description} />
                    ))}
                </TabPanel>

                <TabPanel>
                    {graphicsDesignJobs.map((job, index) => (
                        <JobCard key={index} title={job.title} description={job.description} />
                    ))}
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default CategoryTabs;