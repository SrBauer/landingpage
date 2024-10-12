import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      {/* Menu lateral */}
      <aside className="w-64 bg-gray-800 text-white p-6">
        <nav>
          <ul className="space-y-4">
            <li>
              <Link href="/cadastro-cliente" className="hover:text-gray-300">
                Cadastro de Cliente
              </Link>
            </li>
            <li>
              <Link href="/cadastro-veiculo" className="hover:text-gray-300">
                Cadastro de Veículo
              </Link>
            </li>
            <li>
              <Link href="/pesquisa" className="hover:text-gray-300">
                Pesquisa
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Conteúdo principal */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-4">Bem-vindo ao Sistema de Estacionamento</h1>
        <p>Selecione uma opção no menu lateral para começar.</p>
      </main>
    </div>
  );
}
