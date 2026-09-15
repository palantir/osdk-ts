import{j as t,g as n}from"./iframe-DzKgN3qu.js";import{A as r}from"./action-form-CE0m5N50.js";import"./preload-helper-Bq44pRuA.js";import"./DropdownField-Dgeq7PS2.js";import"./debounce-CygZGtiO.js";import"./useOsdkClient-DtuTQNsD.js";import"./index-BdOs7mw_.js";import"./Input-CzkZobpW.js";import"./useBaseUiId-Dv29B-pr.js";import"./useControlled-DrMtPDwW.js";import"./index-Gldmiip-.js";import"./index-C67GGcUR.js";import"./PopoverPopup-DvBaLRqn.js";import"./InternalBackdrop-DTv9GrXy.js";import"./composite-CC7knVWa.js";import"./index-D_SumSez.js";import"./getDisabledMountTransitionStyles-D5tdzTrF.js";import"./ToolbarRootContext-CCsiwlz9.js";import"./tick-BFOPMsDc.js";import"./svgIconContainer-XLXcJGX1.js";import"./small-cross-Bmj1XADt.js";import"./search-C4jktGRC.js";import"./cross-qDkjCQ52.js";import"./useValueChanged-D1zVaC1g.js";import"./getPseudoElementBounds-C962SI_-.js";import"./CompositeItem-yqIim0nf.js";import"./makeExternalStore-DmfOAvnN.js";import"./BaseForm-BXdOAT7q.js";import"./ActionButton-CBtqi0Iz.js";import"./Button-M7h6gJdh.js";import"./SkeletonBar-Dfz2-rCc.js";import"./Tooltip-CA-Q7zym.js";import"./info-sign-By6SaRal.js";import"./chevron-up-CI5dW6fR.js";import"./chevron-down-vPjMV4aO.js";import"./useEventCallback-99uro0ic.js";import"./iconLoader-uxKo8y7o.js";import"./CompositeRoot-7r82i8q4.js";import"./Switch-CPOdqyaz.js";import"./TimePicker-KVFxAanE.js";import"./CollapsiblePanel-kVIjS7dE.js";import"./error-T16LD8HE.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CgGyBohZ.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
