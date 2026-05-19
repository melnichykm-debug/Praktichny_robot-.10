# Практична робота №10  
## CI + Deployment in Node.js

**Дисципліна:** Розробка веб сервісів  
**Тема:** CI + Deployment in Node.js  
**Студент:** Мельничук Михайло  
**Група:** 223 он

---

## Мета роботи

Навчитися готувати Node.js-проєкт до запуску в реальному середовищі:

- використовувати змінні середовища для конфігурації;
- налаштовувати базовий CI workflow у GitHub Actions;
- додавати мінімальні production-захисти для HTTP-сервера.

---

## Структура проєкту

```text
practice-10-ci-deployment/
│
├── .github/
│   └── workflows/
│       └── node-ci.yml
│
├── src/
│   ├── config.js
│   └── response.js
│
├── .env.example
├── .gitignore
├── package.json
├── README.md
├── server.js
└── test.js
```

---

## Як запустити локально

```bash
node server.js 3000
```

або:

```bash
npm start
```

---

## Змінні середовища

Приклад змінних знаходиться у файлі `.env.example`.

```env
PORT=3000
NODE_ENV=production
REQUEST_TIMEOUT=10000
HEADERS_TIMEOUT=12000
```

У коді використовується:

- `PORT` — порт запуску сервера;
- `NODE_ENV` — середовище запуску;
- `REQUEST_TIMEOUT` — обмеження часу запиту;
- `HEADERS_TIMEOUT` — обмеження часу очікування заголовків.

---

## Реалізовані маршрути

### 1. Головна сторінка

```http
GET /
```

Повертає JSON з повідомленням про роботу сервера.

---

### 2. Health check

```http
GET /health
```

Повертає статус сервера:

```json
{
  "status": "ok",
  "uptime": 1.23
}
```

---

## Production-захисти

У проєкті додано базові HTTP security headers:

- `X-Content-Type-Options: nosniff`;
- `X-Frame-Options: DENY`;
- `Referrer-Policy: no-referrer`;
- `Content-Security-Policy: default-src 'none'`.

Також додано:

- `requestTimeout`;
- `headersTimeout`;
- обробку невідомих маршрутів через `404`.

---

## GitHub Actions CI

Файл workflow знаходиться тут:

```text
.github/workflows/node-ci.yml
```

CI автоматично запускається при:

- `push` у гілку `main` або `master`;
- `pull_request` у гілку `main` або `master`.

Workflow виконує:

```bash
npm install
npm test
```

---

## Виконані вправи

- 10.1 — використання змінних середовища;
- 10.2 — базовий CI workflow у GitHub Actions;
- 10.3 — мінімальні production-захисти HTTP-сервера.

---

