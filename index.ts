import * as sistemaArquivos from "node:fs"
import * as caminho from "node:path"

export function importarArquivoJson(caminhoArquivo: string): any {
    const caminhoResolvido = caminho.resolve(caminhoArquivo);
    const dadosDoArquivo: Buffer = sistemaArquivos.readFileSync(caminhoResolvido);
    return JSON.parse(dadosDoArquivo.toString());
}

export function exportarObjetoParaArquivoJson(conteudoJson: any, caminhoArquivo: string) {
    const conteudoTratado = JSON.stringify(conteudoJson);
    sistemaArquivos.writeFileSync(caminhoArquivo, conteudoTratado);
}
