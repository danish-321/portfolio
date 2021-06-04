import React from 'react'

const HomeApp = () => {
    return <div>
        <LazyLoad once>
            <NavigationBar />
        </LazyLoad>

        <LazyLoad once>
            <Home />
        </LazyLoad>

        <LazyLoad once>
            <About />
        </LazyLoad>

        <LazyLoad once>
            <Projects />
        </LazyLoad>

        <LazyLoad once>
            <Contact />
        </LazyLoad>
    </div>
}

export default HomeApp