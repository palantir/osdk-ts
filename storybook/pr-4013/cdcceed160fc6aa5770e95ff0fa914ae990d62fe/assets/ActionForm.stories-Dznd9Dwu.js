import{j as t,g as n}from"./iframe-DbFztG_g.js";import{A as r}from"./action-form-DvRYEYVr.js";import"./preload-helper-5yPlXN3h.js";import"./DropdownField-DfoJZ2WC.js";import"./debounce-CDd2V2U5.js";import"./useOsdkClient-Ds-rIrkC.js";import"./index-BNGbb9rK.js";import"./Input-C-K2OOHO.js";import"./useBaseUiId-BJNUcsKi.js";import"./useControlled-CtpQZwRP.js";import"./index-CjeOPmmS.js";import"./index-DUEaSppR.js";import"./PopoverPopup-DN6pjWYz.js";import"./InternalBackdrop-CURYnF5m.js";import"./composite-DmkJ6YWF.js";import"./index-B0uGE4ks.js";import"./getDisabledMountTransitionStyles-Dc2XzWk7.js";import"./ToolbarRootContext-DsXUgMuU.js";import"./tick-B71QKXh9.js";import"./svgIconContainer-BS_91pYI.js";import"./small-cross-CiVArRcv.js";import"./search-BDnZaHng.js";import"./cross-DGv6zSaG.js";import"./useValueChanged-DOektkSI.js";import"./getPseudoElementBounds-CpWrqgEu.js";import"./CompositeItem-Of_bmSJ2.js";import"./makeExternalStore-BJK_8FWf.js";import"./BaseForm-CPwN6lFa.js";import"./ActionButton-DsNauwQt.js";import"./Button-UBStgghd.js";import"./SkeletonBar-D8SjsLKR.js";import"./Tooltip-giWbl0Po.js";import"./info-sign-DWFFtvn4.js";import"./chevron-up-DUV2O2CG.js";import"./chevron-down-teVJIekx.js";import"./useEventCallback-F0l_MlCv.js";import"./iconLoader-ob6DCSSa.js";import"./CompositeRoot-rv0VCPkW.js";import"./Switch-BGuW1P_V.js";import"./TimePicker-D6d8Hq7P.js";import"./CollapsiblePanel-DDI1QtmT.js";import"./error-0lPH6zk9.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-C9cTzLSh.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
