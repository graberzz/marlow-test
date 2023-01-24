```bash
# Development
npm i
npm run dev

# Storybook
cd packages/components
npm run storybook

# Docker
docker build -t marlow-test .
docker run -p 3000:3000 marlow-test
```