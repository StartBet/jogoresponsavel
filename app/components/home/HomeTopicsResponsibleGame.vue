<script setup lang="ts">
import {
  StButton,
  StChip,
  StListItem,
  StPaper,
  StTypography,
  StUnorderedList
} from '@startbet/st-core-ui'
import StIconBadge from '~/components/icon-badge'
import { SELF_ASSESSMENT_MODAL_NAME } from '~/components/modal/self-assessment/StSelfAssessmentModal.interface'
import { useStModal } from '~/composables/useStModal'

const { open: openSelfAssessment } = useStModal(SELF_ASSESSMENT_MODAL_NAME)

type TabKey = 'overview' | 'problems' | 'howItWorks' | 'myths'
interface TabItem {
  key: TabKey
  label: string
}

const tabs: TabItem[] = [
  { key: 'overview', label: 'Visão Geral' },
  { key: 'problems', label: 'Sinais de Alerta' },
  { key: 'howItWorks', label: 'Como Funciona' },
  { key: 'myths', label: 'Mitos Desvendados' }
]

const activeTab = ref<TabKey>('overview')

const setTab = (key: TabKey) => {
  activeTab.value = key
}

const overviewHowToPlayCards = [
  {
    icon: 'coins',
    title: 'Planeje',
    body: 'Defina um orçamento exclusivo para lazer e não ultrapasse esse valor.'
  },
  {
    icon: 'rotate-left',
    title: 'Interrompa',
    body: 'Se perceber irritação, insistência ou perda de noção do tempo, encerre a sessão.'
  }
] as const

const warningSignalsCards = [
  {
    icon: 'coins',
    title: 'Tempo e dinheiro',
    body: 'Você ultrapassa com frequência o que havia planejado para a sessão.'
  },
  {
    icon: 'rotate-left',
    title: 'Recuperar perdas',
    body: 'Você sente que precisa continuar apostando para “buscar de volta” o prejuízo.'
  },
  {
    icon: 'heart-pulse',
    title: 'Impacto pessoal',
    body: 'O jogo começa a interferir em contas, trabalho, estudos ou relacionamentos.'
  },
  {
    icon: 'user-check',
    title: 'Falta de transparência',
    body: 'Você esconde ou minimiza de outras pessoas quanto tempo ou dinheiro utiliza.'
  }
] as const

const howItWorksCards = [
  {
    icon: 'dice',
    title: 'RNG',
    body: 'Geradores de números aleatórios produzem resultados imprevisíveis em jogos compatíveis com esse sistema.'
  },
  {
    icon: 'scale-balanced',
    title: 'RTP',
    body: 'É uma média estatística calculada em muitas rodadas; não representa o retorno individual de uma sessão.'
  },
  {
    icon: 'sliders',
    title: 'Odds',
    body: 'Odds ajudam a interpretar probabilidade e retorno, mas não eliminam a incerteza do evento.'
  },
  {
    icon: 'brain',
    title: 'Risco',
    body: 'O principal risco financeiro é perder o valor apostado. Nunca conte com uma aposta para pagar contas.'
  }
] as const

const mythCards = [
  {
    myth: '“Quanto mais tempo eu jogar, maior a chance de sair ganhando.”',
    fact: 'Mais tempo de jogo não altera a aleatoriedade do próximo resultado e aumenta sua exposição ao risco.'
  },
  {
    myth: '“Depois de várias perdas, uma vitória está mais perto.”',
    fact: 'Resultados independentes não criam uma obrigação de “compensação” na rodada seguinte.'
  }
] as const
</script>

<template>
  <section id="topics" class="bg-st-surface-4 py-st-10 md:py-st-15 lg:py-st-20">
    <div class="mx-auto w-full max-w-st-160 px-st-2 md:px-st-6 lg:px-st-10">
      <header class="flex flex-col gap-st-2">
        <StTypography
          variant="body-large"
          class-name="text-content-secondary uppercase tracking-[0.3em]"
        >
          Consciência
        </StTypography>

        <StTypography
          as="h2"
          line-height="snug"
          :lines="2"
          variant="hero-title"
          class-name="text-st-2xl md:text-st-3xl lg:text-st-4xl"
        >
          Antes de jogar, entenda o que está em jogo.
        </StTypography>

        <StTypography
          variant="body-large"
          class-name="text-content-default/90 text-st-sm md:text-st-base lg:text-st-lg max-w-st-72 md:max-w-st-80 lg:max-w-[60ch] mb-st-8 text-left"
        >
          Quanto mais clareza você tem sobre probabilidades, aleatoriedade e risco, mais fácil fica
          tomar decisões com a cabeça <br />— e não no impulso.
        </StTypography>
      </header>

      <div class="w-full max-w-st-144">
        <StUnorderedList
          list-style="none"
          :divided="true"
          orientation="horizontal"
          class-name="pl-st-2"
        >
          <StListItem
            v-for="tab in tabs"
            :key="tab.key"
            :selected="activeTab === tab.key"
            :clickable="true"
            :divider="true"
            @click="setTab(tab.key)"
          >
            {{ tab.label }}
          </StListItem>
        </StUnorderedList>

        <div class="relative">
          <StPaper
            v-show="activeTab === 'overview'"
            :elevation="1"
            class-name="p-st-4 bg-st-surface-2 rounded-st-2 flex flex-col gap-st-2"
          >
            <StTypography variant="heading-4" as="h3" class-name="text-content-default">
              Aposta é entretenimento —
              <span class="text-st-secondary italic"> não renda</span>.
            </StTypography>
            <StTypography variant="body-medium" class-name="text-content-default">
              Resultados não são garantidos e nenhuma estratégia elimina completamente o risco. Use
              apenas valores que façam sentido dentro do seu orçamento e mantenha o jogo separado
              das suas necessidades financeiras.
            </StTypography>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-st-4 md:gap-st-4">
              <StPaper
                v-for="card in overviewHowToPlayCards"
                :key="card.title"
                surface="1"
                :elevation="2"
                class-name="h-full flex flex-col gap-st-2 p-st-2 border border-st-border-2"
              >
                <StIconBadge :name="card.icon" />
                <StTypography
                  variant="highlight-medium"
                  class-name="text-content-default uppercase"
                >
                  {{ card.title }}
                </StTypography>
                <StTypography variant="body-small" class-name="text-content-secondary">
                  {{ card.body }}
                </StTypography>
              </StPaper>
            </div>
          </StPaper>

          <StPaper
            v-show="activeTab === 'problems'"
            :elevation="1"
            class-name="p-st-4 bg-st-surface-2 rounded-st-2 flex flex-col gap-st-2"
          >
            <StTypography variant="heading-4" as="h3" class-name="text-content-default">
              Quando vale
              <span class="text-st-secondary italic"> acender o alerta</span>?
            </StTypography>
            <StTypography variant="body-medium" class-name="text-content-default">
              Preste atenção nos comportamentos abaixo. Se algum se repetir com frequência, é um bom
              momento pra diminuir o ritmo — ou procurar ajuda.
            </StTypography>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-st-4 md:gap-st-4">
              <StPaper
                v-for="card in warningSignalsCards"
                :key="card.title"
                surface="1"
                :elevation="2"
                class-name="h-full flex flex-col gap-st-2 p-st-2 border border-st-border-2"
              >
                <StIconBadge :name="card.icon" />
                <StTypography
                  variant="highlight-medium"
                  class-name="text-content-default uppercase"
                >
                  {{ card.title }}
                </StTypography>
                <StTypography variant="body-small" class-name="text-content-secondary">
                  {{ card.body }}
                </StTypography>
              </StPaper>
            </div>
          </StPaper>

          <StPaper
            v-show="activeTab === 'howItWorks'"
            :elevation="1"
            class-name="p-st-4 bg-st-surface-2 rounded-st-2 flex flex-col gap-st-2"
          >
            <StTypography variant="heading-4" as="h3" class-name="text-content-default">
              Probabilidade
              <span class="text-st-secondary italic"> não é promessa</span>.
            </StTypography>
            <StTypography variant="body-medium" class-name="text-content-default">
              Antes de apostar, conheça os conceitos que regem os jogos. Entender como cada produto
              funciona ajuda a decidir com clareza — e não na intuição.
            </StTypography>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-st-4 md:gap-st-4">
              <StPaper
                v-for="card in howItWorksCards"
                :key="card.title"
                surface="1"
                :elevation="2"
                class-name="h-full flex flex-col gap-st-2 p-st-2 border border-st-border-2"
              >
                <StIconBadge :name="card.icon" />
                <StTypography
                  variant="highlight-medium"
                  class-name="text-content-default uppercase"
                >
                  {{ card.title }}
                </StTypography>
                <StTypography variant="body-small" class-name="text-content-secondary">
                  {{ card.body }}
                </StTypography>
              </StPaper>
            </div>
          </StPaper>

          <StPaper
            v-show="activeTab === 'myths'"
            :elevation="1"
            class-name="p-st-4 bg-st-surface-2 rounded-st-2 flex flex-col gap-st-2"
          >
            <StTypography variant="heading-4" as="h3" class-name="text-content-default">
              Derrube esses
              <span class="text-st-secondary italic"> mitos</span>.
            </StTypography>
            <StTypography variant="body-medium" class-name="text-content-default">
              Muitas crenças sobre apostas não se sustentam. Confira os mitos mais comuns e o que
              realmente acontece.
            </StTypography>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-st-4 md:gap-st-4">
              <StPaper
                v-for="card in mythCards"
                :key="card.myth"
                surface="1"
                :elevation="2"
                class-name="h-full flex flex-col overflow-hidden border border-st-border-2"
              >
                <div class="flex flex-col gap-st-2 p-st-3 bg-st-surface-3">
                  <StChip variant="negative">Mito</StChip>
                  <StTypography variant="body-medium" class-name="text-content-default">
                    {{ card.myth }}
                  </StTypography>
                </div>
                <div
                  class="flex flex-col gap-st-2 p-st-3 bg-st-surface-3 border-t border-st-border-1"
                >
                  <StChip variant="positive">Fato</StChip>
                  <StTypography variant="body-medium" class-name="text-content-default">
                    {{ card.fact }}
                  </StTypography>
                </div>
              </StPaper>
            </div>
          </StPaper>
        </div>

        <StPaper
          border-radius="2"
          class="mt-st-6 md:mt-st-6 lg:mt-st-8 p-st-4 flex flex-col gap-st-4 items-start lg:flex-row lg:items-center lg:justify-between"
        >
          <div class-name="max-w-st-104 w-full p-st-3 rounded-st-2 border border-st-border-2">
            <StTypography variant="heading-4" as="h3" class-name="text-content-default mb-st-2">
              Você joga de forma
              <span class="text-st-secondary italic">responsável</span>?
            </StTypography>
            <StTypography variant="body-medium" class-name="text-content-secondary">
              Faça a nossa autoavaliação — rápida, anônima e sigilosa.
            </StTypography>
          </div>

          <div class="w-full lg:w-auto">
            <StButton
              variant="solid"
              color="secondary"
              size="large"
              icon-left="user-check"
              :full-width="true"
              class-name="shadow-st-action-hover"
              @click="openSelfAssessment"
            >
              Fazer autoavaliação
            </StButton>
          </div>
        </StPaper>
      </div>
    </div>
  </section>
</template>
