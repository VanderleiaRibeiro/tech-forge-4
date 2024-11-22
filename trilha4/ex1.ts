interface Produto {
    id: number;
nome: string;
preco: number;
}

class ItemLoja implements Produto {
id: number;
nome: string;
preco: number;

constructor(id: number, nome: string, preco: number) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
    }

    exibirDetalhes(): void {
        console.log(`Produto: ${this.nome}, ID: ${this.id}, Preço: R$ ${this.preco}`);
    }
}

const produto1 = new ItemLoja(1, "tenis", 100);

produto1.exibirDetalhes();
