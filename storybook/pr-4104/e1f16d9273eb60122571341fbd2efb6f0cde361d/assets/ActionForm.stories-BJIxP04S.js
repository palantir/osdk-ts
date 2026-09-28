import{j as t,g as n}from"./iframe-C0Xv1P5p.js";import{A as r}from"./action-form-BCmEstWR.js";import"./preload-helper-DK2j5cbT.js";import"./DropdownField-BY3LIDfC.js";import"./debounce-Bf-s2Lqp.js";import"./useOsdkClient-DanPI2Ge.js";import"./index-D6d1RC22.js";import"./Input-C9L75zsf.js";import"./useBaseUiId-DyrVnx3i.js";import"./useControlled-qTk4_Vdn.js";import"./index-CDpNmz1t.js";import"./index-D0yTA5vb.js";import"./PopoverPopup-C3x1U_f_.js";import"./InternalBackdrop-a7BFb5yp.js";import"./composite-DpnK5-9R.js";import"./index-DIBkcKPQ.js";import"./getDisabledMountTransitionStyles-DTtgGuxo.js";import"./ToolbarRootContext-B2RHT2LC.js";import"./tick-Bve5oyKY.js";import"./svgIconContainer-D6QpYyks.js";import"./small-cross-Bj0EFv1l.js";import"./search-BS7q0In0.js";import"./cross-C73iH-uw.js";import"./useValueChanged-CfD_n30e.js";import"./getPseudoElementBounds-CnBSmlCQ.js";import"./CompositeItem-BRH5qaMr.js";import"./makeExternalStore-qN6iSkao.js";import"./BaseForm-BKDJsbe0.js";import"./ActionButton-DGf5lIp9.js";import"./Button-CQxPIDLb.js";import"./SkeletonBar-CsuhaBVh.js";import"./Tooltip-ClUPMWTl.js";import"./info-sign-DqN9ws1O.js";import"./chevron-up-mcFyzEg9.js";import"./chevron-down-Buq4H8ml.js";import"./useEventCallback-BBtLdhG6.js";import"./iconLoader-QMfKwN1R.js";import"./Switch-CRYYNq1l.js";import"./CompositeRoot-EODRIzqt.js";import"./TimePicker-DoFt69rU.js";import"./CollapsiblePanel-CIp9LNN3.js";import"./error-DoPz0IgF.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BlIQDFpZ.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
