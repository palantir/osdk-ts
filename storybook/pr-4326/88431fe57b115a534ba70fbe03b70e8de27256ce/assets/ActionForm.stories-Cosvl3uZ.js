import{j as t,g as n}from"./iframe-DcblcpsD.js";import{A as r}from"./action-form-cUsGLMa6.js";import"./preload-helper-D_wMhyaD.js";import"./DropdownField-v-l2qfMk.js";import"./debounce-AIHTvjc-.js";import"./useOsdkClient-u3WB6gov.js";import"./index-7ach3CvX.js";import"./Input-DFCeqSqF.js";import"./useBaseUiId-kDJ62DAx.js";import"./useControlled-i2WyCNOr.js";import"./index-5vhpnJCd.js";import"./index-Dyr0XLHo.js";import"./PopoverPopup-C62qYoS6.js";import"./InternalBackdrop-vzMbdI9w.js";import"./composite-C6NGEWFA.js";import"./index-BFsskuZE.js";import"./getDisabledMountTransitionStyles-CMYjml29.js";import"./ToolbarRootContext-DePr5kCC.js";import"./tick-CvE3NYGn.js";import"./svgIconContainer-BNnsBEK2.js";import"./small-cross-DPxvOvn1.js";import"./search-DNqBvZq5.js";import"./cross-BsrNuqdH.js";import"./useValueChanged-DVi_uI5x.js";import"./getPseudoElementBounds-DmerV0_o.js";import"./CompositeItem-BDLcpoAw.js";import"./makeExternalStore-DRuwFA-0.js";import"./BaseForm-uZ8JreNR.js";import"./ActionButton-DEfTs481.js";import"./Button-BDRb-Pkx.js";import"./SkeletonBar-CFgpPqeF.js";import"./Tooltip-NnVrtTvo.js";import"./info-sign-C6FoH8DU.js";import"./chevron-up-BTQdR-nu.js";import"./chevron-down-CzYSE9_L.js";import"./useEventCallback-BFyPF3KM.js";import"./iconLoader--meVFtNg.js";import"./Switch-C-gfbGiA.js";import"./CompositeRoot-DsNLUUbX.js";import"./TimePicker-DET-Y6BO.js";import"./CollapsiblePanel-Dy-ip83M.js";import"./error-CKNR4CvZ.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CBgzbsXI.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
