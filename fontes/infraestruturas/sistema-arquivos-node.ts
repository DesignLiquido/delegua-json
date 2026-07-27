import { promises as sistemaArquivos } from 'fs';
import * as caminho from 'path';

import { SistemaArquivosInterface } from '../interfaces/sistema-arquivos-interface';

/**
 * Implementação padrão de `SistemaArquivosInterface`, baseada nas APIs assíncronas do Node.js.
 */
export class SistemaArquivosNode implements SistemaArquivosInterface {
    async lerArquivoTexto(caminhoArquivo: string): Promise<string> {
        const dadosDoArquivo: Buffer = await sistemaArquivos.readFile(caminhoArquivo);
        return dadosDoArquivo.toString();
    }

    async escreverArquivoTexto(caminhoArquivo: string, conteudo: string): Promise<void> {
        await sistemaArquivos.writeFile(caminhoArquivo, conteudo);
    }

    resolverCaminho(diretorioBase: string, caminhoArquivo: string): string {
        return caminho.resolve(diretorioBase, caminhoArquivo);
    }
}
