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
    const {id, tab_title, subcategories} = categories;
    return (
        <div className='my-4'>
            <div>
                <h1 className='text-center text-4xl font-semibold'>Shop By Category</h1>
            </div>
            <div className='flex justify-center my-8'>
                <Tabs className="text-xl font-semibold"> 
                    <TabList>
                        {categories.map(category => (
                            <Tab>{category.tab_title}</Tab>
                        ))}    
                    </TabList>            
                    {categories.map(category =>(
                        <TabPanel>
                            <Tabs>
                                <TabList>
                                    {category.subcategories.map(subcategory=>(
                                        <Tab>{subcategory.title}</Tab>
                                    ))}
                                </TabList>
                                {category.subcategories.map(subcategory=>(
                                    <TabPanel>
                                        <div className="grid grid-cols-2 gap-4 my-4">
                                            {subcategory.cards.map(card=> <ToysCard card={card}></ToysCard>)}
                                        </div>
                                    </TabPanel>
                                ))}
                            </Tabs>
                        </TabPanel>
                    ))}
                </Tabs>
            </div>
        </div>
    );
};

export default Category;