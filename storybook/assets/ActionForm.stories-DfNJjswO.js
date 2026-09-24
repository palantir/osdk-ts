import{j as t,g as n}from"./iframe-CWCaAWug.js";import{A as r}from"./action-form-C_cTTZji.js";import"./preload-helper-Dp1pzeXC.js";import"./DropdownField-BfsjfsE0.js";import"./debounce-Cn_0io8o.js";import"./useOsdkClient-BEPV8xbi.js";import"./index-BCUxEitH.js";import"./Input-BfCxIW-2.js";import"./useBaseUiId-BW_UtI62.js";import"./useControlled-BTf1PsUt.js";import"./index-BWfbtsx7.js";import"./index-j1R37CPf.js";import"./PopoverPopup-BMHfvJBq.js";import"./InternalBackdrop-T6iq9MEL.js";import"./composite-BR9g6bcx.js";import"./index-BU_p4HZd.js";import"./getDisabledMountTransitionStyles-2GoPE3mv.js";import"./ToolbarRootContext-BlDQXh6V.js";import"./tick-C2bp2J2X.js";import"./svgIconContainer-B05glsOt.js";import"./small-cross-BB4Y9Jap.js";import"./search-CqQdgI04.js";import"./cross-DIjpr0JB.js";import"./useValueChanged-BEwxMfrB.js";import"./getPseudoElementBounds-DBJhYukF.js";import"./CompositeItem-DoJwIv2T.js";import"./makeExternalStore-DuyB91Wg.js";import"./BaseForm-D7T9OaAi.js";import"./ActionButton-DMHzSnUh.js";import"./Button-DiqPmqG4.js";import"./SkeletonBar-AwAWP3QT.js";import"./Tooltip-CYwiJioN.js";import"./info-sign-BCyT0KbB.js";import"./chevron-up-BeKF6Tqk.js";import"./chevron-down-TdN2wngs.js";import"./useEventCallback-BlDNNPjw.js";import"./iconLoader-DH8yWQwq.js";import"./Switch-BVrmoVES.js";import"./CompositeRoot-DknMpM42.js";import"./TimePicker-Jm9L9PNp.js";import"./CollapsiblePanel-CahaDsZJ.js";import"./error-B3tx7_Th.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-IvetZHLX.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
