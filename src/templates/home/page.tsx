import React from 'react';
import { Button } from '@/components/ui/button';
import { Bot, ChartNoAxesCombined, ClockPlus, ListChecks, Stars } from 'lucide-react';

export default function HomePageTemplate() {
  const resources = [
    {
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, aperiam. Nisi in sit doloremque odit illum aliquid amet vero magni.',
      icon: <Bot size={94} className="bg-black/80 p-2 rounded-xl text-green-500" />,
    },
    {
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, aperiam. Nisi in sit doloremque odit illum aliquid amet vero magni.',
      icon: <ChartNoAxesCombined size={94} className="bg-black/80 p-2 rounded-xl text-white" />,
    },
    {
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, aperiam. Nisi in sit doloremque odit illum aliquid amet vero magni.',
      icon: <ListChecks size={94} className="bg-black/80 p-2 rounded-xl text-blue-500" />,
    },
    {
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, aperiam. Nisi in sit doloremque odit illum aliquid amet vero magni.',
      icon: <ClockPlus size={94} className="bg-black/80 p-2 rounded-xl text-yellow-500" />,
    },
  ];
  const usersFeedbacks = [
    {
      nome: 'Lucia costa',
      feedback:
        'A TamanduAI otimiza muito o tempo usado em aulas online e nas avaliações de alunos!',
      stars: 5,
    },
    {
      nome: 'Lucia costa',
      feedback:
        'A TamanduAI otimiza muito o tempo usado em aulas online e nas avaliações de alunos!',
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
    <section className="mx-auto">
      <section className="container px-4 py-4 mx-auto grid grid-cols-2 max-lg:grid-cols-1 items-center-safe w-full gap-12 min-h-screen">
        <div className="col-span-1 flex flex-col max-lg:text-center gap-4">
          <h1 className="title font-medium">Transforme sua produtividade docente com IA</h1>
          <div className="flex flex-col gap-4">
            <h2>
              Crie turmas, gerencie aulas, avalie e ensine seus alunos de uma maneira rápida e
              personalizada, com inteligência artificial.
            </h2>
            <div className="flex max-md:flex-col items-center gap-4 mt-1">
              <Button className="md:flex-1 w-full" variant="ctaButton">
                Comece agora!
              </Button>
              <Button
                variant="default"
                className="text-black !bg-blue-600 md:flex-1 w-full rounded-full border border-white/40 backdrop-blur-3xl"
              >
                Conheça nossos recursos
              </Button>
            </div>
          </div>
        </div>
        <div className="col-span-1 bg-white h-92 w-full rounded-xl aspect-video">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/5qJp6xlKEug?si=ZNj_X_zsH01XTxSm"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
      </section>
      <section className="bg-black/80 dark:bg-white min-h-screen flex flex-col justify-center items-center py-6">
        <h3 className="text-3xl text-white dark:text-black font-medium mb-4">Recursos</h3>
        <div className="flex flex-wrap justify-center gap-6 mx-auto p-4">
          {resources.map((resource, key) => (
            <div
              key={key}
              className="flex flex-col max-lg:items-center max-w-sm gap-4 bg-white dark:bg-black rounded-xl p-4"
            >
              {resource.icon}
              <p className="font-medium max-lg:text-center">{resource.text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="container mx-auto min-h-screen flex flex-col gap-4 justify-center items-center dark:bg-black/20 py-6">
        <h3 className="text-3xl text-center mb-4">Depoimentos</h3>
        <div className="flex flex-wrap justify-center gap-4 px-2">
          {usersFeedbacks.map((feedback, key) => (
            <div
              key={key}
              className="dark:text-black p-4 border border-black bg-white rounded-xl max-w-[502px]"
            >
              <div className="font-medium mb-2 border-b border-gray-400 pb-2 flex justify-between">
                <p>{feedback.nome}</p>
                <div className="flex gap-2">
                  <p>{feedback.stars}</p>
                  <Stars className="text-yellow-500 fill-yellow-500" />
                </div>
              </div>
              <p className="font-medium">{feedback.feedback}</p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
