import Footer from '@/components/layout/Footer';
import HomePageTemplate from '@/templates/home/page';
import Main from '@/components/layout/Main';
import Header from '@/components/layout/Header';
export default function Home() {
  return (
    <>
      <Header />
      <Main
        props="
    flex flex-col items-center
    min-h-screen"
      >
        <HomePageTemplate />
      </Main>
      <Footer prop="bg-black" />
    </>
  );
}
