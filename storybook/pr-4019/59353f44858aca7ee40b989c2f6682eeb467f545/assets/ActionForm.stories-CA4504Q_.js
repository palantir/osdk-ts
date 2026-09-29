import{j as t,g as n}from"./iframe-C0TXowYh.js";import{A as r}from"./action-form-F2gO5zON.js";import"./preload-helper-DxTxvmk8.js";import"./DropdownField-09zuyy2T.js";import"./debounce-DMyrgWDf.js";import"./useOsdkClient-Dik0BEfs.js";import"./index-Cu2rgIRW.js";import"./Input-8EnzzSA0.js";import"./useBaseUiId-CxGokxTP.js";import"./useControlled-BFSHGlV3.js";import"./index-u3QGRCwO.js";import"./index-C6Y-pof4.js";import"./PopoverPopup-CuAJ2y9v.js";import"./InternalBackdrop-BG3n3cO9.js";import"./composite-CXmgh9Nc.js";import"./index-BU6mBswW.js";import"./getDisabledMountTransitionStyles-D_Zo5NjY.js";import"./ToolbarRootContext-CE5VkmEX.js";import"./tick-Bc8vz4AB.js";import"./svgIconContainer-C2fAWGrt.js";import"./small-cross-Bc8Y0COB.js";import"./search-6re8IEAF.js";import"./cross-BfvUUSFN.js";import"./useValueChanged-HDLvanC4.js";import"./getPseudoElementBounds-WqJcoAVH.js";import"./CompositeItem-KxsL0x_o.js";import"./makeExternalStore-C_tJozdQ.js";import"./BaseForm-XMbBu3jQ.js";import"./ActionButton-CtkWJ4rU.js";import"./Button-D_dg1W6z.js";import"./SkeletonBar-D0XWEPXE.js";import"./Tooltip-P9jbmoIC.js";import"./info-sign--dmKIwdC.js";import"./chevron-up-DHjP8CN5.js";import"./chevron-down-D7WH3ySY.js";import"./useEventCallback-DkQiwOiq.js";import"./iconLoader-Bv4gq-2l.js";import"./Switch-FePcvFuX.js";import"./CompositeRoot-BKRNsjas.js";import"./TimePicker-DcOliEOZ.js";import"./CollapsiblePanel-D9qfjPFi.js";import"./error-Z4OH-yWW.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BPzAvbiW.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
