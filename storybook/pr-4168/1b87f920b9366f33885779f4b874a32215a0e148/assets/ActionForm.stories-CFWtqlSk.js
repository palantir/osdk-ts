import{j as t,g as n}from"./iframe-BfqPDKql.js";import{A as r}from"./action-form-aZkxRIec.js";import"./preload-helper-CjR-GsqS.js";import"./DropdownField--_A00rJM.js";import"./debounce-CI_OgJjm.js";import"./useOsdkClient-5BRGAn8B.js";import"./index-3BLY6arO.js";import"./Input-BwQuq_Q1.js";import"./useBaseUiId-C-9mkB40.js";import"./useControlled-1Az1d9DS.js";import"./index-CCUvb36V.js";import"./index-CdNizhnG.js";import"./PopoverPopup-DJ-rXVm_.js";import"./InternalBackdrop-DUtosfX7.js";import"./composite-C5EU-6hJ.js";import"./index-BH2TTPUz.js";import"./getDisabledMountTransitionStyles-CValGxLT.js";import"./ToolbarRootContext-DxevvPzB.js";import"./tick-C-umiLKj.js";import"./svgIconContainer-Bvpn0iJ8.js";import"./small-cross-DljuEPYZ.js";import"./search-DVeWM__c.js";import"./cross-C4uG_0m-.js";import"./useValueChanged-BQjqUDLK.js";import"./getPseudoElementBounds-CVMAeFzS.js";import"./CompositeItem-DBfMuqlH.js";import"./makeExternalStore-D6RKhZ7b.js";import"./BaseForm-2UdjOLBH.js";import"./ActionButton-C_6ndFXd.js";import"./Button-jRfE62iM.js";import"./SkeletonBar-B4bFxsHY.js";import"./Tooltip-D9E02NM2.js";import"./info-sign-Bs02hbKP.js";import"./chevron-up-DPmw-yZK.js";import"./chevron-down-CONoZixg.js";import"./useEventCallback-G3g3fg30.js";import"./iconLoader-CC3ecoXN.js";import"./Switch-BBNu_jd7.js";import"./CompositeRoot-DjhbARAQ.js";import"./TimePicker-CANwYYuy.js";import"./CollapsiblePanel-B2Uq3N6C.js";import"./error-BqCEo41c.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-B6N8SPwA.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
