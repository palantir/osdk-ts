import{j as t,g as n}from"./iframe-CrKPlwEU.js";import{A as r}from"./action-form-0l3yLzUU.js";import"./preload-helper-haeFzdUn.js";import"./DropdownField-CU7FI4gK.js";import"./debounce-l8Bh5wEB.js";import"./useOsdkClient-TsA83w7k.js";import"./index-CpV23X_V.js";import"./Input-D5pWgixZ.js";import"./useBaseUiId-3D9LSptD.js";import"./useControlled-BeRVPSrG.js";import"./index-CuiFjKJ6.js";import"./index-Tf0Q6mNY.js";import"./PopoverPopup-Ce9yvUeR.js";import"./InternalBackdrop-CANy3XAr.js";import"./composite-chiYjW3e.js";import"./index-FzYKWb4a.js";import"./getDisabledMountTransitionStyles-DT-8seTh.js";import"./ToolbarRootContext-CqOU07W6.js";import"./tick-Ciq_5nwQ.js";import"./svgIconContainer-DeM85DcU.js";import"./small-cross-CeyGDtbC.js";import"./search-Djn1cGPu.js";import"./cross-BOaN4EGV.js";import"./useValueChanged-B9MjiZal.js";import"./getPseudoElementBounds-Bvl6KZtn.js";import"./CompositeItem-CWEcL4Np.js";import"./makeExternalStore-Drk2huTh.js";import"./BaseForm-P1i9GUdv.js";import"./ActionButton-Dk7pYVbj.js";import"./Button-C2XUaQth.js";import"./SkeletonBar-DHBToYCm.js";import"./Tooltip-C4p1lLDJ.js";import"./info-sign-QSjCGYUb.js";import"./chevron-up-CP5ro0Y0.js";import"./chevron-down-B-Yd5sHs.js";import"./useEventCallback-CrnEc3ig.js";import"./iconLoader-BnFZ14Iw.js";import"./Switch-Dh5FsiDi.js";import"./CompositeRoot-YPZh-IR8.js";import"./TimePicker-D5fW8PS0.js";import"./CollapsiblePanel-CkSGM0Jv.js";import"./error-DbcL_3Bp.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CM1wTx4W.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
