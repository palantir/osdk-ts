import{j as t,g as n}from"./iframe-0F7DfPLe.js";import{A as r}from"./action-form-N48IY6Oy.js";import"./preload-helper-6mO-KnDD.js";import"./DropdownField-DTXS9S7w.js";import"./debounce-C55KCuAL.js";import"./useOsdkClient-BLejN4Am.js";import"./index-Djr_Jop1.js";import"./Input-CAkxXyLf.js";import"./useBaseUiId-SJpz-dQs.js";import"./useControlled-aWzuAlWu.js";import"./index-EJLGsV9R.js";import"./index-DwIy8s5K.js";import"./PopoverPopup-DPjg8bEK.js";import"./InternalBackdrop-B1m6j3HH.js";import"./composite-DHXjkz_4.js";import"./index-R6GrqbYj.js";import"./getDisabledMountTransitionStyles-BQhIpI0n.js";import"./ToolbarRootContext-RyDWl030.js";import"./tick-DOsknYHf.js";import"./svgIconContainer-DTCoh7Fd.js";import"./small-cross-CDkCMjNB.js";import"./search-Ba_3E6-e.js";import"./cross-BVUsmn4r.js";import"./useValueChanged-CP-BBW9F.js";import"./getPseudoElementBounds-DLhJqY1Y.js";import"./CompositeItem-wpUfw-Sy.js";import"./makeExternalStore-xL_Ap3fc.js";import"./BaseForm--bfo5vWq.js";import"./ActionButton-D21Af3H6.js";import"./Button-BmQF-Ia9.js";import"./SkeletonBar-CXuflC8R.js";import"./Tooltip-BqsM21S7.js";import"./info-sign-DMOtTpoi.js";import"./chevron-up-D8kRfjfD.js";import"./chevron-down-CdGiAoum.js";import"./useEventCallback-DUoe3CsI.js";import"./iconLoader-BuRZvNn7.js";import"./Switch-CE07hYjP.js";import"./CompositeRoot-D3AJD8ZK.js";import"./TimePicker-B_omKhtn.js";import"./CollapsiblePanel-RNfr1kyY.js";import"./error-CEwiS4uA.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-B8TnMVr-.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
