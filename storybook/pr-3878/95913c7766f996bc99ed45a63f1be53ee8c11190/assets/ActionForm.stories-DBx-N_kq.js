import{j as t,g as n}from"./iframe--ccl4y8N.js";import{A as r}from"./action-form-DAEe-PtZ.js";import"./preload-helper-eDRQxybW.js";import"./DropdownField-qGy4ydz7.js";import"./debounce-C5k2VTX2.js";import"./useOsdkClient-VVFwCZnH.js";import"./index-Vig6W4vx.js";import"./Input-CMEDwRP1.js";import"./useBaseUiId-fZY9l5U4.js";import"./useControlled-DnjkEDg6.js";import"./index-DaU8wHoE.js";import"./index-DHS-gUYg.js";import"./PopoverPopup-D3eT8tPI.js";import"./InternalBackdrop-CcF1cHM3.js";import"./composite-BIOD5O0o.js";import"./index-BGU5pc6Z.js";import"./getDisabledMountTransitionStyles-Fp8bhwNn.js";import"./ToolbarRootContext-DphUk-b_.js";import"./tick-BSFeBmWe.js";import"./svgIconContainer-DanQ2deo.js";import"./small-cross-BpjjQ8hl.js";import"./search-BSNzJLm0.js";import"./cross-DXpDqiaU.js";import"./useValueChanged-WfWZ-saZ.js";import"./getPseudoElementBounds-C7suUQde.js";import"./CompositeItem-CgDhVlw6.js";import"./makeExternalStore-CgFnBRv9.js";import"./BaseForm-BtkT0qUD.js";import"./ActionButton-CBwATAf_.js";import"./Button-WLNHPk3M.js";import"./SkeletonBar-CjkXHjrG.js";import"./Tooltip-CawT2Rn1.js";import"./info-sign-BzokhHD0.js";import"./chevron-up-furDnydF.js";import"./chevron-down-CjjtTKBP.js";import"./useEventCallback-aG5NN5nQ.js";import"./iconLoader-CiA27gF8.js";import"./CompositeRoot-CsJQ-X5P.js";import"./Switch-B4wf8C0w.js";import"./TimePicker-DUmUVtQz.js";import"./CollapsiblePanel-CpfhC1pL.js";import"./error-C1s20D2H.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CgPXr3ib.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
