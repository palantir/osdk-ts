import{j as t,g as n}from"./iframe-I5kvh-Kw.js";import{A as r}from"./action-form-C5nO2YJW.js";import"./preload-helper-Bdf318pV.js";import"./DropdownField-ceLSuDDZ.js";import"./debounce-DwNlwyza.js";import"./useOsdkClient-CHvk60Or.js";import"./index-HKnhZxyX.js";import"./Input-GvrpBokI.js";import"./useBaseUiId-BejWRuZ2.js";import"./useControlled-B-k81KQz.js";import"./index-BV_M3ZY7.js";import"./index-B3JolPJS.js";import"./PopoverPopup-C0f2Xvwy.js";import"./InternalBackdrop-AewAO-J_.js";import"./composite-DzvS9mVY.js";import"./index-Dc5Qye8S.js";import"./getDisabledMountTransitionStyles-BX75q4sb.js";import"./ToolbarRootContext-BpC1haoE.js";import"./tick-CMqxctjO.js";import"./svgIconContainer-DDPN3ss8.js";import"./small-cross-Bt34L26C.js";import"./search-C9rUiq_s.js";import"./cross-Yl6g30y6.js";import"./useValueChanged-B0q3nMZ1.js";import"./getPseudoElementBounds-Bc29vczI.js";import"./CompositeItem-Ck73puur.js";import"./makeExternalStore-CUhQIJ-n.js";import"./BaseForm-BBbLMbXC.js";import"./ActionButton-CqQaVHKu.js";import"./Button-B2DkfEqk.js";import"./SkeletonBar-kcsCYLu4.js";import"./Tooltip-DU2yzwco.js";import"./info-sign-AmUmKf9B.js";import"./chevron-up-7ANrVMQo.js";import"./chevron-down-BWVLfJxG.js";import"./useEventCallback-pdwLNnur.js";import"./iconLoader-CXFKYOVa.js";import"./Switch-Dd6DSxZN.js";import"./CompositeRoot-DP-SsOcP.js";import"./TimePicker-BWwQGe1y.js";import"./CollapsiblePanel-e6KM6j36.js";import"./error-Dywin3-5.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CldLsQ2u.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
