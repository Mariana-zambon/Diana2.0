const nomes= ["Mariana", "Stefany", "Kauê", "Laura", "Maria", "João Matheus", "João Gabriel", "Higor", "Igor", "Gabriel", "Rafael", "Vitor", "Heros", "Edmundo", "Rodrigo", "Gabriela", "Tamires"]
export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes);