import{j as t,g as n}from"./iframe-CuEAZ9dr.js";import{A as r}from"./action-form-gY6rN9HC.js";import"./preload-helper-BGz8wZQR.js";import"./DropdownField-BaUKfk6e.js";import"./debounce-C37B9MoR.js";import"./useOsdkClient-DaV3EpeN.js";import"./index-DxIg76dX.js";import"./Input-CVHctVKc.js";import"./useBaseUiId-BeONGSYl.js";import"./useControlled-DvKAwvsQ.js";import"./index-Dvn68MG5.js";import"./index-CZP_mOC4.js";import"./PopoverPopup-SkuTKSE6.js";import"./InternalBackdrop-BkqsHjIV.js";import"./composite-Cuvx7hIz.js";import"./index-BBIDRv9-.js";import"./getDisabledMountTransitionStyles-BRocjPLc.js";import"./ToolbarRootContext-D1XcDui9.js";import"./tick-DnPfu0Vb.js";import"./svgIconContainer-BvlE_9W9.js";import"./small-cross-R78MO7fs.js";import"./search-DwLfbIUw.js";import"./cross-WWifeHY9.js";import"./useValueChanged-Ci2GyKEy.js";import"./getPseudoElementBounds-D_hAP4_U.js";import"./CompositeItem-BaOcY-5M.js";import"./makeExternalStore-C8vIUtyz.js";import"./BaseForm-6K1Pyb3y.js";import"./ActionButton--142FRTZ.js";import"./Button-D_a0PtrD.js";import"./SkeletonBar-IMTg_Ovw.js";import"./Tooltip-VrBjATlQ.js";import"./info-sign-BFvsk0Gh.js";import"./chevron-up-C4Txc0Rz.js";import"./chevron-down-CU80jHGh.js";import"./useEventCallback-pnT8ZyKV.js";import"./iconLoader-BpJmPLPM.js";import"./Switch-DkoCUwy8.js";import"./CompositeRoot-CGT6QJrs.js";import"./TimePicker-BGiwSinC.js";import"./CollapsiblePanel-BleGNdwU.js";import"./error-IRs09aCG.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BPCuw1K8.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
