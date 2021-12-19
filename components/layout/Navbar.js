import Classes from '../../styles/navbar.module.css';
import Link from 'next/link';
export default function Navbar() {
    return (
        <ul className={Classes.navbar}>
            <li><Link href="/">Hakkımda</Link></li>
            <li><Link href="/projeler">Projeler</Link></li>
        </ul>
    )
}
