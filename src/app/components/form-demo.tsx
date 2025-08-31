'use client';

import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Info, Mail, Lock, User, Check } from 'lucide-react';

export function FormDemo() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    password: '',
    search: '',
    notifications: false,
    terms: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulário enviado:', formData);
    // Aqui você pode adicionar a lógica de envio do formulário
  };

  return (
    <div className="max-w-md mx-auto p-6 space-y-6">
      <div className="space-y-2 text-center">
        <h2 className="text-2xl font-bold">Demonstração de Formulário</h2>
        <p className="text-muted-foreground">
          Exemplos de uso dos componentes Label e Input
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Campo de busca com ícones */}
        <div className="space-y-2">
          <Label 
            htmlFor="search" 
            startIcon={<Search className="h-4 w-4" />}
            endIcon={
              <button 
                type="button" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setFormData(prev => ({ ...prev, search: '' }))}
                aria-label="Limpar busca"
              >
                <Info className="h-4 w-4" />
              </button>
            }
            helperText="Pesquise por usuários, projetos ou documentos"
          >
            Buscar
          </Label>
          <Input 
            id="search" 
            name="search"
            value={formData.search}
            onChange={handleChange}
            placeholder="Digite sua busca..."
            startIcon={<Search className="h-4 w-4" />}
          />
        </div>

        {/* Campo de nome */}
        <div className="space-y-2">
          <Label htmlFor="name" required>
            Nome completo
          </Label>
          <Input 
            id="name" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Digite seu nome"
            startIcon={<User className="h-4 w-4" />}
            required
          />
        </div>

        {/* Campo de e-mail */}
        <div className="space-y-2">
          <Label htmlFor="email" required>
            E-mail
          </Label>
          <Input 
            id="email" 
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="seu@email.com"
            startIcon={<Mail className="h-4 w-4" />}
            required
          />
        </div>

        {/* Campo de senha */}
        <div className="space-y-2">
          <Label 
            htmlFor="password" 
            required
            helperText="Mínimo de 8 caracteres, incluindo letras e números"
          >
            Senha
          </Label>
          <Input 
            id="password" 
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="••••••••"
            startIcon={<Lock className="h-4 w-4" />}
            required
            minLength={8}
          />
        </div>

        {/* Checkbox de notificações */}
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="notifications"
            name="notifications"
            checked={formData.notifications}
            onChange={handleChange}
            className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
          />
          <Label 
            htmlFor="notifications" 
            className="font-normal"
          >
            Receber notificações por e-mail
          </Label>
        </div>

        {/* Checkbox de termos */}
        <div className="flex items-start space-x-2">
          <div className="flex items-center h-5">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
              className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
              required
            />
          </div>
          <Label 
            htmlFor="terms" 
            className="font-normal text-sm"
            helperText="Você deve concordar com nossos termos para continuar"
          >
            Concordo com os <a href="#" className="text-primary hover:underline">Termos de Serviço</a> e <a href="#" className="text-primary hover:underline">Política de Privacidade</a>
          </Label>
        </div>

        {/* Botão de envio */}
        <div className="pt-2">
          <Button 
            type="submit" 
            className="w-full"
            endIcon={<Check className="h-4 w-4" />}
          >
            Cadastrar
          </Button>
        </div>
      </form>
    </div>
  );
}
