import{j as t,g as n}from"./iframe-DI00rnMc.js";import{A as r}from"./action-form-B9so21pk.js";import"./preload-helper-Bhha9UTp.js";import"./DropdownField-uqgsMlJj.js";import"./debounce-DshZgGYh.js";import"./useOsdkClient-D1SRiVtj.js";import"./index-Brq0evln.js";import"./Input-5eKJv0PC.js";import"./useBaseUiId-6U9MPwLo.js";import"./useControlled-C2-apkIG.js";import"./index-Chs62TH6.js";import"./index-Dd09UFHP.js";import"./PopoverPopup-DVqDwMCW.js";import"./InternalBackdrop-5T5xbc5h.js";import"./composite-UOsa0WMB.js";import"./index-BaR9V_cz.js";import"./getDisabledMountTransitionStyles-DEsnJVLy.js";import"./ToolbarRootContext-BVNpcmSf.js";import"./tick-Da1rXlTd.js";import"./svgIconContainer-DP5UNNJ5.js";import"./small-cross-W27oLZuH.js";import"./search-D078c5Qn.js";import"./cross-6J7bJBxX.js";import"./useValueChanged-Drw-qmtO.js";import"./getPseudoElementBounds-CdI2GVpp.js";import"./CompositeItem-PKIDUwep.js";import"./makeExternalStore-qZ-zko2S.js";import"./BaseForm-DphV7fqL.js";import"./ActionButton-C53buHAy.js";import"./Button-7EKbW6_f.js";import"./SkeletonBar-BMhplOL3.js";import"./Tooltip-ZhOYcscf.js";import"./info-sign-C7ZxMz9-.js";import"./chevron-up-Cv0Ov80M.js";import"./chevron-down-ihi9Dc4D.js";import"./useEventCallback-DlKWHTb3.js";import"./iconLoader-Ca1wQfbF.js";import"./Switch-D28EM5Xr.js";import"./CompositeRoot-DwlveJ0d.js";import"./TimePicker-CwM5aAhG.js";import"./CollapsiblePanel-DWSPG8Q_.js";import"./error-CCbSqJWm.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DT1mwdZ-.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
