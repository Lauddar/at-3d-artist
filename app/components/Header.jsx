import { Navigation } from './Navigation'
import { Frame, GreenBackground } from './layout-utils/layout-utils'

export function Header() {
    return (
        <header className="header-position z-50 relative">
            <Frame />
            <Navigation />
        </header>
    )
}