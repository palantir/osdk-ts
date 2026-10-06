import{j as t,g as n}from"./iframe-i3f0VK7P.js";import{A as r}from"./action-form-CEeZWPtc.js";import"./preload-helper-CcQVXdAf.js";import"./DropdownField-CfwMrpRo.js";import"./debounce-CZjDoEnf.js";import"./useOsdkClient-eQiRfwbd.js";import"./index-BSc8nCuA.js";import"./Input-BKCzKS6Z.js";import"./useBaseUiId-3GNAAiBc.js";import"./useControlled-BBd9b3hp.js";import"./index-UuGZwwy8.js";import"./index-CrHn1Rne.js";import"./PopoverPopup-BilHat69.js";import"./InternalBackdrop-BzlNDOWb.js";import"./composite-GZoC5isN.js";import"./index-Dc_noU35.js";import"./getDisabledMountTransitionStyles-DlreV-Ph.js";import"./ToolbarRootContext-DMZj-zjR.js";import"./tick-BdzI4Lm6.js";import"./svgIconContainer-DpWasIbE.js";import"./small-cross-CaOVzuNS.js";import"./search-D1ajCeBe.js";import"./cross-U10SUwzd.js";import"./useValueChanged-DQRztGVN.js";import"./getPseudoElementBounds-BbqFlpXE.js";import"./CompositeItem-C5NIgZsO.js";import"./makeExternalStore-Ds3owEGg.js";import"./BaseForm-CRNw74un.js";import"./ActionButton-DHom0mZn.js";import"./Button-CM2JbGjZ.js";import"./SkeletonBar-DWNug-bk.js";import"./Tooltip--UELeF3n.js";import"./info-sign-CDivrQkO.js";import"./chevron-up-Dmmoi6D2.js";import"./chevron-down-BEmwBzIe.js";import"./useEventCallback-DEIVd39z.js";import"./iconLoader-Cw-gPNru.js";import"./Switch-DGesjz4q.js";import"./CompositeRoot-fteDc1R_.js";import"./TimePicker-CAfM-Vqt.js";import"./CollapsiblePanel-D0rBf_Yr.js";import"./error-Cm9VDJHx.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-xRq5i0OL.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
