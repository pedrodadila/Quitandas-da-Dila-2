import type { Metadata } from "next";
import Link from "next/link";
import { Arabesco, Coracao, Icone, TituloSecao } from "@/components/Icone";
import { ENDERECO, INSTAGRAM_URL, LIGAR_URL, TELEFONE, whatsapp } from "@/lib/contato";

export const metadata: Metadata = {
  title: "Como Assar Pão de Queijo e Biscoito de Queijo | Quitandas da Dila",
  description:
    "Instruções oficiais da Quitandas da Dila para assar o pão de queijo e biscoito de queijo congelados no forno e na Air Fryer. Casquinha crocante e miolo macio.",
  alternates: { canonical: "/como-assar" },
};

export default function ComoAssarPage() {
  return (
    <>
      <header className="topo envelope">
        <Link href="/" className="topo__logo" aria-label="Quitandas da Dila — início">
          <img
            src="/img/logo-240.webp"
            srcSet="/img/logo-240.webp 1x, /img/logo-480.webp 2x"
            width={120}
            height={120}
            alt="Quitandas da Dila"
          />
        </Link>
        <nav className="topo__nav" aria-label="Seções">
          <Link href="/">Início</Link>
          <Link href="/#linha-mineira">Linha Mineira</Link>
          <Link href="/#encomendar">Onde Retirar</Link>
        </nav>
        <a className="qd-botao qd-botao--primario topo__cta" href={LIGAR_URL}>
          <Icone nome="telefone" />
          <span>Ligar</span>
        </a>
      </header>

      <main className="envelope" style={{ paddingTop: "24px", paddingBottom: "64px" }}>
        <div style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto 40px auto" }}>
          <span className="qd-selo qd-selo--pilula qd-selo--claro" style={{ marginBottom: "16px" }}>
            Guia de Preparo Oficial
          </span>
          <h1 className="qd-titulo-produto" style={{ fontSize: "36px", marginBottom: "12px" }}>
            <span className="qd-titulo-produto__linha">Como assar o pão de queijo e biscoito da</span>
            <span className="qd-titulo-produto__destaque">Dila</span>
          </h1>
          <p className="qd-slogan" style={{ fontSize: "19px", marginTop: "8px" }}>
            As orientações abaixo são as recomendações oficiais da Dila para o ponto perfeito:
            casquinha crocante e interior macio.
          </p>
        </div>

        {/* ALERTA IMPORTANTE */}
        <div
          style={{
            background: "#fef3c7",
            border: "2px solid #f59e0b",
            borderRadius: "16px",
            padding: "24px",
            maxWidth: "760px",
            margin: "0 auto 40px auto",
            color: "#92400e",
          }}
        >
          <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
            <span style={{ fontSize: "24px", lineHeight: "1" }}>⚠️</span>
            <div>
              <strong style={{ display: "block", fontSize: "16px", marginBottom: "6px" }}>
                Importante: mantenha sempre 100% congelado!
              </strong>
              <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
                Coloque os pães e biscoitos de queijo <strong>diretamente do freezer no forno ou na Air Fryer</strong>.
                Não deixe descongelar e evite deixá-los fora do congelador por mais de 5 minutos antes do preparo. Esse
                cuidado garante o crescimento uniforme e a casquinha crocante.
              </p>
            </div>
          </div>
        </div>

        {/* MÉTODOS DE PREPARO */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "28px",
            maxWidth: "960px",
            margin: "0 auto 48px auto",
          }}
        >
          {/* FORNO ELÉTRICO */}
          <div
            style={{
              background: "#ffffff",
              border: "1px solid var(--linha)",
              borderRadius: "20px",
              padding: "32px",
              boxShadow: "var(--sombra-cartao)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <Icone nome="forno" tamanho={32} />
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "24px", color: "var(--cafe)" }}>
                No Forno Elétrico / Gás
              </h2>
            </div>
            <ol style={{ paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "14px", fontSize: "15px" }}>
              <li>
                <strong>Pré-aquecimento:</strong> Pré-aqueça o forno a <strong>300°C</strong> (chave no Máximo) por
                cerca de 10 minutos.
              </li>
              <li>
                <strong>Distribuição:</strong> Distribua em uma assadeira deixando espaço entre eles. Não amontoe.
              </li>
              <li>
                <strong>Não unte:</strong> Não é necessário untar a forma (o queijo artesanal da receita não gruda).
              </li>
              <li>
                <strong>Ajuste de temperatura:</strong> Quando começarem a crescer, reduza para <strong>250°C</strong>{" "}
                (chave no Médio).
              </li>
              <li>
                <strong>Tempo de forno:</strong> Asse por aproximadamente <strong>20 a 25 minutos</strong>.
              </li>
              <li>
                <strong>Ponto ideal:</strong> Retire quando estiverem crescidos e levemente dourados por cima.
              </li>
            </ol>
          </div>

          {/* NA AIR FRYER */}
          <div
            style={{
              background: "#ffffff",
              border: "1px solid var(--linha)",
              borderRadius: "20px",
              padding: "32px",
              boxShadow: "var(--sombra-cartao)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <span style={{ fontSize: "28px" }}>🌪️</span>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "24px", color: "var(--cafe)" }}>
                Na Air Fryer (Fritadeira)
              </h2>
            </div>
            <ol style={{ paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "14px", fontSize: "15px" }}>
              <li>
                <strong>Pré-aquecimento:</strong> Pré-aqueça a Air Fryer a <strong>200°C</strong> por aproximadamente 10
                minutos.
              </li>
              <li>
                <strong>No cesto:</strong> Coloque os pães ou biscoitos no cesto sem amontoar, permitindo circulação de
                ar.
              </li>
              <li>
                <strong>Tempo de assamento:</strong> Asse a <strong>200°C por 15 a 18 minutos</strong>.
              </li>
              <li>
                <strong>O segredo da Dila:</strong> Aos 6 ou 7 minutos, dê uma leve mexida no cesto para assamento
                100% uniforme.
              </li>
              <li>
                <strong>Sirva quentinho:</strong> Sirva ainda quentinho com café passado na hora para aproveitar a máxima
                crocância!
              </li>
            </ol>
          </div>
        </div>

        {/* DÚVIDAS FREQUENTES DE PREPARO */}
        <section style={{ maxWidth: "760px", margin: "0 auto 48px auto" }}>
          <TituloSecao id="faq-preparo">Dúvidas Frequentes</TituloSecao>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "24px" }}>
            <div
              style={{
                background: "#ffffff",
                border: "1px solid var(--linha)",
                borderRadius: "14px",
                padding: "20px",
              }}
            >
              <h3 style={{ fontSize: "17px", color: "var(--cafe)", marginBottom: "8px" }}>
                Posso descongelar o pão de queijo antes de assar?
              </h3>
              <p style={{ fontSize: "14px", color: "var(--texto-suave)", lineHeight: "1.6" }}>
                Não. O pão de queijo da Quitandas da Dila deve ir direto do congelador para o calor. O choque térmico é
                o que dá o crescimento e a casquinha crocante por fora.
              </p>
            </div>

            <div
              style={{
                background: "#ffffff",
                border: "1px solid var(--linha)",
                borderRadius: "14px",
                padding: "20px",
              }}
            >
              <h3 style={{ fontSize: "17px", color: "var(--cafe)", marginBottom: "8px" }}>
                O biscoito de queijo assa igual ao pão de queijo?
              </h3>
              <p style={{ fontSize: "14px", color: "var(--texto-suave)", lineHeight: "1.6" }}>
                Sim! Ambos seguem os mesmos parâmetros de temperatura e tempo (20 a 25 min no forno a 250°C ou 15 a 18 min
                na Air Fryer a 200°C).
              </p>
            </div>

            <div
              style={{
                background: "#ffffff",
                border: "1px solid var(--linha)",
                borderRadius: "14px",
                padding: "20px",
              }}
            >
              <h3 style={{ fontSize: "17px", color: "var(--cafe)", marginBottom: "8px" }}>
                Preciso untar a forma?
              </h3>
              <p style={{ fontSize: "14px", color: "var(--texto-suave)", lineHeight: "1.6" }}>
                Não. Devido à presença generosa de queijo artesanal na massa tradicional, o produto solta naturalmente da
                assadeira.
              </p>
            </div>
          </div>
        </section>

        {/* CTA DE RECOMPRA */}
        <section
          style={{
            textAlign: "center",
            background: "var(--creme)",
            borderRadius: "24px",
            padding: "40px 24px",
            maxWidth: "760px",
            margin: "0 auto",
            border: "1px solid var(--linha)",
          }}
        >
          <Arabesco largura={160} />
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "28px", margin: "16px 0 8px 0" }}>
            Acabou o pão de queijo em casa?
          </h2>
          <p style={{ fontSize: "16px", color: "var(--texto-suave)", marginBottom: "24px" }}>
            Temos bandejas de 1kg congeladas para pronta entrega todos os dias em Pompéu, inclusive sábados, domingos e
            feriados.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a className="qd-botao qd-botao--primario qd-botao--lg" href={whatsapp("Olá, Dila! Quero pedir mais uma bandeja de pão de queijo congelado.")} target="_blank" rel="noopener">
              <Icone nome="whatsapp" tamanho={22} />
              <span>Pedir mais pelo WhatsApp</span>
            </a>
            <Link className="qd-botao qd-botao--secundario qd-botao--lg" href="/">
              <span>Ver cardápio completo</span>
            </Link>
          </div>
        </section>
      </main>

      <footer className="rodape">
        <div className="xadrez" aria-hidden="true" />
        <div className="envelope rodape__conteudo">
          <p className="qd-slogan">
            Da cozinha da Dila para sua família. <Coracao tamanho={12} />
          </p>
          <p className="rodape__info">Quitandas da Dila · Pompéu – MG · {TELEFONE}</p>
        </div>
      </footer>
    </>
  );
}
