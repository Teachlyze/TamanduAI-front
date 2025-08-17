'use client';
import { Button } from '@/components/ui/button';

export default function DashboardTemplate() {
  return (
    <section className="w-full min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Turmas</h1>

        {/* Filtros e Ações */}
        <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
          <div className="flex gap-3">
            {['Todos', 'Pendentes', 'Escolas'].map((filter) => (
              <button
                key={filter}
                className="px-4 py-2 rounded-lg bg-white text-gray-700 hover:bg-gray-100 hover:underline transition"
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="flex gap-3">
            <Button className="bg-green-500 text-white hover:bg-green-600">Turma +</Button>
            <Button className="bg-gray-200 text-gray-700 hover:bg-gray-300">Exportar</Button>
          </div>
        </div>

        {/* Tabela de Turmas */}
        <div className="overflow-x-auto bg-white shadow rounded-lg">
          <table className="w-full text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 font-medium text-gray-700">Turma</th>
                <th className="px-6 py-3 font-medium text-gray-700">Escola</th>
                <th className="px-6 py-3 font-medium text-gray-700">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[
                { turma: 'Turma A', escola: 'Escola X' },
                { turma: 'Turma B', escola: 'Escola Y' },
                { turma: 'Turma C', escola: 'Escola Z' },
              ].map((row) => (
                <tr key={row.turma} className="hover:bg-blue-50 transition">
                  <td className="px-6 py-3">{row.turma}</td>
                  <td className="px-6 py-3">{row.escola}</td>
                  <td className="px-6 py-3 text-gray-500">Ações</td>
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

          <div className="bg-white shadow rounded-lg p-4 space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium">Detalhes da Turma</h3>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                Ativa
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <p className="text-gray-600 text-sm">Descrição: Esta é uma turma de exemplo.</p>
              <p className="text-gray-600 text-sm">Número de Alunos: 30</p>
              <p className="text-gray-600 text-sm">Professor Responsável: João Silva</p>
              <p className="text-gray-600 text-sm">Data de Criação: 01/01/2023</p>
            </div>
          </div>

          {/* Alunos */}
          <div className="bg-white shadow rounded-lg p-4">
            <h3 className="text-lg font-medium mb-3">Alunos na Turma</h3>
            <ul className="space-y-2">
              {['Aluno 1', 'Aluno 2', 'Aluno 3', 'Aluno 4'].map((aluno) => (
                <li
                  key={aluno}
                  className="flex justify-between items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
                >
                  <span>{aluno}</span>
                  <Button className="bg-green-500 text-white hover:bg-green-600 px-3 py-1 text-sm">
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
