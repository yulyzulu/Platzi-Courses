function listGifts(letter) {
  const gifs = letter.trim().split(' ');
  const regalos = {};
  for (let i = 0; i < gifs.length; i++) {
    gifs[i] = gifs[i].trim();
    if (gifs[i].charAt(0) === '_'){
      continue;
    }
    if (regalos[gifs[i]]) {
      regalos[gifs[i]] += 1;
    } else {
      regalos[gifs[i]] = 1;
    }
  }
 return regalos;
}

const carta = 'bici coche balón _playstation bici coche peluche';

const regalos = listGifts(carta);

console.log(regalos);