// import node module libraries
import { useEffect } from 'react'

const GoToTop = () => {
    useEffect(() => {
        const progressWrap = document.querySelector('.btn-scroll-top');
        if (progressWrap !== null) {
            const progressPath = progressWrap.querySelector('path');
            let pathLength = progressPath.getTotalLength();
            let offset = 50;
            progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
            progressPath.style.strokeDashoffset = pathLength;
            const updateProgress = () => {
                const scroll = window.scrollY;
                const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                const progress = pathLength - (scroll * pathLength) / height;
                progressPath.style.strokeDashoffset = progress;
                const scrollElementPos = window.scrollY;
                if (scrollElementPos >= offset) {
                    progressWrap.classList.add('active-progress');
                } else {
                    progressWrap.classList.remove('active-progress');
                }
            };
            window.addEventListener('scroll', updateProgress);
            // Cleanup function to remove the event listener when the component unmounts
            return () => window.removeEventListener('scroll', updateProgress);
        }
    }, []); // Empty dependency array means this effect runs once on mount

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <div className="btn-scroll-top active-progress" onClick={handleScrollToTop}>
            <svg className="progress-square svg-content" width="100%" height="100%" viewBox="0 0 40 40">
                <path d="M8 1H32C35.866 1 39 4.13401 39 8V32C39 35.866 35.866 39 32 39H8C4.13401 39 1 35.866 1 32V8C1 4.13401 4.13401 1 8 1Z"
                    style={{ transition: 'stroke-dashoffset 10ms linear', strokeDasharray: '139.989, 139.989', strokeDashoffset: '80.7035' }}></path>
            </svg>
        </div>
    )
}

export default GoToTop