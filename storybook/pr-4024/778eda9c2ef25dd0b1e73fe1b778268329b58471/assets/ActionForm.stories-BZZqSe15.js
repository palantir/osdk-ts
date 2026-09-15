import{j as t,g as n}from"./iframe-BCQQ5idH.js";import{A as r}from"./action-form-Dq4kT-b5.js";import"./preload-helper-coqosfEI.js";import"./DropdownField-DO1VI0xx.js";import"./debounce-C1U5cA8k.js";import"./useOsdkClient-B5gZh-Vy.js";import"./index-nevoWaco.js";import"./Input-C6nfWZbz.js";import"./useBaseUiId-DiDvWzye.js";import"./useControlled-Cq_GfurO.js";import"./index-B3YRQCj_.js";import"./index-D04-iFGI.js";import"./PopoverPopup-dla5XZcT.js";import"./InternalBackdrop-N2Ue8An6.js";import"./composite-D0UtEOtq.js";import"./index-BzNe3PgQ.js";import"./getDisabledMountTransitionStyles-BQ29FsW-.js";import"./ToolbarRootContext-BXYKMrbO.js";import"./tick--0MwaCEo.js";import"./svgIconContainer-CKj1NjbI.js";import"./small-cross-BGKOGZvf.js";import"./search-BBu7BPS5.js";import"./cross-CEa64cbV.js";import"./useValueChanged-D3kLtDwA.js";import"./getPseudoElementBounds-Ckqa6CIQ.js";import"./CompositeItem-ldRXr3Bh.js";import"./makeExternalStore-DUkSZpJS.js";import"./BaseForm-B27VZt44.js";import"./ActionButton-DHvPjza2.js";import"./Button-CEig4mHb.js";import"./SkeletonBar-C04_QzCc.js";import"./Tooltip-O_DZ5X_J.js";import"./info-sign-jKlJSsW1.js";import"./chevron-up-Cb3oXQeW.js";import"./chevron-down-DUkETYvc.js";import"./useEventCallback-Ba_k9sT5.js";import"./iconLoader-DEcFh5LD.js";import"./CompositeRoot-Cj-Ji0cN.js";import"./Switch-DCX9yPI-.js";import"./TimePicker-CnxCxIJt.js";import"./CollapsiblePanel-GdXVEA_b.js";import"./error-CJVmwm75.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-SGz3lb0q.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
