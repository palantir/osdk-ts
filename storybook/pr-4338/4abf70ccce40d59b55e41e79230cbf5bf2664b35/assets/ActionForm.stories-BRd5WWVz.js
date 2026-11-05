import{j as t,g as n}from"./iframe-BWfq1Ita.js";import{A as r}from"./action-form-Em7CBXu9.js";import"./preload-helper-Cez3EkKO.js";import"./DropdownField-Cxy9XoQ6.js";import"./debounce-BMBkBKqd.js";import"./useOsdkClient-DUSv4hnn.js";import"./index-CsmCBiFc.js";import"./Input-DsXOqmoY.js";import"./useBaseUiId-AQZerCPK.js";import"./useControlled-zsZ0Gi2e.js";import"./index-Ct2QTZpq.js";import"./index-ZI1bO9GZ.js";import"./PopoverPopup-uC42OBYn.js";import"./InternalBackdrop-BU6CR9JH.js";import"./composite-BxLIdtja.js";import"./index-DzTj4bDT.js";import"./getDisabledMountTransitionStyles-BZXhkuBl.js";import"./ToolbarRootContext-BZs-vXaE.js";import"./tick-DUbrHsOa.js";import"./svgIconContainer-3Xe0sM70.js";import"./small-cross-BQAUdHVP.js";import"./search-BJDwKHsZ.js";import"./cross-B2opFBMX.js";import"./useValueChanged-DcWOn6Em.js";import"./getPseudoElementBounds-vhJ9Xo_I.js";import"./CompositeItem-CT28f8sD.js";import"./makeExternalStore-ByJ1Qj-8.js";import"./BaseForm-CokJbYGR.js";import"./ActionButton-DTQZUzqS.js";import"./Button-CDzVT-19.js";import"./SkeletonBar-DKgRYbiF.js";import"./Tooltip-CDrLWobn.js";import"./info-sign-lW3nOm3F.js";import"./chevron-up-y3r_3-hO.js";import"./chevron-down-D-1SOefz.js";import"./useEventCallback-D1-lsQmd.js";import"./iconLoader--qlETO9E.js";import"./Switch-XeYQbG_w.js";import"./CompositeRoot-DR51mb8G.js";import"./TimePicker-DuHAHg9Q.js";import"./CollapsiblePanel-CRz6BZMc.js";import"./error-D4A2zaxG.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CVeraRoA.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
