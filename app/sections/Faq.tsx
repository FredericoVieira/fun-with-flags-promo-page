import { Accordion, SubscriptionButton } from "../components";

const FAQ = [
  {
    title: "Quem é Frederico Vieira?",
    content:
      "Sou um desenvolvedor full-stack com mais de 10 anos de experiência e foco em excelência no front-end. Formado em Engenharia de Computação. Ao longo da minha carreira, colaborei com empresas no Brasil e no exterior, desenvolvendo interfaces intuitivas, plataformas de visualização de dados e aplicativos móveis. Tenho paixão por construir produtos inovadores com JavaScript, Node.js e Python, além de adorar ensinar e compartilhar conhecimento com a comunidade dev.",
  },
  {
    title: "Qual o objetivo deste curso?",
    content:
      "Construir um projeto do zero até o deploy com fundações sólidas, utilizando as melhores práticas e ferramentas do mercado. Além da parte técnica, você desenvolverá a mentalidade de um front-end, compreendendo os conceitos fundamentais e como as tecnologias se conectam. Ao concluir o curso, você terá o conhecimento e a segurança para criar projetos reais, se destacar no mercado e entregar soluções inovadoras que geram valor ao usuário final.",
  },
  {
    title: "Para quem é esse curso?",
    content:
      "Este curso é ideal para quem já domina o básico de uma linguagem de programação, independentemente de qual seja, e tem noção de HTML e CSS, mas ainda não sabe como transformar esse conhecimento em aplicações web modernas. Se você quer se tornar um desenvolvedor front-end ou entender melhor o funcionamento do client-side em aplicações web, este curso foi feito para você.",
  },
  {
    title: "O acesso é vitalício?",
    content:
      "Sim! Uma vez inscrito você possui acesso ilimitado e com atualizações futuras com novos conteúdos sem custos adicionais.",
  },
  {
    title: "Qual o valor e desconto de lançamento?",
    content:
      "O valor durante o primeiro mês de lançamento do curso é de R$ 29,70. Essa é uma promoção temporária com um desconto de 63% sobre o valor final estimado do curso de R$ 79,90.",
  },
  {
    title: "O curso irá emitir certificado?",
    content:
      "Sim! Após finalizar o curso você poderá emitir o Certificado de Conclusão com a carga horária total de 8 horas diretamente na plataforma.",
  },
  {
    title: "Como funciona o suporte à dúvidas?",
    content:
      "Em todos os conteúdos da plataforma você poderá registrar suas dúvidas, sugestões ou comentários. As dúvidas serão respondidas dentro de 24 horas.",
  },
  {
    title: "Você possui outras dúvidas?",
    content:
      "Sem problemas! Entre em contato através do e-mail f9ine.dev@gmail.com.",
  },
];

export default function Faq() {
  return (
    <section className="w-full lg:py-16 py-12 lg:px-60 px-12 z-10">
      <h2 className="text-3xl text-[var(--primary)] font-bold tracking-tight mb-8">
        Perguntas frequentes
      </h2>
      <div className="mb-8">
        <Accordion items={FAQ} />
      </div>
      <SubscriptionButton />
    </section>
  );
}
