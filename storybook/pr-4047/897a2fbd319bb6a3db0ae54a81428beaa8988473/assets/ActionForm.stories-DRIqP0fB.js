import{j as t,g as n}from"./iframe-DiEonpI4.js";import{A as r}from"./action-form-DL0P41-s.js";import"./preload-helper-CK-k_2Vt.js";import"./DropdownField-KRyqpjup.js";import"./debounce-Cm2KkAbL.js";import"./useOsdkClient-BTBjVGr0.js";import"./index-emI1jrST.js";import"./Input-DeBBkK_j.js";import"./useBaseUiId-vTxFcR1B.js";import"./useControlled-BXxbQ2_H.js";import"./index-CLd9qPG2.js";import"./index-Ds0MF9yD.js";import"./PopoverPopup-DYIt5v_N.js";import"./InternalBackdrop-EQ6LpJI_.js";import"./composite-CGrPsAxE.js";import"./index-CiZmf62M.js";import"./getDisabledMountTransitionStyles-CYLa5ttS.js";import"./ToolbarRootContext-D-kjOzEz.js";import"./tick-8-vebs0z.js";import"./svgIconContainer-HP-rjnIi.js";import"./small-cross-CJHxZfcv.js";import"./search-BguN7d-l.js";import"./cross-Dk3kDcDy.js";import"./useValueChanged-BUX6j6jW.js";import"./getPseudoElementBounds-BF-DLRq1.js";import"./CompositeItem-Cogr6rzU.js";import"./makeExternalStore-BUkIaKmg.js";import"./BaseForm-D1ojdMKL.js";import"./ActionButton-xlIYdZYB.js";import"./Button-DUYCFQGz.js";import"./SkeletonBar-z7idkCKw.js";import"./Tooltip-DbBb7fon.js";import"./info-sign-D6NFNM4F.js";import"./chevron-up-BaNE1fiu.js";import"./chevron-down-C-r7fv-U.js";import"./useEventCallback-CdNjUNof.js";import"./iconLoader-BKDlkyGB.js";import"./Switch-DvQ3bp85.js";import"./CompositeRoot-DGseI8pu.js";import"./TimePicker-BsTx4vqB.js";import"./CollapsiblePanel-D8lZXkVz.js";import"./error-DiLLCp_W.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CSqvl8Bo.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
