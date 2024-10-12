'use client';

import { useState } from 'react';

export default function CadastroCliente() {
  const [formData, setFormData] = useState({
    nomeCompleto: '',
    telefone: '',
    email: '',
    veiculo: '',
    placa: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Dados do formulário:', formData);
    // Aqui você pode adicionar a lógica para enviar os dados para o servidor
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Cadastro de Cliente</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="nomeCompleto" className="block mb-1">Nome Completo</label>
          <input
            type="text"
            id="nomeCompleto"
            name="nomeCompleto"
            value={formData.nomeCompleto}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="telefone" className="block mb-1">Telefone</label>
          <input
            type="tel"
            id="telefone"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="veiculo" className="block mb-1">Veículo</label>
          <input
            type="text"
            id="veiculo"
            name="veiculo"
            value={formData.veiculo}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="placa" className="block mb-1">Placa do Veículo</label>
          <input
            type="text"
            id="placa"
            name="placa"
            value={formData.placa}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Cadastrar Cliente
        </button>
      </form>
    </div>
  );
}

