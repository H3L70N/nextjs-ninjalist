import Link from 'next/link'
import Image from 'next/image'


const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Image width={128} height={77} src="/logo.png" alt="Ninja List" />
            </div>

            <Link legacyBehavior href="/"><a> Home </a></Link>
            <Link legacyBehavior href="/about"><a> About </a></Link>
            <Link legacyBehavior href="/ninjas"><a> Ninja Listing </a></Link>
            
            
            
        </nav>
     );
}
 
export default Navbar;
