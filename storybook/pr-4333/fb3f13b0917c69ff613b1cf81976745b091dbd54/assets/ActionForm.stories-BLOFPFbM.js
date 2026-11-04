import{j as t,g as n}from"./iframe-CsKQ3MiN.js";import{A as r}from"./action-form-DwfM7RJk.js";import"./preload-helper-DGKcnXHD.js";import"./DropdownField-KxlPBtr2.js";import"./debounce-XpKSqWNs.js";import"./useOsdkClient-DDQMFRik.js";import"./index-Dr6q-Sfz.js";import"./Input-D9JW6ixL.js";import"./useBaseUiId-BzoXUnOl.js";import"./useControlled-Cob_C-Qn.js";import"./index-BeHm_BzD.js";import"./index-snnTh06i.js";import"./PopoverPopup-849UqFyk.js";import"./InternalBackdrop-DYA_vqeP.js";import"./composite-CoD6tMpx.js";import"./index-D49_UwOT.js";import"./getDisabledMountTransitionStyles-IbEufsWa.js";import"./ToolbarRootContext-BNxut5tp.js";import"./tick-Cn3xvEup.js";import"./svgIconContainer-CEz_OqiJ.js";import"./small-cross-BsRRrEs9.js";import"./search-cTPZqcQC.js";import"./cross-D0wLRLht.js";import"./useValueChanged-DQRkdvZ7.js";import"./getPseudoElementBounds-CFuQFtK_.js";import"./CompositeItem-DZkfIwKg.js";import"./makeExternalStore-Czb1TAUA.js";import"./BaseForm-TtGYhC2m.js";import"./ActionButton-CmQru8bY.js";import"./Button-BEOltIVE.js";import"./SkeletonBar-CizJ11uq.js";import"./Tooltip-5SCwZ_pU.js";import"./info-sign-BNyBSZnl.js";import"./chevron-up-hsl77dP2.js";import"./chevron-down-BCi4kbBt.js";import"./useEventCallback-80Se1kif.js";import"./iconLoader-2IwggGPu.js";import"./Switch-BaGpcxZA.js";import"./CompositeRoot-BlXaoSVk.js";import"./TimePicker-DVX9xebW.js";import"./CollapsiblePanel-BdBOmqTc.js";import"./error-C-bxu3dO.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-z1U7tMx_.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
