import { Flight, modifyObjectFlight } from "@osdk-local";
import type { Osdk } from "@osdk/api";
import {
  ActionForm,
  type FormState,
} from "@osdk/react-components/experimental/action-form";
import React, { useCallback, useState } from "react";

interface Props {
  flight: Osdk.Instance<typeof Flight>;
}

export function FlightModifyForm({ flight }: Props): React.ReactElement {
  const [formState, setFormState] = useState<FormState<typeof modifyObjectFlight>>(
    () => ({ objectToModifyParameter: flight }),
  );

  const onFormStateChange = useCallback(
    (updater: (prev: FormState<typeof modifyObjectFlight>) => FormState<
      typeof modifyObjectFlight
    >) => {
      setFormState(updater);
    },
    [],
  );

  return (
    <ActionForm
      actionDefinition={modifyObjectFlight}
      formTitle="Modify Flight"
      formState={formState}
      onFormStateChange={onFormStateChange}
    />
  );
}
