import{j as t,g as n}from"./iframe-BQiIs3LK.js";import{A as r}from"./action-form-SXxhG47s.js";import"./preload-helper-Dw2jPLDK.js";import"./DropdownField-BpZnmzBW.js";import"./debounce-ncyQhy3A.js";import"./useOsdkClient-ByCOtk2g.js";import"./index-z86HRZpN.js";import"./Input-CZoH0d1X.js";import"./useBaseUiId-CLlcPdwB.js";import"./useControlled-CUE02bZW.js";import"./index-D61lICmk.js";import"./index-zzfNqQm7.js";import"./PopoverPopup-D7zJiBr2.js";import"./InternalBackdrop-CMbNIGM4.js";import"./composite-CMA2GnO4.js";import"./index-OK0CF_qs.js";import"./getDisabledMountTransitionStyles-uWkBK1pF.js";import"./ToolbarRootContext-BJUtIxN4.js";import"./tick-BiIYLlxf.js";import"./svgIconContainer-De2PI1mj.js";import"./small-cross-CG4zdxxi.js";import"./search-CwMbCA9x.js";import"./cross-BBOEsUzu.js";import"./useValueChanged-ClDHkrux.js";import"./getPseudoElementBounds-CjaTZFDC.js";import"./CompositeItem-B87J6QYh.js";import"./makeExternalStore-CZnmcOAZ.js";import"./BaseForm-Dy-hBoSJ.js";import"./ActionButton-6eqsHTiZ.js";import"./Button-mut1rbst.js";import"./SkeletonBar-BakbpVs6.js";import"./Tooltip-UKYFeKFX.js";import"./info-sign-D-6EVoz9.js";import"./chevron-up-C47dfhRB.js";import"./chevron-down-DNRgePmp.js";import"./useEventCallback-Q6WE3pG5.js";import"./iconLoader-BfbukA_2.js";import"./Switch--TCRQnmc.js";import"./CompositeRoot-Cq1j3l5k.js";import"./TimePicker-DJQwDswY.js";import"./CollapsiblePanel-C-iaOM6m.js";import"./error-Cm3qz5vo.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CvdPVaRc.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
