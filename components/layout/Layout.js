import Navbar from "./Navbar";
import Bio from "./Bio";

export default function Layout(props) {
    
    return (
        <div>
            <Bio/>
            <Navbar/>
            <main>{props.children}</main>
        </div>
    )
}
