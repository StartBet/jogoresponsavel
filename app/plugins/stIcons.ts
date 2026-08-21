import {
  faGift,
  faBars,
  faUserPlus,
  faRightToBracket,
  faMoon,
  faSun,
  faSliders,
  faUserCheck,
  faCheck,
  faHeartPulse,
  faScaleBalanced,
  faRotateLeft,
  faCircleCheck,
  faCoins,
  faBrain,
  faDice,
  faLock,
  faArrowLeft,
  faArrowRight,
  faTriangleExclamation,
  faCircleExclamation
} from '@fortawesome/free-solid-svg-icons'
import {
  faInstagram,
  faTelegram,
  faTiktok,
  faXTwitter,
  faYoutube
} from '@fortawesome/free-brands-svg-icons'
import { useStIconLibrary } from '~/composables/useStIconLibrary'

export default defineNuxtPlugin(() => {
  const { addIcons } = useStIconLibrary()

  addIcons(
    faGift,
    faBars,
    faUserPlus,
    faRightToBracket,
    faMoon,
    faSun,
    faSliders,
    faUserCheck,
    faCheck,
    faHeartPulse,
    faScaleBalanced,
    faRotateLeft,
    faCircleCheck,
    faCoins,
    faBrain,
    faDice,
    faLock,
    faArrowLeft,
    faArrowRight,
    faTriangleExclamation,
    faCircleExclamation,
    faInstagram,
    faTelegram,
    faTiktok,
    faXTwitter,
    faYoutube
  )
})
