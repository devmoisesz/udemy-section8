const clientes = [
    {id_cliente: 1, nome: 'Marcelo Matos'},
    {id_cliente: 2, nome: 'Paula Veigh'},
    {id_cliente: 3, nome: 'Renan'},
    {id_cliente: 4, nome: 'Claudio'},
    {id_cliente: 5, nome: 'Gilson'}
];

const pedidos = [
    {id_pedido: 1, cliente_id: 2, total: 22.49 + 70 + 20 + 12},
    {id_pedido: 2, cliente_id: 5, total: 60},
    {id_pedido: 3, cliente_id: 1, total: 75},
    {id_pedido: 4, cliente_id: 4, total: 10},
    {id_pedido: 5, cliente_id: 3, total: 40}
];

const itensDoPedido = [
    {id_pedido: 1, nome_produto: 'Porção de fritas com queijo', quantidade: 1},
    {id_pedido: 1, nome_produto: 'Pizza de Chocolate', quantidade: 1},
    {id_pedido: 1, nome_produto: 'Coca-Cola', quantidade: 2},
    {id_pedido: 1, nome_produto: 'Jaboti Guarana', quantidade: 2},
    {id_pedido: 2, nome_produto: 'Porção de fritas', quantidade: 3},
    {id_pedido: 3, nome_produto: 'Pizza Quatro queijos', quantidade: 1},
    {id_pedido: 4, nome_produto: 'Coca-cola', quantidade: 1},
    {id_pedido: 5, nome_produto: 'Porção de fritas', quantidade: 2}
];

function buscarCliente(idCliente) {
    return new Promise((resolve, reject) => {
        const cliente = clientes.find(item => item.id_cliente === idCliente)
        if(!cliente){
            reject('Cliente não encontrado')
            return
        } 
        setTimeout(() =>{
            resolve(cliente)
        }, 2000)
    });
};

function buscarPedido(idCliente){
    return new Promise((resolve, reject) => {
        const pedido = pedidos.find(item => item.cliente_id === idCliente)
        if(!pedido) {
            reject('Pedido não encontrado')
            return 
        }
        setTimeout(() =>{
            resolve(pedido)
        }, 2000)
    })
}

function buscarItensDoPedido(idpedido){
    return new Promise((resolve, reject) => {
        const itens = itensDoPedido.filter(item => item.id_pedido === idpedido)
        if(itens.length === 0) {
            reject('Pedido não encontrado') 
            return
        } 
        setTimeout(() =>{
            resolve(itens)
        }, 2000)
    })
}

async function gerarBuscaCompleta() {
    try {
        const cliente = await buscarCliente(1)
        const pedido = await buscarPedido(cliente.id_cliente)
        const itens = await buscarItensDoPedido(pedido.id_pedido)
        //console.log('Cliente: ', cliente, 'Pedido: ', pedido, itens)
        return {cliente, pedido, itens}
    } catch (error) {
        console.log(error)
    }
}

const pedidoCompleto = await gerarBuscaCompleta()
console.log(pedidoCompleto)