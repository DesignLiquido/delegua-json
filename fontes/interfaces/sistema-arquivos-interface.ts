/**
 * Abstrai as operações de sistema de arquivos usadas pela variante Node.js deste módulo,
 * para que uma implementação diferente da padrão (por exemplo, baseada na API do VSCode)
 * possa ser injetada por quem consome este pacote.
 */
export interface SistemaArquivosInterface {
    lerArquivoTexto(caminhoArquivo: string): Promise<string>;
    escreverArquivoTexto(caminhoArquivo: string, conteudo: string): Promise<void>;
    resolverCaminho(diretorioBase: string, caminhoArquivo: string): string;
}
