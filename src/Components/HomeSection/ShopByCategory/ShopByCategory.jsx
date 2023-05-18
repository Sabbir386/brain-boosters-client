import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopByCategory = () => {
    return (
        <div className=' px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 '>
            <Tabs className='text-center'>
                <TabList>
                    <Tab > Math Toys</Tab>
                    <Tab >Language Toys</Tab>
                    <Tab > Engineering toys</Tab>
                </TabList>

                <TabPanel>
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

                </TabPanel>
            </Tabs>

        </div>
    );
};

export default ShopByCategory;