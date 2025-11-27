# Condições do tempo

Aplicação que mostra as condições do tempo através de consumo da OpenWeather API.

## Configuração

1. Clone o repositório
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Crie um arquivo `.env` na raiz do projeto baseado no `.env.example`:
   ```bash
   cp .env.example .env
   ```
4. Adicione sua API key do OpenWeather no arquivo `.env`:
   ```
   OPENWEATHER_API_KEY=sua_api_key_aqui
   ```
5. Compile o projeto:
   ```bash
   npm run build
   ```

## Como obter uma API key

1. Crie uma conta gratuita em [OpenWeather](https://openweathermap.org/)
2. Acesse a seção API Keys no seu perfil
3. Copie sua API key e adicione no arquivo `.env`
