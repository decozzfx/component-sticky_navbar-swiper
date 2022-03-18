import Header from '../components/Header'
import { Navigation, Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { testimonial } from '../data/testimonial'
import Image from 'next/image'

import 'swiper/css/bundle';
import 'swiper/css'

export default function Home() {
   return (
      <div>
         <Header />
         <section className='py-20 px-20'>
            <div className="py-20 space-y-10 rounded-xl" style={{ backgroundColor : '#EDFCFD' }}>
               <div className="flex  items-center justify-between px-10 ">
                  <div className="flex-none space-y-2 w-4/12">
                     <h5 className='font-bold text-2xl'>TESTIMONIAL</h5>
                     <h3 className='text-xl'>Apa kata orang-orang yang membaca buku ini?</h3>
                  </div>
                  <p className='w-6/12'>
                  Kalo seandainya kamu belum percaya dengan buku ini maka tidak
                  apa-apa, karena yang patut kamu percayai adalah Tuhan. Tapi,
                  mungkin beberapa ulasan ini bisa membangkitkan hasratmu untuk
                  membeli buku ini.
                  </p>
               </div>            
               <Swiper 
                  modules={[Navigation, Pagination, Autoplay]}
                  autoplay
                  slidesPerView={3}
                  spaceBetween={30}
                  loop={true}
                  className='w-[100%] h-[100%]'
                  pagination={{ clickable: true }}
                  navigation
               >
                  { testimonial.map(({ name, value, avatar, status }) => (
                     <SwiperSlide key={name} className='text-gray-500 p-8 mx-8 space-y-6 bg-white rounded-xl'>
                        <p className='text-sm'>{value}</p>                                                                    
                        <div className="flex items-center space-x-4">
                           <Image src={avatar} width='50px' height='50px' layout='fixed' alt='ava' />
                        </div>
                        <div>
                           <h5 className='text-md'>{name}</h5>
                           <p className='text-sm'>{status}</p>
                        </div>
                     </SwiperSlide>
                  )) }
               </Swiper>
            </div>
         </section>
      </div>
   )
}
