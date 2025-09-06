'use client';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import {
  Calendar,
  CalendarRange,
  ChartColumn,
  ChartSpline,
  Clock,
  MessageCircleMore,
  Plus,
  Tickets,
} from 'lucide-react';
import Link from 'next/link';
export default function DashboardTemplate() {
  const progress = [40, 60, 80];
  const borderColors = ['border-yellow-500', 'border-blue-500', 'border-green-500'];
  const subjects = [
    {
      name: 'Turma - 9º Ano',
      nextClass: 'Segunda-feira, 12:30',
      status: 'Ativa',
      progress: 'Status de progressão da tarefa',
    },
    {
      name: 'Turma - 9º Ano',
      nextClass: 'Segunda-feira, 12:30',
      status: 'Ativa',
      progress: 'Status de progressão da tarefa',
    },
    {
      name: 'Turma - 9º Ano',
      nextClass: 'Segunda-feira, 12:30',
      status: 'Ativa',
      progress: 'Status de progressão da tarefa',
    },
    {
      name: 'Turma - 9º Ano',
      nextClass: 'Segunda-feira, 12:30',
      status: 'Ativa',
      progress: 'Status de progressão da tarefa',
    },
    {
      name: 'Turma - 9º Ano',
      nextClass: 'Segunda-feira, 12:30',
      status: 'Ativa',
      progress: 'Status de progressão da tarefa',
    },
  ];
  const informations = [
    { title: 'Tarefas pendentes', value: 6, icon: <ChartSpline />, color: 'text-orange-500' },
    { title: 'Aulas hoje', value: 12, icon: <CalendarRange />, color: 'text-green-600' },
    { title: 'Novas mensagens', value: 3, icon: <MessageCircleMore />, color: 'text-purple-700' },
    { title: 'Eventos', value: 2, icon: <Tickets />, color: 'text-red-600' },
  ];
  return (
    <section className="flex w-full px-2 mt-4">
      <section className="grid grid-cols-4 max-lg:grid-cols-1 p-1 space-y-6 md:gap-6 w-full ">
        <div className="col-span-3 rounded-lg">
          <div>
            <div className="space-y-1">
              <h1 className="font-medium">Bem vindo de volta, Usuário!</h1>
              <p className="text-lg!">Aqui está o resumo do seu dia</p>
            </div>
            <div className="flex max-lg:flex-col gap-2 md:gap-4 w-full mt-4">
              {informations.map((info, index) => (
                <div
                  key={index}
                  className="flex justify-start items-center max-md:items-center gap-2 p-4 w-full h-34 max-md:h-24
              dashboardCardBackground rounded-xl"
                >
                  <span className={`${info.color} bg-white dark:bg-black/10 p-1 rounded-lg`}>
                    {info.icon}
                  </span>
                  <div className="flex flex-col -space-y-1">
                    <p className="font-medium text-base!">{info.title}</p>
                    <p className="font-medium text-xl!">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full rounded-lg">
            <div className="flex justify-between items-center mt-6 mx-1">
              <h2 className="font-medium text-xl!">Suas Turmas</h2>
              <Link href={'/'} className="addButton">
                <Plus width={20} height={20} />
                Nova turma
              </Link>
            </div>
            <div
              className="rounded-lg meu-scroll flex flex-col gap-4 h-[60vh] mt-4 
            overflow-y-auto p-4"
            >
              {subjects.map((subject, index) => (
                <div
                  key={index}
                  className={`border-l-8 border ${borderColors[index % borderColors.length]} flex flex-col justify-between p-4 gap-4 max-md:min-w-[200px] min-h-42 dashboardCardBackground rounded-xl`}
                >
                  <div className="flex flex-col">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium">{subject.name}</h4>
                      <span className="p-1 bg-blue-400 font-medium text-white rounded-sm text-sm!">
                        {subject.status}
                      </span>
                    </div>
                    <p className="text-base!  font-medium">Escola municipal do 9-3/4</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-1 ">
                      <Clock width={18} height={18} />
                      <p>Próxima aula: {subject.nextClass}</p>
                    </div>
                    <div className="">
                      <p>{subject.progress}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="md:col-span-1 rounded-lg w-full h-fit gap-4 space-y-4 text-black">
          <ul className="dashboardCardBackground w-full flex flex-col gap-6 p-3 rounded-lg">
            <div className="flex justify-between items-center  font-medium">
              <p className="flex items-center gap-1">
                <Calendar /> Agenda
              </p>
              <Button className="addButton">Abrir agenda</Button>
            </div>
            <li className="p-2 flex flex-col border-l-6 rounded-xl dashboardListBackground text-white border-yellow-400">
              <div className="ml-2">
                <Link href={'/'} className="text-lg! font-medium">
                  Teste
                </Link>
                <p className="text-sm!">Reunião dia tal</p>
              </div>
            </li>
            <li className="p-2 border-l-6 rounded-xl dashboardListBackground text-white border-blue-400">
              <div className="ml-2">
                <Link href={'/'} className="text-lg! font-medium">
                  Teste
                </Link>
                <p className="text-sm!">Reunião dia tal</p>
              </div>
            </li>
            <li className="p-2 border-l-6 rounded-xl dashboardListBackground text-white border-green-400">
              <div className="ml-2">
                <Link href={'/'} className="text-lg! font-medium">
                  Teste
                </Link>
                <p className="text-sm!">Reunião dia tal</p>
              </div>
            </li>
          </ul>
          <div className="dashboardCardBackground w-full flex flex-col gap-6 p-3 rounded-lg">
            <p className="flex gap-2 items-center font-medium">
              <ChartColumn strokeWidth={2} />
              Desempenho geral
            </p>
            <ul className="p-2 gap-2 flex flex-col">
              <li className="flex flex-col">
                <div className="flex justify-between mb-1 ">
                  <p className="text-base!">Entregas no prazo</p>
                  <p className="text-base! font-medium">{progress[0]}%</p>
                </div>
                <Progress value={progress[0]} indicatorColor="bg-yellow-500" />
              </li>
              <li>
                <div className="flex justify-between mb-1">
                  <p className="text-base!">Entregas no prazo</p>
                  <p className="text-base! font-medium">{progress[1]}%</p>
                </div>
                <Progress value={progress[1]} indicatorColor="bg-blue-500" />
              </li>
              <li>
                <div className="flex justify-between mb-1">
                  <p className="text-base!">Entregas no prazo</p>
                  <p className="text-base! font-medium">{progress[2]}%</p>
                </div>
                <Progress value={progress[2]} indicatorColor="bg-green-500" />
              </li>
            </ul>
          </div>
        </div>
      </section>
    </section>
  );
}
