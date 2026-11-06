import{j as t,g as n}from"./iframe-C3HFz_5t.js";import{A as r}from"./action-form-BCbExuSu.js";import"./preload-helper-Lu-1fXSQ.js";import"./DropdownField-Bq0jfkKU.js";import"./debounce-IhEbnEYZ.js";import"./useOsdkClient-B9v2FimT.js";import"./index-C294enkt.js";import"./Input-C6djVFfS.js";import"./useBaseUiId-Bldx0Hal.js";import"./useControlled-CO4tNWxM.js";import"./index-jlzeR6Al.js";import"./index-YNwbQPnW.js";import"./PopoverPopup-B4HM-lxB.js";import"./InternalBackdrop-DJRSYLek.js";import"./composite-D03Np3Q8.js";import"./index-B7jmGBVS.js";import"./getDisabledMountTransitionStyles-AZ8EU8I1.js";import"./ToolbarRootContext-QkATP4Zh.js";import"./tick-BQmvO2-Z.js";import"./svgIconContainer-Dx7Oqsa5.js";import"./small-cross-BXZDNcqg.js";import"./search-DicQa5iZ.js";import"./cross-VDE-QV8Y.js";import"./useValueChanged-BRuQsI8Y.js";import"./getPseudoElementBounds-aWxumBMj.js";import"./CompositeItem-Ljl_SfE6.js";import"./makeExternalStore-CTKXCo5y.js";import"./BaseForm-CfwMZXKe.js";import"./ActionButton-BTKeHAqS.js";import"./Button-BCjPDU8B.js";import"./SkeletonBar-DGKfF2S7.js";import"./Tooltip-BAxfPrcD.js";import"./info-sign-DgZnW-yX.js";import"./chevron-up-BHe39bWw.js";import"./chevron-down-DKXpMnZC.js";import"./useEventCallback-C-PGdIYD.js";import"./iconLoader-zpZRaeM1.js";import"./Switch-hPWyget1.js";import"./CompositeRoot-Djt65RTk.js";import"./TimePicker-DEr4yvoK.js";import"./CollapsiblePanel-BsUoXH1E.js";import"./error-NlvFbJx8.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CwJ1jB1x.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
