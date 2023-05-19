import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopByCategory = () => {
    const [activeTab, setActiveTab] = useState('Math Toys');

    const handleTabChange = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div className=' px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 '>
            <Tabs className='text-center'>
                <h1 className='text-2xl font-semibold mb-4'>Shop By Category</h1>
                <div>
                    <div className="flex mb-4">
                        <button
                            className={`mr-4 px-4 py-2 rounded-lg ${activeTab === 'Math Toys' ? 'bg-blue-500 text-white' : 'bg-gray-300'
                                }`}
                            onClick={() => handleTabChange('Math Toys')}
                        >
                            Math Toys
                        </button>
                        <button
                            className={`mr-4 px-4 py-2 rounded-lg ${activeTab === 'Engineering Toys' ? 'bg-blue-500 text-white' : 'bg-gray-300'
                                }`}
                            onClick={() => handleTabChange('Engineering Toys')}
                        >
                            Engineering Toys
                        </button>
                        <button
                            className={`mr-4 px-4 py-2 rounded-lg ${activeTab === 'Language Toys' ? 'bg-blue-500 text-white' : 'bg-gray-300'
                                }`}
                            onClick={() => handleTabChange('Language Toys')}
                        >
                            Language Toys
                        </button>
                        {/* Add more tab buttons as needed */}
                    </div>
                    <div className="bg-gray-100 p-4">
                        {/* Content for the active tab */}
                        {activeTab === 'Math Toys' && (
                            <div>
                                <h2>Math Toys</h2>
                                {/* Add content specific to Math Toys */}
                            </div>
                        )}
                        {activeTab === 'Engineering Toys' && (
                            <div>
                                <h2>Engineering Toys</h2>
                                {/* Add content specific to Engineering Toys */}
                            </div>
                        )}
                        {activeTab === 'Language Toys' && (
                            <div>
                                <h2>Language Toys</h2>
                                {/* Add content specific to Language Toys */}
                            </div>
                        )}
                    </div>
                </div>

                {/* <TabPanel>
                    <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-3'>
                        <div className="card 1/2 bg-base-100 shadow-xl image-full">
                            <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="card 1/2 bg-base-100 shadow-xl image-full">
                            <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>

                <TabPanel>

                </TabPanel>

                <TabPanel>

                </TabPanel> */}
            </Tabs>

        </div>
    );
};

export default ShopByCategory;