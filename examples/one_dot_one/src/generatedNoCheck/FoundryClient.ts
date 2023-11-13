import type { Auth, FoundryClientOptions } from '@osdk/legacy-client';
import { BaseFoundryClient } from '@osdk/legacy-client';
import { Ontology } from './Ontology';

export class FoundryClient<TAuth extends Auth = Auth> extends BaseFoundryClient<typeof Ontology, TAuth> {
  constructor(options: FoundryClientOptions<TAuth>) {
    super(options, Ontology);
  }

  get ontology(): Ontology {
    return this.ontology;
  }
}
