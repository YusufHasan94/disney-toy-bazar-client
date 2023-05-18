import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Category = () => {
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/categories")
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    console.log(categories.subcategories);
    return (
        <div className='my-4'>
            <div>
                <h1 className='text-center text-4xl font-semibold'>Shop By Category</h1>
            </div>
            <Tabs className="my-4 mx-8 flex flex-col items-center">
                <TabList className="text-xl font-semibold mb-4">
                    {categories.map(tab => <Tab key={tab.id}>{tab.tab_title}</Tab>)}
                </TabList>
                <TabPanel>

                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Category;