"use client";
import client from "@/lib/client";
import useAuthenticated from "@/lib/useAuthenticated";
import css from "./page.module.css";

function Home() {
  const authenticated = useAuthenticated();
  if (!authenticated) {
    return null;
  }

  const objectApiNames = Object.keys(client.ontology.objects);
  const actionApiNames = Object.keys(client.ontology.actions);
  const queryApiNames = Object.keys(client.ontology.queries);

  return (
    <div>
      <h1>@osdk/e2e.generated.1.1.x</h1>
      <p>
        Welcome to your Ontology SDK! Try using any of the following methods
        now.
      </p>
      <div className={css.methods}>
        <div>
          <h2>Objects ({objectApiNames.length})</h2>
          {objectApiNames.map((objectApiName) => (
            <pre key={objectApiName}>
              client.ontology.objects.{objectApiName}
            </pre>
          ))}
        </div>
        <div>
          <h2>Actions ({actionApiNames.length})</h2>
          {actionApiNames.map((actionApiName) => (
            <pre key={actionApiName}>
              client.ontology.actions.{actionApiName}
            </pre>
          ))}
        </div>
        <div>
          <h2>Queries ({queryApiNames.length})</h2>
          {queryApiNames.map((queryApiName) => (
            <pre key={queryApiName}>
              client.ontology.queries.{queryApiName}
            </pre>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
