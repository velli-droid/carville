import Swiper, { Navigation, Pagination, Scrollbar, Thumbs } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export function initSwipers() {
    const introSwiper = document.querySelector('.js-intro-swiper');
    const newsSwiper = document.querySelector('.js-news-swiper');
    const productCardSwipers = [...document.querySelectorAll('.js-product-card-swiper')];
    const productGallery = document.querySelector('.js-product-gallery');


    if (introSwiper) {
        new Swiper('.js-intro-swiper', {
            slidesPerView: 1,
            spaceBetween: 20,
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true,
            },
            modules: [Pagination],
        })
    }

    if (newsSwiper) {
        new Swiper('.js-news-swiper', {
            resizeObserver: true,
            slidesPerView: 4,
            navigation: {
                prevEl: '.news-swiper__prev',
                nextEl: '.news-swiper__next',
            },
            breakpoints: {
                0: {
                    spaceBetween: 11,
                    slidesPerView: 1.5,
                },
                641: {
                    spaceBetween: 20,
                    slidesPerView: 4,
                },
                1200: {
                    spaceBetween: 58,
                }
            },
            modules: [Navigation],
        })
    }

    if (productCardSwipers.length) {
        
        productCardSwipers.forEach((item, index) => {
            item.classList.add(`js-product-card-swiper-${index}`);

            let swiper = new Swiper(`.js-product-card-swiper-${index}`, {
                slidesPerView: 1,
                observer: true,
                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets',
                    clickable: true,
                },
                modules: [Pagination],
            })
        });
    }

    if (productGallery) {
        const thumbs = new Swiper('.product-gallery__thumbs', {
            direction: 'vertical',
            slidesPerView: 3,
            spaceBetween: 25,
        });

        const swiper = new Swiper('.product-gallery__swiper', {
            direction: 'horizontal',
            slidesPerView: 1,
            observer: true,
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true,
            },
            thumbs: {
                swiper: thumbs,
            },
            modules: [Pagination, Thumbs],
        });
    }
}