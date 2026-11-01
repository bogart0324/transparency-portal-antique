/**
 * This portal's configuration: the only file a fork needs to edit.
 * What each field means: src/config.ts. Generate one with `npm run setup`;
 * check it against the live API with `npm run check`.
 *
 * This default is a worked example: the Province of Bohol. Its three DPWH
 * district engineering offices bring in every DPWH line listed under them;
 * the place name brings in lines from all four programs whose title names
 * Bohol (Central Office projects, farm-to-market roads, health facilities,
 * irrigation). More examples in examples/.
 */
import { defineConfig } from './src/config';

export default defineConfig({
  id: 'antique-province',
  kind: 'province',
  name: 'Province of Antique',
  shortName: 'Antique',
  operator: { name: 'BetterGov.ph', url: 'https://bettergov.ph' },
  // Where this example is deployed. Change it (or remove it) in your fork.
  siteUrl: 'https://transparency-portal.bettergov.workers.dev',
  scope: {
    offices: ['Antique District Engineering Office',],
   places: [
    {
      label: 'Antique',
      q: 'Antique',
      region: 'VI',
      datasets: ['fmr', 'hfep', 'nia'],
    },
     {
      label: 'Antique Airport',
      q: 'Antique Airport',
      region: 'VI',
      datasets: [],
    },
  ],
    districts: [],
    exclude: [],
  },
  reporting: { enabled: false },
});
