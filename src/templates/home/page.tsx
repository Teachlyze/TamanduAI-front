import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import Image from 'next/image';
import FeedbackCarousel from '@/components/ui/Carousel';

export default function HomePageTemplate() {
  const usersFeedbacks = [
    {
      nome: 'João Silva',
      feedback:
        'A TamanduAI revolucionou a forma como gerenciamos nossa escola. As automações são incríveis!',
      stars: 5,
    },
    {
      nome: 'Ana Souza',
      feedback:
        'Excelente plataforma! As funcionalidades são práticas e facilitam muito o dia a dia dos professores.',
      stars: 5,
    },
    {
      nome: 'Pedro Santos',
      feedback:
        'A integração com o sistema acadêmico é perfeita. Nunca foi tão fácil gerenciar notas e frequência.',
      stars: 4,
    },
    {
      nome: 'Luiza Martins',
      feedback:
        'A TamanduAI é uma ferramenta indispensável para qualquer instituição de ensino. Recomendo!',
      stars: 5,
    },
    {
      nome: 'Roberto Lima',
      feedback:
        'A plataforma é intuitiva e fácil de usar. As automações economizam muito tempo na gestão escolar.',
      stars: 4,
    },
    {
      nome: 'Fernanda Costa',
      feedback:
        'Com a TamanduAI, conseguimos personalizar nosso ambiente virtual de aprendizagem de forma simples.',
      stars: 5,
    },
    {
      nome: 'Lucas Almeida',
      feedback:
        'A TamanduAI é a solução perfeita para escolas que buscam inovação e eficiência na gestão educacional.',
      stars: 5,
    },
    {
      nome: 'Maria Oliveira',
      feedback:
        'Com a TamanduAI, conseguimos otimizar nosso tempo e focar no que realmente importa: o aprendizado dos alunos.',
      stars: 4,
    },
    {
      nome: 'Carlos Pereira',
      feedback:
        'A plataforma é intuitiva e fácil de usar. Recomendo para qualquer instituição de ensino.',
      stars: 5,
    },
    {
      nome: 'Ana Costa',
      feedback:
        'A TamanduAI transformou nossa gestão educacional. As funcionalidades são práticas e eficientes.',
      stars: 5,
    },
  ];
  return (
    <section className="min-h-screen bg-slate-100">
      {/* Hero section */}
      {/* Caso alterar o design colocar um px-4 para cada tag principal */}
      <section className="relative flex items-center justify-center bg-gradient-to-b from-slate-100 to-green-400 gap-8 min-h-screen px-8">
        {/* Coluna da Esquerda: Texto */}
        <div className="text-black">
          <h2 className="text-4xl font-bold mb-4">Sua gestão educacional com inteligência</h2>
          <p className="text-2xl mb-6">
            Transforme a experiência do ensino híbrido com automações inteligentes, tutoriais
            dinâmicos e controle total sobre seu ambiente virtual.
          </p>
          <Button
            className="
            text-lg text-white px-4 py-3 
            cursor-pointer 
            bg-blue-700 
            hover:bg-green-500 shadow-md
            hover:text-slate-100
            transition-all duration-300
          "
          >
            Comece agora
          </Button>
        </div>

        {/* Coluna da Direita: Imagem */}
        <div className="relative max-lg:hidden">
          <Image
            src="/logo.png"
            alt="TamanduAI-educacional"
            className="w-full h-full"
            width={500}
            height={578}
            // opcional, se quiser dar prioridade a essa imagem
          />
        </div>
      </section>
      <section className="py-6 bg-gradient-to-t from-blue-600 to-green-600">
        <h2 className="text-2xl font-bold text-center text-white mb-6">
          O que nossos usuários estão dizendo
        </h2>
        <FeedbackCarousel feedbacks={usersFeedbacks} />
      </section>
      {/* Funcionalidades + Demo DESKTOP*/}
      <section className="py-12 hidden md:block bg-gradient-to-b from-blue-500 to-yellow-300 px-4">
        <h3 className="text-3xl font-bold text-center mb-12">Funcionalidades em Ação</h3>
        <div className="max-w-5xl mx-auto bg-slate-200 border p-6 rounded-xl shadow-xl">
          <Tabs defaultValue="func1">
            <TabsList className="justify-center gap-4 bg-gray-400 shadow-inner rounded-lg">
              <TabsTrigger value="func1" style={{ cursor: 'pointer' }}>
                Cadastro de Aluno
              </TabsTrigger>
              <TabsTrigger value="func2" style={{ cursor: 'pointer' }}>
                Geração de Relatórios
              </TabsTrigger>
              <TabsTrigger value="func3" style={{ cursor: 'pointer' }}>
                Envio Automático de Notas
              </TabsTrigger>
            </TabsList>

            <TabsContent value="func1" className="mt-6 text-xl">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h4 className="font-semibold mb-2">Cadastro simplificado de alunos</h4>
                  <p>Adicione alunos com poucos cliques, de forma rápida e sem complicações.</p>
                </div>
                <div className="rounded-xl overflow-hidden shadow-md border border-gray-600 shadow-gray-600 ">
                  {/* Substitua a tag abaixo por um componente de vídeo, gif ou imagem animada */}
                  <div className="w-full aspect-video bg-black flex items-center justify-center text-white">
                    <img
                      src="/homer_f.gif"
                      alt="TamanduAI-educacional"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="func2" className="mt-6 text-xl">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h4 className="text-xl font-semibold mb-2">Relatórios detalhados</h4>
                  <p>Visualize relatórios completos com desempenho, frequência e mais.</p>
                </div>
                <div className="rounded-xl overflow-hidden shadow-md border border-gray-600 shadow-gray-600 ">
                  <div className="w-full aspect-video bg-black flex items-center justify-center text-white ">
                    <img
                      src="/homer_f.gif"
                      alt="TamanduAI-educacional"
                      className="w-full h-full object-cover"
                    />{' '}
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="func3" className="mt-6 text-xl">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h4 className="text-xl font-semibold mb-2">Notas automatizadas</h4>
                  <p>Notas lançadas automaticamente com integração aos sistemas acadêmicos.</p>
                </div>
                <div className="rounded-xl overflow-hidden shadow-md border border-gray-600 shadow-gray-600 ">
                  <div className="w-full aspect-video bg-black flex items-center justify-center text-white">
                    <img
                      src="/homer_f.gif"
                      alt="TamanduAI-educacional"
                      className="w-full h-full object-cover"
                    />{' '}
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      {/* Funcionalidades + Demo MOBILE */}
      <section className="hidden max-md:block py-12 bg-green-500 px-6 text-white  ">
        <h3 className="text-2xl font-bold text-center mb-12">Funcionalidades</h3>
        <ul className="space-y-6">
          <li className="max-w-[360px] h-full flex flex-col items-center justify-center mx-auto">
            <p className="text-lg font-semibold mb-2">Cadastro de Aluno</p>
            <Image
              src="/homer_f.gif"
              alt="TamanduAI-educacional"
              width={500}
              height={300}
              className="rounded-xl object-cover border-2 border-gray-700 shadow-lg"
            />
            <p className="text-sm mt-2 bg-gray-600/30 p-2 rounded-lg text-center font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit atque tempore libero,
              labore rerum vero! Vel aliquid facilis debitis non nisi eum quam praesentium
              consequuntur qui, nam, nemo reiciendis animi?
            </p>
          </li>
          <li className="max-w-[360px] h-full flex flex-col items-center justify-center mx-auto">
            <p className="text-lg font-semibold mb-2">Plano Pro</p>
            <Image
              src="/homer_f.gif"
              alt="TamanduAI-educacional"
              width={500}
              height={300}
              className="rounded-xl object-cover border-2 border-gray-700 shadow-lg"
            />
            <p className="text-sm  mt-2 bg-gray-600/30 p-2 rounded-lg text-center font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit atque tempore libero,
              labore rerum vero! Vel aliquid facilis debitis non nisi eum quam praesentium
              consequuntur qui, nam, nemo reiciendis animi?
            </p>
          </li>
          <li className="max-w-[360px] h-full flex flex-col items-center justify-center mx-auto">
            <p className="text-lg font-semibold mb-2">Plano Empresarial</p>
            <Image
              src="/homer_f.gif"
              alt="TamanduAI-educacional"
              width={500}
              height={300}
              className="rounded-xl object-cover border-2 border-gray-700 shadow-lg"
            />
            <p className="text-sm bg-gray-600/30 p-2 rounded-lg mt-2 text-center font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit atque tempore libero,
              labore rerum vero! Vel aliquid facilis debitis non nisi eum quam praesentium
              consequuntur qui, nam, nemo reiciendis animi?
            </p>
          </li>
        </ul>
      </section>
      {/* Planos */}
      <section className="py-12 px-4 bg-gradient-to-b from-yellow-300 to-black text-white">
        <div>
          <h2 className="text-2xl font-bold text-center mb-6">Planos para Todos os Perfis</h2>
          <p className="text-center max-w-2xl mx-auto mb-6 md:text-xl">
            A <strong>TamanduAI</strong> oferece planos flexíveis, com um bom custo benefício, para
            atender desde usuários iniciantes até instituições completas. Escolha o plano ideal para
            você!
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {['Básico', 'Pro', 'Empresarial'].map((plan) => (
            <Card
              key={plan}
              className="
            rounded-2xl shadow-md 
            border-2 border-yellow-500 
            hover:shadow-lg bg-slate-200 hover:bg-blue-800 hover:text-white
            transition-all duration-300"
            >
              <CardContent className="flex flex-col p-6 ">
                <h4 className="text-xl font-semibold mb-2">Plano {plan}</h4>
                <p className="mb-4">
                  Ideal para{' '}
                  {plan === 'Básico'
                    ? 'usuários iniciantes'
                    : plan === 'Pro'
                      ? 'pequenas equipes'
                      : 'instituições completas'}
                  .
                </p>
                <div className="mb-4 w-fit mx-auto text-center font-semibold space-y-6 border-4 p-4 border-blue-200 rounded-lg">
                  <p>Lorem ipsum dolor sit.</p>
                  <p>Lorem ipsum dolor sit.</p>
                  <p>Lorem ipsum dolor sit.</p>
                  <p>Lorem ipsum dolor sit.</p>
                </div>
                <Button
                  className="
                cursor-pointer w-fit hover:text-white mx-auto bg-yellow-400 hover:bg-yellow-600
                text-black text-lg px-6 py-3 rounded-full
                "
                >
                  Assinar
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </section>
  );
}
