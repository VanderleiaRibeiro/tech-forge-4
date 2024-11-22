interface Livro {
    titulo: string;
autor: string;
disponivel: boolean;
}

class Biblioteca {
livros: Livro[] = [];

adicionarLivro(livro: Livro): void {
        this.livros.push(livro);
    }

    buscarLivrosDisponiveis(): Livro[] {
        return this.livros.filter(livro => livro.disponivel);
    }
}

const biblioteca = new Biblioteca();

biblioteca.adicionarLivro({ titulo: "O Hobbit", autor: "J.R.R. Tolkien", disponivel: true });
biblioteca.adicionarLivro({ titulo: "1984", autor: "George Orwell", disponivel: false });
biblioteca.adicionarLivro({ titulo: "A Arte da Guerra", autor: "Sun Tzu", disponivel: true });

const livrosDisponiveis = biblioteca.buscarLivrosDisponiveis();

console.log(livrosDisponiveis);