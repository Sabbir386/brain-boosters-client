import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Marquee from "react-fast-marquee";
import SingleCategoryToys from './SingleCategoryToys';

const ShopByCategory = () => {
    const [subCategoryToys, setSubCategoryToys] = useState([]);
    const [activeTab, setActiveTab] = useState('MathToys');

    const handleTabChange = (tabName) => {
        setActiveTab(tabName);
    };
    useEffect(() => {
        fetch(`https://brain-boosters-server-side.vercel.app/allToys/${activeTab}`)
            .then(res => res.json())
            .then(result => {
                // console.log(result);
                setSubCategoryToys(result);
            })

    }, [activeTab])

    return (
        <div className=' px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 '>
            <Tabs className='text-center'>
                <h1 className='text-2xl font-semibold mb-4'>Shop By Category</h1>
                <div>
                    <div className="flex mb-4">
                        <button
                            className={`mr-4 px-4 py-2 rounded-lg ${activeTab === 'MathToys' ? 'bg-blue-500 text-white' : 'bg-gray-300'
                                }`}
                            onClick={() => handleTabChange('MathToys')}
                        >
                            Math Toys
                        </button>
                        <button
                            className={`mr-4 px-4 py-2 rounded-lg ${activeTab === 'EngineeringToys' ? 'bg-blue-500 text-white' : 'bg-gray-300'
                                }`}
                            onClick={() => handleTabChange('EngineeringToys')}
                        >
                            Engineering Toys
                        </button>
                        <button
                            className={`mr-4 px-4 py-2 rounded-lg ${activeTab === 'LanguageToys' ? 'bg-blue-500 text-white' : 'bg-gray-300'
                                }`}
                            onClick={() => handleTabChange('LanguageToys')}
                        >
                            Language Toys
                        </button>
                        {/* Add more tab buttons as needed */}
                    </div>
                    <div className="bg-gray-100 p-4">
                        {/* Content for the active tab */}
                        {activeTab === 'MathToys' && (
                            <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-3' >

                                {
                                    subCategoryToys ? subCategoryToys.map((toys, index) => <SingleCategoryToys
                                        toys={toys}
                                        key={index}

                                    ></SingleCategoryToys>) :
                                        <Marquee className='text-cyan-500' speed={150}>
                                            <span className='text-red-500 mr-2'>Notice :</span>Math Toys will be Show when User Post Toys
                                        </Marquee>
                                }

                            </div>
                        )}
                        {activeTab === 'EngineeringToys' && (
                            <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-3' >

                                {
                                    subCategoryToys ? subCategoryToys.map((toys, index) => <SingleCategoryToys
                                        toys={toys}
                                        key={index}

                                    ></SingleCategoryToys>) :
                                        <Marquee className='text-cyan-500' speed={150}>
                                            <span className='text-red-500 mr-2'>Notice :</span>Math Toys will be Show when User Post Toys
                                        </Marquee>
                                }

                            </div>
                        )}
                        {activeTab === 'LanguageToys' && (
                            <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-4' >

                                {
                                    subCategoryToys ? subCategoryToys.map((toys, index) => <SingleCategoryToys
                                        toys={toys}
                                        key={index}

                                    ></SingleCategoryToys>) :
                                        <Marquee className='text-cyan-500' speed={150}>
                                            <span className='text-red-500 mr-2'>Notice :</span>Math Toys will be Show when User Post Toys
                                        </Marquee>
                                }

                            </div>
                        )}
                    </div>
                </div>
            </Tabs>

        </div>
    );
};

export default ShopByCategory;