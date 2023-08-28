import { Navigation } from './Navigation'
import { Frame, GreenBackground } from './layout-utils/layout-utils'

export function Header() {
    return (
        <header className="header-position">
            <GreenBackground />
            <Frame />
            <Navigation />
        </header>
    )
}