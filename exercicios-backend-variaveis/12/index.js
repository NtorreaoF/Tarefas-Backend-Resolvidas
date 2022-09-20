const M = 90000, C = 60000, n = 24;

const i = (M / C) ** (1 / n) - 1;

console.log(`O seu financiamento de ${C}R$ teve uma taxa de juros de ${i}%, pois apos ${n} meses voce teve que pagar ${M}R$.`);