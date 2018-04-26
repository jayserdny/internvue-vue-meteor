import base from './base'
import { Questions } from '../api/collections'

export default {
  extends: base,

  data () {
    return {
        Questions: [],
    }
  },

  meteor: {
    $subscribe: {
      'questions': [],
    },

    questions () {
      return Questions.find({})
    },
  },
}
