import{j as t,g as n}from"./iframe-czm1xubf.js";import{A as r}from"./action-form-nld78bWF.js";import"./preload-helper-BGUEigPd.js";import"./DropdownField-D-57vV6-.js";import"./debounce-DV3wU0MB.js";import"./useOsdkClient-CqNVWEmJ.js";import"./index-_fZ9c0fg.js";import"./Input-DgUpGPn-.js";import"./useBaseUiId-BS68w5je.js";import"./useControlled-C5Jpqy1f.js";import"./index-DfcivzEs.js";import"./index-yWvVzDbE.js";import"./PopoverPopup-CShNizHP.js";import"./InternalBackdrop-B9KVxE9X.js";import"./composite-B592Vhi6.js";import"./index-DTt1rg3M.js";import"./getDisabledMountTransitionStyles-CpcSQr6S.js";import"./ToolbarRootContext-DUZDki5d.js";import"./tick-ClPbeRGi.js";import"./svgIconContainer-E3yOYGsj.js";import"./small-cross-FhsGrgpu.js";import"./search-UypY9bAA.js";import"./cross-BQAzUdVL.js";import"./useValueChanged-C6JEBq-B.js";import"./getPseudoElementBounds-pSys7i-_.js";import"./CompositeItem-BpDVMI5W.js";import"./makeExternalStore-BA14Lxn7.js";import"./BaseForm-CSvhP1UZ.js";import"./ActionButton-BZ-JCoJ_.js";import"./Button-BRqFWopk.js";import"./SkeletonBar-CdEM0QXh.js";import"./Tooltip-DhInjGrA.js";import"./info-sign-DzPisNCH.js";import"./chevron-up-CDQn7NQn.js";import"./chevron-down-WwCXMtNu.js";import"./useEventCallback-B22Ha2u5.js";import"./iconLoader-DUJuSAzq.js";import"./CompositeRoot-C-HaCCjF.js";import"./Switch-bNPO1ydh.js";import"./TimePicker-r2vriuZ7.js";import"./CollapsiblePanel-BZqHTtX0.js";import"./error-DWSVNtwO.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-C-yijIYr.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/experimental";

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
        code: \`import { ActionForm } from "@osdk/react-components/experimental";

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
