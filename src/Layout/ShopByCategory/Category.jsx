import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ToysCard from './ToysCard';
import { Rating } from '@smastrom/react-rating';
import { Link } from 'react-router-dom';

const Category = () => {
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        fetch("https://disney-toy-bazar-server.vercel.app/categories")
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div className='my-4'>
            <div>
                <h1 className='text-center text-4xl font-semibold'>Shop By Category</h1>
            </div>
            <div className='flex justify-center my-8 w-full'>
                <Tabs className="text-xl font-semibold text-center p-4"> 
                    <TabList >
                        {categories.map(tab => (
                            <Tab key={tab._id}>{tab.tab_title}</Tab>
                        ))}    
                    </TabList>
                    {
                        categories.map(tab=>(
                            <TabPanel key={tab._id}>
                                <div className="grid grid-cols-3 justify-center gap-4 my-6">
                                    {
                                        tab.subcategories.category.map(card=>(
                                            <ToysCard  key={tab.id} card={card}></ToysCard>
                                        ))
                                    }
                                </div>
                            </TabPanel>
                        ))
                    }
                </Tabs>
            </div>
        </div>
    );
};

export default Category;