declare namespace NodeJS {
  export interface ProcessEnv {
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: string;
    STRIPE_SECRET_KEY: string;
    STRIPE_PRICE_ID: string;
    STRIPE_WEBHOOK_SECRET: string;
    LICENSE_GEN_KEY: string;
    LICENSE_GEN_HEADER: string;
    SENDGRID_SECRET_KEY: string;
    GA_TRACKING_ID: string;
  }
}
