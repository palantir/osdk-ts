import{j as t,g as n}from"./iframe-BbienW_k.js";import{A as r}from"./action-form-B7F_JITK.js";import"./preload-helper-BwYT6GBt.js";import"./DropdownField-DWMcGlhL.js";import"./debounce-CfOEKZQ8.js";import"./useOsdkClient-Ba-MyRxU.js";import"./index-BtVRX5ik.js";import"./Input-C02zCytb.js";import"./useBaseUiId-mGNAwuSb.js";import"./useControlled-BbPCoZLB.js";import"./index-_tXk15dP.js";import"./index-CBwDIYK2.js";import"./PopoverPopup-9hgtmzo1.js";import"./InternalBackdrop-BGghe2gX.js";import"./composite-DehmI49I.js";import"./index-DHabHcMF.js";import"./getDisabledMountTransitionStyles-DNQX_6BS.js";import"./ToolbarRootContext-tNJYHhh0.js";import"./tick-DXkGn8fU.js";import"./svgIconContainer-9jKJCEtA.js";import"./small-cross-Bbjb07uO.js";import"./search-DtpodeH8.js";import"./cross-D79BwPuA.js";import"./useValueChanged-B86iGZyF.js";import"./getPseudoElementBounds-B22wLb31.js";import"./CompositeItem-BtZO_Q27.js";import"./makeExternalStore-D54vu3Pa.js";import"./BaseForm-DoUj9Vm9.js";import"./ActionButton-CH9BHHmi.js";import"./Button-DgQWdRpI.js";import"./SkeletonBar-CNiR4LJi.js";import"./Tooltip-CfUkHW1C.js";import"./info-sign-BXbUvqhW.js";import"./chevron-up-BiA9DoDj.js";import"./chevron-down-BvQtKUUh.js";import"./useEventCallback-CRCaMKxg.js";import"./iconLoader-B9Feomew.js";import"./CompositeRoot-B-dOwwJo.js";import"./Switch-B2TtHBqB.js";import"./TimePicker-DDmOus9k.js";import"./CollapsiblePanel-CzWLrbRF.js";import"./error-Re8NGQni.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-dw5qmcGp.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/experimental";

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
