import Header from '@/components/layout/Header';
import Main from '@/components/layout/Main';
import ContactPageTemplate from '@/templates/contact/page';
export default function Contato() {
  return (
    <>
      <Header />
      <Main props="flex w-full justify-center min-h-screen bg-blue-200 px-4">
        <ContactPageTemplate />
      </Main>
    </>
  );
}
