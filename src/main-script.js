function calcularNivel(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;

    let nivel;
    if (vitorias <= 10) {
        nivel = "Ferro";
    } else if (vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return `O Herói tem saldo de ${saldoVitorias} vitorias e está no nível ${nivel}.`;
}

// Solicitação dos valores do usuário usando um laço de repetição
const valores = ["vitórias", "derrotas"];
const entradas = [];
for (const valor of valores) {
    entradas.push(parseFloat(prompt(`Digite o número de ${valor}:`)));
}

const resultado = calcularNivel(...entradas);
console.log(resultado);