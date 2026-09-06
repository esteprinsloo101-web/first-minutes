# First Minutes

Faceless South African **first-aid / wait-for-medics** helper you can sell.

**Model:** Free demo static web app + paid printable pack (**R129** on Gumroad).

## Hard safety (legal fence locked)

Source: `/ops/legal/first-minutes-disclaimer.md`

- **Not** a doctor, nurse, EMS, or medical advice. Does **not** diagnose, treat, prescribe, or triage.
- **112-first** emergency bar on open; do not delay calling while reading tips or searching facilities.
- Protocols = general first-aid wait tips / education only — urge professional care.
- Facility hours + medical-aid acceptance = **DEMO / unverified** until Build marks verified (`demo: true` + `unverified: true`). Never invent as live truth.
- Gumroad one-liner baked into `GUMROAD_LISTING.md` + `pack/DISCLAIMER.md`.
- Adult tool (18+); no child accounts; not for unsupervised under-18 emergency decisions.
- Price: **R129**.

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
