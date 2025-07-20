import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function HomePageTemplate() {
  return (
    <section className="min-h-screen bg-white text-gray-900">
      {/* Hero section */}
      {/* Caso alterar o design colocar um px-4 para cada tag principal */}
      <section className="flex items-start py-20 bg-white">
        <div className="max-w-2xl mr-auto text-black p-4">
          <h2 className="text-3xl font-bold mb-4">Sua gestão educacional com inteligência</h2>
          <p className="mx-auto text-xl mb-6">Transforme a experiência do ensino híbrido com automações inteligentes, tutoriais dinâmicos e controle total sobre seu ambiente virtual.</p>
          <Button className="
          text-lg text-black px-4 py-3 
          cursor-pointer
          bg-blue-500 
          hover:bg-blue-500 shadow-md
          hover:text-white
          transition-all duration-300
          ">
            Comece agora
          </Button>
        </div>
      </section>

      {/* Planos */}
      <section className="py-20 px-4">
        <h3 className="text-3xl font-bold text-center mb-10">Nossos Planos</h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {["Básico", "Pro", "Empresarial"].map((plan, index) => (
            <Card key={plan} className="
            rounded-2xl shadow-md 
            border-2 border-blue-500 
            hover:shadow-lg  hover:bg-blue-500 hover:text-white
            transition-all duration-300">  
              <CardContent className="flex flex-col p-6">
                <h4 className="text-xl font-semibold mb-2">Plano {plan}</h4>
                <p className="mb-4">Ideal para {plan === "Básico" ? "usuários iniciantes" : plan === "Pro" ? "pequenas equipes" : "instituições completas"}.</p>
                <div className="mb-4 w-full text-center font-semibold space-y-2">
                  <p>Lorem ipsum dolor sit.</p>
                  <p>Lorem ipsum dolor sit.</p>
                  <p>Lorem ipsum dolor sit.</p>
                  <p>Lorem ipsum dolor sit.</p>
                </div>
                <Button className="
                cursor-pointer w-fit
                bg-yellow-400 hover:bg-yellow-400
                text-black
                "
                >
                  Assinar
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Funcionalidades + Demo */}
      <section className="py-20 bg-gray-50 px-4">
        <h3 className="text-3xl font-bold text-center mb-12">Funcionalidades em Ação</h3>
        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="func1" className="space-y-8">
            <TabsList className="justify-center gap-4">
              <TabsTrigger value="func1">Cadastro de Aluno</TabsTrigger>
              <TabsTrigger value="func2">Geração de Relatórios</TabsTrigger>
              <TabsTrigger value="func3">Envio Automático de Notas</TabsTrigger>
            </TabsList>

            <TabsContent value="func1">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h4 className="text-xl font-semibold mb-2">Cadastro simplificado de alunos</h4>
                  <p>Adicione alunos com poucos cliques, de forma rápida e sem complicações.</p>
                </div>
                <div className="border rounded-xl overflow-hidden shadow-md">
                  {/* Substitua a tag abaixo por um componente de vídeo, gif ou imagem animada */}
                  <div className="w-full aspect-video bg-black flex items-center justify-center text-white">
                    <span>Simulação Cadastro (inserir gif/vídeo)</span>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="func2">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h4 className="text-xl font-semibold mb-2">Relatórios detalhados</h4>
                  <p>Visualize relatórios completos com desempenho, frequência e mais.</p>
                </div>
                <div className="border rounded-xl overflow-hidden shadow-md">
                  <div className="w-full aspect-video bg-black flex items-center justify-center text-white">
                    <span>Simulação Relatório (inserir gif/vídeo)</span>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="func3">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h4 className="text-xl font-semibold mb-2">Notas automatizadas</h4>
                  <p>Notas lançadas automaticamente com integração aos sistemas acadêmicos.</p>
                </div>
                <div className="border rounded-xl overflow-hidden shadow-md">
                  <div className="w-full aspect-video bg-black flex items-center justify-center text-white">
                    <span>Simulação Notas (inserir gif/vídeo)</span>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </section>
  );
}