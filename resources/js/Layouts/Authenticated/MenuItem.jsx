import {Link} from "@inertiajs/react"
export default function MenuItem({link, icon, text, isActive, method = 'get'}) {
    return (
        <Link 
            href={link? route(link) : "#!"} 
            className={`side-link ${isActive ? 'active' : ''}`} 
            method={method}
            {...(!link && { onClick: (e) => e.preventDefault() })}>
            
            {icon}
            {text}
        
        </Link>
    )
}