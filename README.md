# First Minutes

Faceless South African **first-aid / wait-for-medics** helper you can sell.

**Model:** Free demo static web app + paid printable pack (**R129** on Gumroad).

## Hard safety

- **Not** a doctor, **not** EMS, **not** a hospital finder of record.
- In emergency call **112** (or local ambulance/EMS). App does not replace trained first aiders or emergency services.
- Protocols = general public first-aid education — urge professional care.
- Facility hours + medical-aid acceptance = **DEMO/example** until verified (`demo: true` on every row). Never invent as live truth.
- Adult tool (18+); no child accounts.

## Free demo app

Open `index.html` via a local static server (needed for `data/facilities.json`):

```bash
cd first-minutes
python3 -m http.server 8765
# → http://localhost:8765
```

Includes:

1. Sticky emergency call bar (**112**)
2. Situation cards → step checklists (bleeding, burns, choking adult, chest pain → call now, fainting, sprain)
3. Who to call — 112, Poisons Information Helpline **0861 555 777** (verified public SA number), findahelpline.com
4. Facilities board — DEMO Johannesburg + Cape Town clinics/hospitals/doctors with example medical aids (Discovery, Bonitas, Momentum, KeyHealth)
5. Soft CTA → Gumroad placeholder **R129**

## Paid pack

- Folder: `pack/`
- Zip: `FirstMinutes_First_Aid_Wait_Pack.zip`
- Listing copy: `GUMROAD_LISTING.md`

## Repo

GitHub: `esteprinsloo101-web/first-minutes` (when pushed)

## Do not confuse with

Unrelated products (do not merge): little-angels, steady-kit, randradar, Plain Desk X.
