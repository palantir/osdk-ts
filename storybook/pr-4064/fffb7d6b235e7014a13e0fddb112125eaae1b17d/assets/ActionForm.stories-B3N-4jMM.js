import{j as t,g as n}from"./iframe-Djgn3mMp.js";import{A as r}from"./action-form-BmtgwaHm.js";import"./preload-helper-BBzcmrCr.js";import"./DropdownField-s6aOcfqL.js";import"./debounce-BNjMaQq1.js";import"./useOsdkClient-Dbnxj5w_.js";import"./index-DMa22myD.js";import"./Input-DahsmOdu.js";import"./useBaseUiId-BpSKPnMp.js";import"./useControlled-Dodjbhjp.js";import"./index-CXL1vt3n.js";import"./index-CX21NhuZ.js";import"./PopoverPopup-Ctx82q43.js";import"./InternalBackdrop-DvFd7PWT.js";import"./composite-v_9iQLjO.js";import"./index-BcsqXVef.js";import"./getDisabledMountTransitionStyles-BGe123t6.js";import"./ToolbarRootContext-D_OMSFCs.js";import"./tick-Br1OP0c4.js";import"./svgIconContainer-BSc8qpEQ.js";import"./small-cross-CoHv2Pfy.js";import"./search-BFidPBD3.js";import"./cross-P-qahKgk.js";import"./useValueChanged-FTGAX_kt.js";import"./getPseudoElementBounds-B0_03GnG.js";import"./CompositeItem-9M2opMvG.js";import"./makeExternalStore-B1pTPZCa.js";import"./BaseForm-CxYqQ_ZI.js";import"./ActionButton-DtQP3hsQ.js";import"./Button-CJpjwaeJ.js";import"./SkeletonBar-uqnKmx5p.js";import"./Tooltip-DcgPgXHU.js";import"./info-sign-3VQxvawe.js";import"./chevron-up-6Wqp5hX8.js";import"./chevron-down-hMfe6qGf.js";import"./useEventCallback-BdQ5ayqn.js";import"./iconLoader-LCnmUfkw.js";import"./Switch-YvttFATi.js";import"./CompositeRoot-GtUdoxrj.js";import"./TimePicker-d7N9Sd8a.js";import"./CollapsiblePanel-BN6mK2LP.js";import"./error-C4Sj7yvC.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DZdRX6WM.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
