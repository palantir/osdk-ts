import{j as t,g as n}from"./iframe-BnIVPADF.js";import{A as r}from"./action-form-CT_mqvEC.js";import"./preload-helper-D6GdL41X.js";import"./DropdownField-B4fxuMh9.js";import"./debounce-CTj_rgR5.js";import"./useOsdkClient-BTyq9ZHL.js";import"./index-DBHi4RbH.js";import"./Input-CKDCD_hI.js";import"./useBaseUiId-BMj8ARX-.js";import"./useControlled-DeFsLTJI.js";import"./index-BKtQYF4d.js";import"./index-DwvcPf66.js";import"./PopoverPopup-B1uyMBzM.js";import"./InternalBackdrop-RqILjWGS.js";import"./composite-Ji9umu3K.js";import"./index-CS2LLkKv.js";import"./getDisabledMountTransitionStyles-D3_ex1_k.js";import"./ToolbarRootContext-Cc6jVzYJ.js";import"./tick-Cj8MZaAJ.js";import"./svgIconContainer-gtMhd5mD.js";import"./small-cross-mjS1pjh5.js";import"./search-BssqF2mG.js";import"./cross-DLlUDs4D.js";import"./useValueChanged-CoLs32Ul.js";import"./getPseudoElementBounds-D1dOJCQV.js";import"./CompositeItem-B5UfOKT8.js";import"./makeExternalStore-DEMjFRTS.js";import"./BaseForm-F9vw8-gF.js";import"./ActionButton-DG5xkgFq.js";import"./Button-iaybQtEF.js";import"./SkeletonBar-Bbzq-NrQ.js";import"./Tooltip-xJJqA6f0.js";import"./info-sign-SI4SvDRe.js";import"./chevron-up-DOZvnOT5.js";import"./chevron-down-B7znWhjE.js";import"./useEventCallback-BxLA2qmi.js";import"./iconLoader-B4uhtxK9.js";import"./Switch-Ug2t5Uy8.js";import"./CompositeRoot-CFcs0vJI.js";import"./TimePicker-BbX9AtQN.js";import"./CollapsiblePanel-BX1PDtkn.js";import"./error-BWHJsjpo.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-B_v2aQKf.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
