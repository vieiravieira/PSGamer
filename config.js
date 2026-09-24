/* =====================================================================
   CONFIGURAÇÃO DO TREINAMENTO PS MODO BLACK FRIDAY
   Edite só este arquivo. Não precisa mexer no index.html.
   ===================================================================== */
window.PS_CONFIG = {

  /* 1) SUPABASE: onde ficam salvos nome, turno, início e fim de cada PS.
        Supabase > Project Settings > API:
        - "Project URL"  -> SUPABASE_URL
        - "anon public"  -> SUPABASE_ANON_KEY  (essa chave pode ficar pública;
          a segurança é feita pelas regras do arquivo supabase.sql)          */
  SUPABASE_URL: "",
  SUPABASE_ANON_KEY: "",

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

  /* 3) (OPCIONAL) IMAGENS DAS BOLHAS. Por padrão as bolhas usam figuras
        sorteadas a cada vez. Se quiser usar imagens de vocês, coloque pelo
        menos 5 caminhos aqui (ex: "bolhas/1.png"). Elas também são sorteadas. */
  ORBES: []
};
