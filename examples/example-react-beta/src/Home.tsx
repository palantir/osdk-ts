import { Ontology } from "@osdk/e2e.generated.catchall";
import css from "./Home.module.css";
import Layout from "./Layout";

function Home() {
  const objectApiNames = Object.keys(Ontology.objects);
  const actionApiNames = Object.keys(Ontology.actions);
  const queryApiNames = Object.keys(Ontology.queries);
  return (
    <Layout>
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
    </Layout>
  );
}

export default Home;
