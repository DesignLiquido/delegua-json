import * as sistemaArquivos from "fs"
import * as caminho from "path"

export function importarArquivoJson(caminhoArquivo: string): any {
    const caminhoResolvido = caminho.resolve(caminhoArquivo);
    const dadosDoArquivo: Buffer = sistemaArquivos.readFileSync(caminhoResolvido);
    return JSON.parse(dadosDoArquivo.toString());
}

export function exportarObjetoParaArquivoJson(conteudoJson: any, caminhoArquivo: string) {
    const conteudoTratado = JSON.stringify(conteudoJson);
    sistemaArquivos.writeFileSync(caminhoArquivo, conteudoTratado);
}

export function textoParaJson(texto: string) {
    return JSON.parse(texto);
}

export function objetoParaTextoJson(objeto: any) {
    return JSON.stringify(objeto);
}
