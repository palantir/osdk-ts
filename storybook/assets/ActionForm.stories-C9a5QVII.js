import{j as t,g as n}from"./iframe-_9YlafCr.js";import{A as r}from"./action-form-CJqcUdku.js";import"./preload-helper-Dp1pzeXC.js";import"./DropdownField-ACTuDJFj.js";import"./debounce-BfdW6jiz.js";import"./useOsdkClient-DugCV1Jh.js";import"./index-BfZ7BIaf.js";import"./Input-B_fnG3Vc.js";import"./useBaseUiId-D-8XVTg2.js";import"./useControlled-BdcuaOkM.js";import"./index-DIog01LX.js";import"./index-DNJvNqQL.js";import"./isObject-SrfzQbVs.js";import"./InternalBackdrop-CsGmrjwG.js";import"./composite-B3EEdu-D.js";import"./index-BakLKG99.js";import"./getDisabledMountTransitionStyles-DZwz930I.js";import"./ToolbarRootContext-BvwX_Pt8.js";import"./tick-CFfbGJF6.js";import"./svgIconContainer--y7ZeGKv.js";import"./small-cross-OYYk08nU.js";import"./search-0XIiHjxa.js";import"./cross-B125yZV8.js";import"./useValueChanged-CBaTlyFq.js";import"./getPseudoElementBounds-CjjwHwg5.js";import"./CompositeItem-DW1q3vob.js";import"./makeExternalStore-CDyMTORk.js";import"./BaseForm-Dd8xLiJC.js";import"./ActionButton-CUGmDrNW.js";import"./Button-C98CyIMt.js";import"./SkeletonBar-CUvmqA7b.js";import"./Tooltip-DinPo1CO.js";import"./info-sign-BxCWE5Rz.js";import"./chevron-up-BG5jwSpO.js";import"./chevron-down-DxrxOWhu.js";import"./useEventCallback-DJBlLW-f.js";import"./iconLoader-DonJEDET.js";import"./Switch-BS1RE6ev.js";import"./CompositeRoot-BZ1cLwFB.js";import"./TimePicker-D6JOgLnx.js";import"./CollapsiblePanel-B3fgQFhP.js";import"./error-DDBbGTuS.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-ASK7qsZD.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
