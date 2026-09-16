/** @type {import('../src/model/source.ts').SourceOptions[]} */
const sources = [
	{
		id: "vbb",
		staticResourceHref: "https://unternehmen.vbb.de/gtfs",
		realtimeResourceHrefs: ["https://production.gtfsrt.vbb.de/data"],
		gtfsOptions: {
			computeShapeDistTraveled: "always",
			postLoad: (resource) => {
				for (const route of resource.routes.values()) {
					if (route.agency.name === 'Berliner Verkehrsbetriebe' && route.type === 'TRAMWAY') {
						route.color = 'E2001A';
						route.textColor = 'FFFFFF';
					}
				}
			}
		},
		getNetworkRef: (journey) => journey?.trip.route.agency.id,
	},
];

/** @type {import('../src/configuration/configuration.ts').Configuration} */
const configuration = {
	id: "berlin",
	computeDelayMs: 5_000,
	sources,
};

export default configuration;
