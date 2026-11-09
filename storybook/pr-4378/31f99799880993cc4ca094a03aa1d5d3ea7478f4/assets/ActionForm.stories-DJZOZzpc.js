import{j as t,g as n}from"./iframe-C-VQV1kk.js";import{A as r}from"./action-form-DAIspuIr.js";import"./preload-helper-DAFvkMcS.js";import"./DropdownField-Gr8cO_hh.js";import"./debounce-BgKrWPP2.js";import"./useOsdkClient-fG21vCjJ.js";import"./index-Br3mcMRO.js";import"./Input-C1vD7nT2.js";import"./useBaseUiId-CDIBpZbW.js";import"./useControlled-BadNojnw.js";import"./index-BAOIGUAP.js";import"./index-DPEqsBnM.js";import"./isObject-IGANmsxM.js";import"./InternalBackdrop-CrKl0Qys.js";import"./composite-GjU-j0CL.js";import"./index-C81NLsPb.js";import"./getDisabledMountTransitionStyles-lRegSDO5.js";import"./ToolbarRootContext-m881A_zR.js";import"./tick-CGn7jNwS.js";import"./svgIconContainer-CJnwzucZ.js";import"./small-cross-DQKRtPL4.js";import"./search-D0wtlqkl.js";import"./cross-B26OHCdD.js";import"./useValueChanged-CTLWVytN.js";import"./getPseudoElementBounds-CaioDmeF.js";import"./CompositeItem-CceR4qkm.js";import"./makeExternalStore-BIjV_Sjd.js";import"./BaseForm-DRssv8Et.js";import"./ActionButton-BbdrlCMk.js";import"./Button-BLvWajsq.js";import"./SkeletonBar-BkJDoVVR.js";import"./Tooltip-yfSghmxo.js";import"./info-sign-D6Ik6lZ1.js";import"./chevron-up-BpWh1ibP.js";import"./chevron-down-CPUFW1cF.js";import"./useEventCallback-CrzZq1A8.js";import"./iconLoader-DjFI88ZQ.js";import"./Switch-COrOBsKj.js";import"./CompositeRoot-DxGq_URE.js";import"./TimePicker-CzKwlGm1.js";import"./CollapsiblePanel-DF08KEFn.js";import"./error-5dXKQyhU.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-c7bdsNh3.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
