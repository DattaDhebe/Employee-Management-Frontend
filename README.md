# Employee Management · React

**A CRUD interface for employee records.**  
React 16 · Material UI · React Router · Axios

A frontend learning project with login/registration screens, an employee dashboard and forms for creating and updating employee records.

## Features in the source

- Client-side routes for sign-in, sign-up, dashboard, add and update screens.
- Employee data tables with edit/delete actions.
- Forms for name, email, mobile number and designation.
- Axios requests to a separately configured employee API.

## Run locally

Review [package.json](package.json) before choosing a Node.js toolchain. The project uses historical Create React App and `node-sass` versions, so current Node.js versions may require dependency modernization.

```bash
npm install
npm start
```

The UI normally opens at `http://localhost:3000`.

**Backend requirement:** current dashboard components call `http://localhost:3000/emp`. Run the API and UI on distinct ports and update component URLs to match your local API. A compatible backend is not bundled in this repository.

## Code tour

| Location | Role |
| --- | --- |
| [src/App.js](src/App.js) | Routes |
| [src/Components/Dashboard](src/Components/Dashboard) | Employee table and CRUD forms |
| [src/Components/login](src/Components/login) | Sign-in screen |
| [src/Components/SignUp](src/Components/SignUp) | Registration screen |

## Development commands

| Command | Purpose |
| --- | --- |
| `npm start` | Development server |
| `npm test` | Available test runner |
| `npm run build` | Production bundle |

**Status:** historical frontend prototype. Login screens are UI components; their presence does not establish production authentication. Setup and integration have not been revalidated during this documentation update.

Built by [Datta Dhebe](https://github.com/DattaDhebe).
