# /bin/bash
docker start ubuntu centos7 fedora
docker ps --filter status=running --format "{{.Names}}: {{.Status}}"
ansible-playbook site.yml -i ./inventory/prod.yml --ask-vault-pass
docker stop ubuntu centos7 fedora 
docker ps -a --format "{{.Names}}: {{.Status}}"
echo Docker stoped