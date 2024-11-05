import { createRouter } from '@backstage/plugin-auth-backend';
import GithubAuthProvider from "@backstage/plugin-auth-backend";
import { PluginEnvironment } from '../types';

export default async function createPlugin({
  logger,
  config,
  database,
  discovery,
  tokenManager,
}: PluginEnvironment) {
  return await createRouter({
    logger,
    config,
    database,
    discovery,
    tokenManager,
    providerFactories: {
      github: GithubAuthProvider.fromConfig(config),
    },
  });
}
