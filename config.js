/* =====================================================================
   CONFIGURAÇÃO DO TREINAMENTO PS MODO BLACK FRIDAY
   Edite só este arquivo. Não precisa mexer no index.html.
   ===================================================================== */
window.PS_CONFIG = {

  /* 1) PLANILHA DO GOOGLE: onde ficam salvos nome, turno, início, fim e brinde.
        Cole aqui a URL do App da Web do Apps Script (termina em /exec).
        Passo a passo no LEIA-ME.
        Exemplo: "https://script.google.com/macros/s/AKfy.../exec"            */
  PLANILHA_URL: "https://script.google.com/macros/s/AKfycbzwaau02e6V01t6nKKsWLUUfgUaSqNMTAXF3vFOQwDhUqYFpGdsZSxYacMZ0uwHtn8B/exec",

  /* 2) BRINDES: os 5 prêmios que podem sair nas bolhas.
        Coloque as fotos na pasta "brindes" com esses nomes (ou troque o nome aqui).
        Foto quadrada fica melhor (ex: 600x600). Sem foto, aparece um 🎁.
        Se tiverem menos de 5 brindes diferentes, pode repetir o mesmo.       */
  BRINDES: [
    { nome: "Brinde 1", foto: "brindes/brinde1.jpg" },
    { nome: "Brinde 2", foto: "brindes/brinde2.jpg" },
    { nome: "Brinde 3", foto: "brindes/brinde3.jpg" },
    { nome: "Brinde 4", foto: "brindes/brinde4.jpg" },
    { nome: "Brinde 5", foto: "brindes/brinde5.jpg" }
  ],

  /* 3) NOME DE ADMINISTRADOR: digitando este nome na tela inicial, todas as
        missões e o chefão ficam liberados, sem tempo de leitura, e nada é
        gravado na planilha. Serve pra testar e mostrar o curso.               */
  ADMIN_NOME: "ext_adm",

  /* 4) (OPCIONAL) IMAGENS DAS BOLHAS. Por padrão as bolhas usam figuras
        sorteadas a cada vez. Se quiser usar imagens de vocês, coloque pelo
        menos 5 caminhos aqui (ex: "bolhas/1.png"). Elas também são sorteadas. */
  ORBES: []
};
