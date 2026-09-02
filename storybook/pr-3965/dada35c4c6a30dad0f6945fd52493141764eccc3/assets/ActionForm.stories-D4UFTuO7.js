import{j as t,g as n}from"./iframe-gxyWVbj2.js";import{A as r}from"./action-form-CEmJfJ_-.js";import"./preload-helper-DE7utxpQ.js";import"./DropdownField-DBl_-PYC.js";import"./debounce-CCj_OJPJ.js";import"./useOsdkClient-CUfX5Tns.js";import"./index-QxbQkIyi.js";import"./Input-DTxeHNru.js";import"./useBaseUiId-DviQ__RH.js";import"./useControlled-BNWlhOxQ.js";import"./index-BTPrH0w0.js";import"./index-NWW1BWCJ.js";import"./PopoverPopup--JzGS9uQ.js";import"./InternalBackdrop-DwvYd_J6.js";import"./composite-iqOIimru.js";import"./index-CEVBBPUN.js";import"./getDisabledMountTransitionStyles-rpYg7a2m.js";import"./ToolbarRootContext-BbmcYQfJ.js";import"./tick-CzmTrzOp.js";import"./svgIconContainer-DKbE6d31.js";import"./small-cross-D8cOGc_K.js";import"./search-CyP3n12E.js";import"./cross-VeIfZqt8.js";import"./useValueChanged-KXUkRbwe.js";import"./getPseudoElementBounds-BU1znkpG.js";import"./CompositeItem-CfmR6sON.js";import"./makeExternalStore-CU05zhJ7.js";import"./BaseForm-B7LfB7s1.js";import"./ActionButton-DZr01Jaf.js";import"./Button-B4AYvQgI.js";import"./SkeletonBar-B50ZyoLs.js";import"./Tooltip-Cxy0TAi_.js";import"./info-sign-DKPc7fP2.js";import"./chevron-up-QzZZvBLm.js";import"./chevron-down-D0C-5aC_.js";import"./useEventCallback-26YzMxUe.js";import"./iconLoader-D7jqIFt9.js";import"./CompositeRoot-DjPGXDM5.js";import"./Switch-BZw9CKBX.js";import"./TimePicker-Df2RwW1D.js";import"./CollapsiblePanel-o-2jp67C.js";import"./error-Dq3CHQs2.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DtZ9khmC.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/experimental";

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
        code: \`import { ActionForm } from "@osdk/react-components/experimental";

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
