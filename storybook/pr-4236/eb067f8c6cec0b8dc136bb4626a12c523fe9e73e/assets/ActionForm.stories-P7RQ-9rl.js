import{j as t,g as n}from"./iframe-BGoY5mFC.js";import{A as r}from"./action-form-gF336hr8.js";import"./preload-helper-DsvzwfCi.js";import"./DropdownField-nznVdv8m.js";import"./debounce-COVFQzqA.js";import"./useOsdkClient-9nkt6SOH.js";import"./index-DnfiKoHw.js";import"./Input-D9S9buqu.js";import"./useBaseUiId-CIYnZ7Oo.js";import"./useControlled-Cqb7ClaQ.js";import"./index-B6V6F-VV.js";import"./index-DYEd7rlA.js";import"./PopoverPopup-SiLT4RMM.js";import"./InternalBackdrop-Cuwv9baZ.js";import"./composite-DKhm2DCj.js";import"./index-BdsorHI7.js";import"./getDisabledMountTransitionStyles-C7fH5JXd.js";import"./ToolbarRootContext-DUxALj_T.js";import"./tick-DIaShr09.js";import"./svgIconContainer-BX-wZNF4.js";import"./small-cross-CAVitq02.js";import"./search-Du0qzm2Q.js";import"./cross-BtqJOxEL.js";import"./useValueChanged-U8j9sHFt.js";import"./getPseudoElementBounds-ALTzwxqv.js";import"./CompositeItem-2fAyt8Be.js";import"./makeExternalStore-BltVU3hB.js";import"./BaseForm-A_c0vPUq.js";import"./ActionButton-BYefn9m4.js";import"./Button-CFNLbf5u.js";import"./SkeletonBar-BJdY69_4.js";import"./Tooltip-CaSp1gFC.js";import"./info-sign-CUGFWdKE.js";import"./chevron-up-CzoLGspj.js";import"./chevron-down-CCx6Nv0U.js";import"./useEventCallback-B7XLSD-1.js";import"./iconLoader-ChdKKbFh.js";import"./Switch-DAhzneY_.js";import"./CompositeRoot-BIQInV-N.js";import"./TimePicker-BbkQERcG.js";import"./CollapsiblePanel-_2hoyG7n.js";import"./error-Brajw6PY.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DBjKwuY0.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
