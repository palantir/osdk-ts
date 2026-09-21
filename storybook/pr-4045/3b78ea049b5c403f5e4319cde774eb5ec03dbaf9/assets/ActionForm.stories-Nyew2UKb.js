import{j as t,g as n}from"./iframe-DGxn_FfA.js";import{A as r}from"./action-form-RT1oTnCh.js";import"./preload-helper-K_1Peegk.js";import"./DropdownField-CN6UkTVW.js";import"./debounce-CkaWxo8p.js";import"./useOsdkClient-qyzcppCx.js";import"./index-DRUA9-Xo.js";import"./Input-vHhrLUUa.js";import"./useBaseUiId-CmBmMESo.js";import"./useControlled-SGdv5sh_.js";import"./index-Cn-ogudX.js";import"./index-C09U9z-b.js";import"./PopoverPopup-D6mETjM4.js";import"./InternalBackdrop-GnU91IOM.js";import"./composite-DsQ0vKV8.js";import"./index-BM9tlzVi.js";import"./getDisabledMountTransitionStyles-Bg4xxQbV.js";import"./ToolbarRootContext-BvwYmpzB.js";import"./tick-Ddjt3-Xj.js";import"./svgIconContainer-BTT_iTBU.js";import"./small-cross-kJ_hIE7y.js";import"./search-D7bJBEOM.js";import"./cross-BbLFpAfM.js";import"./useValueChanged-DwzXRX5T.js";import"./getPseudoElementBounds-C1aLo5q2.js";import"./CompositeItem-CqRwnn1g.js";import"./makeExternalStore-Bpd5p4CZ.js";import"./BaseForm-vrSbGl39.js";import"./ActionButton-Can6ePob.js";import"./Button-dnprDbN8.js";import"./SkeletonBar-CDppLlgJ.js";import"./Tooltip-Jif4AIdv.js";import"./info-sign-OolV7yHQ.js";import"./chevron-up-CBn2RU_T.js";import"./chevron-down-kbFfOEdC.js";import"./useEventCallback-DuO9QBbh.js";import"./iconLoader-CHQlsiFD.js";import"./Switch-DjkBpXXP.js";import"./CompositeRoot-BWWmQ5xh.js";import"./TimePicker-CPUWjKNe.js";import"./CollapsiblePanel-DkNf_69s.js";import"./error-GM-hvFd6.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-S3mu6MhE.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
