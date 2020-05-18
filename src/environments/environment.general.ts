export const environment = {
  firebase: {
    apiKey: 'AIzaSyBq8w1zumTsb_Qv1ndgCEG7tyk1eDCKSWw',
    authDomain: 'michaelsolati-com.firebaseapp.com',
    databaseURL: 'https://michaelsolati-com.firebaseio.com',
    projectId: 'michaelsolati-com',
    storageBucket: 'michaelsolati-com.appspot.com',
    messagingSenderId: '653176308527'
  },
  site: {
    baseURL: 'https://michaelsolati.com',
    email: 'me@michaelsolati.com', // Should be same as LinkedIn login
    name: 'Michael Solati',
    phone: '347.559.7399',
    twitter: 'MichaelSolati',
  },
  pages: {
    devto: {
      enabled: true,
      name: 'Articles',
      path: 'articles',
      username: 'michaelsolati',
      title: 'Articles',
      header: 'Articles',
      description: 'Stories, guides, and tutorials for developers by me.'
    },
    github: {
      enabled: true,
      name: 'Code',
      path: 'code',
      username: 'MichaelSolati',
      title: 'Code',
      header: 'Code',
      description: 'Some of the best code I\'ve written, available for everyone!'
    },
    home: {
      enabled: true, // Never disables
      name: 'Home',
      path: '',
      username: 'michaelsolati', // For LinkedIn
      title: 'Home',
      header: 'Michael Solati',
      description: null // Leave empty to default to LinkedIn description
    },
    youtube: {
      enabled: true,
      name: 'Talks',
      path: 'talks',
      playlist: 'PLpvTYOL2L1kRkGfvnMk96sQ-iDKkzxrUl',
      title: 'Talks',
      header: 'Talks',
      description: 'From major conferences to smaller meetups, I\'ve spoken at a slew of events.'
    }
  }
};
