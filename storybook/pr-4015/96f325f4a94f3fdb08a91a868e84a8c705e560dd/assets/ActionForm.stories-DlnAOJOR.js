import{j as t,g as n}from"./iframe-Dv4QQ6Y4.js";import{A as r}from"./action-form-CZwIDe_q.js";import"./preload-helper-BZeo2aa_.js";import"./DropdownField-kkZO0YX5.js";import"./debounce-DMjYGfU6.js";import"./useOsdkClient-BE_-nJBB.js";import"./index-Bo5vUrye.js";import"./Input-DTNwj_yO.js";import"./useBaseUiId-DPM9QPEL.js";import"./useControlled-BcGMXD3D.js";import"./index-D7zPEcZE.js";import"./index-wUCDkndP.js";import"./PopoverPopup-4H23XaH2.js";import"./InternalBackdrop-DRaUyJ8v.js";import"./composite-D2e8WeVr.js";import"./index-B4wl8HiA.js";import"./getDisabledMountTransitionStyles-n1IP7gt4.js";import"./ToolbarRootContext-Blue4JH4.js";import"./tick-Dh2x96zi.js";import"./svgIconContainer-De6SA4Dr.js";import"./small-cross-BOwPxFN0.js";import"./search-CWgR1vVP.js";import"./cross-CTXbroJK.js";import"./useValueChanged-1zfYKsDL.js";import"./getPseudoElementBounds-DmVA_fGG.js";import"./CompositeItem-b4hZwQ2E.js";import"./makeExternalStore-Bg3zd0w-.js";import"./BaseForm-HDNFmWqA.js";import"./ActionButton-C1ptiifp.js";import"./Button-B_X3_bQA.js";import"./SkeletonBar-DbWunkuZ.js";import"./Tooltip-DSVMTHzP.js";import"./info-sign-aLBjk50a.js";import"./chevron-up-S7OuVv0m.js";import"./chevron-down-XPf4kqix.js";import"./useEventCallback-DE28hwwS.js";import"./iconLoader-DYhsGPP-.js";import"./CompositeRoot-V7t5avHu.js";import"./Switch-B2WGpAZb.js";import"./TimePicker-CC9wporl.js";import"./CollapsiblePanel-DNTWrgGT.js";import"./error-CMA_8Zv0.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CfzcCH1M.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
