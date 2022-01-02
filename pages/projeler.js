import Classes from '../styles/projeler.module.css';
import Image from 'next/image';
import tenislobisilogo from '../images/tenislobisi.png';
import sportlobitvlogo from '../images/sporttvlogo.png';
import searchEngineLogo from '../images/customsearchengine.png'
import crf from '../images/crf.png';
import { useContext } from 'react';
import { LanguageContext } from './_app';

export default function Projeler() {
    const lang = useContext(LanguageContext)
    if(lang === "tr"){
        return (
            <div className='main'>
   <h2>PROJELER</h2>
   <div className='card'>
   <p>
  İş mailleşmeleri için <strong>react</strong> ile hazırlanmış özel arama motoru. Çalışmanın güncel haline <a className={Classes.a} href='https://tesodev-customsearchengine-berkdundar.vercel.app/' target="_blank" rel='noreferrer'>bu linkten ulaşabilirsiniz</a> 
   </p>
   <div className={Classes.projeAciklama}>
   <Image src={searchEngineLogo} alt='CustomSearchEngine' objectFit="contain"/>
   <p>
   Json formatında hazırlanan isim, soyisim, ülke, şehir, şirket adı ve mail adresin verileri üzerinde kişi ismi, soyisim, ve yıl bilgisiyle arama yapmayı sağlayan, isme göre veya yıla göre artan azalan filtreleme ile kolaylık sağlayan özel bir arama motoru.
   </p>
   </div>
   </div>
   <div className='card'>
   <p>
   Hobilerim arasında ilk sırada spor olduğundan dolayı amatör ve profesyonel sporcuların kullanabileceği uygulama fikirleri her zaman aklımda vardı.<br/>
   <strong>Reactjs</strong> öğrenmeye başladığım süreçte aynı zamanda bu fikirlerden biri olan <strong>Tenislobisi</strong> üzerinde çalışmaya başladım.<br/>
   Çalışmanın güncel haline <a className={Classes.a} href='https://tenislobisi.vercel.app/' target="_blank" rel='noreferrer'>bu linkten ulaşabilirsiniz</a>
   </p>
   <div className={Classes.projeAciklama}>
   <Image src={tenislobisilogo} alt='tenislobisilogo' objectFit="contain"/>
   <p>Tenislobisi tenisle ilgilenen tenis oynayan bir kullanıcı kitlesi amaçlamaktadır.<br/>
   Eşleştirme özelliği ile üyeler, semtlerinde tenis oynayan insanları bulabilir ve antrenman veya maç için buluşabilirler.
   <br/>Antrenörler de ücretli ders verebileceği reklam ilanları bırakabilirler.
   <br/>Bir diğer özellik ise üyelerin semtinde adresini bildiği kortları kayıt yaparak diğer üyelerle paylaşabilirler.
   İşletmeciler de ücretli kortlarının adresini ve diğer tüm kort özelliklerini girerek reklam yapma imkanı bulur.
   </p>
   </div>
   </div>
   
   <div className='card'>
   <p><strong>SportLobi.TV</strong> fikri <strong>Next.js</strong> ile çalışırken tenislobisine ek ve kendi başına da tüm spor severlerin kullanabileceği bir watchlist uygulaması olarak düşünülmüştür.<a className={Classes.a} href='https://sportlobi-tv.vercel.app/' target="_blank" rel='noreferrer'>SportLobi.TV</a></p>
   <div className={Classes.projeAciklama}>
   <Image src={sportlobitvlogo} alt='tenislobisilogo' objectFit="contain"/>
   <p>
   SportLobi.Tv tüm spor severlerin günlük ve haftalık maç programını görebileceği <br/>
   ve izleme listesine ekleyebilmesini sağlayan bir platform.<br/>
   Alarm özelliği kurularak müsabaka başlamadan önce 1 saate kadar olan periyotlarla<br/>
   kullanıcıya maçın başlamasına kaç dakika kaldığını bildirir.   
   </p>
   </div>
   </div>
   
   <div className='card'>
       <p><strong>Python</strong> ile Türkçe haber metinlerinde kural tabanlı ve makine öğrenmesiyle Türkçe doğal dil işleme. Github üzerinde daha detaylı incelemek için <a className={Classes.a} href='https://github.com/Berknb/turkish-nlp' target="_blank" rel='noreferrer'>repo linki </a></p>
   <div className={Classes.projeAciklama}>
   <Image src={crf} alt='doğaldilişleme' objectFit="contain"/>
   <p>
    Arkadaşlarımla birlikte türkçe haber metinleri ve wikipedia makaleleri üzerinde kural tabanlı doğal dil işleme yapabilen bir yazılım geliştirdik<br/>
    Görsel makine öğrenmesiyle yapılan testin başarı oranını ve başarılı etiket sayısını göstermektedir.<br/> 
    </p>
   </div>
   </div>
           </div>
       )
    }else{
        return (
            <div className='main'>
   <h2>PROJECTS</h2>
   <div className='card'>
   <p>
   A custom search engine with React.js for business mailings. You can reach the current status of project<a className={Classes.a} href='https://tesodev-customsearchengine-berkdundar.vercel.app/' target="_blank" rel='noreferrer'> from this link</a>
   </p>
   <div className={Classes.projeAciklama}>
   <Image src={searchEngineLogo} alt='CustomSearchEngine' objectFit="contain"/>
   <p>
   This project allows searching on the data of name, surname, country, city, company name and e-mail address prepared in Json format. Also it provides convenience with increasing and decreasing filtering by name or year.
   </p>
   </div>
   </div>
   <div className='card'>
   <p>
   Sport is on the first place of my hobbies so I&apos;ve always have ideas about sports. When I begin to learn <strong>reactjs</strong> also give a start to make this project. You can reach the current status of project<a className={Classes.a} href='https://tenislobisi.vercel.app/' target="_blank" rel='noreferrer'> from this link</a>
   </p>
   <div className={Classes.projeAciklama}>
   <Image src={tenislobisilogo} alt='tenislobisilogo' objectFit="contain"/>
   <p>
   This project is a Web page which users can find tennis players on their neighborhood to play
together and also can submit courts on their citys and share with all
community. They can find tennis courts information after that.
   </p>
   </div>
   </div>
   <div className='card'>
   <p>When I begin to learn <strong>nextjs</strong> and working with it, I created another app for addition to my first tennis app and also can be used by all kind of sports fans. You can reach the current status of project<a className={Classes.a} href='https://sportlobi-tv.vercel.app/' target="_blank" rel='noreferrer'> SportLobi.TV</a></p>
   <div className={Classes.projeAciklama}>
   <Image src={sportlobitvlogo} alt='tenislobisilogo' objectFit="contain"/>
   <p>
   SportLobi.Tv is which app include the daily and weekly match schedule. all sports lovers can see 
and can add to the watch list.
By setting up the alarm which is up to 1 hour before the match starts.
informs the user how many minutes are left before the match starts.

   </p>
   </div>
   </div>
   
   <div className='card'>
       <p>Rule based named entity recognition on turkish articles with <strong>pyhton</strong> and Natural language processing with machine learning on Turkish news texts. <a className={Classes.a} href='https://github.com/Berknb/turkish-nlp' target="_blank" rel='noreferrer'> here is repo link </a></p>
   <div className={Classes.projeAciklama}>
   <Image src={crf} alt='doğaldilişleme' objectFit="contain"/>
   <p>
   we developed a software with my friends that can perform rule-based natural language processing on Turkish news texts and wikipedia articles.
that image shows the success rate of the test with machine learning nlp and the number of successful tags. 
    </p>
   </div>
   </div>
           </div>
       )
    }
    
}
