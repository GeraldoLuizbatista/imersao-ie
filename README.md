# Landing Page - Imersão IE (Inteligência Exponencial)

Landing page moderna e de alta conversão para a Imersão em Agentes e Assistentes de IA.

## 🚀 Tecnologias

- React 18
- Vite
- Tailwind CSS
- Lucide React (ícones)

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview
```

## 🎨 Estrutura

```
src/
├── components/
│   ├── Hero.jsx              # Seção principal
│   ├── CountdownTimer.jsx    # Contador regressivo
│   ├── ImpactStats.jsx       # Estatísticas de impacto
│   ├── Problem.jsx           # Apresentação do problema
│   ├── Solution.jsx          # Apresentação da solução
│   ├── Instructors.jsx       # Perfil dos instrutores
│   ├── Agenda.jsx            # Agenda do evento
│   ├── Results.jsx           # Resultados esperados
│   ├── ForWho.jsx            # Para quem é/não é
│   ├── Pricing.jsx           # Precificação
│   ├── Bonus.jsx             # Bônus exclusivos
│   ├── Testimonials.jsx      # Depoimentos
│   ├── FAQ.jsx               # Perguntas frequentes
│   ├── Guarantee.jsx         # Garantia
│   ├── FinalCTA.jsx          # CTA final
│   └── FloatingCTA.jsx       # CTA flutuante
├── App.jsx                    # Componente principal
├── main.jsx                   # Entry point
└── index.css                  # Estilos globais
```

## 🎯 Características

- ✅ Design moderno e responsivo
- ✅ Animações suaves
- ✅ CTAs estratégicos múltiplos
- ✅ Contador regressivo
- ✅ FAQ interativo
- ✅ Seções de prova social
- ✅ Otimizado para conversão
- ✅ SEO otimizado

## 🌐 Deploy

Para fazer deploy, execute:

```bash
npm run build
```

Os arquivos estarão na pasta `dist/` prontos para serem hospedados.

### Opções de Hospedagem

- Vercel (recomendado)
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

## 📝 Personalização

Para personalizar o conteúdo:

1. **Data do evento**: Procure por `[DATA]` ou `[DATA DO EVENTO]` e substitua
2. **Local**: Procure por `[LOCAL]` e substitua
3. **Vagas**: Procure por `[X]` em contextos de vagas e substitua
4. **Imagens**: Adicione fotos dos instrutores em `Instructors.jsx`
5. **Links de pagamento**: Adicione URLs de checkout em `Pricing.jsx`

## 🔧 Configurações Adicionais

### Analytics

Adicione seu Google Analytics no `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

### Pixel do Facebook

Adicione seu Pixel do Facebook no `index.html`:

```html
<!-- Facebook Pixel Code -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'YOUR_PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

## 📱 Suporte

Para dúvidas ou suporte, entre em contato através de:
- Email: contato@imersao-ie.com.br
- WhatsApp: [número]

## 📄 Licença

Todos os direitos reservados © 2025 Imersão IE
