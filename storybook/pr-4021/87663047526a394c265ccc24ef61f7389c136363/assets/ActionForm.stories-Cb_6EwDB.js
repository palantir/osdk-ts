import{j as t,g as n}from"./iframe-CC13kVkc.js";import{A as r}from"./action-form-BNkYIvi7.js";import"./preload-helper-iiwGnqeP.js";import"./DropdownField-3R-_B0eM.js";import"./debounce-B0ThbaZi.js";import"./useOsdkClient-C-mmpbXU.js";import"./index-DU2P82bW.js";import"./Input-B8esvYJ8.js";import"./useBaseUiId-HgrihVGX.js";import"./useControlled-C8Ss_1q9.js";import"./index-C0gqvA1S.js";import"./index-DWN_AYu3.js";import"./PopoverPopup-CH4QvDfI.js";import"./InternalBackdrop-LVRDcyBz.js";import"./composite-CQT3GPGa.js";import"./index-CZ_sbyW4.js";import"./getDisabledMountTransitionStyles-qFjzV3aO.js";import"./ToolbarRootContext-CWcw0hmq.js";import"./tick-BfjgS0G2.js";import"./svgIconContainer-BM4AiPUS.js";import"./small-cross-ChcGFzGy.js";import"./search-DATCmuXl.js";import"./cross-Gw99IDXX.js";import"./useValueChanged-B8UU_UBm.js";import"./getPseudoElementBounds-D0x7-dwB.js";import"./CompositeItem-DZfCHwau.js";import"./makeExternalStore-2iYjMQbd.js";import"./BaseForm-DyMbS0q_.js";import"./ActionButton-D0sOWk1d.js";import"./Button-DChBnEps.js";import"./SkeletonBar-CqLQslyN.js";import"./Tooltip-C0FVSqb3.js";import"./info-sign-B0iwAXpg.js";import"./chevron-up-CbIBdvyG.js";import"./chevron-down-SXnOgnm5.js";import"./useEventCallback-Dzvd6DP5.js";import"./iconLoader-DU3BfGPS.js";import"./CompositeRoot-CI52QSU0.js";import"./Switch-CJqBqGPV.js";import"./TimePicker-BaHlmhLe.js";import"./CollapsiblePanel-M2FwY9nP.js";import"./error-C04PUB1J.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DYDVQvXv.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
