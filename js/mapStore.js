let mapLocation = [
  {
    name: "Hoàng Đạo Thúy",
    map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59590.14969535394!2d105.76780711473279!3d21.01730159530538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135aca1091a8bcb%3A0x516742031342d220!2zR29uZyBDaGEgSG_DoG5nIMSQ4bqhbyBUaMO6eQ!5e0!3m2!1svi!2s!4v1697530045504!5m2!1svi!2s"   width="720"
    height="500" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
  },
  {
    name: "Quán Sứ",
    map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35804.769351811185!2d105.7921331739155!3d21.009273728126193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab6c2d0d7a2d%3A0x86fd51252cd4ef96!2zR29uZyBDaGEgUXXDoW4gU-G7qQ!5e0!3m2!1svi!2s!4v1697530168062!5m2!1svi!2s"   width="720"
    height="500" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
  },
  {
    name: "Giảng Võ",
    map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39316.84311367588!2d105.78972532271678!3d21.009712895162366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abba71c9dbbd%3A0x26dbf60fcdacd6a!2zR29uZyBDaGEgR2nhuqNuZyBWw7U!5e0!3m2!1svi!2s!4v1697530196808!5m2!1svi!2s"   width="720"
    height="500" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
  },
  {
    name: "Hàng Khay",
    map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39316.84311367588!2d105.78972532271678!3d21.009712895162366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab74a68cbe7b%3A0x901bcc34517daea1!2sGong%20Cha%20H%C3%A0ng%20Khay!5e0!3m2!1svi!2s!4v1697530224393!5m2!1svi!2s"   width="720"
    height="500" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
  },
];

let chooseMap = document.getElementById("chooseMap");
let map = document.getElementById("map");
function renderMap() {
  let text = "";
  for (let i = 0; i < mapLocation.length; i++) {
    text += `
        <li onclick="choose(${i})" style=" cursor: pointer;height:50px; font-size:2rem;
        
        ">Gong Cha ${mapLocation[i].name}</li>
      `;
  }
  chooseMap.innerHTML = text;
}
renderMap();
function choose(index) {
  map.innerHTML = mapLocation[index].map;
}
