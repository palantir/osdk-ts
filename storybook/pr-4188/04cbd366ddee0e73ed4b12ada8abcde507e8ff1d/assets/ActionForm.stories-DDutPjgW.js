import{j as t,g as n}from"./iframe-BV8H6lRC.js";import{A as r}from"./action-form-w36u4Uwn.js";import"./preload-helper-FghdvxpP.js";import"./DropdownField-DkGcdfin.js";import"./debounce-CcLYKazv.js";import"./useOsdkClient-DySK7kNm.js";import"./index-DU9RRfrb.js";import"./Input-B3KKnPgU.js";import"./useBaseUiId-Bch4RCf-.js";import"./useControlled-DFgYtmw-.js";import"./index-fE68LmNS.js";import"./index-ByctvPor.js";import"./PopoverPopup-MAImkRcc.js";import"./InternalBackdrop-DFn2kFuw.js";import"./composite-6jNJwuj9.js";import"./index-xKI30ir_.js";import"./getDisabledMountTransitionStyles-CaNIdVg_.js";import"./ToolbarRootContext-B0zqLD7S.js";import"./tick-M2SHJwUO.js";import"./svgIconContainer-B2TLggqZ.js";import"./small-cross-CB3FdAHS.js";import"./search-BlhwHZiG.js";import"./cross-D92mjgqE.js";import"./useValueChanged-Bqcd_ocF.js";import"./getPseudoElementBounds-B3RJWnEx.js";import"./CompositeItem-CfY4xOZ4.js";import"./makeExternalStore-DXngIb0h.js";import"./BaseForm-CCCyj8xA.js";import"./ActionButton-v2nTt39b.js";import"./Button-cZssApwN.js";import"./SkeletonBar-BcrwqPs9.js";import"./Tooltip-BGLVmsTF.js";import"./info-sign-b2Twu778.js";import"./chevron-up-Bb5GS6oZ.js";import"./chevron-down-CmiHvm8d.js";import"./useEventCallback-ZwAzgc5q.js";import"./iconLoader-BDA9i4K3.js";import"./Switch-Bo-4f3sj.js";import"./CompositeRoot-CPs-Y_e9.js";import"./TimePicker-C0qSlIF2.js";import"./CollapsiblePanel-h5yRCfis.js";import"./error-Bt7eKOT3.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-ybYt3TTQ.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
