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

        {/* 주요 서비스 */}
        <section className="max-w-7xl mx-auto px-4 mt-12">
          <ServiceSection />
        </section>

        {/* 시정 소식 */}
        <section className="max-w-7xl mx-auto px-4 mt-20">
          <NewsSection />
        </section>

        {/* 시정 정보 */}
        <section className="max-w-7xl mx-auto px-4 mt-20">
          <InfoSection />
        </section>
      </main>

      {/* 하단 푸터 */}
      <Footer />
    </div>
  );
}
