import{j as t,g as n}from"./iframe-BmlnQTDS.js";import{A as r}from"./action-form-k5eACxCS.js";import"./preload-helper-DfLDZ4kf.js";import"./DropdownField-B_Iftwd-.js";import"./debounce-BY5vTAlu.js";import"./useOsdkClient-BIu_ph17.js";import"./index-CLn6IkRR.js";import"./Input-DqKEEagj.js";import"./useBaseUiId-CZoncXMq.js";import"./useControlled-YYP5n0_h.js";import"./index-DwxQTWS6.js";import"./index-bRRYzA0v.js";import"./PopoverPopup-Ci8t5NrM.js";import"./InternalBackdrop-Doq4lLxV.js";import"./composite-JyXlDwio.js";import"./index-Baw0QC21.js";import"./getDisabledMountTransitionStyles-B5FK3Ah0.js";import"./ToolbarRootContext-BMCSjw-P.js";import"./tick-BV5MVFCS.js";import"./svgIconContainer-D7BtKSB4.js";import"./small-cross-Dlof1s20.js";import"./search-C6RrLSu8.js";import"./cross-D2DCGJW3.js";import"./useValueChanged-Ijn1e6pk.js";import"./getPseudoElementBounds-897QWYoT.js";import"./CompositeItem-DqcihoEf.js";import"./makeExternalStore-qm8KAWql.js";import"./BaseForm-Po6hXKBx.js";import"./ActionButton-DE9HiBY7.js";import"./Button-BG-8NdMv.js";import"./SkeletonBar-q0dTxujL.js";import"./Tooltip-C2k0lBII.js";import"./info-sign-B4u2C28T.js";import"./chevron-up-1GfOY4Zb.js";import"./chevron-down-CKSiKvYw.js";import"./useEventCallback-DkTxWfbI.js";import"./iconLoader-BSjMKdY7.js";import"./Switch--12MI-yN.js";import"./CompositeRoot-QP0fYFZg.js";import"./TimePicker-DpJQ9WOI.js";import"./CollapsiblePanel-RUeZ1P51.js";import"./error-C-2VL_3O.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CfdTmR9K.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
