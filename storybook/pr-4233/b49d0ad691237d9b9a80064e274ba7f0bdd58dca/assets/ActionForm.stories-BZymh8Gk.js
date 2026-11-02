import{j as t,g as n}from"./iframe-Yi2ClGEq.js";import{A as r}from"./action-form-uHhDXPFc.js";import"./preload-helper-Bw9P2RvH.js";import"./DropdownField-BGRkIBYk.js";import"./debounce-gfIDaUjK.js";import"./useOsdkClient-tf1w8g-M.js";import"./index-kCKGZ11f.js";import"./Input-B_VCwPTa.js";import"./useBaseUiId-BJvR5yfv.js";import"./useControlled-688Acsw-.js";import"./index-C3Jd9_Nf.js";import"./index-DxUEYHeM.js";import"./PopoverPopup-C3dzCr8l.js";import"./InternalBackdrop-D86_8K-4.js";import"./composite-7FUpzlUO.js";import"./index-BWR70Qv0.js";import"./getDisabledMountTransitionStyles-B8Q9sBzy.js";import"./ToolbarRootContext-erRSrQJW.js";import"./tick-Di576YmF.js";import"./svgIconContainer-DLtA5jnz.js";import"./small-cross-BME_eUbX.js";import"./search-D88J6TuI.js";import"./cross-DHxNtUiL.js";import"./useValueChanged-DMCuXC2X.js";import"./getPseudoElementBounds-Dsc1LKXz.js";import"./CompositeItem-DwrEPXux.js";import"./makeExternalStore-BnsF0xX3.js";import"./BaseForm-Bw4A6hbD.js";import"./ActionButton-Cu3YO4Fd.js";import"./Button-BhYwxPlJ.js";import"./SkeletonBar-CDwfwm__.js";import"./Tooltip-RTNvhfg1.js";import"./info-sign-UGNJLo7d.js";import"./chevron-up-Baq_eNft.js";import"./chevron-down-A6HBtaN4.js";import"./useEventCallback-C9LtGhrj.js";import"./iconLoader-CwPvPdjj.js";import"./Switch-B1qpwdrh.js";import"./CompositeRoot-DF6Us1D8.js";import"./TimePicker-DyYQ-QFT.js";import"./CollapsiblePanel-pAq3TuKo.js";import"./error-CvXgqfjV.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Dhx42yDK.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
