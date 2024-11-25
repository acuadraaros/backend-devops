pipeline {
    agent any
    stages {
        stage("instalacion dependencias") {
            agent {
                docker {
                    image 'node:22-alpine'
                    reuseNode true
                }
            }
            stages {
                stage('Instalar dependencias') {
                    steps {
                        sh "npm install"
                    }            
                }
                stage('Build') {
                    steps {
                        sh "npm build"
                    }            
                }           
            }            
        }
    }
}