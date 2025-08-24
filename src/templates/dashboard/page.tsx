'use client';

import { Button } from '@/components/ui/button';
import { Plus, SquareArrowOutUpRight } from 'lucide-react';
import Link from 'next/link';

export default function DashboardTemplate() {
  const turmas = 3;
  return (
    <section className="relative w-full min-h-screen bg-black p-4">
      {Array.from({ length: turmas }).map((_, index) => (
        <div
          key={index}
          className="bg-blue-800 border border-white p-4 rounded-lg shadow-md mb-4 hover:shadow-xl transition-shadow"
        >
          <Link href={`/Dashboard/Turma/${index + 1}`} className="text-white">
            <div className="flex justify-between items-center">
              <h2 className="font-bold mb-2">Turma {index + 1}</h2>
              <SquareArrowOutUpRight className="w-5 h-5" />
            </div>
            <p className="">
              Descrição da turma {index + 1}. Aqui você pode adicionar mais detalhes sobre a turma.
            </p>
          </Link>
        </div>
      ))}
      <Button
        variant={'outline'}
        className="fixed bottom-0 right-2 p-3 text-white subtitle h-fit bg-blue-800"
      >
        <Plus strokeWidth={4} />
      </Button>
    </section>
  );
}
