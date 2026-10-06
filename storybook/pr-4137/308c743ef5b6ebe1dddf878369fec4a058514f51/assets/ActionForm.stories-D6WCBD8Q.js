import{j as t,g as n}from"./iframe-C-FIv6o_.js";import{A as r}from"./action-form-avdC9Cgv.js";import"./preload-helper-BlbsPBXS.js";import"./DropdownField-DG5FyFzv.js";import"./debounce-UNygtkmW.js";import"./useOsdkClient-Bg9loZzt.js";import"./index-DiYvs7cZ.js";import"./Input-BU1-9D_8.js";import"./useBaseUiId-8fHz63fW.js";import"./useControlled-CSYe1hyF.js";import"./index-B0FBWnJm.js";import"./index-Bbgv3w0b.js";import"./PopoverPopup-BCj1y_R3.js";import"./InternalBackdrop-BUgLvfLu.js";import"./composite-DY-2h9J_.js";import"./index-RlrlxoXZ.js";import"./getDisabledMountTransitionStyles-BT087-qm.js";import"./ToolbarRootContext-Kc9KsJC5.js";import"./tick-q20xBySf.js";import"./svgIconContainer-CH0vCO_z.js";import"./small-cross-L8XNZVST.js";import"./search-kQP18GK_.js";import"./cross-D6R41ZsP.js";import"./useValueChanged-kbkB87xa.js";import"./getPseudoElementBounds-CNOiwK5k.js";import"./CompositeItem-C0WJbRI5.js";import"./makeExternalStore-DtEBDbfK.js";import"./BaseForm-AYSD0YLx.js";import"./ActionButton-Bqe7jk2Y.js";import"./Button-CDwEbwO9.js";import"./SkeletonBar-CqlWLlhL.js";import"./Tooltip-WyT2Q4mR.js";import"./info-sign-Iyjf_URo.js";import"./chevron-up-BC2QNaDC.js";import"./chevron-down-CGWHDi30.js";import"./useEventCallback-D7-_pjQT.js";import"./iconLoader-UJvlbfLd.js";import"./Switch-CoYXS0CD.js";import"./CompositeRoot-CAnEnr_v.js";import"./TimePicker-CnClR5KB.js";import"./CollapsiblePanel-BelOvsl6.js";import"./error-BRmo5GmE.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CUO4ZO-M.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
