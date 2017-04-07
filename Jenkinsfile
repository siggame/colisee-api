pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh '''npm run setup
npm run build'''
      }
    }
  }
}