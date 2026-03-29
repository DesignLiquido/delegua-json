import { exportarObjetoParaArquivoJson, importarArquivoJson } from "./node";
import { objetoParaTextoJson, textoParaJson } from "./web";


export const DeleguaModuloJson = {
    importarArquivoJson: {
        tipoRetorno: 'dicionário',
        funcao: importarArquivoJson,
        argumentos: [
            {
                nome: 'caminhoArquivo',
                tipo: 'texto'
            }
        ]
    },
    exportarObjetoParaArquivoJson: {
        tipoRetorno: 'vazio',
        funcao: exportarObjetoParaArquivoJson,
        argumentos: [
            {
                nome: 'conteudoJson',
                tipo: 'dicionário'
            },
            {
                nome: 'caminhoArquivo',
                tipo: 'texto'
            }
        ]
    },
    textoParaJson: {
        tipoRetorno: 'dicionário',
        funcao: textoParaJson,
        argumentos: [
            {
                nome: 'texto',
                tipo: 'texto'
            }
        ]
    },
    objetoParaTextoJson: {
        tipoRetorno: 'texto',
        funcao: objetoParaTextoJson,
        argumentos: [
            {
                nome: 'objeto',
                tipo: 'qualquer'
            }
        ]
    }
}