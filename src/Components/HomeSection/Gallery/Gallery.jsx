import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';
import useTitle from '../../hooks/useTitle';
const Gallery = () => {
    useEffect(() => {
        Aos.init({ duration: 3000 })
    }, [])

    return (

        <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div className="-m-1 flex flex-wrap md:-m-2">
                <div className="flex w-1/2 flex-wrap">
                    <div className="w-1/2 p-1 md:p-2" data-aos='fade-right'>
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src="https://img.freepik.com/premium-vector/girl-counting-numbers-board_1308-14794.jpg?w=740" />
                    </div>
                    <div className="w-1/2 p-1 md:p-2" data-aos='fade-up'>
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src="https://img.freepik.com/free-photo/kid-with-colorful-alphabets_53876-165173.jpg?w=740&t=st=1684668517~exp=1684669117~hmac=079e76508c4674229b469421e7c51c659a35c3d1c2159acde3ab5d0c91daf084" />
                    </div>
                    <div className="w-full p-1 md:p-2" data-aos='fade-left'>
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src="https://img.freepik.com/free-vector/english-prepositions-collection-with-dog_52683-53983.jpg?w=740&t=st=1684669358~exp=1684669958~hmac=70677a1b3b3b8e16f1039ff220a26e869e246e85304d7de17502c3172ffbe8c7" />
                    </div>
                </div>
                <div className="flex w-1/2 flex-wrap">
                    <div className="w-full p-1 md:p-2" data-aos='fade-right'>
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src="https://img.freepik.com/free-vector/children-fixing-robot-together-room-scene_1308-80898.jpg?w=740&t=st=1684668683~exp=1684669283~hmac=304f389f2c1616b9bc5389614ebaf567c291f2a81f9429bd899dd5cb6da049c1" />
                    </div>
                    <div className="w-1/2 p-1 md:p-2" data-aos='fade-left'>
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src="https://img.freepik.com/premium-photo/alphabet-learning-blocks-toy-train-isolated-white-background-3d-rendering_519469-3514.jpg?w=826" />
                    </div>
                    <div className="w-1/2 p-1 md:p-2" data-aos='fade-right'>
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src="https://img.freepik.com/free-vector/boy-playing-with-abacus_1308-26117.jpg?w=740&t=st=1684668425~exp=1684669025~hmac=1be3b1c6bc23a664ec4935ac9ee04eac73f98ab72514d3098247c8911a70ea86" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;