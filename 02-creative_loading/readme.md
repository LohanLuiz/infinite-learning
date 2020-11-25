# Creative Loading

Esse é um projeto simples que utiliza apenas o HTML e CSS.

Foi utilizado um exemplo de animação para simular um texto carregando.

Usando conceitos de **before** e **animate** com **@keyframes**, muito massa!

```css

/* Código CSS da animação */
h2:before {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 0%;
  height: 100%;
  color: #67e480;
  -webkit-text-stroke: 0vw #383D52;
  border-right: 2px solid #67e480;
  overflow: hidden;
  animation: animate 6s linear infinite;
}

@keyframes animate {
  0%, 10%, 100% {
    width: 0%;
  }

  70%,90% {
    width: 100%;
  }
}
```

### Prévia

<img src="./preview.gif" />