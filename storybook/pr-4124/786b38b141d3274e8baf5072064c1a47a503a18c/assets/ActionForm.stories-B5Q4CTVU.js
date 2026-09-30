import{j as t,g as n}from"./iframe-UxLT7lYy.js";import{A as r}from"./action-form-CA8HoGBY.js";import"./preload-helper-CV6iJ-wL.js";import"./DropdownField-D7GJRPWS.js";import"./debounce-BO8okfFM.js";import"./useOsdkClient-Da_K8BYI.js";import"./index-CaLIOjRM.js";import"./Input-DHvCRjgv.js";import"./useBaseUiId-DR0pgCNJ.js";import"./useControlled-CDHE3Jck.js";import"./index-5Zs5CZ2c.js";import"./index-C8h5tRSe.js";import"./PopoverPopup-D67Wkzxz.js";import"./InternalBackdrop-uyTw1RdA.js";import"./composite-BYQddcpi.js";import"./index-_o97Q59k.js";import"./getDisabledMountTransitionStyles-CHMZ4_kz.js";import"./ToolbarRootContext-19oVc1QJ.js";import"./tick-BPmR5WxH.js";import"./svgIconContainer-HqUabHbJ.js";import"./small-cross-Bw-OCkf4.js";import"./search-K5dECyKJ.js";import"./cross-gbTOR5Si.js";import"./useValueChanged-CzG0v9jK.js";import"./getPseudoElementBounds-x7euGpS2.js";import"./CompositeItem-Kvq0UPS2.js";import"./makeExternalStore-D1qwl-gG.js";import"./BaseForm-BVxsCuUT.js";import"./ActionButton-C661vjkS.js";import"./Button-DZCJ8vSD.js";import"./SkeletonBar-B6QGYhFN.js";import"./Tooltip-7LzxkM7s.js";import"./info-sign-cybEN1w6.js";import"./chevron-up-5xzA1rC0.js";import"./chevron-down-CNsNwb1i.js";import"./useEventCallback-DjbC_S6q.js";import"./iconLoader-BcraqDQ4.js";import"./Switch-DptGtFtc.js";import"./CompositeRoot-Dn07G7-y.js";import"./TimePicker-ClfmWbX1.js";import"./CollapsiblePanel-BbBRdFzC.js";import"./error-CvnQXRAs.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CgTr75Ie.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
