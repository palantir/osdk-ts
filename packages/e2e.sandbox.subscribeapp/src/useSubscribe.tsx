import type { ObjectTypeDefinition, Osdk } from "@osdk/api";
import { __EXPERIMENTAL__NOT_SUPPORTED_YET_subscribe } from "@osdk/api/unstable";
import { useCallback, useEffect } from "react";
import { client } from "./client";
import { MtaBus } from "./generatedNoCheck2";

export function useSubscribe() {
  client(MtaBus).fetchPage();
  return (
    <div>
      <h1>USE SUBSCRIBE</h1>
    </div>
  );
}
