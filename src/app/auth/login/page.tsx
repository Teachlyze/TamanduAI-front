'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Icons } from '@/components/icons';
import { useToast } from '@/components/ui/use-toast';

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast('Por favor, preencha todos os campos.', {
        type: 'error',
        description: 'Todos os campos são obrigatórios.'
      });
      return;
    }
    
    setIsLoading(true);

    try {
      // Simulando uma chamada de API
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulando login bem-sucedido
      toast('Login realizado com sucesso!', {
        type: 'success',
        description: 'Redirecionando para o painel...'
      });
      
      // Redirecionar para o dashboard após 1.5 segundos
      setTimeout(() => {
        router.push('/dashboard');
      }, 1500);
    } catch (error) {
      toast('Erro ao fazer login', {
        type: 'error',
        description: 'Verifique suas credenciais e tente novamente.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center bg-gradient-to-b from-background to-muted/20">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
        <div className="flex flex-col space-y-2 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 p-2">
            <Icons.logo className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight">Bem-vindo de volta</h1>
          <p className="text-sm text-muted-foreground">
            Digite suas credenciais para acessar sua conta
          </p>
        </div>
        
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" required>
                E-mail
              </Label>
              <Input
                id="email"
                placeholder="nome@exemplo.com"
                type="email"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
                disabled={isLoading}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                startIcon={<Icons.mail className="h-4 w-4" />}
                required
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" required>
                  Senha
                </Label>
                <Link
                  href="/auth/forgot-password"
                  className="text-xs text-muted-foreground hover:underline"
                >
                  Esqueceu a senha?
                </Link>
              </div>
              <Input
                id="password"
                placeholder="••••••••"
                type="password"
                autoComplete="current-password"
                disabled={isLoading}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                startIcon={<Icons.lock className="h-4 w-4" />}
                required
              />
            </div>
            
            <Button 
              type="submit"
              className="w-full"
              loading={isLoading}
            >
              {!isLoading && <Icons.logIn className="mr-2 h-4 w-4" />}
              Entrar
            </Button>
          </form>
          
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-card px-2 text-muted-foreground">
                Ou continue com
              </span>
            </div>
          </div>
          
          <Button 
            variant="outline" 
            type="button" 
            disabled={isLoading}
            className="w-full"
            onClick={() => {
              toast('Login com Google', {
                type: 'info',
                description: 'Estará disponível em breve.'
              });
            }}
          >
            <Icons.google className="mr-2 h-4 w-4" />
            Google
          </Button>
        </div>
        
        <p className="text-center text-sm text-muted-foreground">
          Não tem uma conta?{' '}
          <Link
            href="/auth/register"
            className="font-medium text-primary hover:underline"
          >
            Cadastre-se
          </Link>
        </p>
      </div>
    </div>
  );
}
