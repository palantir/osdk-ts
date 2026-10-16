import{j as t,g as n}from"./iframe-DMhUx0Fg.js";import{A as r}from"./action-form-C6_xMzoy.js";import"./preload-helper-Cihlk8Ge.js";import"./DropdownField-ClZOcdQf.js";import"./debounce-BwonvSik.js";import"./useOsdkClient-DJ0k-ije.js";import"./index-Cml4Y89r.js";import"./Input-CMBfU9Th.js";import"./useBaseUiId-Cn1m1c-i.js";import"./useControlled-BnYANE82.js";import"./index-BdVR8K9f.js";import"./index-DHMpAz6_.js";import"./PopoverPopup-ve8SdMle.js";import"./InternalBackdrop-TfWeUkH5.js";import"./composite-ElTKsJn6.js";import"./index-DH75cEIM.js";import"./getDisabledMountTransitionStyles-CtQRwei1.js";import"./ToolbarRootContext-D6p48e5t.js";import"./tick-J71CIBzU.js";import"./svgIconContainer-BbR8LDbO.js";import"./small-cross-BYryOWLr.js";import"./search-BhCWHTId.js";import"./cross-B04SzZ9a.js";import"./useValueChanged-BVb2ZiR8.js";import"./getPseudoElementBounds-BUMieu6k.js";import"./CompositeItem-CruspLcZ.js";import"./makeExternalStore-CWOCJrTj.js";import"./BaseForm-DsjzOZOj.js";import"./ActionButton-BPaPgLh0.js";import"./Button-BVqDK7_w.js";import"./SkeletonBar--G3RXL9q.js";import"./Tooltip-Bker_XsQ.js";import"./info-sign-D0svgxof.js";import"./chevron-up-DDcEa6jV.js";import"./chevron-down-DfsmE1o_.js";import"./useEventCallback-D5w6D-ry.js";import"./iconLoader-oZHoMxXj.js";import"./Switch-Dnn2rhhE.js";import"./CompositeRoot-B48OK5Gf.js";import"./TimePicker-C1ZLn7VQ.js";import"./CollapsiblePanel-soHfpF_t.js";import"./error-BGNhUAbf.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DGk-RlXg.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
