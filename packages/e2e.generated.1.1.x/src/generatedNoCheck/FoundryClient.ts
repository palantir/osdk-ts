import type { Auth, FoundryClientOptions } from '@osdk/legacy-client';
import { BaseFoundryClient } from '@osdk/legacy-client';
import { Ontology } from './Ontology.js';

export class FoundryClient<TAuth extends Auth = Auth> extends BaseFoundryClient<typeof Ontology, TAuth> {
  /**
   * @deprecated
   */
  constructor(options: FoundryClientOptions<TAuth>) {
    super(options, Ontology);
  }

  get ontology(): Ontology {
    return super.ontology;
  }
}
