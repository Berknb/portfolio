import Classes from '../styles/projeler.module.css';
import Image from 'next/image';
import tenislobisilogo from '../images/tenislobisi.png';
import sportlobitvlogo from '../images/sporttvlogo.png'
import crf from '../images/crf.png'

export default function projeler() {
    return (
         <div className='main'>
<h2>PROJELER</h2>
<div className='card'>
<p>
Hobilerim arasında ilk sırada spor olduğundan dolayı amatör ve profesyonel sporcuların kullanabileceği uygulama fikirleri her zaman aklımda vardı.<br/>
React.js öğrenmeye başladığım süreçte aynı zamanda bu fikirlerden biri olan <strong>Tenislobisi</strong> üzerinde çalışmaya başladım.<br/>
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
<p><strong>SportLobi.TV</strong> fikri next.js ile çalışırken tenislobisine ek ve kendi başına da tüm spor severlerin kullanabileceği bir watchlist uygulaması olarak düşünülmüştür.<a className={Classes.a} href='https://sportlobi-tv.vercel.app/' target="_blank" rel='noreferrer'>SportLobi.TV</a></p>
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
}
