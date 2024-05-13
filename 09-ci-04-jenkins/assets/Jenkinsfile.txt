pipeline {
    agent {
        label 'ansible'
    }

    stages {
        stage('git') {
            steps {
                git branch: 'master', credentialsId: 'Muroway_github', url: 'https://github.com/Muroway/vector-role.git'
            }
        }
        stage('Molecule test in docker') {
            steps {
                sh 'molecule test -s docker'
            }
        }
    }
}
