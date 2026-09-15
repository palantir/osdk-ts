import{j as t,g as n}from"./iframe-DxvN0M7K.js";import{A as r}from"./action-form-BjIhfdcN.js";import"./preload-helper-xzue2qXM.js";import"./DropdownField-CkxYhY96.js";import"./debounce-HGjeRSVo.js";import"./useOsdkClient-BrNoGZi-.js";import"./index-DH5yemLr.js";import"./Input-B5Cdt3Jn.js";import"./useBaseUiId-6JQrMuoN.js";import"./useControlled-BsKyqVLJ.js";import"./index-D6YwkaJN.js";import"./index-CGz3Zj9V.js";import"./PopoverPopup-D_lg3L_T.js";import"./InternalBackdrop-DQMzxTt2.js";import"./composite-BeC4x7c_.js";import"./index-Je9DGe3Q.js";import"./getDisabledMountTransitionStyles-CQnjWCro.js";import"./ToolbarRootContext-8cNXmzWC.js";import"./tick-C0cXmT53.js";import"./svgIconContainer-C1vr-TwX.js";import"./small-cross-loFzvmde.js";import"./search-CWcacXbv.js";import"./cross-Jl3VvOEN.js";import"./useValueChanged-znjzpbIG.js";import"./getPseudoElementBounds-1Yq4M1ZX.js";import"./CompositeItem-BM5p6vye.js";import"./makeExternalStore-BQakVy-m.js";import"./BaseForm-CFWAUrnf.js";import"./ActionButton-DJcBANww.js";import"./Button-DeN2HtXI.js";import"./SkeletonBar-CSNEJW0Z.js";import"./Tooltip-3Unl917J.js";import"./info-sign-Bz7i9RJt.js";import"./chevron-up-C_Q4WwNI.js";import"./chevron-down-B07rpeLd.js";import"./useEventCallback-BarKJY3w.js";import"./iconLoader-DDT4m_p-.js";import"./CompositeRoot-B0vxQSqS.js";import"./Switch-JCw0IVE3.js";import"./TimePicker-C9j7Hj54.js";import"./CollapsiblePanel-DcmIoP-V.js";import"./error-Cr5iHDkF.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BeV-dE9b.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
