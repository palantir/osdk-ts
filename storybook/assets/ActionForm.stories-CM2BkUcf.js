import{j as t,g as n}from"./iframe-DnkZBU_s.js";import{A as r}from"./action-form-JQV-ZVbq.js";import"./preload-helper-Dp1pzeXC.js";import"./DropdownField-rO0m6kph.js";import"./debounce-BhxHqivV.js";import"./useOsdkClient-DsdDCC_g.js";import"./index-Twl2Yec2.js";import"./Input-kebRx2SD.js";import"./useBaseUiId-zN2OIme-.js";import"./useControlled-Bf8g-fcX.js";import"./index-e48OPfBl.js";import"./index-B-feRM5a.js";import"./PopoverPopup-bkZpgw0I.js";import"./InternalBackdrop-qQYyo8Aq.js";import"./composite-C8UkqdZX.js";import"./index-D8RsbEg-.js";import"./getDisabledMountTransitionStyles-DG0BDKFw.js";import"./ToolbarRootContext-C8MimhOM.js";import"./tick-D5_MceeO.js";import"./svgIconContainer-Q5pL_kyU.js";import"./small-cross-CovzpZRI.js";import"./search-Dr69VxcO.js";import"./cross-VJ1Xhfzd.js";import"./useValueChanged-CD6SQReb.js";import"./getPseudoElementBounds-Cyh96wJ4.js";import"./CompositeItem-CnMbPbIm.js";import"./makeExternalStore-C3h3EPrK.js";import"./BaseForm-Dx623g2b.js";import"./ActionButton-Dy9qrhe6.js";import"./Button-DhKykdrC.js";import"./SkeletonBar-DThVILbx.js";import"./Tooltip-BNLJju5c.js";import"./info-sign-CPCLrGPh.js";import"./chevron-up-BCmmAHWh.js";import"./chevron-down-0w-qoQFW.js";import"./useEventCallback-sPIyL2oh.js";import"./iconLoader-CVmzVmp3.js";import"./Switch-Dd3vNzDd.js";import"./CompositeRoot-CuE3nohy.js";import"./TimePicker-37tvJkiM.js";import"./CollapsiblePanel-Cc6hsa-S.js";import"./error-DnS223r_.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CS0c_ats.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
