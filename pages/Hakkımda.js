import Classes from '../styles/index.module.css';
import Reactimg from '../images/react.png';
import web from '../images/completeWeb2.png'
import Nextimg from '../images/next.png';
import Image from 'next/image';
import tsLogo from '../images/tsLogo.png'
import sassLogo from '../images/sassLogo.png'
import nodejsLogo from '../images/nodejsLogo.png'
import { useContext } from 'react';
import { LanguageContext } from './_app';

export default function Index() {
    const lang = useContext(LanguageContext)
        return (
            <div>
                {lang === "tr" ?  
                <div className='main'>
                    <h2>HAKKIMDA</h2>
                <p>
                    &nbsp;&nbsp;&nbsp; 12 Mayıs 1998&apos;de İstanbul Çatalca&apos;da doğdum. 
                    İlkokul ve lise hayatımı burada tamamladıktan sonra ilgi alanlarımı ve yeteneklerimi 
                    düşünerek bilgisayar mühendisliğini tercih etmeye karar verdim ve 
                    Trakya Üniversitesi bilgisayar mühendisliği bölümünü kazanarak Edirne&apos;ye yerleştim.<br/><br/>
                    &nbsp;&nbsp;&nbsp;Üniversite hayatım boyunca geliştirdiğim çeşitli projeler ve takip ettiğim,yürüttüğüm tüm çalışmaların ardından front-end alanında çalışmanın benim için daha keyifli daha verimli ve bu alanda daha yaratıcı olduğumu farkettim ve kendimi bu alanda günden güne geliştirmeye devam ediyorum.<br/>
                    &nbsp;&nbsp;&nbsp;Güncel olarak <strong>React.js,Next.js,React native</strong> ile projeler geliştiriyorum ve seviyemi en üst seviyeye çekmeyi hedefliyorum. Kendimi büyük bir takımla ve büyük projelerle geliştirmek istiyorum.
                </p>
                </div>:
                <div className='main'>
                <h2>ABOUT ME</h2>
                <p>
                &nbsp;&nbsp;&nbsp;I was born in 12 May 1998 at Istanbul/Turkey. After I Completed my primary and high school there, as thinking of my skills and interests I decided to become computer engineer and  move to Edirne to study Trakya University computer engineering departmant.<br/><br/>
                &nbsp;&nbsp;&nbsp;after I developed different kind of projects on my school period I decided to keep move on front-end because I feel creative, comfortable and productive when I am working on front-end. Still working for improve myself to top level day by day<br/>
                &nbsp;&nbsp;&nbsp;Currently I am working with React.js,Next.js,React native and making projects on them,my goal is maximize my level. I want to improve myself with a big team and big projects.
                </p>
            </div>       
                }
                <div className={Classes.logos}>
                    <span><Image src={Reactimg} alt='reactjs' width={250} height={250}></Image></span>
                    <span><Image src={Nextimg} alt='nextjs' width={250} height={150}></Image></span>
                    <span><Image src={web} alt='web' width={250} height={250}/></span>
                    <span> <Image src={tsLogo} alt='web'/></span>
                    <span> <Image src={sassLogo} alt='web' width={200} height={150}/></span>
                    <span> <Image src={nodejsLogo} alt='web'  width={250} height={150}/></span>        
                </div>
            </div>
        )
    
    
}