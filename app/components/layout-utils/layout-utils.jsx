export function Frame() {
    return (
        <div className="h-screen w-screen fixed top-0 left-0 frame-position">
            <svg className="w-full h-full" width="2454" height="1324" viewBox="0 0 2454 1324" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2454 106L0 106" stroke="#828282" />
                <path d="M118 1324L118 0" stroke="#828282" />
                <rect x="0.5" y="0.5" width="2453" height="1323" rx="66.5" stroke="#828282" />
            </svg>
        </div>
    )
}

export function GreenBackground() {
    return (
        <div className="h-screen w-full absolute top-0 left-0 bg-secondary"></div>
    )
}