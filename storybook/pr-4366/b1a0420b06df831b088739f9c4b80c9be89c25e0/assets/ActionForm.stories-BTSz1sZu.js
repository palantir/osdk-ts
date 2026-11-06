import{j as t,g as n}from"./iframe-CNCsodpO.js";import{A as r}from"./action-form-DGzZJBhp.js";import"./preload-helper-BcSdXRr8.js";import"./DropdownField-ChmGLrin.js";import"./debounce-BN80GkFI.js";import"./useOsdkClient-D5sei-fs.js";import"./index-DZaiIimE.js";import"./Input-DEq1aCXP.js";import"./useBaseUiId-BM8If8HJ.js";import"./useControlled-jyzXrKzG.js";import"./index-JERw882y.js";import"./index-BiV4_PIL.js";import"./isObject-BeJ3unj3.js";import"./InternalBackdrop-DpvX0-2J.js";import"./composite-D-lHYX2y.js";import"./index-DnBAC0DA.js";import"./getDisabledMountTransitionStyles-CZyt8PVf.js";import"./ToolbarRootContext-D2snF5qH.js";import"./tick-B29x5y3C.js";import"./svgIconContainer-D0BYcghd.js";import"./small-cross-bytaAr9i.js";import"./search-BLGSqUK3.js";import"./cross-ByI78NKq.js";import"./useValueChanged-B79ahhhf.js";import"./getPseudoElementBounds-CBt4F6dS.js";import"./CompositeItem-CznsiIYk.js";import"./makeExternalStore-MQ-cLLpt.js";import"./BaseForm-BN8YUIq2.js";import"./ActionButton-DJLD6pzf.js";import"./Button-DdjGWYgj.js";import"./SkeletonBar-CtqMhpLq.js";import"./Tooltip-A2wRUbEy.js";import"./info-sign-f9ps-tLY.js";import"./chevron-up-CRWaAUiT.js";import"./chevron-down-QtQgwZHW.js";import"./useEventCallback-BC6LGbHR.js";import"./iconLoader-CpxeLNTm.js";import"./Switch-CXgG8ya2.js";import"./CompositeRoot-oaJcIeV8.js";import"./TimePicker-CDNIYCep.js";import"./CollapsiblePanel-Bey-NPEU.js";import"./error-vSyclIj9.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DJIl7LC3.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
