import{j as t,g as n}from"./iframe-ByUPzMo-.js";import{A as r}from"./action-form-By7Vye3N.js";import"./preload-helper-DMW2vH7D.js";import"./DropdownField-BjT07YJh.js";import"./debounce-Btut_D36.js";import"./useOsdkClient-CfYYGIxK.js";import"./index-DDBwTcU5.js";import"./Input-sjbB4Aiw.js";import"./useBaseUiId-uUDoNX5q.js";import"./useControlled-BkbhbtR9.js";import"./index-DckN6Z75.js";import"./index-B7ZeWuUK.js";import"./PopoverPopup-CctEYuVT.js";import"./InternalBackdrop-Dv-N3MX6.js";import"./composite-s38ZpXCI.js";import"./index-jWoVPMOf.js";import"./getDisabledMountTransitionStyles-CsaRuwLM.js";import"./ToolbarRootContext-D7Mh8yi7.js";import"./tick-CwqvEqLb.js";import"./svgIconContainer-BoZ4WTrV.js";import"./small-cross-BFKLMMPg.js";import"./search-BAYfazpa.js";import"./cross-DJjNSarb.js";import"./useValueChanged-qVZGkxmZ.js";import"./getPseudoElementBounds-CYVG0CpK.js";import"./CompositeItem-Cyx3uAMD.js";import"./makeExternalStore-BA6_-t1C.js";import"./BaseForm-vyPz4RyK.js";import"./ActionButton-Bz-AvXIu.js";import"./Button-Psq8nKOy.js";import"./SkeletonBar-DYLnGweB.js";import"./Tooltip-ClovcVQp.js";import"./info-sign-Cf8YJq_d.js";import"./chevron-up-Ds2DUwlK.js";import"./chevron-down-MpADD7bW.js";import"./useEventCallback-vWB41utD.js";import"./iconLoader-iU935ddY.js";import"./CompositeRoot-Dbj_WYpf.js";import"./Switch-DMrlHzhS.js";import"./TimePicker-ClcX9fM2.js";import"./CollapsiblePanel-74XZuXCD.js";import"./error-ByNBHJWq.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DlvIoaDP.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
