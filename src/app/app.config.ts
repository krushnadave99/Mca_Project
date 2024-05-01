import { ApplicationConfig } from "@angular/core";
import { provideRouter } from "@angular/router";

import { routes } from "./app.routes";
import { provideClientHydration } from "@angular/platform-browser";
import { GoogleLoginProvider, SocialAuthServiceConfig } from "@abacritt/angularx-social-login";
import { WindowRefService } from "./WindowRefServiceservice";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    {
      provide: "SocialAuthServiceConfig",
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              "492419417684-0k14b9levdap1stnaris4f7qi2m2habh.apps.googleusercontent.com"
            ),
          },
        ],
        onError: (err) => {
          console.error(err);
        },
      } as SocialAuthServiceConfig,
    },
    WindowRefService
  ],
};
