import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import Image from 'next/image';
import {
  AlarmClockPlus,
  BookCheck,
  BookHeadphones,
  BotMessageSquare,
  ChartColumn,
  GraduationCap,
  Rocket,
  ScrollText,
  Star,
} from 'lucide-react';
import Link from 'next/link';

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
  ];
  return (
    <section className="mx-auto min-h-screen bg-blue-900">
      <section
        className="relative flex items-center min-h-screen justify-center px-4
       mx-auto bg-gradient-to-br from-blue-400 to-blue-800 text-white"
      >
        <div className="flex flex-col justify-center max-md:items-center container">
          <div className="flex flex-col max-md:items-center text-white rounded-2xl space-y-2 px-2 w-full max-md:text-center text-left">
            <h1 className="max-sm:text-3xl sm:text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
              Sua gestão educacional com inteligência
            </h1>
            <h2 className="subtitle mb-6 drop-shadow-md max-w-3xl">
              Transforme a experiência do ensino híbrido com automações inteligentes, tutoriais
              dinâmicos e controle total sobre seu ambiente virtual.
            </h2>
            <Link
              href={'/auth/login'}
              className="flex items-center justify-center gap-2 bg-yellow-400 w-full md:w-fit
           hover:bg-yellow-600 text-black  hover:text-white font-semibold 
           px-4 py-2 rounded-lg cursor-pointer transition-colors duration-300
           border border-white uppercase"
            >
              Comece agora
              <GraduationCap size={28} height={28} width={28} />
            </Link>
          </div>
        </div>
        <div className="relative max-lg:hidden">
          <Image
            src="/logo.png"
            alt="logo da TamanduAI"
            className="up w-[600px] h-full -z-100 drop-shadow-lg"
            width={300}
            height={300}
            priority
          />
          <div className="shadow-animate absolute bottom-32 left-4 w-[300px] z-100 h-10 bg-black rounded-full blur-xl"></div>
        </div>
        <div
          className="flex items-center justify-center bg-gradient-to-r from-green-500 to-yellow-500
         p-2 rounded-lg w-full max-w-xl max-md:hidden absolute 
         bottom-4 left-1/2 transform -translate-x-1/2 uppercase text-white font-bold gap-2"
        >
          <Star fill="white" />
          <span>Faça parte da inovação da educação Piauisense</span>
        </div>
      </section>
      <section className="md:hidden py-12 min-h-screen items-end bg-gray-300 justify-center mx-auto px-2">
        <div className="container flex flex-col max-lg:gap-12 p-6 rounded-lg shadow-xl bg-gray-100 mx-auto">
          <h2 className="font-bold text-center md:mb-2">Funcionalidades</h2>
          <div className="flex md:flex-row-reverse flex-col-reverse  gap-6 items-center justify-center w-full max-w-7xl mx-auto">
            <p className="lg:max-w-[70%] text font-bold max-md:text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum illum placeat, dolor ab
              molestiae laudantium dicta repudiandae molestias nostrum tempore.
            </p>
            <div
              className={`max-w-[300px] relative after:content-[''] after:top-[-4] after:left-1 after:z-[-10] 
            z-100 md:after:w-[101%] after:w-[100%] after:h-[100%] md:after:h-[104%] after:rotate-4 after:p-4
            after:absolute after:bg-blue-500 after:rounded-md`}
            >
              <Image
                height={400}
                width={400}
                alt="foto"
                className="rounded-md"
                src="/homer_f.gif"
              />
            </div>
          </div>
          <div className="flex md:flex-row flex-col-reverse gap-6 items-center justify-center w-full max-w-7xl mx-auto">
            <p className="lg:max-w-[70%] text font-bold max-md:text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum illum placeat, dolor ab
              molestiae laudantium dicta repudiandae molestias nostrum tempore.
            </p>
            <div
              className={`max-w-[300px] relative after:content-[''] after:top-[-4] after:left-1 after:z-[-10] 
            z-100 md:after:w-[101%] after:w-[100%] after:h-[100%] md:after:h-[104%] after:rotate-4 after:p-4
            after:absolute after:bg-blue-500 after:rounded-md`}
            >
              <Image
                height={400}
                width={400}
                alt="foto"
                className="rounded-md"
                src="/homer_f.gif"
              />
            </div>
          </div>
          <div className="flex md:flex-row-reverse flex-col-reverse gap-6 items-center justify-center w-full max-w-7xl mx-auto">
            <p className="lg:max-w-[70%] text font-bold max-md:text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum illum placeat, dolor ab
              molestiae laudantium dicta repudiandae molestias nostrum tempore.
            </p>
            <div
              className={`max-w-[300px] relative after:content-[''] after:top-[-4] after:left-1 after:z-[-10] 
            z-100 md:after:w-[101%] after:w-[100%] after:h-[100%] md:after:h-[104%] after:rotate-4 after:p-4
            after:absolute after:bg-blue-500 after:rounded-md`}
            >
              <Image
                height={400}
                width={400}
                alt="foto"
                className="rounded-md"
                src="/homer_f.gif"
              />
            </div>
          </div>
          <div className="flex md:flex-row flex-col-reverse gap-6 items-center justify-center w-full max-w-7xl mx-auto">
            <p className="lg:max-w-[70%] text font-bold max-md:text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum illum placeat, dolor ab
              molestiae laudantium dicta repudiandae molestias nostrum tempore.
            </p>
            <div
              className={`max-w-[300px] relative after:content-[''] after:top-[-4] after:left-1 after:z-[-10] 
            z-100 md:after:w-[101%] after:w-[100%] after:h-[100%] md:after:h-[104%] after:rotate-4 after:p-4
            after:absolute after:bg-blue-500 after:rounded-md`}
            >
              <Image
                height={400}
                width={400}
                alt="foto"
                className="rounded-md"
                src="/homer_f.gif"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col px-2 justify-center py-12 gap-12 bg-gradient-to-tr from-blue-400 to-blue-800 min-h-screen">
        <h2 className="max-w-[90%] mx-auto subtitle  font-bold text-center text-white drop-shadow-md mb-2">
          <strong className="text-yellow-400">Professores</strong> que já estão transformando suas
          aulas com a TamanduAI
        </h2>
        <div className="flex flex-wrap justify-center gap-6 w-full max-w-7xl mx-auto">
          {usersFeedbacks?.map((feedback, i) => (
            <div key={i} className="bg-white rounded-xl shadow-lg p-4 w-full max-w-sm mx-auto">
              {/* Topo: Foto + Nome + Estrelas */}
              <div className="flex justify-between items-center">
                {/* Foto + Nome */}
                <div className="flex gap-3 items-center">
                  <Image
                    src="https://randomuser.me/api/portraits/men/32.jpg" // ✅ URL de exemplo (pode variar por pessoa)
                    alt={`Foto de ${feedback.nome}`}
                    className="w-14 h-14 rounded-full object-cover border border-gray-300"
                    width={56}
                    height={56}
                  />
                  <p className="font-semibold text-gray-900">{feedback.nome}</p>
                </div>

                {/* Estrelas */}
                <div className="flex">
                  {Array.from({ length: feedback.stars }).map((_, i) => (
                    <span
                      key={i}
                      style={{ letterSpacing: '2px' }}
                      className="font-bold text-yellow-400 select-none"
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>

              {/* Texto do feedback */}
              <p className="bg-gray-400/10 rounded-lg p-2 w-fit max-md:text-center text-gray-700 mt-3 leading-relaxed">
                {feedback.feedback}
              </p>
            </div>
          ))}
        </div>
      </section>
      {/* Funcionalidades + Demo DESKTOP*/}
      <section className="min-h-screen hidden md:block bg-slate-200 px-4 py-12">
        <h2 className="font-bold text-center drop-shadow-md mb-12">Funcionalidades Exclusivas</h2>
        <div className="w-full max-w-7xl mx-auto bg-blue-500 p-6 rounded-xl shadow-lg shadow-black/60 text-white">
          <Tabs defaultValue="func1">
            <TabsList className="justify-center gap-4 bg-yellow-400 rounded-lg">
              <TabsTrigger value="func1" style={{ cursor: 'pointer' }}>
                <BookCheck />
                Cadastro de Aluno
              </TabsTrigger>
              <TabsTrigger value="func2" style={{ cursor: 'pointer' }}>
                <ChartColumn />
                Geração de Relatórios
              </TabsTrigger>
              <TabsTrigger value="func3" style={{ cursor: 'pointer' }}>
                <ScrollText />
                Envio Automático de Notas
              </TabsTrigger>
            </TabsList>

            <TabsContent value="func1" className="text-xl">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h4 className="font-bold drop-shadow-lg mb-2">Cadastro simplificado de alunos</h4>
                  <p className="subtitle">
                    Adicione alunos com poucos cliques, de forma rápida e sem complicações.
                  </p>
                </div>
                <div className="rounded-xl overflow-hidden">
                  {/* Substitua a tag abaixo por um componente de vídeo, gif ou imagem animada */}
                  <div className="w-full aspect-video flex items-center justify-center">
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
                  <h4 className="font-bold drop-shadow-lg mb-2">Relatórios detalhados</h4>
                  <p className="subtitle">
                    Visualize relatórios completos com desempenho, frequência e mais.
                  </p>
                </div>
                <div className="rounded-xl overflow-hidden">
                  <div className="w-full aspect-video flex items-center justify-center ">
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
                  <h4 className="font-bold drop-shadow-lg mb-2">Notas automatizadas</h4>
                  <p className="subtitle">
                    Notas lançadas automaticamente com integração aos sistemas acadêmicos.
                  </p>
                </div>
                <div className="rounded-xl overflow-hidden">
                  <div className="w-full aspect-video flex items-center justify-center">
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

      <section className="px-4 bg-gradient-to-tr from-blue-400 to-blue-800 text-white py-6">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">Assinatura</h2>
          <p className="max-w-3xl mx-auto mb-6 font-bold md:text-xl">
            A <strong>TamanduAI</strong> oferece a melhor solução para sua instituição de ensino,
            com um plano acessível e recursos inovadores. Descubra como nossa plataforma pode
            transformar sua gestão educacional.
          </p>
        </div>
        <div className="grid md:grid-cols-1 gap-8 w-full max-w-7xl mx-auto justify-items-center">
          {['Básico'].map((plan) => (
            <Card
              key={plan}
              className={`
            p-0
            rounded-2xl shadow-md 
            border-3 border-yellow-500 min-h-[364px]
            hover:shadow-lg bg-slate-200
           text-black transition-all duration-300`}
            >
              <CardContent className="flex flex-col justify-between h-full py-2">
                <div className="flex flex-col gap-1 text-start">
                  <h4 className="text-xl font-semibold">Plano {plan}</h4>
                  <p className="text-center text max-w-[200px]">
                    Transforme a sua produtividade com nossa assinatura
                  </p>
                </div>
                <div className="text-center flex flex-col items-center gap-2 py-4">
                  <Button
                    className="
                  flex items-center
                cursor-pointer w-fit hover:text-white mx-auto bg-yellow-300 hover:bg-yellow-500
                text-black text-lg px-3 py-3 rounded-full
                "
                  >
                    <Rocket />
                    Assinar
                  </Button>
                  <h4 className="font-bold text-2xl">
                    <span className="text-xl">12x</span> R$25,50
                  </h4>
                </div>
                <p className="w-full text-start text-lg font-bold">Recursos principais:</p>
                <ul
                  className="flex flex-col justify-center 
                items-center text-center gap-4 m-1"
                >
                  <li className="flex items-center gap-2 text">
                    <BookHeadphones strokeWidth={1.6} />
                    <p className="drop-shadow-2xl">Lorem ipsum dolor sit.</p>
                  </li>
                  <li className="flex items-center gap-2 text">
                    <AlarmClockPlus strokeWidth={1.6} />
                    <p className="drop-shadow-2xl">Lorem ipsum dolor sit.</p>
                  </li>
                  <li className="flex items-center gap-2 text">
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
