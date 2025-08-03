'use client';
import { Button } from '@/components/ui/button';

export default function DashboardTemplate() {
  return (
    <section className="w-full min-h-screen">
      <div className="">
        <h1 className="text-2xl bg-white p-4">Turmas</h1>
        <div className="p-4">
          <h2 className="text-xl">Suas Turmas</h2>
          <ul className="flex w-full items-center justify-between bg-white border-b border-gray-500 px-2 rounded-lg mt-4">
            <div className="flex gap-4">
              <li className="">
                <button className="hover:text-black text-black hover:underline cursor-pointer">
                  Todos
                </button>
              </li>
              <li className="">
                <button className="hover:text-black text-black hover:underline cursor-pointer">
                  Pendentes
                </button>
              </li>
              <li className="">
                <button className="hover:text-black text-black hover:underline cursor-pointer">
                  Escolas
                </button>
              </li>
            </div>
            <div className="flex gap-4 p-2">
              <li className="">
                <button className="hover:text-white text-white shadow-md hover:underline cursor-pointer bg-green-500 rounded-sm p-1 px-2">
                  Turma +
                </button>
              </li>
              <li className="">
                <button className="hover:text-black text-black hover:underline cursor-pointer p-1">
                  Exportar
                </button>
              </li>
            </div>
          </ul>
          <table className="flex flex-col bg-white border-white w-full p-2 rounded-lg">
            <thead className="flex w-full items-center justify-between bg-gray-100 px-4 py-2">
              <tr className="flex w-full items-center justify-between">
                <th className="w-1/4 text-start">Turma</th>
                <th className="w-1/4 text-start">Escola</th>
                <th className="w-1/4 text-start">Ações</th>
              </tr>
            </thead>
            <tbody className="flex flex-col w-full">
              <tr className="hover:bg-blue-200 flex w-full items-center justify-between bg-white px-4 py-1 mt-4">
                <td className="w-1/4">Turma A</td>
                <td className="w-1/4">Escola X</td>
                <td className="w-1/4">Ações</td>
              </tr>
              <tr className="hover:bg-blue-200 flex w-full items-center justify-between bg-white px-4 py-1 mt-4">
                <td className="w-1/4">Turma B</td>
                <td className="w-1/4">Escola Y</td>
                <td className="w-1/4">Ações</td>
              </tr>
              <tr className="hover:bg-blue-200 flex w-full items-center justify-between bg-white px-4 py-1 mt-4">
                <td className="w-1/4">Turma C</td>
                <td className="w-1/4">Escola Z</td>
                <td className="w-1/4">Ações</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="p-4">
          <h2 className="text-xl">
            Turma escolhida: <span className="font-bold">Turma A</span>
          </h2>
          <section className="flex flex-col rounded-lg mt-4">
            <div className="bg-white p-2 rounded-lg">
              <div className="flex items-center gap-2">
                <h3 className="text-lg">Detalhes da Turma:</h3>
                <p className="text-lg">Status</p>
              </div>
              <div className="flex flex-wrap justify-between items-center">
                <p className="mt-2 text-sm">Descrição: Esta é uma turma de exemplo.</p>
                <p className="mt-2 text-sm">Número de Alunos: 30</p>
                <p className="mt-2 text-sm">Professor Responsável: João Silva</p>
                <p className="mt-2 text-sm">Data de Criação: 01/01/2023</p>
              </div>
            </div>
            <div className="bg-white p-2 mt-4 rounded-lg">
              <h3 className="text-lg">Alunos na Turma:</h3>
              <ul className="flex flex-col mt-2 gap-2">
                <li className="flex p-2 items-center justify-between hover:bg-gray-300 border border-gray-300 rounded-lg transition-all duration-100 ease-in-out">
                  Aluno 1<Button className="p-1 cursor-pointer bg-green-500 text-white" >Funções</Button>
                </li>
                <li className="flex p-2 items-center justify-between hover:bg-gray-300 border border-gray-300 rounded-lg transition-all duration-100 ease-in-out">
                  Aluno 2<Button className="p-1 cursor-pointer bg-green-500 text-white" >Funções</Button>
                </li>
                <li className="flex p-2 items-center justify-between hover:bg-gray-300 border border-gray-300 rounded-lg transition-all duration-100 ease-in-out">
                  Aluno 3<Button className="p-1 cursor-pointer bg-green-500 text-white" >Funções</Button>
                </li>
                <li className="flex p-2 items-center justify-between hover:bg-gray-300 border border-gray-300 rounded-lg transition-all duration-100 ease-in-out">
                  Aluno 4<Button className="p-1 cursor-pointer bg-green-500 text-white" >Funções</Button>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
