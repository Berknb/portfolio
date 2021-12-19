import Classes from '../styles/index.module.css';
import Reactimg from '../images/react.png';
import Htmlimg from '../images/html.png';
import Jsimg from '../images/js.png';
import Cssimg from '../images/css.png';
import Nextimg from '../images/next.png';
import Image from 'next/image';

export default function index() {
    return (
        <div className='main'>
            <h2>HAKKIMDA</h2>
            <p>
                &nbsp;&nbsp;&nbsp; 12 Mayıs 1998&apos;de İstanbul Çatalca&apos;da doğdum. 
                İlkokul ve lise hayatımı burada tamamladıktan sonra ilgi alanlarımı ve yeteneklerimi 
                düşünerek bilgisayar mühendisliği bölümünü tercih etmeye karar verdim ve 
                Trakya Üniversitesi bilgisayar mühendisliği bölümünü kazanarak Edirne&apos;ye yerleştim.<br/><br/>
                &nbsp;&nbsp;&nbsp;Üniversite hayatım boyunca geliştirdiğim çeşitli projeler ve takip ettiğim,yürüttüğüm tüm çalışmaların ardından front-end alanında çalışmanın benim için daha keyifli daha verimli ve bu alanda daha yaratıcı olduğumu farkettim ve kendimi bu alanda günden güne geliştirmeye devam ediyorum.<br/>
                &nbsp;&nbsp;&nbsp;Güncel olarak <strong>React.js,Next.js,React native</strong> ile projeler geliştiriyorum ve seviyemi en üst seviyeye çekmeyi hedefliyorum. Kendimi büyük bir takımla ve büyük projelerle geliştirmek istiyorum iş arayışım da bu yöndedir.
            </p>
            <div className={Classes.logos}>
                <Image src={Reactimg} alt='reactjs' width={140} height={120}></Image>
                <Image src={Nextimg} alt='nextjs' width={140} height={120}></Image>
                <Image src={Htmlimg} alt='html' width={140} height={120}></Image>
                <Image src={Jsimg} alt='javascript' width={140} height={120}></Image>
                <Image src={Cssimg} alt='css' width={140} height={120}></Image>
            </div>
        </div>
    )
}
