import { useEffect, useRef } from 'react';

const useIntersectionObserver = (options: IntersectionObserverInit) => {
    const elementsRef = useRef<(Element | null)[]>([]);

    useEffect(() => {
        const currentElements = elementsRef.current.slice(); // elementsRef.current를 변수에 복사

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                } else {
                    entry.target.classList.remove('visible');
                }
            });
        }, options);

        currentElements.forEach(element => {
            if (element) observer.observe(element);
        });

        return () => {
            currentElements.forEach(element => {
                if (element) observer.unobserve(element);
            });
        };
    }, [options]);

    return elementsRef;
};

export default useIntersectionObserver;