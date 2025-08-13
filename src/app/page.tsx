import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import HomePageTemplate from '@/templates/home/page';
import Main from '@/components/layout/Main';

export default function Home() {
  return (
    <>
      <Header />
      <Main
        props="
    flex flex-col items-center
    min-h-screen bg-blue-200"
      >
        <HomePageTemplate />
      </Main>
      <Footer />
    </>
  );
}
