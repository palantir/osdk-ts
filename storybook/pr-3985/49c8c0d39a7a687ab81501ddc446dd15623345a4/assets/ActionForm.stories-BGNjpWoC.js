import{j as t,g as n}from"./iframe-BjMPQmdZ.js";import{A as r}from"./action-form-DaCl_22g.js";import"./preload-helper-B8Ak4a51.js";import"./DropdownField-DR1RPbxl.js";import"./debounce-B--2yBpk.js";import"./useOsdkClient-qEswp40d.js";import"./index-oZX62iJS.js";import"./Input-D7HYNJJj.js";import"./useBaseUiId-D8cmXz0j.js";import"./useControlled-DmP1tMz2.js";import"./index-D9GWSad1.js";import"./index-DtER7TIS.js";import"./PopoverPopup-z3RJyiP2.js";import"./InternalBackdrop-8oVqxHi8.js";import"./composite-CSAWSVfE.js";import"./index-NlopW1lK.js";import"./getDisabledMountTransitionStyles-DYlb6B2g.js";import"./ToolbarRootContext-BJ3LM2Fu.js";import"./tick-CODMTGal.js";import"./svgIconContainer-Dwz9d1MN.js";import"./small-cross-Bu27Obc4.js";import"./search-D6_fqh0V.js";import"./cross-JpXN3sJS.js";import"./useValueChanged-BruLlZZe.js";import"./getPseudoElementBounds-BEZQ3U0s.js";import"./CompositeItem-ejF_MhIC.js";import"./makeExternalStore-B8EVnW0L.js";import"./BaseForm-SgjjP-J8.js";import"./ActionButton-DdGak1A0.js";import"./Button-CZzc-gIr.js";import"./SkeletonBar-2PecOG9Y.js";import"./Tooltip-DQ9zqIRE.js";import"./info-sign-ByRwECJi.js";import"./chevron-up-Db5MztaK.js";import"./chevron-down-IIBkH-oY.js";import"./useEventCallback-DPBscyoY.js";import"./iconLoader-CGq9qbpz.js";import"./Switch-B4D8ccRV.js";import"./CompositeRoot-C3UYeWyY.js";import"./TimePicker-WPnjP8XX.js";import"./CollapsiblePanel-CO_htu_q.js";import"./error-BP2V_PLi.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DcvRTKGS.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
