import{j as t,g as n}from"./iframe-BYf_OhJ0.js";import{A as r}from"./action-form-BWX2hfSI.js";import"./preload-helper-CMb40c8b.js";import"./DropdownField-CKAAt-ca.js";import"./debounce-Cx3iNRX1.js";import"./useOsdkClient-BLIl6zwO.js";import"./index-D24vcPYb.js";import"./Input-jGJDNg7d.js";import"./useBaseUiId-BV6TRjLb.js";import"./useControlled-D82M4IV8.js";import"./index-Cfn6IIi-.js";import"./index-C0REXx9G.js";import"./PopoverPopup-DKUxgHWp.js";import"./InternalBackdrop-C9IU7SA-.js";import"./composite-Czk5304D.js";import"./index-BUkZX9cq.js";import"./getDisabledMountTransitionStyles-Dbvx_1LF.js";import"./ToolbarRootContext-U6rUTj3k.js";import"./tick-C0Y_aYcJ.js";import"./svgIconContainer-CLNhy3XP.js";import"./small-cross-DiOHh5rF.js";import"./search-CG-g63hT.js";import"./cross-937OAABn.js";import"./useValueChanged-D_qKRuH6.js";import"./getPseudoElementBounds-DTEyIocp.js";import"./CompositeItem-CptL6v0D.js";import"./makeExternalStore-xpSL_Msm.js";import"./BaseForm-nTTxi50C.js";import"./ActionButton-Deb6A0x0.js";import"./Button-HH_9r5OW.js";import"./SkeletonBar-hbjfgvT2.js";import"./Tooltip-C2Ov1JFy.js";import"./info-sign-7u336vlo.js";import"./chevron-up-m_qLx9BF.js";import"./chevron-down-BFyWQHOE.js";import"./useEventCallback-B4MxpH1S.js";import"./iconLoader-HxkAAW9N.js";import"./CompositeRoot-BCGvYXAG.js";import"./Switch-DIBRQhlx.js";import"./TimePicker-BqeZTwDn.js";import"./CollapsiblePanel-BS-j2JIg.js";import"./error-IoYBerAI.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-D932jFv2.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
