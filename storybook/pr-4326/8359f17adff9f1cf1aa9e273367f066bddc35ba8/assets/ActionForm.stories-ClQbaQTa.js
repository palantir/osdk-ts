import{j as t,g as n}from"./iframe-B6Lta6LP.js";import{A as r}from"./action-form-DDjirWcE.js";import"./preload-helper-CYbl2xdJ.js";import"./DropdownField-IaATl85X.js";import"./debounce-DcTWGXcx.js";import"./useOsdkClient-LIxqnJR5.js";import"./index-tKxTuoVH.js";import"./Input-CNTN6kGr.js";import"./useBaseUiId-LeTLb_RS.js";import"./useControlled-Db4l5j0n.js";import"./index-DW8Y-83r.js";import"./index-C1Xd9eEP.js";import"./PopoverPopup-Crm0F1MF.js";import"./InternalBackdrop-CD_hYGA0.js";import"./composite-CXu030fZ.js";import"./index-SAyxKn2n.js";import"./getDisabledMountTransitionStyles-dUaBn5kl.js";import"./ToolbarRootContext-BwcsMBBX.js";import"./tick-CR4FCYn3.js";import"./svgIconContainer-DPd9W8TR.js";import"./small-cross-CYXu3PwF.js";import"./search-CJ2Z9OiI.js";import"./cross-CAJFEHXr.js";import"./useValueChanged-Beo3vz_X.js";import"./getPseudoElementBounds-Cie9YPdh.js";import"./CompositeItem-aYCSoUde.js";import"./makeExternalStore-BxbrneS1.js";import"./BaseForm-DjU1yRYS.js";import"./ActionButton-CjKN-LnI.js";import"./Button-CDP0EtTw.js";import"./SkeletonBar-CBfyp1TB.js";import"./Tooltip-C9QEBkZZ.js";import"./info-sign-DdyVFQv7.js";import"./chevron-up-E3328gzw.js";import"./chevron-down-DP_Haie7.js";import"./useEventCallback-CFBWhOz1.js";import"./iconLoader-2LMuNYP0.js";import"./Switch-BfSHqYPh.js";import"./CompositeRoot-CylVPm1T.js";import"./TimePicker-Db5X4j3p.js";import"./CollapsiblePanel-C3KmqiQ1.js";import"./error-B_rV--z6.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-D256mKJK.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
