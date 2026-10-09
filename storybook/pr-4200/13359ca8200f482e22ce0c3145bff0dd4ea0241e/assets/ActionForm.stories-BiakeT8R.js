import{j as t,g as n}from"./iframe-CHlNqADV.js";import{A as r}from"./action-form-C5mi7uBk.js";import"./preload-helper-ChuInVZg.js";import"./DropdownField-BHM3Py0i.js";import"./debounce-C1-IqOWQ.js";import"./useOsdkClient-BUpa-g5c.js";import"./index-Bf2fBgJU.js";import"./Input-CRkTA9js.js";import"./useBaseUiId-DYvtoeJl.js";import"./useControlled-D7wM_LXO.js";import"./index-ChdJCR6a.js";import"./index-A-SGLt67.js";import"./PopoverPopup-CPS07fp6.js";import"./InternalBackdrop-L9tv4-K0.js";import"./composite-DktMQB3d.js";import"./index-BH1I75dT.js";import"./getDisabledMountTransitionStyles-B6MFKsrU.js";import"./ToolbarRootContext-CUs10wim.js";import"./tick-BGYvlHNw.js";import"./svgIconContainer-BDP_fhkF.js";import"./small-cross-DxzGq3IE.js";import"./search-kgQIq9W2.js";import"./cross-CuFYXv7r.js";import"./useValueChanged-DNlrhM8D.js";import"./getPseudoElementBounds-Dzxtf5td.js";import"./CompositeItem-Cfdppx_k.js";import"./makeExternalStore-C006dyrV.js";import"./BaseForm-Hhf2K7FE.js";import"./ActionButton-DeQmFSZA.js";import"./Button-C2n7qnnT.js";import"./SkeletonBar-Bqq4C_Xz.js";import"./Tooltip-BybVAEch.js";import"./info-sign-u79vJ0yk.js";import"./chevron-up-Cmsy70o1.js";import"./chevron-down-DJ0NZq7q.js";import"./useEventCallback-DjyoxhV1.js";import"./iconLoader-r1zKvel5.js";import"./Switch-CUfhZdeG.js";import"./CompositeRoot-BKipKAuw.js";import"./TimePicker-Dzegvzt0.js";import"./CollapsiblePanel-CqIVhAsV.js";import"./error-B_eFesCr.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Dhrl7hco.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
