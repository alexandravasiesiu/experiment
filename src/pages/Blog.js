import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { useTranslation } from 'react-i18next';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Blog() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <Navigation />
        <section className='py-24 bg-white'>
          <div className='container px-4 mx-auto'>
            <div className='md:max-w-5xl mx-auto mb-16 text-center'>
              <h3 className='text-3xl md:text-4xl mt-2 mb-4 font-bold font-heading text-green-600'>
                {t('blog.title')}
              </h3>
              <p
                className='leading-loose text-xl text-coolGray-500'
              >
                {t('blog.subtitle')}
              </p>
            </div>
            <div className='flex flex-wrap -mx-4 mb-12 md:mb-20'>
              <div className='w-full mb-8 md:w-1/2 px-10'>
                <a
                  className='block mb-6 overflow-hidden rounded-md flex justify-center'
                  href='#'
                >
                  <img
                    className='h-40'
                    src='images/recycling-jpg-1695034850586.webp'
                    alt=''
                  />
                </a>
                <a
                  className='inline-block mb-4 text-xl md:text-2xl leading-tight text-coolGray-800 hover:text-coolGray-900 font-bold hover:underline'
                  href='#'
                >
                  Viitorul Reciclării: Transformarea Deșeurilor în Resurse
                </a>
                <a
                  className='inline-flex items-center text-base md:text-lg text-green-300 hover:text-green-600 font-semibold'
                  href='#'
                >
                  <span className='mr-3'>Citește</span>
                  <svg
                    width={8}
                    height={10}
                    viewBox='0 0 8 10'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M7.94667 4.74665C7.91494 4.66481 7.86736 4.59005 7.80666 4.52665L4.47333 1.19331C4.41117 1.13116 4.33738 1.08185 4.25617 1.04821C4.17495 1.01457 4.08791 0.997253 4 0.997253C3.82246 0.997253 3.6522 1.06778 3.52667 1.19331C3.46451 1.25547 3.4152 1.32927 3.38156 1.41048C3.34792 1.4917 3.33061 1.57874 3.33061 1.66665C3.33061 1.84418 3.40113 2.01445 3.52667 2.13998L5.72667 4.33331H0.666667C0.489856 4.33331 0.320286 4.40355 0.195262 4.52858C0.070238 4.6536 0 4.82317 0 4.99998C0 5.17679 0.070238 5.34636 0.195262 5.47138C0.320286 5.59641 0.489856 5.66665 0.666667 5.66665H5.72667L3.52667 7.85998C3.46418 7.92196 3.41458 7.99569 3.38074 8.07693C3.34689 8.15817 3.32947 8.24531 3.32947 8.33331C3.32947 8.42132 3.34689 8.50846 3.38074 8.5897C3.41458 8.67094 3.46418 8.74467 3.52667 8.80665C3.58864 8.86913 3.66238 8.91873 3.74361 8.95257C3.82485 8.98642 3.91199 9.00385 4 9.00385C4.08801 9.00385 4.17514 8.98642 4.25638 8.95257C4.33762 8.91873 4.41136 8.86913 4.47333 8.80665L7.80666 5.47331C7.86736 5.40991 7.91494 5.33515 7.94667 5.25331C8.01334 5.09101 8.01334 4.90895 7.94667 4.74665Z'
                      fill='currentColor'
                    />
                  </svg>
                </a>
              </div>
              <div className='w-full md:w-1/2 px-10 mb-8'>
                <a
                  className='block mb-6 overflow-hidden rounded-md  flex justify-center'
                  href='#'
                >
                  <img
                    className='h-40'
                    src='images/recycling-jpg-1695034874827.webp'
                    alt=''
                  />
                </a>
                <a
                  className='inline-block mb-4 text-xl md:text-2xl leading-tight text-coolGray-800 hover:text-coolGray-900 font-bold hover:underline'
                  href='#'
                >
                  Viitorul Reciclării: Transformarea Deșeurilor în Resurse
                </a>
                <a
                  className='inline-flex items-center text-base md:text-lg text-green-300 hover:text-green-600 font-semibold'
                  href='#'
                >
                  <span className='mr-3'>Citește</span>
                  <svg
                    width={8}
                    height={10}
                    viewBox='0 0 8 10'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M7.94667 4.74665C7.91494 4.66481 7.86736 4.59005 7.80666 4.52665L4.47333 1.19331C4.41117 1.13116 4.33738 1.08185 4.25617 1.04821C4.17495 1.01457 4.08791 0.997253 4 0.997253C3.82246 0.997253 3.6522 1.06778 3.52667 1.19331C3.46451 1.25547 3.4152 1.32927 3.38156 1.41048C3.34792 1.4917 3.33061 1.57874 3.33061 1.66665C3.33061 1.84418 3.40113 2.01445 3.52667 2.13998L5.72667 4.33331H0.666667C0.489856 4.33331 0.320286 4.40355 0.195262 4.52858C0.070238 4.6536 0 4.82317 0 4.99998C0 5.17679 0.070238 5.34636 0.195262 5.47138C0.320286 5.59641 0.489856 5.66665 0.666667 5.66665H5.72667L3.52667 7.85998C3.46418 7.92196 3.41458 7.99569 3.38074 8.07693C3.34689 8.15817 3.32947 8.24531 3.32947 8.33331C3.32947 8.42132 3.34689 8.50846 3.38074 8.5897C3.41458 8.67094 3.46418 8.74467 3.52667 8.80665C3.58864 8.86913 3.66238 8.91873 3.74361 8.95257C3.82485 8.98642 3.91199 9.00385 4 9.00385C4.08801 9.00385 4.17514 8.98642 4.25638 8.95257C4.33762 8.91873 4.41136 8.86913 4.47333 8.80665L7.80666 5.47331C7.86736 5.40991 7.91494 5.33515 7.94667 5.25331C8.01334 5.09101 8.01334 4.90895 7.94667 4.74665Z'
                      fill='currentColor'
                    />
                  </svg>
                </a>
              </div>
              <div className='w-full md:w-1/2 px-10 mb-8'>
                <a
                  className='block mb-6 overflow-hidden rounded-md  flex justify-center'
                  href='#'
                >
                  <img
                    className='h-40'
                    src='images/recycling-jpg-1695034898160.webp'
                    alt=''
                  />
                </a>
                <a
                  className='inline-block mb-4 text-xl md:text-2xl leading-tight text-coolGray-800 hover:text-coolGray-900 font-bold hover:underline'
                  href='#'
                >
                  Viitorul Reciclării: Transformarea Deșeurilor în Resurse
                </a>
                <a
                  className='inline-flex items-center text-base md:text-lg text-green-300 hover:text-green-600 font-semibold'
                  href='#'
                >
                  <span className='mr-3'>Citește</span>
                  <svg
                    width={8}
                    height={10}
                    viewBox='0 0 8 10'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M7.94667 4.74665C7.91494 4.66481 7.86736 4.59005 7.80666 4.52665L4.47333 1.19331C4.41117 1.13116 4.33738 1.08185 4.25617 1.04821C4.17495 1.01457 4.08791 0.997253 4 0.997253C3.82246 0.997253 3.6522 1.06778 3.52667 1.19331C3.46451 1.25547 3.4152 1.32927 3.38156 1.41048C3.34792 1.4917 3.33061 1.57874 3.33061 1.66665C3.33061 1.84418 3.40113 2.01445 3.52667 2.13998L5.72667 4.33331H0.666667C0.489856 4.33331 0.320286 4.40355 0.195262 4.52858C0.070238 4.6536 0 4.82317 0 4.99998C0 5.17679 0.070238 5.34636 0.195262 5.47138C0.320286 5.59641 0.489856 5.66665 0.666667 5.66665H5.72667L3.52667 7.85998C3.46418 7.92196 3.41458 7.99569 3.38074 8.07693C3.34689 8.15817 3.32947 8.24531 3.32947 8.33331C3.32947 8.42132 3.34689 8.50846 3.38074 8.5897C3.41458 8.67094 3.46418 8.74467 3.52667 8.80665C3.58864 8.86913 3.66238 8.91873 3.74361 8.95257C3.82485 8.98642 3.91199 9.00385 4 9.00385C4.08801 9.00385 4.17514 8.98642 4.25638 8.95257C4.33762 8.91873 4.41136 8.86913 4.47333 8.80665L7.80666 5.47331C7.86736 5.40991 7.91494 5.33515 7.94667 5.25331C8.01334 5.09101 8.01334 4.90895 7.94667 4.74665Z'
                      fill='currentColor'
                    />
                  </svg>
                </a>
              </div>
              <div className='w-full md:w-1/2 px-10 mb-8'>
                <a
                  className='block mb-6 overflow-hidden rounded-md  flex justify-center'
                  href='#'
                >
                  <img
                    className='h-40'
                    src='images/recycling-jpg-1695034925924.webp'
                    alt=''
                  />
                </a>
                <a
                  className='inline-block mb-4 text-xl md:text-2xl leading-tight text-coolGray-800 hover:text-coolGray-900 font-bold hover:underline'
                  href='#'
                >
                  Viitorul Reciclării: Transformarea Deșeurilor în Resurse
                </a>
                <a
                  className='inline-flex items-center text-base md:text-lg text-green-300 hover:text-green-600 font-semibold'
                  href='#'
                >
                  <span className='mr-3'>Citește</span>
                  <svg
                    width={8}
                    height={10}
                    viewBox='0 0 8 10'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M7.94667 4.74665C7.91494 4.66481 7.86736 4.59005 7.80666 4.52665L4.47333 1.19331C4.41117 1.13116 4.33738 1.08185 4.25617 1.04821C4.17495 1.01457 4.08791 0.997253 4 0.997253C3.82246 0.997253 3.6522 1.06778 3.52667 1.19331C3.46451 1.25547 3.4152 1.32927 3.38156 1.41048C3.34792 1.4917 3.33061 1.57874 3.33061 1.66665C3.33061 1.84418 3.40113 2.01445 3.52667 2.13998L5.72667 4.33331H0.666667C0.489856 4.33331 0.320286 4.40355 0.195262 4.52858C0.070238 4.6536 0 4.82317 0 4.99998C0 5.17679 0.070238 5.34636 0.195262 5.47138C0.320286 5.59641 0.489856 5.66665 0.666667 5.66665H5.72667L3.52667 7.85998C3.46418 7.92196 3.41458 7.99569 3.38074 8.07693C3.34689 8.15817 3.32947 8.24531 3.32947 8.33331C3.32947 8.42132 3.34689 8.50846 3.38074 8.5897C3.41458 8.67094 3.46418 8.74467 3.52667 8.80665C3.58864 8.86913 3.66238 8.91873 3.74361 8.95257C3.82485 8.98642 3.91199 9.00385 4 9.00385C4.08801 9.00385 4.17514 8.98642 4.25638 8.95257C4.33762 8.91873 4.41136 8.86913 4.47333 8.80665L7.80666 5.47331C7.86736 5.40991 7.91494 5.33515 7.94667 5.25331C8.01334 5.09101 8.01334 4.90895 7.94667 4.74665Z'
                      fill='currentColor'
                    />
                  </svg>
                </a>
              </div>
              <div className='w-full md:w-1/2 px-10 mb-8 md:mb-0'>
                <a
                  className='block mb-6 overflow-hidden rounded-md  flex justify-center'
                  href='#'
                >
                  <img
                    className='h-40'
                    src='images/recycling-jpg-1695034943339.webp'
                    alt=''
                  />
                </a>
                <a
                  className='inline-block mb-4 text-xl md:text-2xl leading-tight text-coolGray-800 hover:text-coolGray-900 font-bold hover:underline'
                  href='#'
                >
                  Viitorul Reciclării: Transformarea Deșeurilor în Resurse
                </a>
                <a
                  className='inline-flex items-center text-base md:text-lg text-green-300 hover:text-green-600 font-semibold'
                  href='#'
                >
                  <span className='mr-3'>Citește</span>
                  <svg
                    width={8}
                    height={10}
                    viewBox='0 0 8 10'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M7.94667 4.74665C7.91494 4.66481 7.86736 4.59005 7.80666 4.52665L4.47333 1.19331C4.41117 1.13116 4.33738 1.08185 4.25617 1.04821C4.17495 1.01457 4.08791 0.997253 4 0.997253C3.82246 0.997253 3.6522 1.06778 3.52667 1.19331C3.46451 1.25547 3.4152 1.32927 3.38156 1.41048C3.34792 1.4917 3.33061 1.57874 3.33061 1.66665C3.33061 1.84418 3.40113 2.01445 3.52667 2.13998L5.72667 4.33331H0.666667C0.489856 4.33331 0.320286 4.40355 0.195262 4.52858C0.070238 4.6536 0 4.82317 0 4.99998C0 5.17679 0.070238 5.34636 0.195262 5.47138C0.320286 5.59641 0.489856 5.66665 0.666667 5.66665H5.72667L3.52667 7.85998C3.46418 7.92196 3.41458 7.99569 3.38074 8.07693C3.34689 8.15817 3.32947 8.24531 3.32947 8.33331C3.32947 8.42132 3.34689 8.50846 3.38074 8.5897C3.41458 8.67094 3.46418 8.74467 3.52667 8.80665C3.58864 8.86913 3.66238 8.91873 3.74361 8.95257C3.82485 8.98642 3.91199 9.00385 4 9.00385C4.08801 9.00385 4.17514 8.98642 4.25638 8.95257C4.33762 8.91873 4.41136 8.86913 4.47333 8.80665L7.80666 5.47331C7.86736 5.40991 7.91494 5.33515 7.94667 5.25331C8.01334 5.09101 8.01334 4.90895 7.94667 4.74665Z'
                      fill='currentColor'
                    />
                  </svg>
                </a>
              </div>
              <div className='w-full md:w-1/2 px-10'>
                <a
                  className='block mb-6 overflow-hidden rounded-md flex justify-center'
                  href='#'
                >
                  <img
                    className='h-40'
                    src='images/recycling-jpg-1695034963039.webp'
                    alt=''
                  />
                </a>
                <a
                  className='inline-block mb-4 text-xl md:text-2xl leading-tight text-coolGray-800 hover:text-coolGray-900 font-bold hover:underline'
                  href='#'
                >
                  Viitorul Reciclării: Transformarea Deșeurilor în Resurse
                </a>
                <a
                  className='inline-flex items-center text-base md:text-lg text-green-300 hover:text-green-600 font-semibold'
                  href='#'
                >
                  <span className='mr-3'>Citește</span>
                  <svg
                    width={8}
                    height={10}
                    viewBox='0 0 8 10'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M7.94667 4.74665C7.91494 4.66481 7.86736 4.59005 7.80666 4.52665L4.47333 1.19331C4.41117 1.13116 4.33738 1.08185 4.25617 1.04821C4.17495 1.01457 4.08791 0.997253 4 0.997253C3.82246 0.997253 3.6522 1.06778 3.52667 1.19331C3.46451 1.25547 3.4152 1.32927 3.38156 1.41048C3.34792 1.4917 3.33061 1.57874 3.33061 1.66665C3.33061 1.84418 3.40113 2.01445 3.52667 2.13998L5.72667 4.33331H0.666667C0.489856 4.33331 0.320286 4.40355 0.195262 4.52858C0.070238 4.6536 0 4.82317 0 4.99998C0 5.17679 0.070238 5.34636 0.195262 5.47138C0.320286 5.59641 0.489856 5.66665 0.666667 5.66665H5.72667L3.52667 7.85998C3.46418 7.92196 3.41458 7.99569 3.38074 8.07693C3.34689 8.15817 3.32947 8.24531 3.32947 8.33331C3.32947 8.42132 3.34689 8.50846 3.38074 8.5897C3.41458 8.67094 3.46418 8.74467 3.52667 8.80665C3.58864 8.86913 3.66238 8.91873 3.74361 8.95257C3.82485 8.98642 3.91199 9.00385 4 9.00385C4.08801 9.00385 4.17514 8.98642 4.25638 8.95257C4.33762 8.91873 4.41136 8.86913 4.47333 8.80665L7.80666 5.47331C7.86736 5.40991 7.91494 5.33515 7.94667 5.25331C8.01334 5.09101 8.01334 4.90895 7.94667 4.74665Z'
                      fill='currentColor'
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className='flex justify-center mx-auto max-w-max bg-white border border-coolGray-100 rounded-md shadow-lg'>
              <a
                className='inline-flex items-center justify-center w-11 h-11 text-coolGray-300 hover:text-coolGray-400 font-medium border-r border-coolGray-100'
                href='#'
              >
                <svg
                  width={8}
                  height={12}
                  viewBox='0 0 8 12'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M3.28994 5.99995L6.82994 2.45995C7.01619 2.27259 7.12074 2.01913 7.12074 1.75495C7.12074 1.49076 7.01619 1.23731 6.82994 1.04995C6.73698 0.95622 6.62638 0.881826 6.50452 0.831057C6.38266 0.780288 6.25196 0.75415 6.11994 0.75415C5.98793 0.75415 5.85723 0.780288 5.73537 0.831057C5.61351 0.881826 5.50291 0.95622 5.40994 1.04995L1.16994 5.28995C1.07622 5.38291 1.00182 5.49351 0.951053 5.61537C0.900284 5.73723 0.874146 5.86794 0.874146 5.99995C0.874146 6.13196 0.900284 6.26267 0.951053 6.38453C1.00182 6.50638 1.07622 6.61699 1.16994 6.70995L5.40994 10.9999C5.50338 11.0926 5.6142 11.166 5.73604 11.2157C5.85787 11.2655 5.98834 11.2907 6.11994 11.2899C6.25155 11.2907 6.38201 11.2655 6.50385 11.2157C6.62569 11.166 6.7365 11.0926 6.82994 10.9999C7.01619 10.8126 7.12074 10.5591 7.12074 10.2949C7.12074 10.0308 7.01619 9.77731 6.82994 9.58995L3.28994 5.99995Z'
                    fill='currentColor'
                  />
                </svg>
              </a>
              <a
                className='inline-flex items-center justify-center w-11 h-11 text-coolGray-300 hover:text-green-500 font-medium border-r border-coolGray-100'
                href='#'
              >
                1
              </a>
              <a
                className='inline-flex items-center justify-center w-11 h-11 text-coolGray-300 hover:text-coolGray-400 font-medium'
                href='#'
              >
                <svg
                  width={8}
                  height={12}
                  viewBox='0 0 8 12'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M4.71006 6.00005L1.17006 9.54005C0.983805 9.72741 0.879264 9.98087 0.879264 10.2451C0.879264 10.5092 0.983805 10.7627 1.17006 10.9501C1.26302 11.0438 1.37362 11.1182 1.49548 11.1689C1.61734 11.2197 1.74804 11.2459 1.88006 11.2459C2.01207 11.2459 2.14277 11.2197 2.26463 11.1689C2.38649 11.1182 2.49709 11.0438 2.59006 10.9501L6.83006 6.71005C6.92378 6.61709 6.99818 6.50649 7.04895 6.38463C7.09972 6.26277 7.12585 6.13206 7.12585 6.00005C7.12585 5.86804 7.09972 5.73733 7.04895 5.61547C6.99818 5.49362 6.92378 5.38301 6.83006 5.29005L2.59006 1.00005C2.49662 0.907371 2.3858 0.834046 2.26396 0.784281C2.14212 0.734517 2.01166 0.70929 1.88006 0.710051C1.74845 0.70929 1.61799 0.734517 1.49615 0.784281C1.37431 0.834046 1.2635 0.907371 1.17006 1.00005C0.983804 1.18741 0.879263 1.44087 0.879263 1.70505C0.879263 1.96924 0.983804 2.22269 1.17006 2.41005L4.71006 6.00005Z'
                    fill='currentColor'
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>
        <Footer />
      </>
    </React.Fragment>
  );
}

