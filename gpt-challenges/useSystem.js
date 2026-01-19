async function buscarUsuarios() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Erro ao buscar usuários");
  }
}

const usuarios = await buscarUsuarios();

const listarNomesEmails = (usuarios) =>
  usuarios.map((usuario) => `${usuario.name} - ${usuario.email}`);

console.log(listarNomesEmails(usuarios));

const buscarUsuarioPorId = (id) => {
  const usuarioEncontrado = usuarios.find((usuario) => usuario.id === id);

  return `Usuário: ${usuarioEncontrado.name} (Email: ${usuarioEncontrado.email})`;
};

console.log(buscarUsuarioPorId(3));

const filtrarPorCidade = (cidade) => {
  const usuariosFiltrados = usuarios
    .filter((usuario) => usuario.address.city === cidade)
    .map((usuario) => usuario.name);

  return usuariosFiltrados.join(", ");
};

console.log(filtrarPorCidade("South Christy"));

const resumoUsuarios = () => {
  const totalUsuarios = usuarios.length;
  const cidadesUnicas = [
    ...new Set(usuarios.map((usuario) => usuario.address.city)),
  ];
  return `Total de usuários: ${totalUsuarios}\nCidades com usuários: ${cidadesUnicas.join(", ")}`;
};

console.log(resumoUsuarios());
