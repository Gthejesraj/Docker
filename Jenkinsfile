pipeline {
    agent {
        label 'docker'
    }
    stages {
        stage('build') {
            steps {
                sh 'docker-compose -f docker-compose.yml -f docker-compose.dev.yml down'
                sh 'docker build -t api_homestay .'
                
            }
        }
        stage('Compose up ') {
            steps {
                sh 'ls'
                sh 'docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d'
                
            }
        }
    }
}
