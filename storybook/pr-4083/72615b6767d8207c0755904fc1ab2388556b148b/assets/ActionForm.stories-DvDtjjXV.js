import{j as t,g as n}from"./iframe-DWBCJ7r1.js";import{A as r}from"./action-form-DmroynMn.js";import"./preload-helper-BmktTq8T.js";import"./DropdownField-BKAtqCjR.js";import"./debounce-D1paW6Zp.js";import"./useOsdkClient-CTU6gC87.js";import"./index-Bhg8EF8N.js";import"./Input-CZ8A1Blk.js";import"./useBaseUiId-CJSadFy5.js";import"./useControlled-CgT0Br7i.js";import"./index-1w6N5pNx.js";import"./index-DxYGP2pA.js";import"./PopoverPopup-DSB0f6RX.js";import"./InternalBackdrop-DMys-hvU.js";import"./composite-DVYVQNYP.js";import"./index-CZMyUemG.js";import"./getDisabledMountTransitionStyles-Do_SU4wJ.js";import"./ToolbarRootContext-Bk6-lFFc.js";import"./tick-DZoSDnYy.js";import"./svgIconContainer-BKXE3QcR.js";import"./small-cross-Cjpte_iC.js";import"./search-DqkstfId.js";import"./cross-D7B_UIT5.js";import"./useValueChanged-CsMSYAYh.js";import"./getPseudoElementBounds-B2ErL88K.js";import"./CompositeItem-BxdZFWZc.js";import"./makeExternalStore-UKXCXYtC.js";import"./BaseForm-DCMNwrlY.js";import"./ActionButton-Z2VeE3Uj.js";import"./Button-Dgs8-VaM.js";import"./SkeletonBar-Db53rKFO.js";import"./Tooltip-7U4L14FS.js";import"./info-sign-BCOoLFdH.js";import"./chevron-up-CDZpmDro.js";import"./chevron-down-CIAO6ol2.js";import"./useEventCallback-CWWvHrCN.js";import"./iconLoader-Wbl6EdUm.js";import"./Switch-DXC7HTZs.js";import"./CompositeRoot-kn4mChAV.js";import"./TimePicker-CabEGmoo.js";import"./CollapsiblePanel-A9XCTmYP.js";import"./error-BEytdPL1.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BPF8go43.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
