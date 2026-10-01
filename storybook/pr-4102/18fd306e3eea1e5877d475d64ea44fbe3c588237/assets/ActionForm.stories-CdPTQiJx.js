import{j as t,g as n}from"./iframe-B30VXZ-6.js";import{A as r}from"./action-form-DuaGrkxr.js";import"./preload-helper-ChWHhmMQ.js";import"./DropdownField-C7LGxFH_.js";import"./debounce-jCNBE6lD.js";import"./useOsdkClient-CuQp5EFx.js";import"./index-C8WN5xda.js";import"./Input-CUQ6PF3-.js";import"./useBaseUiId-N1dQpqNi.js";import"./useControlled-jMDaMrsG.js";import"./index-BPP2HBPd.js";import"./index-G14MjZBl.js";import"./PopoverPopup-CE8H8wc4.js";import"./InternalBackdrop-g2UdgSpr.js";import"./composite-CL2Urpfy.js";import"./index-DR-P8k5n.js";import"./getDisabledMountTransitionStyles-fWLm1dIh.js";import"./ToolbarRootContext-Dshg5ZnG.js";import"./tick-C3_-7A_u.js";import"./svgIconContainer-CDJpdA9T.js";import"./small-cross-CV5I4AiV.js";import"./search-Mz2TVtVf.js";import"./cross-q0dJk3Qv.js";import"./useValueChanged-3Pjfz6XN.js";import"./getPseudoElementBounds-DqAHYrF9.js";import"./CompositeItem-DXi528OA.js";import"./makeExternalStore-nH4o41kb.js";import"./BaseForm-BsIv4qzE.js";import"./ActionButton-4fvGoYw3.js";import"./Button-Fs0rdLv2.js";import"./SkeletonBar-CoNjpQ5V.js";import"./Tooltip-DH7dVDCh.js";import"./info-sign-D2Nh21xE.js";import"./chevron-up-VpseUvUl.js";import"./chevron-down-DiQ4Q7Kd.js";import"./useEventCallback-Dd-rW-bH.js";import"./iconLoader-CkuA4CMk.js";import"./Switch-BjiGwsNa.js";import"./CompositeRoot-Cm6VUj19.js";import"./TimePicker-lf7q-Nst.js";import"./CollapsiblePanel-DTqM16KR.js";import"./error-Cc1FQeFa.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DEl0Ng20.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
