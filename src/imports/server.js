import './api/publications';
import { VueSSR } from 'meteor/akryum:vue-ssr';
import CreateApp from './app';
import { Questions } from './api/collections';

const isDev = process.env.NODE_ENV !== 'production';

if (Questions.find().count() === 0) {
  let questions = [
    // Traditional Questions
    {
      question: "Tell me about yourself (in 1-2 minutes).",
      type: "traditional"
    },
    {
      question: "Why do you feel that you will be successful in this position?",
      type: "traditional"
    },
    {
      question: "Why this position?",
      type: "traditional"
    },
    {
      question: "Why do you want to work for our company specifically?",
      type: "traditional"
    },
    {
      question: "Describe one or two achievements that have given you the most satisfaction.",
      type: "traditional"
    },
    {
      question: "In what ways would you contribute to our organization?",
      type: "traditional"
    },
    {
      question: "Why should we hire you?",
      type: "traditional"
    },
    {
      question: "Where do you see yourself in 5 years? 10 years?",
      type: "traditional"
    },
    {
      question: "What supervisory or leadership roles have you held?",
      type: "traditional"
    },
    {
      question: "What are your strengths and weaknesses?",
      type: "traditional"
    },
    {
      question: "How would your last supervisor describe you?",
      type: "traditional"
    },
    {
      question: "Why did you choose your major?",
      type: "traditional"
    },
    {
      question: "Tell me about your scholastic record.",
      type: "traditional"
    },
    {
      question: "What courses did you like best? least? Why?",
      type: "traditional"
    },
    {
      question: "Do you think your grades are a good indication of your academic achievements?",
      type: "traditional"
    },
    {
      question: "Tell me about your extra-curricular activities and interests.",
      type: "traditional"
    },
    {
      question: "How do you spend your spare time?",
      type: "traditional"
    },
    {
      question: "What have been your most satisfying and most disappointing school or work experiences?",
      type: "traditional"
    },
    {
      question: "What did you learn from your part-time or summer job experiences?",
      type: "traditional"
    },
    {
      question: "Do you have plans for graduate study?",
      type: "traditional"
    },
    {
      question: "Describe briefly your philosophy of __ education or nursing (etc.).",
      type: "traditional"
    },
    {
      question: "Tell me about your practice __ teaching or clinical experiences (etc.).",
      type: "traditional"
    },
    {
      question: "Why did you choose to become a __ ?",
      type: "traditional"
    },
    {
      question: "How do you work under pressure?",
      type: "traditional"
    },
    {
      question: "Why do you want to leave your current job? (If employed full-time.)",
      type: "traditional"
    },

    // Behavioral Questions

    {
      question: "Tell me about a time when you worked effectively under pressure.",
      type: "behavioral"
    },
    {
      question: "Tell me about a time when you handled a difficult situation / conflict with a co-worker.",
      type: "behavioral"
    },
    {
      question: "Tell me about a time when you resolved a conflict in your team.",
      type: "behavioral"
    },
    {
      question: "Tell me about a time when you were creative in solving a problem.",
      type: "behavioral"
    },
    {
      question: "Tell me about a time when you missed an obvious solution to a problem.",
      type: "behavioral"
    },
    {
      question: "Tell me about a time when you were unable to complete a project on time.",
      type: "behavioral"
    },
    {
      question: "Tell me about a time when you persuaded team members to do things your way.",
      type: "behavioral"
    },
    {
      question: "Tell me about a time when you wrote a report that was well received.",
      type: "behavioral"
    },
    {
      question: "Tell me about a time when you anticipated potential problems and developed preventive measures.",
      type: "behavioral"
    },
    {
      question: "Tell me about a time when you had to make an important decision with limited facts.",
      type: "behavioral"
    },
    {
      question: "Tell me about a time when you were forced to make an unpopular decision.",
      type: "behavioral"
    },
    {
      question: "Tell me about a time when you had to adapt to a difficult situation.",
      type: "behavioral"
    },
    {
      question: "Tell me about a time when you were tolerant of an opinion that was different from yours.",
      type: "behavioral"
    },
    {
      question: "Tell me about a time when you were disappointed in your behavior.",
      type: "behavioral"
    },
    {
      question: "Tell me about a time when you used your political savvy to push a program through that you believed in.",
      type: "behavioral"
    },
    {
      question: "Tell me about a time when you had to deal with an irate customer.",
      type: "behavioral"
    },
    {
      question: "Tell me about a time when you delegated a project effectively.",
      type: "behavioral"
    },
    {
      question: "Tell me about a time when you surmounted a major obstacle.",
      type: "behavioral"
    },
    {
      question: "Tell me about a time when you set your sights too high (or too low).",
      type: "behavioral"
    },
    {
      question: "Tell me about a time when you prioritized the elements of a complicated project.",
      type: "behavioral"
    },
    {
      question: "Tell me about a time when you got bogged down in the details of a project.",
      type: "behavioral"
    },
    {
      question: "Tell me about a time when you lost (or won) an important contract.",
      type: "behavioral"
    },
    {
      question: "Tell me about a time when you made a bad decision.",
      type: "behavioral"
    }
  ]

  questions.forEach(question => {
    Questions.insert(question);
  });
}


// This will be called each time the app is rendered
VueSSR.createApp = function (context) {
  const s = isDev && Date.now()

  return new Promise((resolve, reject) => {
    const { app, router, store, apolloProvider } = CreateApp({
      ssr: true,
    })

    // set router's location
    router.push(context.url)

    

    // wait until router has resolved possible async hooks
    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents()

      // no matched routes
      if (!matchedComponents.length) {
        reject({ code: 404 })
      }

      

      let js = ''

      // Call preFetch hooks on components matched by the route.
      // A preFetch hook dispatches a store action and returns a Promise,
      // which is resolved when the action is complete and store state has been
      // updated.
      Promise.all([
        // Store prefetch
        ...matchedComponents.map(component => {
          return component.preFetch && component.preFetch(store)
        })
      ]).then(() => {
        isDev && console.log(`[SSR] Data prefetch: ${Date.now() - s}ms`)

        // After all preFetch hooks are resolved, our store is now
        // filled with the state needed to render the app.
        // Expose the state on the render context, and let the request handler
        // inline the state in the HTML response. This allows the client-side
        // store to pick-up the server-side state without having to duplicate
        // the initial data fetching on the client.

        js += `window.__INITIAL_STATE__=${JSON.stringify(store.state)};`
        
        resolve({
          app,
          js,
        })
      }).catch(reject)
    })
  })
}
