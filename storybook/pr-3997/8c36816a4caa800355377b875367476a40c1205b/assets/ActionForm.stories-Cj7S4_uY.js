import{j as t,g as n}from"./iframe-SOll1F4-.js";import{A as r}from"./action-form-DfcrB3ZW.js";import"./preload-helper-CZMLvVAf.js";import"./DropdownField-DCmZO5bG.js";import"./debounce-CbpELLX-.js";import"./useOsdkClient-DN1cnskB.js";import"./index-DrJjeRbc.js";import"./Input-CD41sKiv.js";import"./useBaseUiId-sLJlVzyX.js";import"./useControlled-A2CHlnom.js";import"./index-Bz0lLybg.js";import"./index-B_l0ycL7.js";import"./PopoverPopup-BJU9-Q2L.js";import"./InternalBackdrop-DuO7hhrB.js";import"./composite-DrjuPSYu.js";import"./index-BxU0-qmk.js";import"./getDisabledMountTransitionStyles-CqkzNEYE.js";import"./ToolbarRootContext-C6z7XZRH.js";import"./tick-DfEEUKDP.js";import"./svgIconContainer-BqIiSSFa.js";import"./small-cross-DFG8waLt.js";import"./search-DAnTDJ17.js";import"./cross-BhBNLXbN.js";import"./useValueChanged-BK4PR_uW.js";import"./getPseudoElementBounds-DmvT9tik.js";import"./CompositeItem-CILt4SmA.js";import"./makeExternalStore-C8WgzvlO.js";import"./BaseForm-RGaE9aHH.js";import"./ActionButton-BED8MEyS.js";import"./Button-Cnjwffgu.js";import"./SkeletonBar-ImB0JjUc.js";import"./Tooltip-D0hmlA59.js";import"./info-sign-D9VVGRyu.js";import"./chevron-up-DC9eXC94.js";import"./chevron-down-B7EMYXAy.js";import"./useEventCallback-DkB0XSt3.js";import"./iconLoader-L7_zUdZz.js";import"./CompositeRoot-D1HIiIIC.js";import"./Switch-DlJkfjEj.js";import"./TimePicker-CL9f_yqM.js";import"./CollapsiblePanel-D5QCO8r0.js";import"./error-C4kcTs-K.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DEguMpFR.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
