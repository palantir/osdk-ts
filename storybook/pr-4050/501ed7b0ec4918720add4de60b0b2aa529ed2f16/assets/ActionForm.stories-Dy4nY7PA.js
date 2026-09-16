import{j as t,g as n}from"./iframe-BxIl83OC.js";import{A as r}from"./action-form-CUUp7qr9.js";import"./preload-helper-Yx9ZNNpK.js";import"./DropdownField-DoBYEUHa.js";import"./debounce-OJ34BW8L.js";import"./useOsdkClient-BRW1S7a0.js";import"./index-yC7dwiLI.js";import"./Input-But5XUYJ.js";import"./useBaseUiId-CCOPhUcB.js";import"./useControlled-CtfWN5zI.js";import"./index-DcRZYv45.js";import"./index-DjiV5TS-.js";import"./PopoverPopup-CvTyV5ww.js";import"./InternalBackdrop-9uzl1t8Y.js";import"./composite-DAGYlNi4.js";import"./index-CC4v1PS_.js";import"./getDisabledMountTransitionStyles-DeadGkYN.js";import"./ToolbarRootContext-Cmwitb-c.js";import"./tick-gdF-iftD.js";import"./svgIconContainer-Bt0ZQcKE.js";import"./small-cross-DmNl_RSt.js";import"./search-C6ABKevT.js";import"./cross-CxqX2dHR.js";import"./useValueChanged-hHmzS9UN.js";import"./getPseudoElementBounds-uzaRHZTC.js";import"./CompositeItem-DIHWAmd-.js";import"./makeExternalStore-CLRP1iif.js";import"./BaseForm-CeFaOII_.js";import"./ActionButton-B8qquhgr.js";import"./Button-D5WuY3ON.js";import"./SkeletonBar-DIDfuITi.js";import"./Tooltip-D33yWPSy.js";import"./info-sign-C1JwA7Nt.js";import"./chevron-up-a_1jNvoE.js";import"./chevron-down-DZwG3tYI.js";import"./useEventCallback-GFfQEmO_.js";import"./iconLoader-DeyX0B-T.js";import"./Switch-CRDBponM.js";import"./CompositeRoot-Devs8rOn.js";import"./TimePicker-DY52UPdj.js";import"./CollapsiblePanel-BjqCs_Mr.js";import"./error-DJcTH0_A.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BzRb66se.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
