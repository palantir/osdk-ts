import{j as t,g as n}from"./iframe-CMiiEF1b.js";import{A as r}from"./action-form-DweaJUKa.js";import"./preload-helper-2rscAx0o.js";import"./DropdownField-B_Y4KBs-.js";import"./debounce-DhU-bxB_.js";import"./useOsdkClient-DkekLomq.js";import"./index-DRZQ1ZuZ.js";import"./Input-B0ji1_35.js";import"./useBaseUiId-EgPXNEt2.js";import"./useControlled-CaNRytWe.js";import"./index-goWiuive.js";import"./index-Dtqd3tNX.js";import"./PopoverPopup-DAxHwasP.js";import"./InternalBackdrop-U0kfyJ5Z.js";import"./composite-DqjfxZG9.js";import"./index-vCHhqi_x.js";import"./getDisabledMountTransitionStyles-MJ90XzR7.js";import"./ToolbarRootContext-UxomdOwp.js";import"./tick-CPg-6I2-.js";import"./svgIconContainer-DmZ8fHpX.js";import"./small-cross-DGkNWAjz.js";import"./search-0aDkREOD.js";import"./cross-DmjzAf0-.js";import"./useValueChanged-hWOBB7lU.js";import"./getPseudoElementBounds-TefPeSXP.js";import"./CompositeItem-D4B_FL8U.js";import"./makeExternalStore-BeAQwjdH.js";import"./BaseForm-Bbd1DUcE.js";import"./ActionButton-B5NjKg_P.js";import"./Button-CDnIVBQ_.js";import"./SkeletonBar-D_pLrG8I.js";import"./Tooltip-Dg78gXhb.js";import"./info-sign-CQeZURiT.js";import"./chevron-up-CyHrqJq5.js";import"./chevron-down-BtRtOYI2.js";import"./useEventCallback-e3py3zZO.js";import"./iconLoader-CRTRYnmb.js";import"./Switch-BlQJp6G9.js";import"./CompositeRoot-CoBz8IBC.js";import"./TimePicker-B0UfaKeX.js";import"./CollapsiblePanel-DHD1Piul.js";import"./error-IdCbvwbX.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BucKtTdS.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
