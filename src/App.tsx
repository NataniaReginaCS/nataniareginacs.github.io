import './App.css';
import { IoMailOpen } from 'react-icons/io5';
import { BsGithub } from 'react-icons/bs';
import { LiaInstagram } from 'react-icons/lia';
import { BiLogoLinkedin } from 'react-icons/bi';
import ProjectsSlider from './projects';

function App() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="w-screen overflow-x-hidden">
      <nav className="fixed top-0 left-0 md:left-100 w-full bg-[#282C33] shadow-lg z-100">
          <div className='flex font-mono'>
              <ul className='flex space-x-5 flex-wrap justify-center py-2 md:mx-10 md:text-xl md:space-x-10'>
                  <li><a href="#"><span className='text-[#C778DD]'>#</span><span className='text-[#9A9A9A] hover:text-white'>home</span></a></li>
                  <li><a href="#projects"><span className='text-[#C778DD]'>#</span><span className='text-[#9A9A9A] hover:text-white'>projects</span></a></li>
                  <li><a href="#skills"><span className='text-[#C778DD]'>#</span><span className='text-[#9A9A9A] hover:text-white'>skills</span></a></li>
                  <li><a href="#about-me"><span className='text-[#C778DD]'>#</span><span className='text-[#9A9A9A] hover:text-white'>about-me</span></a></li>
                  <li className='pt-2 md:pt-0'><a href="#experience"><span className='text-[#C778DD]'>#</span><span className='text-[#9A9A9A] hover:text-white'>experience</span></a></li>
                  <li className='pt-2 md:pt-0'><a href="#contacts"><span className='text-[#C778DD]'>#</span><span className='text-[#9A9A9A] hover:text-white'>contact</span></a></li>
              </ul>
          </div>
      </nav>
      <div className='flex flex-col md:flex-row md:mt-20 items-center justify-center px-4 bg-[#282C33] '>
        <div className='flex flex-col mt-30 md:ml-15 '>
        <p className="font-[tourney] text-4xl md:text-6xl">
          {Array.from("NATANIA REGINA").map((char, index) => {
            const isRegina = index >= 8 && index <= 13; 
            return (
              <span
                key={index}
                className={`bounce ${isRegina ? "text-[#C778DD]" : ""}`}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            );
          })}
        </p>
        <p className="font-[tourney] text-4xl md:text-6xl">
          {Array.from("CLARABELLA SERAFINA").map((char, index) => {
            if (index === 10 && window.innerWidth <= 768) return <br key="break" />; 
            return (
              <span key={index} className="bounce">
                {char === " " ? "\u00A0" : char}
              </span>
            );
          })}
        </p>
          <p className='font-mono text-2xl md:text-3xl text-[#9A9A9A] mt-2'>Passionate about web + mobile development</p>
          <div className='flex flex-row mt-2'>
              <div className='bg-[#928A97] rounded-full hover:bg-[#c778dd]'><a href='mailto:nataniaregina97@gmail.com'><IoMailOpen className='text-[#282C33] text-2xl mx-1 my-1 md:text-3xl md:mx-3 md:my-3' /></a></div>
              <div className='bg-[#928A97] rounded-full mx-3 md:mx-5 hover:bg-[#c778dd]'><a href='https://github.com/NataniaReginaCS'><BsGithub className='text-[#282C33] text-2xl mx-1 my-1 md:text-3xl md:mx-3 md:my-3' /></a></div>
              <div className='bg-[#928A97] rounded-full hover:bg-[#c778dd]'><a href='https://www.linkedin.com/in/natania-regina-clarabella-serafina/'><BiLogoLinkedin className='text-[#282C33] text-2xl mx-1 my-1 md:text-3xl md:mx-3 md:my-3' /></a></div>
              <div className='bg-[#928A97] rounded-full mx-3 md:mx-5 hover:bg-[#c778dd]'><a href='https://www.instagram.com/nataniareginaa/'><LiaInstagram className='text-[#282C33] text-2xl mx-1 my-1 md:text-3xl md:mx-3 md:my-3' /></a></div>
          </div>
        </div>
        <img src='/first.png' alt='hi its me regina' className='md:ml-20' />
      </div>
      <figure className="relative border border-[#ABB2BF] p-6 font-mono mx-4 my-5 md:mr-20 md:ml-25">
        <div className="absolute -top-3 left-5 text-4xl text-[#9A9A9A]">“</div>
          <blockquote className="text-md text-center md:text-2xl hover:animate-bounce">Even at zero ೀ’clock, hope still whispers: tomorrow awaits.</blockquote>
          <figcaption className=" mt-2 text-right text-sm italic text-[#9A9A9A] md:text-lg">
            @nataniareginaa</figcaption>
          <div className="absolute -bottom-7 right-5 text-4xl text-[#9A9A9A]">”</div>
      </figure>
      <ProjectsSlider />
      <section id='skills' className='relative px-4  mt-4 mb-10 mx-auto w-screen '>
        <div className="flex items-center">
          <p className='text-4xl mb-9 font-[tourney] md:text-6xl md:ml-12'><span className='text-[#C778DD]'>#</span>skills + tools</p>
          <span className="flex-grow h-px bg-[#C778DD] ml-4 mb-8"></span>
        </div>        
        <div className='grid grid-cols-5 mt-5 gap-3 md:gap-y-16 md:grid-cols-9 md:ml-15'>
          <div className='flex flex-col items-center'>
            <div className='border border-amber-300 p-4 rounded-2xl transition duration-300 zoom-in'>
              <img src='skills/flutter.svg' alt='flutter' className='w-8 h-8 mx-auto md:w-10 md:h-10' />
            </div>
            <p className='mt-2 text-center text-md text-[#9A9A9A] md:text-xl'>Flutter</p>
          </div>
          <div className='flex flex-col items-center'>
            <div className='border border-amber-300 p-4 rounded-2xl transition duration-300 zoom-in'>
              <img src='skills/css.svg' alt='flutter' className='w-8 h-8 mx-auto md:w-10 md:h-10' />
            </div>
            <p className='mt-2 text-center text-md text-[#9A9A9A] md:text-xl'>CSS</p>
          </div>
          <div className='flex flex-col items-center'>
            <div className='border border-amber-300 p-4 rounded-2xl transition duration-300 zoom-in'>
              <img src='skills/c.png' alt='flutter' className='w-8 h-8 mx-auto md:w-10 md:h-10' />
            </div>
            <p className='mt-2 text-center text-md text-[#9A9A9A] md:text-xl'>C</p>
          </div>
          <div className='flex flex-col items-center'>
            <div className='border border-amber-300 p-4 rounded-2xl transition duration-300 zoom-in'>
              <img src='skills/bootstrap.svg' alt='flutter' className='w-8 h-8 mx-auto md:w-10 md:h-10' />
            </div>
            <p className='mt-2 text-center text-md text-[#9A9A9A] md:text-xl'>Bootstrap</p>
          </div>
          <div className='flex flex-col items-center'>
            <div className='border border-amber-300 p-4 rounded-2xl transition duration-300 zoom-in'>
              <img src='skills/dart.svg' alt='flutter' className='w-8 h-8 mx-auto md:w-10 md:h-10' />
            </div>
            <p className='mt-2 text-center text-md text-[#9A9A9A] md:text-xl'>Dart</p>
          </div>
          <div className='flex flex-col items-center'>
            <div className='border border-amber-300 p-4 rounded-2xl transition duration-300 zoom-in'>
              <img src='skills/figma.svg' alt='flutter' className='w-8 h-8 mx-auto md:w-10 md:h-10' />
            </div>
            <p className='mt-2 text-center text-md text-[#9A9A9A] md:text-xl'>Figma</p>
          </div>
          <div className='flex flex-col items-center'>
            <div className='border border-amber-300 p-4 rounded-2xl transition duration-300 zoom-in'>
              <img src='skills/github.svg' alt='flutter' className='w-8 h-8 mx-auto md:w-10 md:h-10' />
            </div>
            <p className='mt-2 text-center text-md text-[#9A9A9A] md:text-xl'>Github</p>
          </div>
          <div className='flex flex-col items-center'>
            <div className='border border-amber-300 p-4 rounded-2xl transition duration-300 zoom-in'>
              <img src='skills/html.svg' alt='flutter' className='w-8 h-8 mx-auto md:w-10 md:h-10' />
            </div>
            <p className='mt-2 text-center text-md text-[#9A9A9A] md:text-xl'>HTML</p>
          </div>
          <div className='flex flex-col items-center'>
            <div className='border border-amber-300 p-4 rounded-2xl transition duration-300 zoom-in'>
              <img src='skills/java.svg' alt='flutter' className='w-8 h-8 mx-auto md:w-10 md:h-10' />
            </div>
            <p className='mt-2 text-center text-md text-[#9A9A9A] md:text-xl'>Java</p>
          </div>
          <div className='flex flex-col items-center'>
            <div className='border border-amber-300 p-4 rounded-2xl transition duration-300 zoom-in'>
              <img src='skills/laravel.svg' alt='flutter' className='w-8 h-8 mx-auto md:w-10 md:h-10' />
            </div>
            <p className='mt-2 text-center text-md text-[#9A9A9A] md:text-xl'>Laravel</p>
          </div>
          <div className='flex flex-col items-center'>
            <div className='border border-amber-300 p-4 rounded-2xl transition duration-300 zoom-in'>
              <img src='skills/mysql.svg' alt='flutter' className='w-8 h-8 mx-auto md:w-10 md:h-10' />
            </div>
            <p className='mt-2 text-center text-md text-[#9A9A9A] md:text-xl'>MySQL</p>
          </div>
          <div className='flex flex-col items-center'>
            <div className='border border-amber-300 p-4 rounded-2xl transition duration-300 zoom-in'>
              <img src='skills/php.svg' alt='flutter' className='w-8 h-8 mx-auto md:w-10 md:h-10' />
            </div>
            <p className='mt-2 text-center text-md text-[#9A9A9A] md:text-xl'>PHP</p>
          </div>
          <div className='flex flex-col items-center'>
            <div className='border border-amber-300 p-4 rounded-2xl transition duration-300 zoom-in'>
              <img src='skills/react.svg' alt='flutter' className='w-8 h-8 mx-auto md:w-10 md:h-10' />
            </div>
            <p className='mt-2 text-center text-md text-[#9A9A9A] md:text-xl'>React</p>
          </div>
          <div className='flex flex-col items-center'>
            <div className='border border-amber-300 p-4 rounded-2xl transition duration-300 zoom-in'>
              <img src='skills/tailwind.svg' alt='flutter' className='w-8 h-8 mx-auto md:w-10 md:h-10' />
            </div>
            <p className='mt-2 text-center text-md text-[#9A9A9A] md:text-xl'>Tailwind</p>
          </div>
          <div className='flex flex-col items-center'>
            <div className='border border-amber-300 p-4 rounded-2xl transition duration-300 zoom-in'>
              <img src='skills/typescript.svg' alt='flutter' className='w-8 h-8 mx-auto md:w-10 md:h-10' />
            </div>
            <p className='mt-2 text-center text-md text-[#9A9A9A] md:text-xl'>Typescript</p>
          </div>
        </div>
      </section>
      <section id='about-me' className='px-4  mt-20 mb-10 mx-auto w-screen'>
        <div className="flex items-center">
          <p className='text-4xl mb-9 font-[tourney] md:text-6xl md:ml-12'><span className='text-[#C778DD]'>#</span>about-me </p>
          <span className="flex-grow h-px bg-[#C778DD] ml-4 mb-8"></span>
        </div>
        <div className='flex flex-col md:flex-row md:ml-25'>
          <div className='flex flex-col font-mono text text-lg'>
            <p className='text-md text-[#ABB2BF] md:text-2xl'>Hi, I’m Regina!</p>
            <p className='text-md text-[#ABB2BF] mt-5 md:text-2xl'>I’m an Informatics student at UAJY passionate about web and mobile development. I’m currently sharpening my skills in Java, Laravel, and Flutter while working on projects like GameCatalog and BreadTime.</p>
            <p className='text-md text-[#ABB2BF] mt-5 md:text-2xl'>With experience in mentoring, student organizations, and journal management, I enjoy building meaningful, user-focused digital products and learning new technologies along the way. Outside of tech, I love games, movies, and can fall asleep almost anywhere!</p>
            <p className='text-md text-[#ABB2BF] mt-5 md:text-2xl'>I am a quick learner and enjoy taking on new challenges. I am also a team player and enjoy collaborating with others to create innovative solutions.</p>
          </div>
          <img src="/me.png" alt="me" className="mt-5" />
        </div>
      </section>
      <section id='education' className='px-4  mt-20 mb-10 mx-auto w-screen'>
        <div className="flex items-center">
          <p className='text-4xl mb-9 font-[tourney] md:text-6xl md:ml-12'><span className='text-[#C778DD]'>#</span>education</p>
          <span className="flex-grow h-px bg-[#C778DD] ml-4 mb-8"></span>
        </div>
        <div className="flex flex-col md:flex-row ">
          <div className='flex flex-col font-mono text-lg md:ml-25 md:w-2/5 transition duration-300 zoom-in'>
            <p className='text-[#ABB2BF] border border-[#ABB2BF] p-2 md:text-xl'>2019 - 2022</p>
            <div className='flex flex-col border-t-0 border border-[#ABB2BF] p-2'>
              <p className='text-xl md:text-2xl'>SMA Pangudi Luhur Yogyakarta</p>
              <p className='text-[#ABB2BF] text-lg md:text-xl'>Average National Examination score: 89.22 (2019)</p>
            </div>
          </div>
          <div className='flex flex-col font-mono text-lg mt-10 md:mt-0 md:ml-25 md:w-2/5 transition duration-300 zoom-in'>
            <p className='text-[#ABB2BF] border border-[#ABB2BF] p-2 md:text-xl'>2022 - Now</p>
            <div className='flex flex-col border-t-0 border border-[#ABB2BF] p-2'>
              <p className='text-xl md:text-2xl'>Universitas Atma Jaya Yogyakarta</p>
              <p className='text-[#ABB2BF] text-lg md:text-xl'>Latest GPA Semester 5: 4.00</p>
            </div>
          </div>
        </div>
      </section>
      <section id='experience' className='px-4  mt-20 mb-10 mx-auto w-screen'>
        <div className="flex items-center">
          <p className='text-4xl mb-9 font-[tourney] md:text-6xl md:ml-12'><span className='text-[#C778DD]'>#</span>experience</p>
          <span className="flex-grow h-px bg-[#C778DD] ml-4 mb-8"></span>
        </div>
        <div className='flex flex-col font-mono text-lg md:ml-25'>
          <div className='flex flex-col md:flex-row border border-[#ABB2BF] p-2 md:w-3/4 transition duration-300 zoom-in'>
              <div className="border flex self-center rounded-2xl w-25 md:w-25 p-2 h-25 mr-3 md:mx-8 my-1 ">
                <img src='/uajy.png' alt='himaforka' className='object-fit md:self-center md:p-2' />
              </div>
              <div className="flex flex-col">
                <p className='text-xl text-center font-semibold md:text-2xl md:text-left'>Open Journal System (OJS) JBI</p>
                <p className='text-lg mt-2 md:text-xl'><span className='font-semibold text-xl'>Role:</span> Students Staff</p>
                <p className='text-lg'><span className='font-semibold text-xl'>Duration:</span> Jan'24 - Now</p>
              </div>
          </div>
          <div className='flex flex-col md:flex-row border border-[#ABB2BF] p-2 mt-7 md:w-3/4 transition duration-300 zoom-in'>
            <div className="border flex self-center rounded-2xl w-25 p-2 h-25 mr-3 my-1 md:w-25 md:mx-8">
              <img src='/himaforka.png' alt='himaforka' className='object-cover' />
            </div>
            <div className="flex flex-col">
              <p className='text-xl text-center font-semibold md:text-2xl md:text-left'>Himpunan Mahasiswa Informatika (HIMAFORKA) UAJY</p>
              <p className='text-lg mt-2 md:text-xl'><span className='font-semibold'>Role:</span> Secretary</p>
              <p className='text-lg md:text-xl'><span className='font-semibold'>Duration:</span> Oct'23 - Oct'24</p>
            </div>
          </div>
          <div className='flex flex-col md:flex-row border border-[#ABB2BF] p-2 mt-7 md:w-3/4 transition duration-300 zoom-in'>
            <div className="border flex self-center rounded-2xl w-25 p-2 h-25 mr-3 my-1 md:w-25 md:mx-8">
              <img src='/himaforka.png' alt='himaforka' className='object-cover' />
            </div>
            <div className="flex flex-col">
              <p className='text-xl text-center font-semibold md:text-2xl md:text-left'>Himpunan Mahasiswa Informatika (HIMAFORKA) UAJY</p>
              <p className='text-lg mt-2 md:text-xl'><span className='font-semibold'>Role:</span> Member</p>
              <p className='text-lg md:text-xl'><span className='font-semibold'>Duration:</span> Sept'22 - Sept'23</p>
            </div>
          </div>
          <div className='flex flex-col md:flex-row border border-[#ABB2BF] p-2 mt-7 md:w-3/4 transition duration-300 zoom-in'>
            <div className="border flex self-center rounded-2xl w-25 p-2 h-25 mr-3 my-1 md:w-25 md:mx-8">
              <img src='/ksp.png' alt='ksp' className='object-fit' />
            </div>
            <div className="flex flex-col">
              <p className='text-xl text-center font-semibold md:text-2xl md:text-left'>Kelompok Studi Pemrograman (KSP) UAJY</p>
              <p className='text-lg mt-2 md:text-xl'><span className='font-semibold'>Role:</span> Mentor C</p>
              <p className='text-lg md:text-xl'><span className='font-semibold'>Duration:</span> Aug'22 - May'24</p>
            </div>
          </div>
          <div className='flex flex-col md:flex-row  border border-[#ABB2BF] p-2 mt-7 md:w-3/4 transition duration-300 zoom-in'>
            <div className="border flex self-center rounded-2xl w-25 p-2 h-25 mr-3 my-1 md:w-25 md:mx-8">
              <img src='/ksp.png' alt='ksp' className='object-fit' />
            </div>
            <div className="flex flex-col">
              <p className='text-xl text-center font-semibold md:text-2xl md:text-left'>Kelompok Studi Pemrograman (KSP) UAJY</p>
              <p className='text-lg mt-2 md:text-xl'><span className='font-semibold'>Role:</span> Java Study Group Member</p>
              <p className='text-lg md:text-xl'><span className='font-semibold'>Duration:</span> Feb'24 - Jul'24</p>
            </div>
          </div>
          <div className='flex flex-col md:flex-row border border-[#ABB2BF] p-2 mt-7 md:w-3/4 transition duration-300 zoom-in'>
            <div className="border flex self-center rounded-2xl w-25 p-2 h-25 mr-3 my-1 md:w-25 md:mx-8">
              <img src='/ksp.png' alt='ksp' className='object-fit' />
            </div>
            <div className="flex flex-col">
              <p className='text-xl text-center font-semibold md:text-2xl md:text-left'>Kelompok Studi Pemrograman (KSP) UAJY</p>
              <p className='text-lg mt-2 md:text-xl'><span className='font-semibold'>Role:</span> Participants of PNC</p>
              <p className='text-lg md:text-xl'><span className='font-semibold'>Duration:</span> Feb'23 - Jul'23</p>
            </div>
          </div>
          <div className='flex flex-col md:flex-row border border-[#ABB2BF] p-2 mt-7 md:w-3/4 transition duration-300 zoom-in'>
            <div className="border flex self-center rounded-2xl w-25 p-2 h-25 mr-3 my-1 md:w-25 md:mx-8">
              <img src='/image.jpg' alt='image' className='object-fit rounded-full' />
            </div>            
            <div className="flex flex-col">
              <p className='text-xl text-center font-semibold md:text-2xl md:text-left'>IMAGE FTI UAJY</p>
              <p className='text-lg mt-2 md:text-xl'><span className='font-semibold'>Role:</span> Journalist</p>
              <p className='text-lg md:text-xl'><span className='font-semibold'>Duration:</span> Sep'22 - Aug'23</p>
            </div>
          </div>
          <div className='flex flex-col border md:flex-row border-[#ABB2BF] p-2 mt-7 md:w-3/4 transition duration-300 zoom-in'>
            <div className="border flex self-center rounded-2xl w-25 p-2 h-25 mr-3 my-1 md:w-25 md:mx-8">
              <img src='/image.jpg' alt='image' className='object-fit rounded-full' />
            </div>
            <div className="flex flex-col">
              <p className='text-xl text-center font-semibold md:text-2xl md:text-left'>IMAGE FTI UAJY</p>
              <p className='text-lg mt-2 md:text-xl'><span className='font-semibold'>Role:</span> Magazine Secretary</p>
              <p className='text-lg md:text-xl'><span className='font-semibold'>Duration:</span> Dec'22 - Jun'23</p>
            </div>
          </div>
        </div>
      </section>
      <section id='contacts' className='relative px-4  mt-20 mb-10 mx-auto w-screen'>
        <div className="flex items-center">
          <p className='text-4xl mb-9 font-[tourney] md:text-6xl md:ml-12'><span className='text-[#C778DD]'>#</span>contacts</p>
          <span className="flex-grow h-px bg-[#C778DD] ml-4 mb-8"></span>
        </div>
        <div className='flex flex-col font-mono items-center'>
          <p className='text-justify mx-2 md:text-2xl'>However, if you have other request or question, don’t hesitate to contact me</p>
          <div className='flex flex-col items-center border border-[#ABB2BF] p-2 mt-7 w-2/3'>
            <p className='font-semibold md:text-xl'>Message me here</p>
            <div className='flex flex-row mt-2 md:my-3'>
              <div className='bg-[#928A97] rounded-full hover:bg-[#c778dd]'><a href='mailto:nataniaregina97@gmail.com'><IoMailOpen className='text-[#282C33] text-2xl mx-1 my-1 md:text-3xl md:mx-3 md:my-3' /></a></div>
              <div className='bg-[#928A97] rounded-full mx-3 md:mx-5 hover:bg-[#c778dd]'><a href='https://github.com/NataniaReginaCS'><BsGithub className='text-[#282C33] text-2xl mx-1 my-1 md:text-3xl md:mx-3 md:my-3' /></a></div>
              <div className='bg-[#928A97] rounded-full hover:bg-[#c778dd]'><a href='https://www.linkedin.com/in/natania-regina-clarabella-serafina/'><BiLogoLinkedin className='md:text-3xl md:mx-3 md:my-3 text-[#282C33] text-2xl mx-1 my-1' /></a></div>
              <div className='bg-[#928A97] rounded-full mx-3 md:mx-5 hover:bg-[#c778dd]'><a href='https://www.instagram.com/nataniareginaa/'><LiaInstagram className='text-[#282C33] text-2xl mx-1 my-1 md:text-3xl md:mx-3 md:my-3' /></a></div>
            </div>
          </div>
        </div>
        <img src='/BG3.png' alt='bg3' className='absolute -left-29 -bottom-14  z-10' />
      </section>
      <footer className='border-t-2 border-[#ABB2BF] mt-20 mb-5 font-mono'>
          <p className='text-center text-md mt-2 md:text-xl'>©{currentYear} Natania Regina Clarabella Serafina. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
