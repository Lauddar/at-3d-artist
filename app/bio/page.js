"use client"
import { useState } from 'react';
import { GreenBackground } from '../components/layout-utils/layout-utils';
import { Changa_One } from 'next/font/google'

const changaOne = Changa_One({ subsets: ['latin'], weight: '400' });

export default function Bio() {
    const [navigationColors, setNavigationColors] = useState({
        text: 'text-white',
        border: 'border-white'
      });

      console.log(navigationColors)

    return (
        <>
            <GreenBackground />
            <main className="overflow-auto">
                <div className="frame fixed inset-0 m-df border border-primary rounded-[67px] bg-primary">
                    <div className="w-full flex justify-between px-8 py-12 h-full">
                        <div className="flex-1">
                            <div className="relative w-full aspect-square overflow-hidden">
                                <img src="./profile.jpg" alt="Albert Toll" className="absolute-img-square p-8" />
                            </div>
                        </div>
                        <div className="w-[55vw] overflow-y-scroll">
                            <div className="p-8 text-white flex flex-col">
                                <h1 className={`mb-2 text-8xl pt-12 uppercase leading-0.8 ${changaOne.className}`}>Albert Toll</h1>
                                <h2 className={`mb-10 text-3xl uppercase leading-0.8 ${changaOne.className}`}>3D Artist</h2>
                                <p className="w-full mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor libero eu tellus sodales, id aliquam eros gravida. Nullam euismod ligula nec ligula porta, quis suscipit justo vestibulum. Integer convallis, arcu ac efficitur suscipit, urna dolor bibendum metus, sit amet malesuada turpis magna ac elit. Quisque et varius lorem. Vivamus id lorem sed velit fermentum ullamcorper. Vestibulum euismod tempor tellus, nec bibendum sapien consequat nec.</p>
                                <p className="w-full mb-2">Donec vestibulum lobortis ante, at ultricies purus fringilla et. Duis eget turpis purus. Aliquam vehicula odio id sapien consectetur, nec volutpat eros auctor. Sed congue arcu in sapien blandit tempor. Nam malesuada orci ut odio mollis, at efficitur eros gravida. Ut bibendum nunc sed feugiat consectetur. Nulla rhoncus, ex ac venenatis tristique, libero justo congue velit, vel vehicula nisl magna ac nulla.</p>
                                <p className="w-full mb-2">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin ullamcorper aliquet nisi, vel tincidunt justo ultricies ac. Fusce ac purus et lacus consequat blandit. Phasellus eget semper libero. Nullam eget mi tortor. Etiam nec purus in ligula ultricies ultricies ut eu tellus. Vivamus id orci dui. Sed et faucibus libero.</p>
                                <p className="w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor libero eu tellus sodales, id aliquam eros gravida. Nullam euismod ligula nec ligula porta, quis suscipit justo vestibulum. Integer convallis, arcu ac efficitur suscipit, urna dolor bibendum metus, sit amet malesuada turpis magna ac elit. Quisque et varius lorem. Vivamus id lorem sed velit fermentum ullamcorper. Vestibulum euismod tempor tellus, nec bibendum sapien consequat nec.</p>
                                <div className="mt-8 mb-2">
                                    <a href="/#projects" className={`bg-white text-black font-bold py-2.5 px-4 rounded tracking-wide ${changaOne.className}`}>Mis proyectos</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main >
        </>
    );
};

