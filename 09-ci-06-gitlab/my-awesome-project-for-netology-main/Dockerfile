FROM centos:7
RUN yum update -q -y \
  && yum install -q -y epel-release wget make git gcc openssl-devel bzip2-devel libffi-devel python3 python-pip \
  && cd /usr/src \
  && wget https://www.python.org/ftp/python/3.7.11/Python-3.7.11.tgz \
  && tar xzf Python-3.7.11.tgz \
  && cd Python-3.7.11 \
  && ./configure --enable-optimizations \
  && make altinstall \
  && rm -rf /usr/src/Python-3.7.11.tgz \
  && alternatives --install /usr/bin/python python /usr/bin/python2 50 \
  && alternatives --install /usr/bin/python python /usr/local/bin/python3.7 70 \
  && alternatives --set python /usr/local/bin/python3.7 \
  && ln -s /usr/local/bin/pip3.7 /usr/bin/pip 
COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt
RUN mkdir /python-api
COPY python-api.py /python-api/python-api.py
CMD ["python3", "/python-api/python-api.py"]