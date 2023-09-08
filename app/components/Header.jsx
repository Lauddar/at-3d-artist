import Navigation from './Navigation'
import { Frame } from './layout-utils/layout-utils'

export default function Header() {
    return (
        <header className="header-position relative">
            <Frame />
            <Navigation />
        </header>
    )
}