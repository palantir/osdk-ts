import{j as t,g as n}from"./iframe-CDXR5TiH.js";import{A as r}from"./action-form-CBP-KfxM.js";import"./preload-helper-Dl7TLzKT.js";import"./DropdownField-DnLaVkF3.js";import"./debounce-jTnZ1WYt.js";import"./useOsdkClient-DHGjCNuj.js";import"./index-BUlTo8si.js";import"./Input-CpjIkFYJ.js";import"./useBaseUiId-DQwBq2Ep.js";import"./useControlled-D1Q05_VM.js";import"./index-DyQAqcSx.js";import"./index-DgZ9bURa.js";import"./PopoverPopup-4v2nZ5OG.js";import"./InternalBackdrop-DlnunXky.js";import"./composite-DrLkfYl3.js";import"./index-x4aOtmip.js";import"./getDisabledMountTransitionStyles-BD4bCjuO.js";import"./ToolbarRootContext-DIR8ob_8.js";import"./tick-DBGC9sWR.js";import"./svgIconContainer-DvE8o4ZI.js";import"./small-cross-Dzb4rQCP.js";import"./search-B19UftdY.js";import"./cross-BNFw8vL_.js";import"./useValueChanged-B2pE4_D0.js";import"./getPseudoElementBounds-d0kuGfS4.js";import"./CompositeItem-BwsWbkWf.js";import"./makeExternalStore-DS89lBNV.js";import"./BaseForm-D8tEaGqw.js";import"./ActionButton-CnTp065j.js";import"./Button-BX5bEl7N.js";import"./SkeletonBar-CRB2LJn0.js";import"./Tooltip-qSG85F-j.js";import"./info-sign-Co2s2FcF.js";import"./chevron-up-D72_TCvN.js";import"./chevron-down-D5h4llJH.js";import"./useEventCallback-B5U4l4Fa.js";import"./iconLoader-C8kelXP5.js";import"./Switch-CrL4XMeM.js";import"./CompositeRoot-TCN9vz98.js";import"./TimePicker-BMVDnlwU.js";import"./CollapsiblePanel-BQrF_G1l.js";import"./error-DB4Z3Bk1.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DTJ2dgc2.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
