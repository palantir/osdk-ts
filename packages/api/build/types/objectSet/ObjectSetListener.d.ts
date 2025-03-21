import type { ObjectOrInterfaceDefinition, PropertyKeys } from "../ontology/ObjectOrInterface.js";
import type { Osdk } from "../OsdkObjectFrom.js";
export declare namespace ObjectSetSubscription {
	interface Listener<
		O extends ObjectOrInterfaceDefinition,
		P extends PropertyKeys<O> = PropertyKeys<O>
	> {
		/**
		* Specific objects have changed and can be immediately updated
		*/
		onChange?: (objectUpdate: ObjectUpdate<O, P>) => void;
		/**
		* The subscription has been successfully established and updates can be expected to be received.
		*/
		onSuccessfulSubscription?: () => void;
		/**
		* The ObjectSet has become outdated and should be re-fetched in its entirety.
		* This is also sent when the subscription is first initialized.
		*/
		onOutOfDate?: () => void;
		/**
		* There was a fatal error with the subscription process. The subscription will close or will not be established.
		*/
		onError?: (errors: {
			subscriptionClosed: boolean
			error: any
		}) => void;
	}
	interface Options<
		O extends ObjectOrInterfaceDefinition,
		P extends PropertyKeys<O> = PropertyKeys<O>
	> {
		properties?: Array<P>;
	}
}
type ObjectUpdate<
	O extends ObjectOrInterfaceDefinition,
	P extends PropertyKeys<O>
> = {
	object: Osdk.Instance<O, never, P>
	state: "ADDED_OR_UPDATED" | "REMOVED"
};
export {};
