import Link from 'next/link'

const links = [{
    label: 'Projects',
    route: '/'
},
{
    label: 'Reel',
    route: '/'
},
{
    label: 'Bio',
    route: '/'
},
{
    label: 'Contact',
    route: '/'
}]

export function Header() {
    return (
        <header>
            <nav>
                <ul>{links.map(({ label, route }) => (
                    <li key={route}>
                        <Link href={route}>
                            {label}
                        </Link>
                    </li>
                ))}</ul>
            </nav >
        </header>

    )
}