export declare function generateEnvDevelopment({ envPrefix, foundryUrl, clientId, corsProxy }: {
	envPrefix: string
	foundryUrl: string
	clientId: string
	corsProxy: boolean
}): string;
export declare function generateEnvProduction({ envPrefix, foundryUrl, applicationUrl, clientId }: {
	envPrefix: string
	foundryUrl: string
	applicationUrl: string | undefined
	clientId: string
}): string;
