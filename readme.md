# XYZ Playgrounds

[UI Storybook](https://xyz-playground-tau.vercel.app/ui/storybook-static/)

## Development

```bash
bun i
bun dev
```

## Usage

### Frontend

- Components are usually stateless and don't provide complex data models, unless it is a single responsibility.
- Features maintain internal state and provide data models, callbacks and other methods for data input/output.
- Views are composed of features and components all together.

```tsx
import { Component } from "@xyz/ui/components/component"
import { Feature } from "@xyz/ui/features/feature"

export default () => (
  <>
    <Feature prop={1} onEvent={(params) => {}}></Feature>
    <Component>Content</Component>
  </>
)

```

### Backend

- Postgres/Postgis
- PgBoss for workers/queues
- Avoid using foreign interfaces and implementations if NodeJS or Bun provide them (Request, Response, EventEmitter, Postgres client, etc)
- The services must support cluster mode and be able to scale horisontally.
- Redis is only for pub/sub and caching.
