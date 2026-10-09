import{j as t,g as n}from"./iframe-DpbVK0Z4.js";import{A as r}from"./action-form-B4nlzM44.js";import"./preload-helper-BMTjOH4m.js";import"./DropdownField-BbOufXCH.js";import"./debounce-D12j_pu2.js";import"./useOsdkClient-BbUmDnru.js";import"./index-FV6PMg5w.js";import"./Input-AjQ1LbFX.js";import"./useBaseUiId-DPGPywgp.js";import"./useControlled-C8mfwfwA.js";import"./index-CtCwm9A8.js";import"./index-DjzWs5sw.js";import"./PopoverPopup-BKIXB1bp.js";import"./InternalBackdrop-BkpFCSNm.js";import"./composite-B3hTwjvJ.js";import"./index-Bxy7ANPj.js";import"./getDisabledMountTransitionStyles-yPHluku3.js";import"./ToolbarRootContext-EQtWNPb0.js";import"./tick-L9ql_aPl.js";import"./svgIconContainer-BopSq90e.js";import"./small-cross-Bd3WaBs1.js";import"./search-Bpcgz7ed.js";import"./cross-CfOksEOQ.js";import"./useValueChanged-DgVW91ai.js";import"./getPseudoElementBounds-0wL7ed4r.js";import"./CompositeItem-7xXFyPB2.js";import"./makeExternalStore-hBeqTILr.js";import"./BaseForm-4p0WHlVc.js";import"./ActionButton-B-neCEMC.js";import"./Button-DXRDup3v.js";import"./SkeletonBar-BebtoPD2.js";import"./Tooltip-CsGpMJrz.js";import"./info-sign-B6T1Pdp8.js";import"./chevron-up-HnaF2m-N.js";import"./chevron-down-BPIZ_aJd.js";import"./useEventCallback-CELKL3T2.js";import"./iconLoader-Bl3TzBOV.js";import"./Switch-BNlvgbNV.js";import"./CompositeRoot-CsA2bLZK.js";import"./TimePicker-m6aYz67n.js";import"./CollapsiblePanel-DPTDjISk.js";import"./error-Ddzskxi-.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CogiPj_o.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
