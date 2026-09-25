import{j as t,g as n}from"./iframe-DUMXb5nI.js";import{A as r}from"./action-form-Da5--mBE.js";import"./preload-helper-BJwXp4Q-.js";import"./DropdownField-B_P7JzgN.js";import"./debounce-Ct13Tnzu.js";import"./useOsdkClient-Ce1WdpbO.js";import"./index-BbwFJ-ta.js";import"./Input-DiFVGF-l.js";import"./useBaseUiId-_e14ZC1l.js";import"./useControlled-BDe8NiPs.js";import"./index-CNSnRqug.js";import"./index-DYmqgljQ.js";import"./PopoverPopup-DQegoE5S.js";import"./InternalBackdrop-CJNWsu2d.js";import"./composite-D-SRMe6j.js";import"./index-7zI_gih7.js";import"./getDisabledMountTransitionStyles-C0sSy9Tx.js";import"./ToolbarRootContext-LKaZxJnb.js";import"./tick-CJMPUx9Y.js";import"./svgIconContainer-sVTzBKmW.js";import"./small-cross-DAi9ABlY.js";import"./search-TGSQVeh_.js";import"./cross-D_uZDyQx.js";import"./useValueChanged-B3sHWLjz.js";import"./getPseudoElementBounds-C-fSL_7l.js";import"./CompositeItem-HBdNGEyu.js";import"./makeExternalStore-BwFxLGns.js";import"./BaseForm-DcDNNSkC.js";import"./ActionButton-DBuZkuqt.js";import"./Button-BgjvY2h6.js";import"./SkeletonBar-CSPA62mF.js";import"./Tooltip-PrnQ8hCt.js";import"./info-sign-DPnAfCnc.js";import"./chevron-up-D6G-6csF.js";import"./chevron-down-C-ZMpNeB.js";import"./useEventCallback-ChqFaUAL.js";import"./iconLoader-CDhYTlv_.js";import"./Switch-BpTCkKap.js";import"./CompositeRoot-bLUdZNHz.js";import"./TimePicker-kQWDvwUD.js";import"./CollapsiblePanel-BGXgYcLe.js";import"./error-Cm3UeO8R.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-pgg1h4tV.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
