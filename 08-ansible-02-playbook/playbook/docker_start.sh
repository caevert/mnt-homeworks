#! /bin/bash
docker run -it -d --name clickhouse-01 centos:7
docker run -it -d --name vector-01 centos:7
ansible-playbook site.yml -i ./inventory