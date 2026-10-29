import{j as t,g as n}from"./iframe-DuPGHU0l.js";import{A as r}from"./action-form-DYxIw4Pa.js";import"./preload-helper-C0i017mv.js";import"./DropdownField-I3G12o5O.js";import"./debounce-DDzZOsHB.js";import"./useOsdkClient-6i4-GCvx.js";import"./index-trCVkGnT.js";import"./Input-jGQQmaCN.js";import"./useBaseUiId-CXOx85Ji.js";import"./useControlled-uIFuGzm4.js";import"./index-BPZGrXj8.js";import"./index-CxEs7fW4.js";import"./PopoverPopup-Ccr61WFs.js";import"./InternalBackdrop-MypWFEdM.js";import"./composite-bxfGnibV.js";import"./index-D9lJQHx7.js";import"./getDisabledMountTransitionStyles-D68V5Zib.js";import"./ToolbarRootContext-wxST6T8W.js";import"./tick-gyoLk9c6.js";import"./svgIconContainer-DYavZBCX.js";import"./small-cross-D_ytDnoJ.js";import"./search-lklVR3bN.js";import"./cross-DX5M9gAF.js";import"./useValueChanged-Czjmm1xx.js";import"./getPseudoElementBounds-DIwP7tdN.js";import"./CompositeItem-D0CjBMiI.js";import"./makeExternalStore-B2yZ_Kza.js";import"./BaseForm-iz-wAVcE.js";import"./ActionButton-CpXgr1m4.js";import"./Button-kErr3Na-.js";import"./SkeletonBar-qHgUQhEG.js";import"./Tooltip-B0JeszV9.js";import"./info-sign-Busix3iJ.js";import"./chevron-up-B366UYAE.js";import"./chevron-down-2p6Ee397.js";import"./useEventCallback-DffRG6R1.js";import"./iconLoader-C5P8vfup.js";import"./Switch-Dk5aO8OY.js";import"./CompositeRoot-dnjjkLNo.js";import"./TimePicker-BWLCnKDD.js";import"./CollapsiblePanel-BYMuCAsZ.js";import"./error-WnyZ_TXe.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-D5QjWVGm.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
