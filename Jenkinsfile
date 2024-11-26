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
                stage('Pruebas') {
                    steps {
                        sh "npm run test"
                    }            
                }  
                stage('Build') {
                    steps {
                        sh "npm run build"
                    }            
                }  
            }            
        }
        stage("Quality") {
            agent {
                docker {
                    image 'sonarsource/sonar-scanner-cli'
                    reuseNode true
                }
            }
            stages {
                stage('Quality Assurance - Sonarqube') {
                    steps{
                        withSonarQubeEnv('sonarqube') {
                            sh 'sonar-scanner'
                        }
                    }
                }

            }
        }
    }
}