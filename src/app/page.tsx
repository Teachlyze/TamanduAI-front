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
    min-h-screen bg-blue-200"
      >
        <HomePageTemplate />
      </Main>
      <Footer prop="bg-gradient-to-br from-blue-400 to-blue-800" />
    </>
  );
}
