import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ToysCard from './ToysCard';
import { ThreeDots } from 'react-loader-spinner';
const Category = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        fetch("https://disney-toy-bazar-server.vercel.app/categories")
        .then(res => res.json())
        .then(data => {
            setCategories(data);
            setLoading(false);
        })
    },[])
    return (
        <div className='my-8'>
            <div>
                <h1 className='text-center text-4xl font-semibold'>Shop By Category</h1>
            </div>
            <div className='flex justify-center my-8 w-full'>
                {
                    loading?
                    <ThreeDots 
                        height="80" 
                        width="80" 
                        radius="9"
                        color="#6a24e2" 
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={true}
                    />:
                    <Tabs className="text-xl font-semibold text-center p-4"> 
                        <TabList  className="border-0 flex justify-center gap-5">
                            {categories.map(category => (
                                <Tab key={category._id} className="border-4 border-violet-300 px-5 py-2 rounded-xl aria-selected:rounded-xl aria-selected:border-violet-700">{category.title}</Tab>
                            ))}    
                        </TabList>
                        {
                            categories.map(category=>(
                                <TabPanel key={category._id}>
                                    {
                                        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 my-4'>
                                            {
                                                category.subcategories.map(subcategory=>(
                                                    <ToysCard key={subcategory.id} subcategory={subcategory} C_id={category._id}></ToysCard>
                                                ))
                                            }
                                        </div>
                                    }
                                </TabPanel>
                            ))
                        }
                    </Tabs>
                }
            </div>
        </div>
    );
};

export default Category;