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

export function Navigation() {
    return (
            <nav className="flex justify-center uppercase w-full md:text-xl nav-position fixed z-50">
                <ul className="flex gap-24 text-gray-200 items-center">{links.map(({ label, route }) => (
                    <li key={route}>
                        <Link href={route}>
                            {label}
                        </Link>
                    </li>
                ))}</ul>
            </nav >
    )
}