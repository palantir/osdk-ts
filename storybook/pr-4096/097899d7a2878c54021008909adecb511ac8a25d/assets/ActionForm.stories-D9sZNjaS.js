import{j as t,g as n}from"./iframe-BDbu9q2A.js";import{A as r}from"./action-form-BlBrAec4.js";import"./preload-helper-D6UvTfT_.js";import"./DropdownField-DE_NmpmO.js";import"./debounce-C0l7oIGH.js";import"./useOsdkClient-BZtGer6H.js";import"./index-DEdyH3XD.js";import"./Input-D0XLj4En.js";import"./useBaseUiId-CtmE4PNK.js";import"./useControlled-BgF6R6qa.js";import"./index-pcLxGNcq.js";import"./index-D3cIaVh4.js";import"./PopoverPopup--CBugPnx.js";import"./InternalBackdrop-Dy4GWDNn.js";import"./composite-qafLk_f6.js";import"./index-xTMwd6_8.js";import"./getDisabledMountTransitionStyles-B6rpAzbi.js";import"./ToolbarRootContext-BVuL7AT2.js";import"./tick-pXXOgXsW.js";import"./svgIconContainer-BgjPZfOH.js";import"./small-cross-ByEHRRHU.js";import"./search-0NZlkEeX.js";import"./cross-Bo4wpdXT.js";import"./useValueChanged-CHtKwLX1.js";import"./getPseudoElementBounds-hadpdZ34.js";import"./CompositeItem-C6O1ODqo.js";import"./makeExternalStore-BESDrPLk.js";import"./BaseForm-DNdHSGaq.js";import"./ActionButton-C9OU-BMe.js";import"./Button-_DMppLDt.js";import"./SkeletonBar-M79YPoFw.js";import"./Tooltip-lyyHm0PB.js";import"./info-sign-3Rh-6sMa.js";import"./chevron-up-BED3RZzI.js";import"./chevron-down-CbFUQfJ_.js";import"./useEventCallback-DUE__rea.js";import"./iconLoader-DewLY0cw.js";import"./Switch-Be5FmYl-.js";import"./CompositeRoot-CD7yt0Kv.js";import"./TimePicker-CYP7BSaQ.js";import"./CollapsiblePanel-DZrk-vCV.js";import"./error-fH6ihPoO.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-B5onp4Cc.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
