'use client';
import { Button } from '@/components/ui/button';
import { DropdownMenuGroup, DropdownMenuLabel } from '@/components/ui/dropdown-menu';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@radix-ui/react-dropdown-menu';
import { Pencil } from 'lucide-react';

export default function DashboardTemplate() {
  return (
    <section className="w-full min-h-screen bg-slate-100 p-6">
      {/* Header */}
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Turmas</h1>
        {/* Filtros e Ações */}
        <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
          <div className="flex gap-3">
            {['Todos', 'Pendentes', 'Escolas'].map((filter) => (
              <Button
                key={filter}
                className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-800 cursor-pointer transition"
              >
                {filter}
              </Button>
            ))}
          </div>
          <div className="flex gap-3">
            <Button className="bg-green-500 text-white hover:bg-green-600 cursor-pointer">
              Turma +
            </Button>
            <Button className="bg-blue-600 text-white hover:bg-blue-800 cursor-pointer">
              Exportar
            </Button>
          </div>
        </div>

        {/* Tabela de Turmas */}
        <div className="overflow-x-auto border-2 border-black shadow rounded-t-lg rounded-b-sm">
          <table className="w-full text-left">
            <thead className="bg-black">
              <tr>
                <th className="px-6 py-3 font-medium text-white">Turma</th>
                <th className="px-6 py-3 font-medium text-white">Escola</th>
                <th className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[
                { turma: 'Turma A', escola: 'Escola X' },
                { turma: 'Turma B', escola: 'Escola Y' },
                { turma: 'Turma C', escola: 'Escola Z' },
              ].map((row) => (
                <tr key={row.turma} className="hover:bg-gray-300 bg-gray-100 transition">
                  <td className="px-6 py-3">{row.turma}</td>
                  <td className="px-6 py-3">{row.escola}</td>
                  <td className="px-6 py-3 text-gray-500">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="outline"
                          className="p-2 w-9 h-9 bg-green-500 rounded-md text-white hover:text-white
                          transition-all duration-150 ease-in-out
                        hover:bg-green-700 cursor-pointer"
                        >
                          <Pencil />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        align="start"
                        className="w-65 bg-black rounded-lg p-1 text-white"
                      >
                        <DropdownMenuLabel>Configurações</DropdownMenuLabel>
                        <DropdownMenuGroup className='cursor-pointer ml-1'>
                          <DropdownMenuItem
                            className="outline-none hover:bg-gray-400/20 p-1 rounded-lg"
                            onClick={() => console.log('Editar clicado')}
                          >
                            Editar
                          </DropdownMenuItem>
                        </DropdownMenuGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Detalhes da Turma */}
        <div className="mt-8 space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Turma escolhida: <span className="font-bold">Turma A</span>
          </h2>

          <div className="bg-green-500 shadow rounded-lg p-4 space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium">Detalhes da Turma</h3>
              <span className="px-3 py-1 bg-green-800 text-white rounded-full text-sm font-semibold">
                Ativa
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <p className="text-sm">Descrição: Esta é uma turma de exemplo.</p>
              <p className="text-sm">Número de Alunos: 30</p>
              <p className="text-sm">Professor Responsável: João Silva</p>
              <p className="text-sm">Data de Criação: 01/01/2023</p>
            </div>
          </div>

          {/* Alunos */}
          <div className="bg-green-500 shadow rounded-lg p-4 font-medium">
            <h3 className="text-lg mb-3">Alunos na Turma</h3>
            <ul className="space-y-2">
              {['Aluno 1', 'Aluno 2', 'Aluno 3', 'Aluno 4'].map((aluno) => (
                <li
                  key={aluno}
                  className="flex justify-between items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-300 transition"
                >
                  <span>{aluno}</span>
                  <Button className="bg-green-800 cursor-pointer hover:bg-green-900 px-3 py-1 text-sm">
                    Funções
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
