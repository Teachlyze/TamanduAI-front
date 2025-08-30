'use client';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuGroup,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { Pencil, Bell, Settings, LogOut, Menu, X, CheckCircle, Clock, AlertCircle, ExternalLink, Share2, Eye } from 'lucide-react';
import { useState } from 'react';

interface Activity {
  id: string;
  title: string;
  status: 'draft' | 'published' | 'closed';
  lastUpdated: string;
  type: string;
}

const statusColors = {
  draft: 'bg-yellow-100 text-yellow-800',
  published: 'bg-green-100 text-green-800',
  closed: 'bg-gray-100 text-gray-800',
};

const statusIcons = {
  draft: <Clock className="w-4 h-4 mr-1" />,
  published: <CheckCircle className="w-4 h-4 mr-1" />,
  closed: <AlertCircle className="w-4 h-4 mr-1" />,
};

export default function DashboardTemplate() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const user = {
    name: 'João Silva',
    role: 'Professor',
    email: 'joao.silva@escola.com',
    avatar: '',
  };

  const activities: Activity[] = [
    {
      id: '1',
      title: 'Atividade de Matemática - Frações',
      status: 'published',
      lastUpdated: '30/08/2023',
      type: 'Atividade',
    },
    {
      id: '2',
      title: 'Prova de Ciências - Capítulo 3',
      status: 'draft',
      lastUpdated: '28/08/2023',
      type: 'Avaliação',
    },
    {
      id: '3',
      title: 'Trabalho de História - Idade Média',
      status: 'closed',
      lastUpdated: '25/08/2023',
      type: 'Trabalho',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <header className="bg-blue-600 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center
            ">
              <h1 className="text-xl font-bold">TamanduAI</h1>
            </div>
            
            <div className="hidden md:flex items-center space-x-4">
              <button className="p-2 rounded-full text-blue-100 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <Bell className="h-6 w-6" aria-hidden="true" />
                <span className="sr-only">Notificações</span>
              </button>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center space-x-2 max-w-xs rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    <Avatar>
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback className="bg-blue-500">
                        {user.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <span className="sr-only">Abrir menu do usuário</span>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 mt-2 py-1 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="px-4 py-3">
                    <p className="text-sm font-medium text-gray-900">{user.name}</p>
                    <p className="text-sm text-gray-500 truncate">{user.role}</p>
                  </div>
                  <DropdownMenuSeparator className="h-px bg-gray-100" />
                  <DropdownMenuGroup>
                    <DropdownMenuItem className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                      <Settings className="mr-3 h-5 w-5 text-gray-400" />
                      <span>Configurações</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                      <LogOut className="mr-3 h-5 w-5 text-gray-400" />
                      <span>Sair</span>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-blue-100 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                aria-expanded="false"
              >
                <span className="sr-only">Abrir menu principal</span>
                {isMobileMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <div className="px-4 py-2">
                <div className="flex items-center">
                  <Avatar className="mr-3">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback className="bg-blue-500">
                      {user.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-base font-medium text-white">{user.name}</p>
                    <p className="text-sm text-blue-100">{user.role}</p>
                  </div>
                </div>
              </div>
              <div className="border-t border-blue-700 pt-4">
                <a href="#" className="flex items-center px-4 py-2 text-base text-white hover:bg-blue-700">
                  <Settings className="mr-3 h-5 w-5 text-blue-300" />
                  Configurações
                </a>
                <a href="#" className="flex items-center px-4 py-2 text-base text-white hover:bg-blue-700">
                  <LogOut className="mr-3 h-5 w-5 text-blue-300" />
                  Sair
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-gray-900">Turmas</h1>
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                Nova Turma +
              </Button>
            </div>
            {/* Filtros */}
            <div className="flex flex-wrap gap-2 mb-6">
              {['Todas', 'Ativas', 'Encerradas'].map((filter) => (
                <Button
                  key={filter}
                  variant="outline"
                  className="px-4 py-2 rounded-full border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  {filter}
                </Button>
              ))}
              <Button variant="ghost" className="ml-auto text-blue-600 hover:bg-blue-50">
                Exportar <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Tabela de Turmas */}
            <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Turma
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Escola
                      </th>
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Ações</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {[
                      { id: '1', turma: 'Turma A', escola: 'Escola X', status: 'active' },
                      { id: '2', turma: 'Turma B', escola: 'Escola Y', status: 'inactive' },
                      { id: '3', turma: 'Turma C', escola: 'Escola Z', status: 'active' },
                    ].map((row) => (
                      <tr key={row.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                              {row.turma.charAt(0)}
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{row.turma}</div>
                              <div className="text-sm text-gray-500">{row.status === 'active' ? 'Ativa' : 'Inativa'}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{row.escola}</div>
                          <div className="text-sm text-gray-500">São Paulo, SP</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                variant="ghost"
                                className="w-8 h-8 p-0 hover:bg-gray-100"
                              >
                                <span className="sr-only">Abrir menu</span>
                                <Pencil className="h-4 w-4 text-gray-500" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-48" align="end">
                              <DropdownMenuGroup>
                                <DropdownMenuItem className="cursor-pointer">
                                  <Eye className="mr-2 h-4 w-4" />
                                  <span>Visualizar</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="cursor-pointer">
                                  <Pencil className="mr-2 h-4 w-4" />
                                  <span>Editar</span>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="text-red-600 cursor-pointer">
                                  <LogOut className="mr-2 h-4 w-4" />
                                  <span>Arquivar</span>
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
            </div>

            {/* Seção de Atividades Recentes */}
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-6 py-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Últimas Atividades</h3>
                <Button variant="outline" className="mt-3 sm:mt-0">
                  Ver todas as atividades
                </Button>
              </div>
              <div className="bg-white shadow overflow-hidden sm:rounded-b-lg">
                <ul className="divide-y divide-gray-200">
                  {activities.map((activity) => (
                    <li key={activity.id} className="px-6 py-4 hover:bg-gray-50">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center ${statusColors[activity.status]}`}>
                            {statusIcons[activity.status]}
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{activity.title}</div>
                            <div className="text-sm text-gray-500">
                              {activity.type} • Atualizada em {activity.lastUpdated}
                            </div>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700">
                            <Eye className="h-4 w-4 mr-1" />
                            <span className="sr-only">Visualizar</span>
                          </Button>
                          <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-800">
                            <Pencil className="h-4 w-4 mr-1" />
                            <span className="sr-only">Editar</span>
                          </Button>
                          <Button variant="ghost" size="sm" className="text-green-600 hover:text-green-800">
                            <Share2 className="h-4 w-4 mr-1" />
                            <span className="sr-only">Compartilhar</span>
                          </Button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:w-80 space-y-6">
            {/* User Card */}
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center space-x-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback className="bg-blue-100 text-blue-700 text-xl">
                    {user.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{user.name}</h3>
                  <p className="text-sm text-gray-500">{user.role}</p>
                  <p className="text-xs text-gray-400">{user.email}</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200 flex space-x-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Settings className="h-4 w-4 mr-2" />
                  Perfil
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <LogOut className="h-4 w-4 mr-2" />
                  Sair
                </Button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Resumo</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-500">Turmas Ativas</span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    5
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-500">Atividades Pendentes</span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                    3
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-500">Mensagens</span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    2
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
