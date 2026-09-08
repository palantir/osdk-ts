import{j as t,g as n}from"./iframe-lO6oHnL4.js";import{A as r}from"./action-form-C65xXxmM.js";import"./preload-helper-CZ1zKWtp.js";import"./DropdownField-Db4HRbpT.js";import"./debounce-CgoayCyT.js";import"./useOsdkClient-DHPHVa2B.js";import"./index-Dl6F1U12.js";import"./Input-oxwV_krW.js";import"./useBaseUiId-B846_agE.js";import"./useControlled-D27zJnZ2.js";import"./index-D1QV3ytK.js";import"./index-DwP6FR90.js";import"./PopoverPopup-ci5-n8v2.js";import"./InternalBackdrop-CRBsd0Rp.js";import"./composite-BjZ2VOoR.js";import"./index-BxwWnAcj.js";import"./getDisabledMountTransitionStyles-Cx8i-UAD.js";import"./ToolbarRootContext-BfcKDhBA.js";import"./tick-xT1qICzH.js";import"./svgIconContainer-BCDfPS-8.js";import"./small-cross-BcxRCy93.js";import"./search-BNOG_dw_.js";import"./cross-CmTyvcmm.js";import"./useValueChanged-Cwy5ekip.js";import"./getPseudoElementBounds-CicDtyQT.js";import"./CompositeItem-FdcQgDtf.js";import"./makeExternalStore-CjtvZY1y.js";import"./BaseForm-DCBTJqIy.js";import"./ActionButton-O8N4TA40.js";import"./Button-8GX9Y-dN.js";import"./SkeletonBar-C2FZeoWT.js";import"./Tooltip-BlvnSvUU.js";import"./info-sign-Dyx4nw-v.js";import"./chevron-up-ixzeTbOR.js";import"./chevron-down-0zZDUaq4.js";import"./useEventCallback-KTIDuvyR.js";import"./iconLoader-CsxIxEhT.js";import"./CompositeRoot-Dm4bOIC_.js";import"./Switch-BqUBRCnx.js";import"./TimePicker-BmHkt6hS.js";import"./CollapsiblePanel-CYfUcVRr.js";import"./error-CA5mje1x.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BoEX6J3t.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
