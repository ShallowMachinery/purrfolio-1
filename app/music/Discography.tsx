import Credits from '../components/Credits';
import React from 'react';

const Discography = () => {
    return (
        <section id="discography" className="w-full mx-5 flex flex-col bg-gray-800 text-gray-100 relative">
            <div className="flex justify-start">
                <h2 className="text-3xl font-bold mb-4 mx-10 pt-10">Discography</h2>
            </div>
            <section id="discographyAlbums" className="pt-7 pb-0 md:pb-5 mx-10 md:mx-20">
                <div className="flex flex-col w-full md:gap-5">
                    <div id="18to21" className="group flex relative w-full h-32 md:h-48 rounded-lg shadow-lg mb-10 md:mb-0 md:mr-10 bg-gray-700 transition duration-300 ease-in-out items-center hover:bg-gray-500">
                        <a href="/album/18to21">
                            <img src="https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/37/d9/e2/37d9e26b-74e0-e2bf-16be-a8f951061bc9/5063535996090_cover.jpg/1000x1000.jpg" alt="'18 to 21 cover" className="ml-5 w-24 h-24 md:w-40 md:h-40 object-cover rounded-lg shadow-lg" />
                        </a>
                        <div className="flex flex-col ml-8 md:ml-5 w-auto">
                            <a href="/album/18to21"><span className="font-bold text-lg md:text-2xl mb-1">'18 to '21</span></a>
                            <span className="hidden md:block md:text-base"><b>Release date:</b> June 21, 2024 (10 tracks)</span>
                        </div>
                    </div>
                    <div id="sasamahankita" className="group flex relative w-full h-32 md:h-48 rounded-lg shadow-lg mb-10 md:mb-0 md:mr-10 bg-gray-700 transition duration-300 ease-in-out items-center hover:bg-gray-500">
                        <a href="/album/sasamahankita">
                            <img src="https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/ed/f0/31/edf0314e-0896-4a84-558b-0015c19b28cc/198009754441.png/1000x1000.png" alt="Sasamahan Kita cover" className="ml-5 w-24 h-24 md:w-40 md:h-40 object-cover rounded-lg shadow-lg" />
                        </a>
                        <div className="flex flex-col ml-8 md:ml-5 w-auto">
                            <a href="/album/sasamahankita"><span className="font-bold text-lg md:text-2xl mb-1">Sasamahan Kita</span></a>
                            <span className="hidden md:block md:text-base"><b>Release date:</b> February 23, 2024 (2 tracks)</span>
                        </div>
                    </div>
                    <div id="uniberso" className="group flex relative w-full h-32 md:h-48 rounded-lg shadow-lg mb-10 md:mb-0 md:mr-10 bg-gray-700 transition duration-300 ease-in-out items-center hover:bg-gray-500">
                        <a href="/album/uniberso">
                            <img src="https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/36/e8/d4/36e8d4cf-6240-9262-3dee-0f0ea992d2e4/198001120138.png/1000x1000.png" alt="Uniberso cover" className="ml-5 w-24 h-24 md:w-40 md:h-40 object-cover rounded-lg shadow-lg" />
                        </a>
                        <div className="flex flex-col ml-8 md:ml-5 w-auto">
                            <a href="/album/uniberso"><span className="font-bold text-lg md:text-2xl mb-1">Uniberso</span></a>
                            <span className="hidden md:block md:text-base"><b>Release date:</b> May 9, 2021 (1 track)</span>
                        </div>
                    </div>
                </div>
            </section>
            <Credits />
        </section>
    );
};

export default Discography;
