FROM debian:stable-slim
WORKDIR /app

RUN <<END_OF_RUN
apt-get update
apt-get install -y --no-install-recommends \
  curl \
  ca-certificates \
  git
apt-get clean
rm -rf /var/lib/apt/lists/*

curl https://get.volta.sh | bash
END_OF_RUN
  
SHELL ["/bin/bash", "-c"]
     
RUN <<END_OF_RUN
VOLTA_HOME=${HOME}/.volta
PATH=${VOLTA_HOME}/bin:${PATH}

for package in 'node' 'yarn'; do
  volta install ${package}
done
END_OF_RUN