<script setup lang="ts">
import { StButton, StChip, StPaper, StTypography } from '@startbet/st-core-ui'

const mythBustedCards = [
  {
    myth: '“Se eu insistir por mais tempo, consigo recuperar o que perdi.”',
    fact: 'Aumentar o tempo ou o valor apostado não garante recuperação e pode ampliar o prejuízo.'
  },
  {
    myth: '“Conhecer muito um esporte garante uma aposta vencedora.”',
    fact: 'Conhecimento ajuda a interpretar contexto, mas eventos esportivos continuam sujeitos a incerteza.'
  }
] as const

const supportChannelCards = [
  {
    title: 'Atendimento SUS',
    body: 'Atendimento gratuito, sigiloso e profissional. Acesse o app Meu SUS Digital para encontrar orientação e a rede pública de cuidado.',
    link: 'https://meususdigital.saude.gov.br/login'
  },
  {
    title: 'Autoteste do Governo',
    body: 'Avalie sua relação com o jogo por meio do recurso oficial do Governo Federal. Rápido, gratuito e anônimo.',
    link: 'https://miniapps.saude.gov.br/teste-jogo/'
  }
] as const

const clinicCards = [
  {
    title: 'RAPS',
    body: 'Rede de Atendimento Psicossocial integrada de serviços que atende pessoas com sofrimento mental ou que enfrentam problemas com uso prejudicial de álcool e outras drogas.',
    link: 'https://www.gov.br/saude/pt-br/composicao/saes/desmad/raps'
  },
  {
    title: 'CVV',
    body: 'Centro de Valorização da Vida é uma associação civil sem fins lucrativos, filantrópica, que é reconhecida como de Utilidade Pública Federal desde 1973.',
    link: 'https://cvv.org.br/'
  },
  {
    title: 'Procure Clínicas',
    body: 'Diretório nacional para localizar clínicas e centros de tratamento que atendem questões relacionadas ao jogo compulsivo.',
    link: 'https://www.google.com/search?q=clinica+tratamento+ludopatia+brasil'
  }
] as const

const groupCards = [
  {
    title: 'Jogadores Anônimos',
    body: 'Reuniões presenciais e grupos de partilha no modelo dos 12 passos para quem busca parar de jogar.',
    link: 'https://www.jogadoresanonimos.com.br/'
  },
  {
    title: 'JA Online',
    body: 'Apoio por videoconferência e reuniões remotas, facilitando o acesso de onde você estiver.',
    link: 'https://www.jogadoresanonimos.com.br/'
  },
  {
    title: 'Gordon Moody',
    body: 'Um serviço global oferecido por Gordon Moody, fornecendo conselhos práticos gratuitos e apoio emocional a qualquer pessoa afetada pelo jogo.',
    link: 'https://gamblingtherapy.org/pt-br/'
  }
] as const
</script>

<template>
  <section id="support" class="bg-st-surface-4 py-st-6 md:py-st-8 lg:py-st-10">
    <div class="mx-auto w-full max-w-st-160 px-st-2 md:px-st-6 lg:px-st-10">
      <header class="flex flex-col gap-st-2 mb-st-4 md:mb-st-5 lg:mb-st-6 max-w-st-160">
        <StTypography
          variant="body-large"
          class-name="text-st-content-secondary uppercase tracking-[0.3em]"
        >
          Informação
        </StTypography>

        <StTypography
          as="h2"
          line-height="tight"
          :lines="2"
          variant="hero-title"
          class-name="!text-st-2xl md:!text-st-3xl lg:!text-st-4xl"
        >
          Mitos desvendados. Escolhas mais
          <span class="text-st-content-secondary italic"> conscientes</span>.
        </StTypography>
      </header>

      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-st-4 md:gap-st-4 mb-st-6 md:mb-st-8 lg:mb-st-10"
      >
        <StPaper
          v-for="card in mythBustedCards"
          :key="card.myth"
          surface="1"
          :elevation="2"
          class-name="h-full flex flex-col overflow-hidden border border-st-border-2"
        >
          <div class="flex items-start gap-st-3 p-st-3 bg-st-surface-3">
            <StChip variant="negative">Mito</StChip>
            <StTypography variant="body-medium" class-name="text-content-default">
              {{ card.myth }}
            </StTypography>
          </div>
          <div class="flex items-start gap-st-3 p-st-3 bg-st-surface-2 border-t border-st-border-2">
            <StChip variant="positive">Fato</StChip>
            <StTypography variant="body-medium" class-name="text-content-default">
              {{ card.fact }}
            </StTypography>
          </div>
        </StPaper>
      </div>

      <div
        class="flex flex-col items-center text-center gap-st-2 mb-st-3 md:mb-st-4 lg:mb-st-5 max-w-st-120 mx-auto"
      >
        <StTypography
          variant="body-large"
          class-name="text-st-content-secondary uppercase tracking-[0.3em]"
        >
          Apoio
        </StTypography>

        <StTypography
          as="h3"
          line-height="tight"
          :lines="2"
          variant="hero-title"
          class-name="!text-st-2xl md:!text-st-3xl lg:!text-st-4xl"
        >
          Precisou de apoio? A gente tá
          <span class="text-st-content-secondary italic"> junto</span>.
        </StTypography>

        <StTypography variant="body-medium" class-name="text-content-secondary">
          Buscar apoio não é fraqueza — é jogar bem. Existem canais gratuitos, sigilosos e
          profissionais prontos pra te ajudar.
        </StTypography>
      </div>

      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-st-4 md:gap-st-4 mb-st-5 md:mb-st-6 lg:mb-st-8"
      >
        <StPaper
          v-for="card in supportChannelCards"
          :key="card.title"
          surface="1"
          :elevation="2"
          class-name="h-full flex flex-col gap-st-3 p-st-4 border border-st-border-2"
        >
          <StTypography variant="highlight-medium" class-name="text-content-default uppercase">
            {{ card.title }}
          </StTypography>
          <StTypography variant="body-small" class-name="text-content-secondary flex-1">
            {{ card.body }}
          </StTypography>
          <div class="pt-st-2 mt-auto">
            <a
              :href="card.link"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-stretch w-fit"
            >
              <StButton variant="text" color="secondary" size="small" icon-right="right-to-bracket">
                Saiba mais
              </StButton>
            </a>
          </div>
        </StPaper>
      </div>

      <div
        class="border-t border-st-border-2 pt-st-4 md:pt-st-5 lg:pt-st-6 mb-st-4 md:mb-st-5 lg:mb-st-6 flex flex-col items-center text-center gap-st-2"
      >
        <StTypography
          as="h3"
          line-height="tight"
          :lines="2"
          variant="hero-title"
          class-name="!text-st-2xl md:!text-st-3xl lg:!text-st-4xl"
        >
          Clínicas de
          <span class="text-st-content-secondary italic"> apoio</span>.
        </StTypography>
      </div>

      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-st-4 md:gap-st-4 mb-st-5 md:mb-st-6 lg:mb-st-8"
      >
        <StPaper
          v-for="card in clinicCards"
          :key="card.title"
          surface="1"
          :elevation="2"
          class-name="h-full flex flex-col gap-st-3 p-st-4 border border-st-border-2"
        >
          <StTypography variant="highlight-medium" class-name="text-content-default uppercase">
            {{ card.title }}
          </StTypography>
          <StTypography variant="body-small" class-name="text-content-secondary flex-1">
            {{ card.body }}
          </StTypography>
          <div class="pt-st-2 mt-auto">
            <a
              :href="card.link"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-stretch w-fit"
            >
              <StButton variant="text" color="secondary" size="small" icon-right="right-to-bracket">
                Saiba mais
              </StButton>
            </a>
          </div>
        </StPaper>
      </div>

      <div
        class="border-t border-st-border-2 pt-st-4 md:pt-st-5 lg:pt-st-6 mb-st-4 md:mb-st-5 lg:mb-st-6 flex flex-col items-center text-center gap-st-2"
      >
        <StTypography
          as="h3"
          line-height="tight"
          :lines="2"
          variant="hero-title"
          class-name="!text-st-2xl md:!text-st-3xl lg:!text-st-4xl"
        >
          Grupos de
          <span class="text-st-content-secondary italic"> apoio</span>.
        </StTypography>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-st-4 md:gap-st-4">
        <StPaper
          v-for="card in groupCards"
          :key="card.title"
          surface="1"
          :elevation="2"
          class-name="h-full flex flex-col gap-st-3 p-st-4 border border-st-border-2"
        >
          <StTypography variant="highlight-medium" class-name="text-content-default uppercase">
            {{ card.title }}
          </StTypography>
          <StTypography variant="body-small" class-name="text-content-secondary flex-1">
            {{ card.body }}
          </StTypography>
          <div class="pt-st-2 mt-auto">
            <a
              :href="card.link"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-stretch w-fit"
            >
              <StButton variant="text" color="secondary" size="small" icon-right="right-to-bracket">
                Saiba mais
              </StButton>
            </a>
          </div>
        </StPaper>
      </div>
    </div>
  </section>
</template>
