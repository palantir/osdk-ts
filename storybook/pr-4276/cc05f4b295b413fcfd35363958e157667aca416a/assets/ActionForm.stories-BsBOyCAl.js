import{j as t,g as n}from"./iframe-B2ls_m6L.js";import{A as r}from"./action-form-6FCWlwWj.js";import"./preload-helper-DP2nAHeT.js";import"./DropdownField-BFaK5X74.js";import"./debounce-DfStzg0U.js";import"./useOsdkClient-ODHX8UXJ.js";import"./index-DcpRv5Au.js";import"./Input-Cxa2FMNZ.js";import"./useBaseUiId-D1As3N2D.js";import"./useControlled-DyDb9EZF.js";import"./index-HgFM_z-w.js";import"./index-BKdY56eR.js";import"./isObject-CKlJzEzc.js";import"./InternalBackdrop-poQ1Ks4a.js";import"./composite-nADOaRwJ.js";import"./index-BFbPpLDJ.js";import"./getDisabledMountTransitionStyles-7kyYRvXc.js";import"./ToolbarRootContext-BCVvVfQ9.js";import"./tick-Dp72_Noz.js";import"./svgIconContainer-Dtr7_c7L.js";import"./small-cross-BtkQ0vb4.js";import"./search-C0yxcI0O.js";import"./cross-DiYUblgV.js";import"./useValueChanged-BAEr9orZ.js";import"./getPseudoElementBounds-BzQUOkaY.js";import"./CompositeItem-uAkHZ6IU.js";import"./makeExternalStore-Dex4IqlO.js";import"./BaseForm-DSke9DiY.js";import"./ActionButton-BnyLqoQD.js";import"./Button-DJwARfG7.js";import"./SkeletonBar-CDSwBps9.js";import"./Tooltip-7yrVH1gX.js";import"./info-sign-D2ME5uOp.js";import"./chevron-up--8rPvZQh.js";import"./chevron-down-CD5bKFpW.js";import"./useEventCallback-C_OLTNA8.js";import"./iconLoader-Bo3qOdeF.js";import"./Switch-BXjkGg74.js";import"./CompositeRoot-DvA7DpLL.js";import"./TimePicker-DOlNOsdv.js";import"./CollapsiblePanel-CggaZMfT.js";import"./error-xfz1itQC.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-6BgTImPT.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
