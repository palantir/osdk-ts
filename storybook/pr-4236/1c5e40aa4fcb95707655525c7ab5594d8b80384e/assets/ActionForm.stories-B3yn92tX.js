import{j as t,g as n}from"./iframe-CzZ1CUeI.js";import{A as r}from"./action-form-DUi4e27V.js";import"./preload-helper-CKiwuCze.js";import"./DropdownField-NTQXYuP9.js";import"./debounce-dY7CApU9.js";import"./useOsdkClient-CsHMxRDn.js";import"./index-CgrT0C-o.js";import"./Input-D_HiSYHG.js";import"./useBaseUiId-BDfaFxEX.js";import"./useControlled-DsQHF60n.js";import"./index-BbscB5rP.js";import"./index-D9Klgxm6.js";import"./PopoverPopup-D7czmZgM.js";import"./InternalBackdrop-BatwaIGG.js";import"./composite-BtIW984D.js";import"./index-DMR6Xy8f.js";import"./getDisabledMountTransitionStyles-COt5-b0f.js";import"./ToolbarRootContext-CutVy21d.js";import"./tick-Dh_h7TuN.js";import"./svgIconContainer-tM4UWMZ6.js";import"./small-cross-BcmNd0Cm.js";import"./search-CsQMUjFR.js";import"./cross-D3n1K_EZ.js";import"./useValueChanged-B2lTvP69.js";import"./getPseudoElementBounds-BJ47Mn2_.js";import"./CompositeItem-CIKEUP56.js";import"./makeExternalStore-ES2aAlwo.js";import"./BaseForm-Dm3xGamu.js";import"./ActionButton-HRlRekEI.js";import"./Button-Dq-U227i.js";import"./SkeletonBar-CBl1emhO.js";import"./Tooltip-BYmhB2Sw.js";import"./info-sign-C-miWStK.js";import"./chevron-up-C_-rE1Kh.js";import"./chevron-down-C3ryHGnx.js";import"./useEventCallback-Dfxeqi-H.js";import"./iconLoader-HgXnOUUF.js";import"./Switch-D1UugYcZ.js";import"./CompositeRoot-Byc-6gMS.js";import"./TimePicker-Dhyzg1rs.js";import"./CollapsiblePanel-BHrgatVN.js";import"./error-BfspTM5I.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CRmsMiCZ.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
