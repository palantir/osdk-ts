import{j as t,g as n}from"./iframe-Bet7ZyCm.js";import{A as r}from"./action-form-D2HzdHc3.js";import"./preload-helper-BUkBrZyY.js";import"./DropdownField-DZGUXtRJ.js";import"./debounce-BHN0rKBM.js";import"./useOsdkClient-DFdeM1ww.js";import"./index-DjVLxSFI.js";import"./Input-C3dR_yK9.js";import"./useBaseUiId-CsxMin3O.js";import"./useControlled-COCV5_w3.js";import"./index-Dbf65m0z.js";import"./index-BTuCJIed.js";import"./PopoverPopup-B0mVV_R3.js";import"./InternalBackdrop-CFlTUOfK.js";import"./composite-CRapEzeJ.js";import"./index-Bfbp3vAN.js";import"./getDisabledMountTransitionStyles-BLmiHtZa.js";import"./ToolbarRootContext-DNj0Wk9x.js";import"./tick-DK1jZqTe.js";import"./svgIconContainer-Barh-7SS.js";import"./small-cross-B5QztEfo.js";import"./search-DarFPo_N.js";import"./cross-BeELKFUT.js";import"./useValueChanged-BjBXj4B6.js";import"./getPseudoElementBounds-D1bAAr1-.js";import"./CompositeItem-DTquphkU.js";import"./makeExternalStore-BZZ89cDU.js";import"./BaseForm-BWRCkZAe.js";import"./ActionButton-BM2eOm48.js";import"./Button-DA30xwtA.js";import"./SkeletonBar-lHRA8dS5.js";import"./Tooltip-BioUBHfR.js";import"./info-sign-BaQXEIar.js";import"./chevron-up-BXIGlwB-.js";import"./chevron-down-5KX1Vgx1.js";import"./useEventCallback-CpGQqYvl.js";import"./iconLoader-CrrGJuuh.js";import"./Switch-CiBqJuJU.js";import"./CompositeRoot-C-l802JC.js";import"./TimePicker-F45B9_ef.js";import"./CollapsiblePanel-E1_rckeS.js";import"./error-Y0ypiKIG.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-8BIUQCxd.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
