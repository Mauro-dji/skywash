/* Site Cinematográfico · © 2026 Labrego IA · LBG-SC-2026-v1 */
window.SITE = {
  nome: "Skywash",
  assinatura: "LBG-SC-20261027-5E1DC4959F",

  whatsapp: {
    numero: "5591991817054", // só dígitos, ex.: 5511999998888
    mensagem: "Olá! Quero agendar uma vistoria técnica.",
  },

  contato: {
    email: "contato@skywashdrones.com.br",
    // Opcional: chave do Web3Forms (https://web3forms.com). Se vazio, usa FormSubmit.
    web3formsChave: "",
    assunto: "Novo pedido de vistoria pelo site Skywash",
  },

  frames: {
    total: 130, // valor impresso pelo fatiar_frames.sh
    desktop: "assets/frames/desktop/f_{n}.webp",
    mobile: "assets/frames/mobile/f_{n}.webp",
    foco: 0.76, // no celular, puxa o recorte para a direita (onde está o drone)
  },
};
