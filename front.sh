#!/bin/bash

# 이미지 이름 설정
IMAGE_NAME="zxcyui6181/portfolio:latest"

# 리액트 프로젝트 빌드
echo "Building React project..."
yarn build || { echo "React build failed!"; exit 1; }

# 도커 빌드 (x86 아키텍처로 빌드)
echo "Building Docker image..."
docker build --platform linux/amd64 -t $IMAGE_NAME . || { echo "Docker build failed!"; exit 1; }

# 도커 푸시
echo "Pushing Docker image..."
docker push $IMAGE_NAME || { echo "Failed to push $IMAGE_NAME"; exit 1; }

# 태그가 <none>인 도커 이미지 삭제
echo "Removing dangling Docker images..."
docker images -f "dangling=true" -q | xargs -r docker rmi

echo "Deployment completed successfully!"