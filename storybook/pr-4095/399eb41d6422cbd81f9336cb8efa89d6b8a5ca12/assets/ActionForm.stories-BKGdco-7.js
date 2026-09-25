import{j as t,g as n}from"./iframe-D9Hj5gXP.js";import{A as r}from"./action-form-DIPEDFAj.js";import"./preload-helper-46igzL0d.js";import"./DropdownField-szw3P9fl.js";import"./debounce-DfbGHQI5.js";import"./useOsdkClient-DldD5hq7.js";import"./index-BGKBGloN.js";import"./Input-CbGZkwW7.js";import"./useBaseUiId-B3UGffNT.js";import"./useControlled-Bt5_5gUM.js";import"./index-AnDVD4rM.js";import"./index-B3OkYupr.js";import"./PopoverPopup-CsWrH6rr.js";import"./InternalBackdrop-DlA1FKGc.js";import"./composite-aH77Cbrs.js";import"./index-jowm6RnV.js";import"./getDisabledMountTransitionStyles-nKpBFA9S.js";import"./ToolbarRootContext-D-kNo729.js";import"./tick-DjzXnXMl.js";import"./svgIconContainer-DUAmOtu_.js";import"./small-cross-C9HLCPSm.js";import"./search-Itm3619L.js";import"./cross-Q-Rh6Md8.js";import"./useValueChanged-tLVk5hgi.js";import"./getPseudoElementBounds-BLiX7v_s.js";import"./CompositeItem-DWvpMhCv.js";import"./makeExternalStore-BMGSmgu1.js";import"./BaseForm-bKlfR13l.js";import"./ActionButton-n9ZfdiZ_.js";import"./Button-Djg1VeWx.js";import"./SkeletonBar-DXV33xVm.js";import"./Tooltip-bqfYO4-a.js";import"./info-sign-BBLihCDW.js";import"./chevron-up-DawkhJbQ.js";import"./chevron-down-CTUGvO1x.js";import"./useEventCallback-Bwe-RZ2-.js";import"./iconLoader-B_a1KfTg.js";import"./Switch-DhnRj-7c.js";import"./CompositeRoot-DERhFUms.js";import"./TimePicker-DTH18IS4.js";import"./CollapsiblePanel-DJVPti5E.js";import"./error-CBRvRAY4.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CL-J3VAE.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
