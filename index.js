// exibe formulario de "cadastro de produtos" e esconde formulário de "nova venda"
function mostrarFormCad() {
    idFormNovaVenda.style.display = "none";
    idFormCadProd.style.display = "flex";

    divNotaFiscal.style.display = "none";
    divNotaFiscal.innerHTML = "";
    
}

// exibe formulario de "Nova Venda" e esconde formulário de "Cadastro de Produtos" 
function mostrarFormNovaVenda() {
    idFormCadProd.style.display = "none";
    idFormNovaVenda.style.display = "flex";

    divNotaFiscal.style.display = "block"
    divNotaFiscal.innerHTML = "";
}

// vetores de informações dos produtos
let produtosCod = []
let produtosNome = []
let produtosPrecoUnitario = []
let produtosQtdEstoque = []

// vetores de informações das vendas
let vendasNome = [];
let vendasValorUnitario = [];
let vendasUnidadesVendidas = [];

// salvando dados do produto nos vetores
function salvarProduto() {
    let produtoCod = inputCadCodProd.value;
    let produtoNome = inputCadNomeProd.value;
    let produtoPrecoUnitario = Number(inputCadPrecoUnitario.value);
    let produtoQtdEstoque = Number(inputCadQtdEstoque.value);

    if (produtoCod == "" || produtoNome == "" || produtoPrecoUnitario == 0) {
        alert("Preencha todos os campos")

        // console.log(produtoCod)
        // console.log(produtoNome)
        // console.log(produtoPrecoUnitario)
        // console.log(produtoQtdEstoque)
    } else if (produtosCod.indexOf(produtoCod) != -1) {
        alert("Código já existe");
    } else {    
        produtosCod.push(produtoCod);
        produtosNome.push(produtoNome);
        produtosPrecoUnitario.push(produtoPrecoUnitario);
        produtosQtdEstoque.push(produtoQtdEstoque);

        alert("Produto cadastrado com sucesso")

        // console.log(produtosCod)
        // console.log(produtosNome)
        // console.log(produtosPrecoUnitario)
        // console.log(produtosQtdEstoque)

        // limpando campos inputs
        inputCadCodProd.value = ""
        inputCadNomeProd.value = ""
        inputCadPrecoUnitario.value = ""
        inputCadQtdEstoque.value = ""
    }
}

// Registrando venda
function registrarVenda() {
    // Armazenando código digitado
    let inputCod = inputVendaCodProd.value;
    let qtdVendida = Number(inputQtdVendida.value);

    // verificando se produto equivalente ao código existe
    if(produtosCod.indexOf(inputCod) != -1) {
        // produto encontrado
        let index = produtosCod.indexOf(inputCod);
        
        // verificando se o possui produtos suficientes no estoque para a venda
        if(qtdVendida <= produtosQtdEstoque[index]) {
            // Registrando venda
            vendasNome.push(produtosNome[index])
            vendasValorUnitario.push(produtosPrecoUnitario[index])
            vendasUnidadesVendidas.push(qtdVendida)
            produtosQtdEstoque[index] -= qtdVendida

            // limpando inputs
            inputVendaCodProd.value = ""
            inputQtdVendida.value = ""

            // console.log(vendasNome)
            // console.log(vendasValorUnitario)
            // console.log(vendasUnidadesVendidas)
            // console.log("estoque: ", produtosQtdEstoque)
        } else {
            // Quantidade insuficiente
            alert("Quantidade insuficiente em estoque");
        }
    } else {
        // produto não encontrado
        alert("produto não encontrado")
    }
}

function finalizarVenda() {
    divNotaFiscal.innerHTML = `<p>Total de vendas: ${vendasNome.length}</p>`

    for(let i = 0; i < vendasNome.length; i++) {
        let posicao = i + 1;
        let nomeProduto = vendasNome[i];
        let valUnitario = vendasValorUnitario[i]
        let unidadesVendidas = vendasUnidadesVendidas[i]
        let subtotal = valUnitario * unidadesVendidas

        divNotaFiscal.innerHTML += `
        <div class="notaFiscalItem">
            <p>Produto ${posicao}: ${nomeProduto}</p>    
            <p>Valor Unitário: R$ ${valUnitario.toFixed(2)}</p>    
            <p>Unidades Vendidas: ${unidadesVendidas}</p>    
            <p>Subtotal: R$ ${subtotal.toFixed(2)}</p>    
        </div>
        `
    }

    vendasNome = []
    vendasUnidadesVendidas = []
    vendasValorUnitario = []
    // console.log(vendasNome, vendasUnidadesVendidas, vendasValorUnitario)
}