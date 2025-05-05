// components/ProjectsSlider.tsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './App.css';

const projects = [
    {
        title: 'ReLeaf Fashion - Web',
        description:
            'Releaf Fashion — A sustainable fashion initiative focused on promoting eco-friendly and ethically produced clothing. This project showcases a responsive front-end website design, ensuring smooth and user-friendly experiences across all devices — from desktops to smartphones. 🌿✨',
        date: 'Feb 2025 - Mar 2025',
        tags: ['React', 'TypeScript', 'Tailwind CSS'],
        image: '/ReLeaf.png',
        linkgithub: 'https://github.com/NataniaReginaCS/releaf',
    },
    {
        title: 'BreadTime - Web',
        description:
            'BreadTime is a website I designed from scratch using Figma, turning my ideas into a clean and user-friendly interface. Now, I’m bringing it to life using only HTML and CSS, focusing on a simple, responsive, and visually appealing design. This project reflects my creativity and attention to detail in front-end web development! 😊✨',
        date: 'Feb 2025 - Feb 2025',
        tags: ['CSS', 'HTML', 'Front-End Design'],
        image: '/breadtime.png',
        linkgithub: 'https://github.com/NataniaReginaCS/BreadTime-Web',
    },
    {
        title: 'GameCatalog - App',
        description:
            'GameCatalog is a mobile application that provides information about popular games, promotions, events, news, and details related to the games and news. The application has an authentication system for registration and login, as well as a profile feature for editing user information and logging out locally.',
        date: 'Dec 2024 - Dec 2024',
        tags: ['Flutter', 'Dart', 'SQLite'],
        image: '/gamecatalog.jpg',
        linkgithub: 'https://github.com/NataniaReginaCS/GameCatalog-App',
    },
    {
        title: 'AtmaCinema - App',
        description:
            'AtmaCinema is a Flutter-based mobile application that provides information about movies in theaters, ticket purchasing features, and personalized experiences for users. This application uses a backend API to manage data in real-time.',
        date: 'Sep 2024 - Dec 2024',
        tags: ['Flutter', 'Dart', 'Laravel', 'MySQL', 'Multi-platform Development'],
        image: '/AtmaCinema.png',
        linkgithub: 'https://github.com/NataniaReginaCS/AtmaCinema-app',
    },
    {
        title: 'AtmaLaundry - Web',
        description:
            'Atma Laundry is a web application that provides information about Atma Laundry services, including details about services, location, reviews, and more. This platform allows both clients and admins to log in, manage and create laundry orders, as well as handle transactions such as service types, categories, discounts, and other related features.',
        date: 'Sep 2024 - Dec 2024',
        tags: ['JavaScript', 'CSS', 'Laravel', 'MySQL', 'HTML'],
        image: '/AtmaLaundry.png',
        linkgithub: 'https://github.com/NataniaReginaCS/AtmaLaundry-Web',
    },
];

const ProjectsSlider = () => {
    return (
        <section id="projects" className="px-4 py-12 mx-auto md:mx-10 w-screen mt-15 font-mono relative">
        <div className="flex items-center">
            <p className='text-4xl mb-9 font-[tourney] md:text-6xl'><span className='text-[#C778DD]'>#</span>projects</p>
            <span className="flex-grow h-px bg-[#C778DD] ml-4 mb-8"></span>
        </div>            
            <Swiper
                modules={[Pagination, Autoplay]}
                slidesPerView={1}
                pagination={{ clickable: true}}
                autoplay={{ delay: 6000 }}
                loop
                className='max-w-6xl md:max-w-7xl'
            >
                {projects.map((project, index) => (
                    <SwiperSlide key={index}>
                        <div className="rounded-xl shadow-lg p-6 h-full flex flex-col md:flex-row md:gap-10 justify-between">
                            <img src='/BG.png' alt='bg' className='absolute -top-3 -left-1.5' />
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 md:h-100 object-cover md:object-fill rounded-lg mb-4 z-10"
                            style={{ borderRadius: '10px' }}
                            />
                            <div className='md:flex-col md:justify-center md:items-center'>
                                <p className="text-2xl font-semibold mb-2 text-[#C778DD] md:text-3xl">{project.title}</p>
                                <p className="text-white mb-4 text-justify md:text-xl">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tags) => (
                                        <span
                                            key={tags}
                                            className="bg-[#928A97] text-sm px-2 py-1 rounded md:text-lg"
                                        >
                                            {tags}
                                        </span>
                                    ))}
                                </div>
                                {project.linkgithub && (
                                    <div className="mb-4 border p-2 mt-4 md:mt-10 md:text-lg  w-2/5 mx-auto text-center rounded-lg bg-[#282C33] hover:border-[#C778DD] transition duration-300 ease-in-out">
                                        <a
                                            href={project.linkgithub}
                                            target="_blank"
                                            className='hover:text-[#C778DD] transition duration-300 ease-in-out'
                                        >
                                            <span className='text-white font-normal font-mono hover:text-[#C778DD] transition duration-300 ease-in-out'>Live Code</span>
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default ProjectsSlider;
