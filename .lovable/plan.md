# Trocar o site de roxo e preto para verde e preto

Todas as cores do site vêm de um único arquivo de tema, então a troca é rápida e vale para todas as páginas ao mesmo tempo (início, agenda, palestrantes, projetos, local, ingressos, FAQ).

## O que muda
- **Fundo:** continua preto, mas com um leve toque esverdeado no lugar do arroxeado.
- **Cor principal (botões, destaques, números, etiquetas "01 · Sobre"):** verde vibrante, com degradê de verde para verde-limão.
- **Brilhos e sombras dos cards, faixa de áreas que rola, card VIP, grade de fundo:** tudo em verde.
- **Textos de destaque (nomes nos depoimentos, horários na agenda):** verde-claro.

## O que não muda sozinho
As imagens geradas (foto do palco no topo, galeria de projetos e as fotos dos depoimentos) têm luz roxa na própria imagem. Opcional: gerar essas imagens de novo com luz verde para combinar (são 15 imagens). Os palestrantes não precisam.

## Detalhes técnicos
- Trocar o tom (hue 300/330 → cerca de 150/130) de todas as variáveis em `src/styles.css`: background, surface, card, primary, primary-glow, accent, ring, chart, sidebar, gradientes, shadow-glow, bg-grid e glow-orb.
- Nenhum componente usa cor fixa, então não há outros arquivos a editar.
- Atualizar a memória do projeto ("roxo e preto" → "verde e preto").
- Conferir com navegador de teste em computador e celular.
