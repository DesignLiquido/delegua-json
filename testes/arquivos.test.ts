import { exportarObjetoParaArquivoJson, importarArquivoJson } from "..";

describe("Métodos que trabalham com arquivos", () => {
    it("Arquivo para JSON", () => {
        const retorno = importarArquivoJson("./testes/exemplo.json");
        expect(retorno).toBeTruthy();
        expect(retorno.funcionarios).toBeTruthy();
        expect(retorno.funcionarios).toHaveLength(11);
        expect(retorno.areas).toBeTruthy();
        expect(retorno.areas).toHaveLength(3);
    });

    it("JSON para arquivo", () => {
        const retorno = exportarObjetoParaArquivoJson({
            "funcionarios": [
                {
                    "id": 0,
                    "nome": "Marcelo",
                    "sobrenome": "Silva",
                    "salario": 3200.00,
                    "area": "SM"
                },
                {
                    "id": 1,
                    "nome": "Washington",
                    "sobrenome": "Ramos",
                    "salario": 2700.00,
                    "area": "UD"
                },
                {
                    "id": 2,
                    "nome": "Sergio",
                    "sobrenome": "Pinheiro",
                    "salario": 2450.00,
                    "area": "SD"
                },
                {
                    "id": 3,
                    "nome": "Bernardo",
                    "sobrenome": "Costa",
                    "salario": 3700.00,
                    "area": "SM"
                },
                {
                    "id": 4,
                    "nome": "Cleverton",
                    "sobrenome": "Farias",
                    "salario": 2750.00,
                    "area": "SD"
                },
                {
                    "id": 5,
                    "nome": "Abraão",
                    "sobrenome": "Campos",
                    "salario": 2550.00,
                    "area": "SD"
                },
                {
                    "id": 6,
                    "nome": "Letícia",
                    "sobrenome": "Farias",
                    "salario": 2450.00,
                    "area": "UD"
                },
                {
                    "id": 7,
                    "nome": "Fernando",
                    "sobrenome": "Ramos",
                    "salario": 2450.00,
                    "area": "SD"
                },
                {
                    "id": 8,
                    "nome": "Marcelo",
                    "sobrenome": "Farias",
                    "salario": 2550.00,
                    "area": "UD"
                },
                {
                    "id": 9,
                    "nome": "Fabio",
                    "sobrenome": "Souza",
                    "salario": 2750.00,
                    "area": "SD"
                },
                {
                    "id": 10,
                    "nome": "Clederson",
                    "sobrenome": "Oliveira",
                    "salario": 2500.00,
                    "area": "SD"
                }
            ],
            "areas": [
                {
                    "codigo": "SD",
                    "nome": "Desenvolvimento de Software"
                },
                {
                    "codigo": "SM",
                    "nome": "Gerenciamento de Software"
                },
                {
                    "codigo": "UD",
                    "nome": "Designer de UI/UX"
                }
            ]
        }, "./testes/exemplo2.json");

        const jsonExportado = importarArquivoJson("./testes/exemplo2.json");
        expect(jsonExportado).toBeTruthy();
        expect(jsonExportado.funcionarios).toBeTruthy();
        expect(jsonExportado.funcionarios).toHaveLength(11);
        expect(jsonExportado.areas).toBeTruthy();
        expect(jsonExportado.areas).toHaveLength(3);
    });
});
