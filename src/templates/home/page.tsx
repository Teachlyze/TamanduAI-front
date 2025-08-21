import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import Image from 'next/image';
import {
  AlarmClockPlus,
  BookHeadphones,
  BotMessageSquare,
  GraduationCap,
  Rocket,
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
      <section
        className="flex items-center min-h-screen justify-center
       mx-auto bg-gradient-to-br from-blue-400 to-blue-800  text-white"
      >
        <div className="flex flex-col justify-center max-md:items-center max-w-xl gap-4">
          <h2
            className="flex items-center gap-2 border border-yellow-400 bg-yellow-400 font-bold
            p-[2px] px-2 text-[9px] sm:text-xs rounded-full w-fit text-black uppercase max-w-[90%]"
          >
            <Star fill="white" className="text-white p-0.6" />
            Faça parte da inovação da educação do Piauí!
          </h2>
          <div className="flex flex-col max-md:items-center text-white rounded-2xl space-y-2 px-2 w-full max-md:text-center text-left">
            <h1 className="title font-bold mb-1 drop-shadow-lg">
              Sua gestão educacional com inteligência
            </h1>
            <p className="subtitle mb-6 drop-shadow-md">
              Transforme a experiência do ensino híbrido com automações inteligentes, tutoriais
              dinâmicos e controle total sobre seu ambiente virtual.
            </p>
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

      <section className="py-12 min-h-screen items-end bg-gray-300 justify-center mx-auto px-2">
        <div className="w-fit flex flex-col max-md:gap-12 p-6 rounded-lg shadow-xl bg-gray-100 mx-auto">
          <h3 className="font-bold text-center title">Funcionalidades</h3>
          <div className="flex md:flex-row-reverse flex-col-reverse  gap-6 items-center justify-center max-w-5xl mx-auto">
            <p className="font-bold max-md:text-justify">
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
          <div className="flex md:flex-row flex-col-reverse gap-6 items-center justify-center max-w-5xl mx-auto">
            <p className="font-bold max-md:text-justify">
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
          <div className="flex md:flex-row-reverse flex-col-reverse gap-6 items-center justify-center max-w-5xl mx-auto">
            <p className="font-bold max-md:text-justify">
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
          <div className="flex md:flex-row flex-col-reverse gap-6 items-center justify-center max-w-5xl mx-auto">
            <p className="font-bold max-md:text-justify">
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

      <section className="flex flex-col justify-center py-12 gap-18 bg-gradient-to-tr from-blue-400 to-blue-800 min-h-screen">
        <h3 className="max-w-[90%] mx-auto subtitle  font-bold text-center text-white drop-shadow-md mb-6">
          <strong className="text-yellow-400">Professores</strong> que já estão transformando suas
          aulas com a TamanduAI
        </h3>
        {usersFeedbacks?.map((feedback, i) => (
          <div key={i} className="max-w-5xl mx-auto">
            <div>
              <p></p>
              <span>{feedback.stars}</span>
            </div>
          </div>
        ))}
      </section>
      {/* Funcionalidades + Demo DESKTOP*/}
      <section className="min-h-screen hidden md:block bg-slate-200 px-4 py-12">
        <h3 className="title font-bold text-center drop-shadow-md mb-12">
          Funcionalidades Exclusivas
        </h3>
        <div className="max-w-5xl mx-auto bg-blue-500 p-6 rounded-xl shadow-lg shadow-black/60 text-white">
          <Tabs defaultValue="func1">
            <TabsList className="justify-center gap-4 bg-yellow-400 rounded-lg">
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
                  <h4 className="text-xl font-bold drop-shadow-lg mb-2">
                    Cadastro simplificado de alunos
                  </h4>
                  <p>Adicione alunos com poucos cliques, de forma rápida e sem complicações.</p>
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
                  <h4 className="text-xl font-bold drop-shadow-lg mb-2">Relatórios detalhados</h4>
                  <p>Visualize relatórios completos com desempenho, frequência e mais.</p>
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
                  <h4 className="text-xl font-bold drop-shadow-lg mb-2">Notas automatizadas</h4>
                  <p>Notas lançadas automaticamente com integração aos sistemas acadêmicos.</p>
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

      <section className="px-4 bg-slate-200 text-black py-6">
        <div>
          <h3 className="text-2xl font-bold text-center mb-6">Planos para Todos os Perfis</h3>
          <p className="text-center max-w-2xl mx-auto mb-6 font-bold md:text-xl">
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
            border-3 border-yellow-500 min-h-[364px]
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
                <p className="w-full text-start text-lg font-bold">Recursos principais:</p>
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
