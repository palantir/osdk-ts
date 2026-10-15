import{j as t,g as n}from"./iframe-zGF2yItg.js";import{A as r}from"./action-form-Dp-Xq1AZ.js";import"./preload-helper-DKR91DwN.js";import"./DropdownField-y9zCIkHo.js";import"./debounce-fRUSIOCu.js";import"./useOsdkClient-DI9zvGd-.js";import"./index-CI0AAd7R.js";import"./Input-gx0WGAlP.js";import"./useBaseUiId-D8XkRAoN.js";import"./useControlled-Bcq_19a7.js";import"./index-CpyS4ByO.js";import"./index-C9gBj_QQ.js";import"./PopoverPopup-BjSro2CC.js";import"./InternalBackdrop-C8zej5On.js";import"./composite-BhRiZx70.js";import"./index-jHsjLuIA.js";import"./getDisabledMountTransitionStyles-C8rPshX7.js";import"./ToolbarRootContext-zfiNhCTv.js";import"./tick-DAv5Wwbg.js";import"./svgIconContainer-CfbP11Km.js";import"./small-cross-B5aXXuf_.js";import"./search-Dr3ly3kj.js";import"./cross-BclfVS0V.js";import"./useValueChanged-Bz7hhRgE.js";import"./getPseudoElementBounds-_KhoGvMt.js";import"./CompositeItem-BGuYZ8t8.js";import"./makeExternalStore-BDBIRBp5.js";import"./BaseForm-DgM0-Irm.js";import"./ActionButton-Cpin8hGS.js";import"./Button-CUzrpo83.js";import"./SkeletonBar-CzCR3F20.js";import"./Tooltip-BDl8XaA7.js";import"./info-sign-N3_CpiI0.js";import"./chevron-up-ssHwhLFd.js";import"./chevron-down-BYonktV5.js";import"./useEventCallback-Cg6-L5Ug.js";import"./iconLoader-B36OcgHe.js";import"./Switch-BSqLzOuP.js";import"./CompositeRoot-kP-4U7q_.js";import"./TimePicker-ClaoN7mY.js";import"./CollapsiblePanel-CGpSwayQ.js";import"./error-rXo5lK8q.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CQPruHu_.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
