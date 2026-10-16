import{j as t,g as n}from"./iframe-CaMctZhM.js";import{A as r}from"./action-form-Tb034xdu.js";import"./preload-helper-DNMYa0Vf.js";import"./DropdownField-DKs0z5rG.js";import"./debounce-DSgq7d59.js";import"./useOsdkClient-aWMARsJj.js";import"./index-CtdxRtEM.js";import"./Input-BXSwuDSh.js";import"./useBaseUiId-DXXB_44i.js";import"./useControlled-BPVVUVXR.js";import"./index-D9rKK3Jx.js";import"./index-ClymoC-g.js";import"./PopoverPopup-CqHYCBTd.js";import"./InternalBackdrop-Cl0aIOdV.js";import"./composite-hogSzUb-.js";import"./index-DZzpVNZd.js";import"./getDisabledMountTransitionStyles-Zsn1wRQz.js";import"./ToolbarRootContext-NuzyP_Z2.js";import"./tick-CJ39txi1.js";import"./svgIconContainer--PB46C3w.js";import"./small-cross-CCg3K2o4.js";import"./search-jWF7X9or.js";import"./cross-BG3r1-a6.js";import"./useValueChanged-gcwEr2UE.js";import"./getPseudoElementBounds-BcOMbE_O.js";import"./CompositeItem-DUaU3yqi.js";import"./makeExternalStore-BCTvNoj1.js";import"./BaseForm-Cel_ut70.js";import"./ActionButton-CubBHf-4.js";import"./Button-BDNmY4BX.js";import"./SkeletonBar-BRGBX3xw.js";import"./Tooltip-DU6FxlSQ.js";import"./info-sign-DxWgNfoL.js";import"./chevron-up-Cah1q7v0.js";import"./chevron-down-BTzBC5n8.js";import"./useEventCallback-Cp11P4CG.js";import"./iconLoader-Bg6xYKKE.js";import"./Switch-DsesKkfX.js";import"./CompositeRoot-Df6kb7OS.js";import"./TimePicker-hWo7PVmd.js";import"./CollapsiblePanel-C15Mx4Y2.js";import"./error-Cuicm8UG.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DSeCvaBk.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
