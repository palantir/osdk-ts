import{j as t,g as n}from"./iframe-CO-y4TdN.js";import{A as r}from"./action-form-D0RjOzTL.js";import"./preload-helper-CjyFmI8K.js";import"./DropdownField-tV31hf4I.js";import"./debounce-NLjoYl0e.js";import"./useOsdkClient-e3M3fG2D.js";import"./index-BvlbGIzZ.js";import"./Input-hfVPciHP.js";import"./useBaseUiId-JbgqorN2.js";import"./useControlled-C5lB0Y_-.js";import"./index-Bpe4fXs9.js";import"./index-CokB0b6k.js";import"./PopoverPopup-CnG3HuBu.js";import"./InternalBackdrop-B_JDnFUv.js";import"./composite-CpRI4cG_.js";import"./index-BYwfC7H9.js";import"./getDisabledMountTransitionStyles-24Mq1L47.js";import"./ToolbarRootContext-DhfbkfjQ.js";import"./tick-D0RcBagt.js";import"./svgIconContainer-CndQfIvO.js";import"./small-cross-CvGBi9-r.js";import"./search-Bc1itZDf.js";import"./cross-C5dLLhyh.js";import"./useValueChanged-DAwmS2z_.js";import"./getPseudoElementBounds-CwTC3_6Z.js";import"./CompositeItem-C9K9ap8i.js";import"./makeExternalStore-DjtvJt2I.js";import"./BaseForm-WdAoJxoT.js";import"./ActionButton-BmIkStKV.js";import"./Button-B8DTN9QH.js";import"./SkeletonBar-BNBMw-sd.js";import"./Tooltip-BmXHzlNq.js";import"./info-sign-DbGwrg4L.js";import"./chevron-up-d0dXiOae.js";import"./chevron-down-DcENhPxj.js";import"./useEventCallback-CnPqTEiA.js";import"./iconLoader-BDuh7kpk.js";import"./CompositeRoot-DnEmFwAJ.js";import"./Switch-DGYvNzPC.js";import"./TimePicker-C0N5wc_W.js";import"./CollapsiblePanel-D-FGJL1V.js";import"./error-CwAmKxgu.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BplgaXU_.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/experimental";

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
