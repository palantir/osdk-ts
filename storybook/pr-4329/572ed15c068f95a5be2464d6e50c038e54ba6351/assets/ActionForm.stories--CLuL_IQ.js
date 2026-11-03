import{j as t,g as n}from"./iframe-WKt3pp3u.js";import{A as r}from"./action-form-dj1SUGIG.js";import"./preload-helper-C-2N1dom.js";import"./DropdownField-CYa_9fL1.js";import"./debounce-JIbAFHw4.js";import"./useOsdkClient-DCOM6Bqd.js";import"./index-Cn0NPQc9.js";import"./Input-Caz2RzvD.js";import"./useBaseUiId-KSUwx5Md.js";import"./useControlled-CFMpFbMm.js";import"./index-CyjL2alN.js";import"./index-CK4IlmQS.js";import"./PopoverPopup-ZW8wbg7e.js";import"./InternalBackdrop-BtH0Ysif.js";import"./composite-B4lF1Gsb.js";import"./index-DafvFaXh.js";import"./getDisabledMountTransitionStyles-CHcwnca1.js";import"./ToolbarRootContext-BEEAtmxq.js";import"./tick-C6QdtsXi.js";import"./svgIconContainer-Dd6XoJmG.js";import"./small-cross-DAIM-tYh.js";import"./search-Dn1087-G.js";import"./cross-4ZdF9rso.js";import"./useValueChanged-C-7bhyhT.js";import"./getPseudoElementBounds-Bwny5PcZ.js";import"./CompositeItem-Bj3DFZfQ.js";import"./makeExternalStore-S8Y7W4h4.js";import"./BaseForm-Bhw-AxBx.js";import"./ActionButton-DoHs3WwA.js";import"./Button-cNgJCMyB.js";import"./SkeletonBar-CsOoAcCP.js";import"./Tooltip-gNTiaPxS.js";import"./info-sign-D5IwdQzQ.js";import"./chevron-up-Ov-XdWcZ.js";import"./chevron-down-sDl6Q2Tv.js";import"./useEventCallback-BvXzRC06.js";import"./iconLoader-BckUhY85.js";import"./Switch-BOxvt3C2.js";import"./CompositeRoot-THw1aWyv.js";import"./TimePicker-Dp5u0KWz.js";import"./CollapsiblePanel-Dr3s6TPy.js";import"./error-Cfg0wGHf.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-D4VhY3gv.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
