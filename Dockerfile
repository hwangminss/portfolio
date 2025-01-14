# 베이스 이미지 설정 (Node.js 16 사용)
FROM node:16

# 작업 디렉토리 설정
WORKDIR /app

# 패키지 파일 복사 및 설치
COPY package.json yarn.lock ./
RUN yarn install

# 소스 코드 복사
COPY . .

# 빌드
RUN yarn build

# Nginx 설치 및 설정
RUN apt-get update && apt-get install -y nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Nginx를 통해 빌드된 파일 제공
RUN rm -rf /usr/share/nginx/html/*
RUN cp -r build/* /usr/share/nginx/html/

# Nginx 실행
CMD ["nginx", "-g", "daemon off;"]

# 포트 설정
EXPOSE 80