interface LivroBiblioteca {
    titulo: string;
autor: string;
genero: string;
disponivel: boolean;
}

class BibliotecaGestao {
livros: LivroBiblioteca[] = [];

adicionarLivro(livro: LivroBiblioteca): void {
        this.livros.push(livro);
    }

    filtrarPorGenero(genero: string): LivroBiblioteca[] {
        return this.livros.filter(livro => livro.genero === genero);
    }

    buscarPorAutor(autor: string): LivroBiblioteca[] {
        return this.livros.filter(livro => livro.autor === autor);
    }

    obterLivrosDisponiveisOrdenados(): LivroBiblioteca[] {
        return this.livros
            .filter(livro => livro.disponivel)
            .sort((a, b) => a.titulo.localeCompare(b.titulo));
    }
}

const bibliotecaGestao = new BibliotecaGestao();

bibliotecaGestao.adicionarLivro({ titulo: "O Hobbit", autor: "J.R.R. Tolkien", genero: "Fantasia", disponivel: true });
bibliotecaGestao.adicionarLivro({ titulo: "1984", autor: "George Orwell", genero: "Distopia", disponivel: false });
bibliotecaGestao.adicionarLivro({ titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", genero: "Fantasia", disponivel: true });
bibliotecaGestao.adicionarLivro({ titulo: "A Revolução dos Bichos", autor: "George Orwell", genero: "Distopia", disponivel: true });
bibliotecaGestao.adicionarLivro({ titulo: "O Príncipe", autor: "Nicolau Maquiavel", genero: "Política", disponivel: true });

const livrosFantasia = bibliotecaGestao.filtrarPorGenero("Fantasia");
console.log("Livros de Fantasia:", livrosFantasia);

const livrosOrwell = bibliotecaGestao.buscarPorAutor("George Orwell");
console.log("Livros de George Orwell:", livrosOrwell);

const livrosDisponiveisOrdenados = bibliotecaGestao.obterLivrosDisponiveisOrdenados();
console.log("Livros Disponíveis Ordenados:", livrosDisponiveisOrdenados);
