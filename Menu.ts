import  readlinesync = require("readline-sync");
import {colors} from 'c:/Users/USER/Desktop/projeto-contabancaria/src/util/colors';

export function main() {
    let opcao: number;
    while(true){

        console.log(colors.bg.black, colors.fg.yellow,
                    "***************************************************");
        console.log("                                                   ");
        console.log("             BANCO DO BRAZIL COM Z                 ");
        console.log("                                                   ");
        console.log("***************************************************");
        console.log("                                                   ");
        console.log("         1- Criar Conta                            ");
        console.log("         2- Listar todas as Contas                 ");
        console.log("         3- Buscar Conta por Numero                ");
        console.log("         4- Atualizar Dados de Conta               ");
        console.log("         5- Apagar Conta                           ");     
        console.log("         6- Sacar                                  "); 
        console.log("         7- Depositar                              "); 
        console.log("         8- Trasnferi Valores entre as contas      "); 
        console.log("         9- Sair                                   "); 
        console.log("                                                   ");
        console.log("***************************************************");
        console.log("                                                    ",
        colors.reset);
        
        console.log(" Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

            if (opcao == 9) {
                console.log(colors.fg.greenstrong,
                    "\nBanco do Brasil com Z - o seu futuro começa aqui!");
                sobre(); 
                console.log(colors.reset,"");
                process.exit(0);
            }

            switch (opcao){

                case 1: 
                     console.log(colors.fg.whitestrong,
                     "\n\nCriar conta\n\n", colors.reset);
                     
                     keyPress()
                     break;

                case 2: 
                     console.log(colors.fg.whitestrong,
                        "\n\nListar todas as contas\n\n", colors.reset);
                    
                     keyPress()   
                     break;

                case 3: 
                     console.log (colors.fg.whitestrong,
                        "\n\nConsultar dados da conta - por número\n\n", colors.reset);

                     keyPress()  
                     break;     

                case 4: 
                     console.log (colors.fg.whitestrong,
                        "\n\nAtualizar dados da conta\n\n", colors.reset);

                     keyPress()   
                     break;

                case 5: 
                     console.log (colors.fg.whitestrong,
                        "\n\nApagar uma conta\n\n", colors.reset);

                     keyPress()   
                     break;

                case 6: 
                     console.log (colors.fg.whitestrong,
                        "\n\nSaque\n\n", colors.reset);

                     keyPress()   
                     break;

                 case 7: 
                     console.log (colors.fg.whitestrong,
                        "\n\nDeposito\n\n", colors.reset);

                     keyPress()   
                     break;

                 case 8: 
                     console.log (colors.fg.whitestrong,
                        "\n\nTrasnferência entre contas\n\n", colors.reset);

                     keyPress()   
                     break;     

                default:
                     console.log (colors.fg.whitestrong,
                        "\n\nOpção Inválida!\n\n", colors.reset);

                     keyPress()   
                     break;
            
            }

            }

    }

    export function sobre(): void{
        console.log("\n***************************************************");
        console.log("Projeto Desenvolvido por:");
        console.log("Generation Brasil - generation@generation.org");
        console.log("github.com/conteudosGeneration");
        console.log("\n***************************************************");

    }

    function keyPress():void {
        console.log(colors.reset,"");
        console.log("\nPressione enter para continuar...");
        readlinesync.prompt();
    }

main();