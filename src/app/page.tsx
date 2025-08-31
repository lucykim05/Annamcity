'use client';

import Navbar from '@/components/common/Navbar';
import Carousel from '@/components/common/Carousel';
import ServiceSection from '@/components/features/home/ServiceSection';
import NewsSection from '@/components/features/home/NewsSection';
import InfoSection from '@/components/features/home/Infosection';
import Footer from '@/components/common/Footer';

export default function Page() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* 상단 네비게이션 */}
      <Navbar />

      <main className="flex-1">
        {/* 메인 비주얼 */}
        <section className="mt-2">
          <Carousel />
        </section>

        <section className="max-w-7xl mx-auto px-4 mt-12">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 md:basis-2/3 bg-white rounded-xl shadow p-6">
              <ServiceSection />
            </div>

            <div className="flex-1 md:basis-1/3 bg-white rounded-xl shadow p-6">
              <InfoSection />
            </div>
          </div>
        </section>

        {/* 시정 소식 */}
        <section className="max-w-7xl mx-auto px-4 mt-20">
          <NewsSection />
        </section>
      </main>

      {/* 하단 푸터 */}
      <Footer />
    </div>
  );
}
