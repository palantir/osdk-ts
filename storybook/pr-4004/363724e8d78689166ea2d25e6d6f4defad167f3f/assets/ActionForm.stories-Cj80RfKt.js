import{j as t,g as n}from"./iframe-D8hMLNEt.js";import{A as r}from"./action-form-CemqLuNk.js";import"./preload-helper-DdG7SQNV.js";import"./DropdownField-B31FtCPd.js";import"./debounce-DSbZ-o5K.js";import"./useOsdkClient-Dp1gI7BH.js";import"./index-QDiAeGPl.js";import"./Input-DMnyIvQ_.js";import"./useBaseUiId-O-XOb3K-.js";import"./useControlled-60YnUuGr.js";import"./index-D2Eij5lS.js";import"./index-B7f8WC_6.js";import"./PopoverPopup-CnH8jKUA.js";import"./InternalBackdrop-BWmGo_0i.js";import"./composite-36-nzuho.js";import"./index-CYi3P9bP.js";import"./getDisabledMountTransitionStyles-C0Hmpzmq.js";import"./ToolbarRootContext-D5yv28Ry.js";import"./tick-CGx1uDyI.js";import"./svgIconContainer-BJNLg_qp.js";import"./small-cross-CnL6sI_q.js";import"./search-fDezn5AL.js";import"./cross-SP4nOs9x.js";import"./useValueChanged-Bm34Du_O.js";import"./getPseudoElementBounds-BmPS8XBk.js";import"./CompositeItem-C5rE64Sx.js";import"./makeExternalStore-Bvnv1DDu.js";import"./BaseForm-BS8cQbrO.js";import"./ActionButton-BBpnUKPy.js";import"./Button-C5El-Ott.js";import"./SkeletonBar-Br5GneAQ.js";import"./Tooltip-Cll_9OQu.js";import"./info-sign-C31-oRU2.js";import"./chevron-up-DI8uRfR4.js";import"./chevron-down-BOORn2QE.js";import"./useEventCallback-BUFtzlGF.js";import"./iconLoader-CCnc0xET.js";import"./CompositeRoot-BHHqFIOk.js";import"./Switch-CXi9PN43.js";import"./TimePicker-BwZSZwEQ.js";import"./CollapsiblePanel-Cy98f2QZ.js";import"./error-CLijhntf.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-wAiRx6GW.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
