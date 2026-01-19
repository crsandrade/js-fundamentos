const API_BASE_URL = "https://jsonplaceholder.typicode.com";

async function fetchData(endpoint, errorMessage) {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`);
    if (!response.ok) {
      throw new Error("Erro na requisição");
    }
    return await response.json();
  } catch (error) {
    throw new Error(errorMessage);
  }
}

async function buscarUsuarios() {
  return fetchData("/users", "Erro ao buscar Usuários");
}

async function buscarPosts() {
  return fetchData("/posts", "Erro ao buscar posts");
}

const usuarios = await buscarUsuarios();
const posts = await buscarPosts();

function listarTitulosPorUsuario(userId) {
  return posts
    .filter((post) => post.userId === userId)
    .map((post) => post.title)
    .join("\n");
}

function resumoPostsUsuarios() {
  return usuarios.map((usuario) => ({
    usuario: usuario.name,
    totalPosts: posts.filter((post) => post.userId === usuario.id).length,
  }));
}

function buscarPostDetalhado(postId) {
  const post = posts.find((p) => p.id === postId);
  if (!post) return "Post não encontrado.";

  const usuario = usuarios.find((u) => u.id === post.userId);

  if (!usuario) return "Usuário não encontrado";

  return {
    post: post.body,
    usuario: usuario.name,
    email: usuario.email,
  };
}

function mostActiveUser() {
  const resumo = resumoPostsUsuarios();

  if (resumo.length === 0) return null;

  return resumo.reduce(
    (acc, user) => (user.totalPosts > acc.totalPosts ? user : acc),
    resumo[0],
  );
}

console.log(listarTitulosPorUsuario(1));

console.log(resumoPostsUsuarios());

console.log(buscarPostDetalhado(10));

const activeUser = mostActiveUser();
console.log(
  `Usuário mais ativo: ${activeUser.usuario} (${activeUser.totalPosts} posts)`,
);
