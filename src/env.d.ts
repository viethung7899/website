/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly EMAIL: string
  readonly EMAIL_PASSWORD: string
  readonly RECEIVER_EMAIL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
