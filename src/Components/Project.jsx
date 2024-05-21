import React from 'react'
import crypto from '../assets/Projects/crypto.png'
import ecommerce from '../assets/Projects/eCommerce.png'
import figma from '../assets/Projects/figma.png'
import jimdhtml from '../assets/Projects/jimdhtml.png'
import panfila from '../assets/Projects/panfila.png'
import weathear from '../assets/Projects/weatherapp.png'

const Project = () => {

    const porjects = [
        {
            id: 1,
            src: crypto,
            link:'https://main--polite-maamoul-f754d3.netlify.app/',
            repo: 'https://github.com/pranitapunde/cryptoweb.git'
        },
        {
            id: 2,
            src: ecommerce,
            link: 'https://main--peaceful-figolla-afb928.netlify.app/',
            repo: 'https://github.com/pranitapunde/ecomm-app.git'
        },
        {
            id: 3,
            src: figma,
            link: 'https://pranitapunde.github.io/gobleui/',
            repo: 'https://github.com/pranitapunde/gobleui.git'
        },
        {
            id: 4,
            src: jimdhtml,
            link: 'https://pranitapunde.github.io/jimdo/',
            repo: 'https://github.com/pranitapunde/jimdo.git'
        },
        {
            id: 5,
            src: panfila,
            link: 'https://pranitapunde.github.io/panfila/',
            repo: 'https://github.com/pranitapunde/panfila.git'
        },
        {
            id: 6,
            src: weathear,
            link: 'https://pranitapunde.github.io/Weather-App/',
            repo: 'https://github.com/pranitapunde/Weather-App.git'
        },
    ];



    return (
        <div
        id='project'
            name="portfolio"
            className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-auto portfolio">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Projects
                    </p>
                    <p className="py-6">Check out some of my work right here</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {porjects.map(({ id, src, link, repo }) => (
                        <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                            <img
                                src={src}
                                alt="projects"
                                className="rounded-md duration-200 hover:scale-105"
                            />
                            <div className="flex items-center justify-center">
                                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={() => window.open(link, '_blank')}>
                                    Demo
                                </button>
                                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={() => window.open(repo, '_blank')}>
                                    GitHub
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Project
