import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import Image from 'next/image';
import FeedbackCarousel from '@/components/ui/Carousel';
import {
  AlarmClockPlus,
  BookHeadphones,
  BotMessageSquare,
  GraduationCap,
  Rocket,
} from 'lucide-react';

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
    <section className="mx-auto min-h-screen bg-blue-900">
      <section className="flex items-center min-h-screen justify-center mx-auto bg-slate-300 text-white">
        {/* Coluna da Esquerda: Texto */}
        <div className="text-white bg-blue-800 p-4 rounded-2xl max-w-lg max-md:text-center">
          <h2 className="md:text-4xl text-3xl font-bold mb-4 drop-shadow-lg">
            Sua gestão educacional com inteligência
          </h2>
          <p className="md:text-3xl text-2xl mb-6 drop-shadow-md">
            Transforme a experiência do ensino híbrido com automações inteligentes, tutoriais
            dinâmicos e controle total sobre seu ambiente virtual.
          </p>
          <button
            className="flex items-center gap-2 bg-yellow-500
           hover:bg-yellow-600 text-black hover:text-white font-semibold 
           px-4 py-2 rounded-lg cursor-pointer transition-colors duration-300
           border border-white shadow-lg shadow-black/50"
          >
            Comece agora
            <GraduationCap size={28} height={28} width={28} />
          </button>
        </div>
        {/* Coluna da Direita: Imagem */}
        <div className="max-lg:hidden">
          <Image
            src="/logo.png"
            alt="TamanduAI-educacional"
            className="w-full h-full drop-shadow-lg"
            width={300}
            height={300}
          />
        </div>
      </section>
      <section className="w-full flex flex-col items-end bg-slate-300 justify-center mx-auto px-4 py-6">
        <div className="items-center max-w-2xl text-white shadow-2xl bg-blue-800 p-4 space-y-4 rounded-lg">
          <h2 className="text-3xl font-bold text-end  border-b-2 pb-4 border-yellow-400">
            O que é a TamanduAI?
          </h2>
          <p className="text-xl text-justify drop-shadow-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex id reiciendis error. Animi
            voluptate amet magnam similique assumenda adipisci facere, culpa nemo odio? dolor optio,
            non officiis dolorem perferendis cumque, magnam laborum mollitia excepturi maxime
            voluptatum, atque doloribus!
          </p>
        </div>
      </section>
      <section className="bg-blue-800 py-4">
        <h2 className="text-3xl font-bold text-center text-white mb-2 drop-shadow-md">
          Avaliações dos Usuários
        </h2>
        <FeedbackCarousel feedbacks={usersFeedbacks} />
      </section>
      {/* Funcionalidades + Demo DESKTOP*/}
      <section className="py-12 hidden md:block bg-slate-300 px-4">
        <h3 className="text-3xl font-bold text-center text-black drop-shadow-md mb-12">
          Funcionalidades em Ação
        </h3>
        <div className="max-w-5xl mx-auto bg-slate-300 border-2 border-blue-800 p-6 rounded-xl shadow-lg shadow-black/60">
          <Tabs defaultValue="func1">
            <TabsList className="justify-center gap-4 bg-blue-700 rounded-lg">
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
      <section className="py-12 px-4 bg-slate-300 text-black">
        <div>
          <h2 className="text-2xl font-bold text-center mb-6">Planos para Todos os Perfis</h2>
          <p className="text-center max-w-2xl mx-auto mb-6 font-medium md:text-xl">
            A <strong>TamanduAI</strong> oferece planos flexíveis, com um bom custo benefício, para
            atender desde usuários iniciantes até instituições completas. Escolha o plano ideal para
            você!
          </p>
        </div>
        <div className="grid md:grid-cols-1 gap-8 max-w-6xl justify-items-center mx-auto">
          {['Básico'].map((plan) => (
            <Card
              key={plan}
              className={`
            p-0
            rounded-2xl shadow-md 
            border-3 border-yellow-500 min-h-[364px] min-w-[360px]
            hover:shadow-lg bg-slate-200
           text-black transition-all duration-300`}
            >
              <CardContent className="flex flex-col justify-between h-full py-4">
                <div className="text-start">
                  <h4 className="text-xl font-semibold">Plano {plan}</h4>
                  <p>
                    Ideal para{' '}
                    {plan === 'Básico'
                      ? 'usuários iniciantes'
                      : plan === 'Pro'
                        ? 'pequenas equipes'
                        : 'instituições completas'}
                    .
                  </p>
                </div>
                <div className="text-center flex flex-col items-center gap-2 py-2">
                  <Button
                    className="
                  flex items-center
                cursor-pointer w-fit hover:text-white mx-auto bg-yellow-500 hover:bg-yellow-600
                text-black text-lg px-6 py-3 rounded-full
                "
                  >
                    <Rocket />
                    Assinar
                  </Button>
                  <h4 className="font-bold text-2xl">
                    <span className="text-xl">12x</span> R$25,50
                  </h4>
                </div>
                <p className="w-full text-start text-lg font-medium">Recursos principais:</p>
                <ul
                  className="flex flex-col justify-center 
                items-center text-center gap-4 m-1"
                >
                  <li className="flex items-center gap-2 text-lg">
                    <BookHeadphones strokeWidth={1.6} />
                    <p className="drop-shadow-2xl">Lorem ipsum dolor sit.</p>
                  </li>
                  <li className="flex items-center gap-2 text-lg">
                    <AlarmClockPlus strokeWidth={1.6} />
                    <p className="drop-shadow-2xl">Lorem ipsum dolor sit.</p>
                  </li>
                  <li className="flex items-center gap-2 text-lg">
                    <BotMessageSquare strokeWidth={1.6} />
                    <p className="drop-shadow-2xl">Lorem ipsum dolor sit.</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </section>
  );
}
