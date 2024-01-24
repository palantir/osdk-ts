"use client";
import client from "@/lib/client";
import getMethods from "@/lib/getMethods";
import useAuthenticated from "@/lib/useAuthenticated";
import css from "./page.module.css";

function Home() {
  const authenticated = useAuthenticated();
  if (!authenticated) {
    return null;
  }

  const objectApiNames = getMethods(client.ontology.objects);
  const actionApiNames = getMethods(client.ontology.actions);
  const queryApiNames = getMethods(client.ontology.queries);

  return (
    <div>
      <h1>@fake/sdk</h1>
      <p>
        Welcome to your Ontology SDK! Try using any of the following methods
        now.
      </p>
      <div className={css.methods}>
        <div>
          <h2>Objects ({objectApiNames.length})</h2>
          {objectApiNames.map((objectApiName) => (
            <p key={objectApiName}>client.ontology.objects.{objectApiName}</p>
          ))}
        </div>
        <div>
          <h2>Actions ({actionApiNames.length})</h2>
          {actionApiNames.map((actionApiName) => (
            <p key={actionApiName}>client.ontology.actions.{actionApiName}</p>
          ))}
        </div>
        <div>
          <h2>Queries ({queryApiNames.length})</h2>
          {queryApiNames.map((queryApiName) => (
            <p key={queryApiName}>client.ontology.queries.{queryApiName}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
