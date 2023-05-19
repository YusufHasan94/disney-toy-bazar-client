import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ToysCard from './ToysCard';

const Category = () => {
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/categories")
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
                            <Tab key={tab.id}>{tab.tab_title}</Tab>
                        ))}    
                    </TabList>
                    {
                        categories.map(tab=>(
                            <TabPanel key={tab.id}>
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