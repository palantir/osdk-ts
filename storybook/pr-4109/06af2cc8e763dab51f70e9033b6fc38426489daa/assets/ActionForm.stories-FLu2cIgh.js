import{j as t,g as n}from"./iframe-DFLNqEm2.js";import{A as r}from"./action-form-D7cwBguU.js";import"./preload-helper-C4OJk57-.js";import"./DropdownField-DhjuDgoz.js";import"./debounce-B-uclRIy.js";import"./useOsdkClient-ENy8kaW0.js";import"./index-fk_tQ1YC.js";import"./Input-CsKqmdcW.js";import"./useBaseUiId-f39Vd-uF.js";import"./useControlled-BgQ6tJlm.js";import"./index-CA9B81mf.js";import"./index-BJjObxmA.js";import"./PopoverPopup-CS5MDXSc.js";import"./InternalBackdrop-DsVJKrRk.js";import"./composite-luK9vRGl.js";import"./index-DEOn4aKD.js";import"./getDisabledMountTransitionStyles-Czp6bpN4.js";import"./ToolbarRootContext-CH5CakMV.js";import"./tick-DZ_zylkj.js";import"./svgIconContainer-5792X2so.js";import"./small-cross-CBeD8iwS.js";import"./search-LoblqU0W.js";import"./cross-DMqxAY0f.js";import"./useValueChanged-C-TRa-z8.js";import"./getPseudoElementBounds-Br4mtL1e.js";import"./CompositeItem-DHZAlp7N.js";import"./makeExternalStore-Coy-sieI.js";import"./BaseForm-rWCquD4_.js";import"./ActionButton-B5J36pLX.js";import"./Button-BbpsJ4er.js";import"./SkeletonBar-BOr5ioOf.js";import"./Tooltip-QrcynOTk.js";import"./info-sign-DeCZjyBT.js";import"./chevron-up-wmuGhB26.js";import"./chevron-down-CHUZ5wYq.js";import"./useEventCallback-D63bKoHu.js";import"./iconLoader-LR8wmzNq.js";import"./Switch-Cah-N2fB.js";import"./CompositeRoot-CF6F3bHx.js";import"./TimePicker-BrDJEaO0.js";import"./CollapsiblePanel-C7HlC61M.js";import"./error-C8Ukd2CZ.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BaDAnBzc.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

// ActionForm reads the action definition metadata and chooses default
// field components for supported parameter types.
//
// This story uses an action with this shape:
//
// {
//   apiName: "generatedFieldsStoryAction",
//   displayName: "Create employee profile",
//   parameters: {
//     fullName: {
//       displayName: "Full name",
//       dataType: { type: "string" },
//       required: true,
//     },
//     yearsExperience: {
//       displayName: "Years of experience",
//       dataType: { type: "integer" },
//     },
//     isRemote: {
//       displayName: "Remote employee",
//       dataType: { type: "boolean" },
//     },
//     startDate: {
//       displayName: "Start date",
//       dataType: { type: "timestamp" },
//     },
//     document: {
//       displayName: "Document",
//       dataType: { type: "attachment" },
//     },
//     manager: {
//       displayName: "Manager",
//       dataType: {
//         type: "object",
//         objectTypeApiName: "Employee",
//       },
//     },
//     reviewPool: {
//       displayName: "Review pool",
//       dataType: {
//         type: "objectSet",
//         objectTypeApiName: "Employee",
//       },
//     },
//   },
// }
//
// No formFieldDefinitions are passed here; the fields are generated from the
// action metadata above.
<ActionForm
  actionDefinition={generatedFieldsStoryAction.actionDefinition}
  showFormTitle={true}
/>`}}}};var o,a,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."
      },
      source: {
        code: \`import { ActionForm } from "@osdk/react-components/action-form";

// ActionForm reads the action definition metadata and chooses default
// field components for supported parameter types.
//
// This story uses an action with this shape:
//
// {
//   apiName: "generatedFieldsStoryAction",
//   displayName: "Create employee profile",
//   parameters: {
//     fullName: {
//       displayName: "Full name",
//       dataType: { type: "string" },
//       required: true,
//     },
//     yearsExperience: {
//       displayName: "Years of experience",
//       dataType: { type: "integer" },
//     },
//     isRemote: {
//       displayName: "Remote employee",
//       dataType: { type: "boolean" },
//     },
//     startDate: {
//       displayName: "Start date",
//       dataType: { type: "timestamp" },
//     },
//     document: {
//       displayName: "Document",
//       dataType: { type: "attachment" },
//     },
//     manager: {
//       displayName: "Manager",
//       dataType: {
//         type: "object",
//         objectTypeApiName: "Employee",
//       },
//     },
//     reviewPool: {
//       displayName: "Review pool",
//       dataType: {
//         type: "objectSet",
//         objectTypeApiName: "Employee",
//       },
//     },
//   },
// }
//
// No formFieldDefinitions are passed here; the fields are generated from the
// action metadata above.
<ActionForm
  actionDefinition={generatedFieldsStoryAction.actionDefinition}
  showFormTitle={true}
/>\`
      }
    }
  }
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const ee=["Default"];export{e as Default,ee as __namedExportsOrder,$ as default};
