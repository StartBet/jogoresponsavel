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
  faCircleInfo,
  faCoins,
  faBrain,
  faComment,
  faDice,
  faLock,
  faArrowLeft,
  faArrowRight,
  faPhone,
  faTriangleExclamation,
  faCircleExclamation,
  faUpRightFromSquare,
  faDownload
} from '@fortawesome/free-solid-svg-icons'
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
    faCircleInfo,
    faCoins,
    faBrain,
    faComment,
    faDice,
    faLock,
    faArrowLeft,
    faArrowRight,
    faPhone,
    faTriangleExclamation,
    faCircleExclamation,
    faUpRightFromSquare,
    faDownload
  )
})
