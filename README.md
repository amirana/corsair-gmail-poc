# corsair-gmail-poc

POC integrating Gmail using [Corsair](https://corsair.dev). Fetches emails via OAuth2.

## Stack
- Corsair SDK + `@corsair-dev/gmail`
- PostgreSQL (Neon) + `pg`
- TypeScript

## Setup

1. Install dependencies
```bash
pnpm install
```

2. Add `.env`
```env
DATABASE_URL=
CORSAIR_KEK=
GMAIL_CLIENT_ID=
GMAIL_CLIENT_SECRET=
GMAIL_ACCESS_TOKEN=
GMAIL_REFRESH_TOKEN=
```

3. Run Corsair setup
```bash
pnpm corsair setup --plugin=gmail client_id=VALUE client_secret=VALUE access_token=VALUE refresh_token=VALUE topic_id=VALUE
```

4. Test it
```bash
pnpm tsx gmail.test.ts
```