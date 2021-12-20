import Classes from '../../styles/navbar.module.css';
import Link from 'next/link';
import { useContext } from 'react';
import { LanguageContext } from '../../pages/_app';
export default function Navbar() {
    const lang = useContext(LanguageContext)
    if(lang === "tr"){
        return (
            <ul className={Classes.navbar}>
                <li><Link href="/">Hakkımda</Link></li>
                <li><Link href="/projeler">Projeler</Link></li>
            </ul>
        )
    }else{
        return (
            <ul className={Classes.navbar}>
                <li><Link href="/">ABOUT ME</Link></li>
                <li><Link href="/projeler">PROJECTS</Link></li>
            </ul>
        )
    }
    
}
