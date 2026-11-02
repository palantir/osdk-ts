import{j as t,g as n}from"./iframe-C1uIQEe6.js";import{A as r}from"./action-form-BFBDnA1f.js";import"./preload-helper-DF4UQXjd.js";import"./DropdownField-Bs4L9M0h.js";import"./debounce-ClD17fgr.js";import"./useOsdkClient-DaGphxm9.js";import"./index-nY9pkPDF.js";import"./Input-Bqj-jOKY.js";import"./useBaseUiId-CeyDEbyZ.js";import"./useControlled-BLqDTZmr.js";import"./index-CRvA4CpE.js";import"./index-Bnj0fwTZ.js";import"./PopoverPopup-Cm0zY3FO.js";import"./InternalBackdrop-SMklbAKr.js";import"./composite-kICLPGef.js";import"./index-BtYb8cJb.js";import"./getDisabledMountTransitionStyles-tyNaz73q.js";import"./ToolbarRootContext-BwNqm28T.js";import"./tick-Cb96Z_mD.js";import"./svgIconContainer-BGeGsGPX.js";import"./small-cross-D02DqgT9.js";import"./search-CfgnKZCI.js";import"./cross-C9ubRsWO.js";import"./useValueChanged-Pi9Ael4a.js";import"./getPseudoElementBounds-BvXQIwgX.js";import"./CompositeItem-BvnjdHPq.js";import"./makeExternalStore-CD_wbIQr.js";import"./BaseForm-DOEmn2vd.js";import"./ActionButton-p3LXST0-.js";import"./Button-BJ7Nz25q.js";import"./SkeletonBar-BOpTwsNy.js";import"./Tooltip-oCOCurFb.js";import"./info-sign-3gO4xSUm.js";import"./chevron-up-B7c8m0Vb.js";import"./chevron-down-Bo5GDX8K.js";import"./useEventCallback-Dwt0eF5D.js";import"./iconLoader-CjvAkI-D.js";import"./Switch-UgLrpO0y.js";import"./CompositeRoot-CG6nAjLQ.js";import"./TimePicker-CiBfhX7p.js";import"./CollapsiblePanel-6McyaGtD.js";import"./error-Qui232U8.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Dccwzuy3.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
