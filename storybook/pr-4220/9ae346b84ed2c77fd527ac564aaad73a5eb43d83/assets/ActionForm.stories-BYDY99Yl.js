import{j as t,g as n}from"./iframe-CQJeOMd0.js";import{A as r}from"./action-form-B-oN6WE7.js";import"./preload-helper-DYgGZ5xf.js";import"./DropdownField-BCiB5LRe.js";import"./debounce-Bq_e46wp.js";import"./useOsdkClient-DTbHiSsE.js";import"./index-ZrJt1iGx.js";import"./Input-D3KZDZ9i.js";import"./useBaseUiId-UYsDOBIH.js";import"./useControlled-DiW8shJx.js";import"./index-Bfc4h_Hy.js";import"./index-CazEHWy5.js";import"./PopoverPopup-huW2-2Wz.js";import"./InternalBackdrop-CKGnsbEW.js";import"./composite-B-fR2hSY.js";import"./index-CbOC1UiM.js";import"./getDisabledMountTransitionStyles-DrAx-qMj.js";import"./ToolbarRootContext-BZfxaQ_Q.js";import"./tick-hTuAcIOp.js";import"./svgIconContainer-By2ff4hT.js";import"./small-cross-CMRpYjz3.js";import"./search-CdEhbnO_.js";import"./cross-DwSzg9Eu.js";import"./useValueChanged-Ou9HudZH.js";import"./getPseudoElementBounds-Pki9YJrO.js";import"./CompositeItem-BlyLfX91.js";import"./makeExternalStore-D7pp3thE.js";import"./BaseForm-Db0tzQ3K.js";import"./ActionButton-C2rYN8Vu.js";import"./Button-CNntGJtS.js";import"./SkeletonBar-CJs85s_z.js";import"./Tooltip-tmOp52T4.js";import"./info-sign-fpd40-DP.js";import"./chevron-up-oXUixRK4.js";import"./chevron-down-BsREGsZS.js";import"./useEventCallback-4rx4kNgb.js";import"./iconLoader-B30Bqc44.js";import"./Switch-CZpXdT0L.js";import"./CompositeRoot-C3iUD0YR.js";import"./TimePicker-Cf02Nq4G.js";import"./CollapsiblePanel-VDI8WSX1.js";import"./error-pXwI3jKa.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BvV17iLP.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
