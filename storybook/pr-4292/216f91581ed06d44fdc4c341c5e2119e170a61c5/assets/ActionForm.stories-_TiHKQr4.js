import{j as t,g as n}from"./iframe-BJLBRZOh.js";import{A as r}from"./action-form-SDMqAwS-.js";import"./preload-helper-BwUp_7F1.js";import"./DropdownField-DLWbrKeC.js";import"./debounce-lfKLdo1S.js";import"./useOsdkClient-BnXpdimb.js";import"./index-C9_BYSi8.js";import"./Input-DotRyYSg.js";import"./useBaseUiId-LHwOB3kw.js";import"./useControlled-DvCQBOjX.js";import"./index-MgR6vtA5.js";import"./index-Cf7wbzeY.js";import"./PopoverPopup-Cbo8QQ1w.js";import"./InternalBackdrop-Bg95Crdb.js";import"./composite-BxFzj_3L.js";import"./index-DsPo5D0P.js";import"./getDisabledMountTransitionStyles-CMTlxnVD.js";import"./ToolbarRootContext-DhgC0mq4.js";import"./tick-G0_utWJZ.js";import"./svgIconContainer-CQ7lEg_v.js";import"./small-cross-s83LmiPv.js";import"./search-lm4u23Jr.js";import"./cross-DYYKBVG2.js";import"./useValueChanged-DKvkRZw_.js";import"./getPseudoElementBounds-GUEr2WJt.js";import"./CompositeItem-B-vP8lxH.js";import"./makeExternalStore-BWhFJ2a3.js";import"./BaseForm-D3z-BpHx.js";import"./ActionButton-DfBkhzDx.js";import"./Button-B1QFNCxV.js";import"./SkeletonBar-CA0TLWsN.js";import"./Tooltip-BYFoA5Qd.js";import"./info-sign-Z7t7JgD9.js";import"./chevron-up-C0uzKY6c.js";import"./chevron-down-PUEKZFzz.js";import"./useEventCallback-D_IWJpWQ.js";import"./iconLoader-o_zOqWUN.js";import"./Switch-CgmgrK0l.js";import"./CompositeRoot-CtmknFFC.js";import"./TimePicker-CoGnE7-1.js";import"./CollapsiblePanel-DeNvoW95.js";import"./error-RXBYB8o8.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CUH6WGya.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
