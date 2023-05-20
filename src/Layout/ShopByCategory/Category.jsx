import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ToysCard from './ToysCard';
import { ThreeDots } from 'react-loader-spinner';
const Category = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        fetch("http://localhost:5000/categories")
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
                                            tab.subcategories.category.map((card)=>(
                                                <ToysCard  key={card.id} card={card}></ToysCard>
                                            ))
                                        }
                                    </div>
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