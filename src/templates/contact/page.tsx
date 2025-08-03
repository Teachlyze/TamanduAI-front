import Main from '@/components/layout/Main';

export default function ContactPageTemplate() {
  return (
    <section className="p-4 max-w-2xl mx-auto bg-blue-100 rounded-lg shadow-md mt-12">
{/*       <h1 className="w-full bg-white p-2 rounded-lg text-lg font-semibold">Contatos</h1>
 */}      <h1 className="mt-4 font-semibold ml-1 text-lg">Entre em contato conosco através do formulário abaixo:</h1>
      <form className="flex flex-col space-y-4 border border-gray-400 bg-white shadow-xl p-4 mt-4 rounded-md w-full max-h-[400px]">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-black">
            Nome:
          </label>
          <input
            type="text"
            id="name"
            placeholder='Digite seu nome'
            className="mt-1 p-2 block w-full border border-gray-400 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-base"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-black">
            Email:
          </label>
          <input
            type="email"
            id="email"
            placeholder='Digite seu email'
            className="mt-1 p-2 block w-full border border-gray-400 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-base"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-black">
            Mensagem:
          </label>
          <textarea
            id="message"
            placeholder='Digite sua mensagem'
            rows={4}
            className="mt-1 p-2 block w-full border-2 border-gray-400 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-base"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="cursor-pointer px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Enviar
        </button>
      </form>
      <p className='w-full text-center text-sm mt-2'>O E-mail resposta poderá chegar em alguns dias!</p>
    </section>
  );
}
