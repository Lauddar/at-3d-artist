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
            <nav class="flex justify-center uppercase w-full md:text-xl nav-position fixed">
                <ul className="flex gap-24 text-primary items-center">{links.map(({ label, route }) => (
                    <li key={route}>
                        <Link href={route}>
                            {label}
                        </Link>
                    </li>
                ))}</ul>
            </nav >
    )
}