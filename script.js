const html5QrCode = new Html5Qrcode("reader");
const qrCodeSuccessCallback = (decodedText, decodedResult) => {
  // Gerar um versículo aleatório
  const verses = [
    "E Deus disse: Faça-se a luz. E a luz foi feita. (Gênesis 1:3)",
    "E Deus viu que a luz era boa, e Deus separou a luz das trevas. (Gênesis 1:4)",
    "E Deus chamou a luz de Dia, e as trevas de Noite. E foi tarde, e foi manhã: o primeiro dia. (Gênesis 1:5)",
    "E Deus disse: Faça-se um firmamento no meio das águas, e separe as águas das águas. (Gênesis 1:6)",
    "E Deus chamou o firmamento de Céu. E foi tarde, e foi manhã: o segundo dia. (Gênesis 1:8)",
    "E Deus disse: Ajuntem-se as águas que estão debaixo do céu para um lugar, e apareça a terra seca. E assim foi. (Gênesis 1:9)",
    "E Deus chamou a terra seca de Terra, e as ajunções de águas de Mares. E Deus viu que era bom. (Gênesis 1:10)",
    "E Deus disse: Produza a terra erva verde, e erva que dê semente, e árvore que dê fruto segundo a sua espécie, que contenha a sua semente sobre a terra. E assim foi. (Gênesis 1:11)",
    "E Deus disse: Haja luzes no firmamento do céu, para separarem o dia da noite; e sejam para sinais, e para tempos, e para dias, e para anos. (Gênesis 1:14)",
    "E Deus criou os grandes animais marinhos, e todas as almas viventes que se movem nas águas, segundo as suas espécies, e todas as aves que voam, segundo as suas espécies. E Deus viu que era bom. (Gênesis 1:21)"
  ];
  const randomVerse = verses[Math.floor(Math.random() * verses.length)];
  // Reproduzir o áudio do versículo aleatório
  const audio = new Audio(`https://example.com/audio/${randomVerse}.mp3`);
  audio.play();
};
html5QrCode.render(qrCodeSuccessCallback);
const qrCode = new QRCode("qr-code", {
  text: "https://example.com/reader",
  width: 200,
  height: 200,
  colorDark: "#000000",
  colorLight: "#ffffff",
  correctLevel: QRCode.CorrectLevel.H
});