import{j as t,g as n}from"./iframe-DQpCivO1.js";import{A as r}from"./action-form-CyPMmMLu.js";import"./preload-helper-BNtpiPnv.js";import"./DropdownField-Or1B8bG-.js";import"./debounce--yNODiaS.js";import"./useOsdkClient-CwqyybRI.js";import"./index-DS8-D35g.js";import"./Input-i7VlWrgO.js";import"./useBaseUiId-C8ulXah6.js";import"./useControlled-LcZaVq-T.js";import"./index-BKAa7pmt.js";import"./index-Dqn9XUWy.js";import"./PopoverPopup-BQXF4BGx.js";import"./InternalBackdrop-DLd7Lwe4.js";import"./composite-xfEh3o5g.js";import"./index-DmKdPFBX.js";import"./getDisabledMountTransitionStyles-C-frLZTH.js";import"./ToolbarRootContext-DQ_5rIHb.js";import"./tick-BA8CGTis.js";import"./svgIconContainer-CxU-QT8u.js";import"./small-cross-BRsClvfH.js";import"./search-GD8U0S68.js";import"./cross-Ccdwkdk3.js";import"./useValueChanged-C2RXTXRu.js";import"./getPseudoElementBounds-DDo7a-AL.js";import"./CompositeItem-BwdYO-ps.js";import"./makeExternalStore-CZgijSTY.js";import"./BaseForm-CmpWy6m_.js";import"./ActionButton-DrMcD0_E.js";import"./Button-CstsYLg_.js";import"./SkeletonBar-CjumgPcn.js";import"./Tooltip-DlyF3AAY.js";import"./info-sign-Jn4jn8Om.js";import"./chevron-up-R9Wq5hgx.js";import"./chevron-down-DfHD6Nmf.js";import"./useEventCallback-8OJUCRRT.js";import"./iconLoader-CxhfeVXK.js";import"./CompositeRoot-B3yaZnwv.js";import"./Switch-DSY_eY16.js";import"./TimePicker-DKspi4ga.js";import"./CollapsiblePanel-DboLvc9U.js";import"./error-CRC1V3FY.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-dKG6bw4N.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
