import { $Objects, $Actions, $Queries } from "@osdk/e2e.generated.catchall";
import css from "./Home.module.css";
import Layout from "./Layout";

// import { useOsdkClient } from "@osdk/react";
// import React from "react";
// import { Osdk } from "@osdk/client";

function Home() {

  // const client = useOsdkClient();
  
  // const [objects, setObjects] = React.useState<$Objects.Todo.OsdkInstance[]>();
  // const [isLoading, setIsLoading] = React.useState(true);

  // React.useEffect(() => {
  //   client($Objects.Todo).fetchPage().then((page) => {
  //     setObjects(page.data);
  //     setIsLoading(false);
  //   });
  // }, []);

  // if (isLoading) {
  //   return <Layout>Loading...</Layout>;
  // } else {
  //   return (
  //     <Layout>
  //       <ul>
  //       {objects?.map((o) => (
  //         <li>{o.$primaryKey} - {o.$title}</li>
  //       ))}
  //       </ul>
  //     </Layout>
  //   )
  // }


  const objectApiNames = Object.keys($Objects);
  const actionApiNames = Object.keys($Actions);
  const queryApiNames = Object.keys($Queries);
  return (
    <Layout>
      <h1>@osdk/e2e.generated.catchall</h1>
      <p>
        Welcome to your Ontology SDK! Try using any of the following methods
        now.
      </p>
      <div className={css.methods}>
        <div>
          <h2>Objects ({objectApiNames.length})</h2>
          {objectApiNames.map((objectApiName) => (
            <pre key={objectApiName}>
              $Objects.{objectApiName}
            </pre>
          ))}
        </div>
        <div>
          <h2>Actions ({actionApiNames.length})</h2>
          {actionApiNames.map((actionApiName) => (
            <pre key={actionApiName}>
              $Actions.{actionApiName}
            </pre>
          ))}
        </div>
        <div>
          <h2>Queries ({queryApiNames.length})</h2>
          {queryApiNames.map((queryApiName) => (
            <pre key={queryApiName}>
              $Queries.{queryApiName}
            </pre>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Home;
