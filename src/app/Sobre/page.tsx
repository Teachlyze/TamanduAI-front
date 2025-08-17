import Header from '@/components/layout/Header';
import Main from '@/components/layout/Main';
import Footer from '@/components/layout/Footer';
import AboutPageTemplate from '@/templates/about/page';

export default function Sobre() {
  return (
    <>
      <Header />
      <Main
        props="
    flex flex-col
    min-h-screen bg-blue-200 w-full p-4"
      >
        <AboutPageTemplate />
      </Main>
      <Footer prop="bg-blue-200" />
    </>
  );
}
