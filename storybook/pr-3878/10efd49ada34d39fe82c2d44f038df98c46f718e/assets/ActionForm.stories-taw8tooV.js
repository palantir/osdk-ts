import{j as t,g as n}from"./iframe-BIBiDLzG.js";import{A as r}from"./action-form-BEFEiSbh.js";import"./preload-helper-M-hMOyfR.js";import"./DropdownField-Dc7oRDG2.js";import"./debounce-C6GUNjet.js";import"./useOsdkClient-L3-wMMON.js";import"./index-DVl0wepy.js";import"./Input-DjyK0ZMe.js";import"./useBaseUiId-uizV67he.js";import"./useControlled-C1UaCMGh.js";import"./index-ChCEVhY0.js";import"./index-oK6fUSTy.js";import"./PopoverPopup-BWEg_lAC.js";import"./InternalBackdrop-D5m4v8WT.js";import"./composite-WJpwW_h1.js";import"./index-BpFwk2gn.js";import"./getDisabledMountTransitionStyles-CwoXuUOt.js";import"./ToolbarRootContext-DSpWAJaB.js";import"./tick-KoHgs3il.js";import"./svgIconContainer-CoQwsTQZ.js";import"./small-cross-DhGfP6H8.js";import"./search-Dp0L04CB.js";import"./cross-Bct1nQA0.js";import"./useValueChanged-CzF2vCV8.js";import"./getPseudoElementBounds-CNxmiBte.js";import"./CompositeItem-DcFVDvs6.js";import"./makeExternalStore-CpzPkJRH.js";import"./BaseForm-DHIlCWM1.js";import"./ActionButton-BNlBdLC6.js";import"./Button-C3sxjNx0.js";import"./SkeletonBar-BwxLZXkl.js";import"./Tooltip-uJ9PHc8e.js";import"./info-sign-BuP_I8hF.js";import"./chevron-up-Y3fm2hQ5.js";import"./chevron-down-D9WTAz47.js";import"./useEventCallback-BAwy8rT_.js";import"./iconLoader-QriRmg9g.js";import"./CompositeRoot-C4rUmmx9.js";import"./Switch-B9TCwVm8.js";import"./TimePicker-BhxMjRJb.js";import"./CollapsiblePanel-CZiuD1Hf.js";import"./error-VYeOdSiM.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BODaHo4W.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
