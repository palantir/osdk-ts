import{j as t,g as n}from"./iframe-CMYq_tcz.js";import{A as r}from"./action-form-sp5K57BN.js";import"./preload-helper-CM9HDmHc.js";import"./DropdownField-BI-yI3jd.js";import"./debounce-BQrMOEs3.js";import"./useOsdkClient-BF6Arrdj.js";import"./index-xVeJSQI1.js";import"./Input-C2JC1_0u.js";import"./useBaseUiId-DSFxpXlB.js";import"./useControlled-Cizv6LhD.js";import"./index-BY7tovu0.js";import"./index-BFodXj3S.js";import"./PopoverPopup-BZ8d3rO1.js";import"./InternalBackdrop-BcLUyUm4.js";import"./composite-DiZpwFe_.js";import"./index-CbXc65Z2.js";import"./getDisabledMountTransitionStyles-UwTH6edI.js";import"./ToolbarRootContext-BkwDgNb_.js";import"./tick-BWkBomqM.js";import"./svgIconContainer-exLH2FjZ.js";import"./small-cross-DgdOOgoQ.js";import"./search-QHRMuF2d.js";import"./cross-dRI083CA.js";import"./useValueChanged-BCgyiXw4.js";import"./getPseudoElementBounds-eVkaC__S.js";import"./CompositeItem-zd83RHVO.js";import"./makeExternalStore-DnxSotUN.js";import"./BaseForm-PJzAtU0k.js";import"./ActionButton-L6DUuvD5.js";import"./Button-Cx35rN_X.js";import"./SkeletonBar-Tsn6iOqu.js";import"./Tooltip-DibPgXFy.js";import"./info-sign-Dgfd8il5.js";import"./chevron-up-BR3ucmwE.js";import"./chevron-down-BNRseUEV.js";import"./useEventCallback-Ce6dWKw4.js";import"./iconLoader-C4xUcw_s.js";import"./Switch-Cs3fOqng.js";import"./CompositeRoot-CQO7DKHu.js";import"./TimePicker-Dd14ysI-.js";import"./CollapsiblePanel-DQ-gJg9V.js";import"./error-BMW1MkdC.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-KpOnxc9_.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
