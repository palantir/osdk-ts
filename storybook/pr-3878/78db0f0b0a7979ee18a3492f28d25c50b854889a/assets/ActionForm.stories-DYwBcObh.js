import{j as t,g as n}from"./iframe-DGAYn9ah.js";import{A as r}from"./action-form-CCjY0s8L.js";import"./preload-helper-ChgL7y96.js";import"./DropdownField-DgkNnSiH.js";import"./debounce-DwT09eQG.js";import"./useOsdkClient-CSSWGxvW.js";import"./index-DTqlvJGy.js";import"./Input-CmwSiSQg.js";import"./useBaseUiId-gHWBFpJw.js";import"./useControlled-DxF1qebn.js";import"./index-dFa0PhkU.js";import"./index-Bk-RkwxC.js";import"./PopoverPopup-RjV8v81n.js";import"./InternalBackdrop-8fzF_Cdw.js";import"./composite-B3z1s4Xv.js";import"./index-CapGV1gT.js";import"./getDisabledMountTransitionStyles-D_EkCujd.js";import"./ToolbarRootContext-YWaMXSM6.js";import"./tick-B-M2pQzS.js";import"./svgIconContainer-CgzcDTkc.js";import"./small-cross-Bjxpstym.js";import"./search-CbK0B2vo.js";import"./cross-DupLKvqJ.js";import"./useValueChanged-B0j61wn1.js";import"./getPseudoElementBounds-DyXfIW7_.js";import"./CompositeItem-BcZSNonj.js";import"./makeExternalStore-BpmHT-XO.js";import"./BaseForm-Ds8U5N-T.js";import"./ActionButton-m1ZenSyP.js";import"./Button-C1GOspFh.js";import"./SkeletonBar-CsMuW56O.js";import"./Tooltip-CAfs-bUF.js";import"./info-sign-DKFkC2iH.js";import"./chevron-up-DUFMrD9Z.js";import"./chevron-down-CyN2TB6T.js";import"./useEventCallback-C6GT1c1Y.js";import"./iconLoader-chEBOdAc.js";import"./CompositeRoot-BOtUersS.js";import"./Switch-DD5FjrY5.js";import"./TimePicker-J801TVDP.js";import"./CollapsiblePanel-CAIby94r.js";import"./error-BI4ZLamB.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DFTpKrdr.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
