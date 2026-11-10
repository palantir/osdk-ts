import{j as t,g as n}from"./iframe-A4y6o7Ie.js";import{A as r}from"./action-form-BlJ4ZWTS.js";import"./preload-helper-BzztgknT.js";import"./DropdownField-CmRhweZ6.js";import"./debounce-k7ATts_Q.js";import"./useOsdkClient-eRrz4tDs.js";import"./index-u7v7sD8l.js";import"./Input-8Z1nJkFY.js";import"./useBaseUiId-DE1tY3Ft.js";import"./useControlled-C-FlvKxX.js";import"./index-C8GSd3VQ.js";import"./index-Coz2by3h.js";import"./isObject-CFZ51c-t.js";import"./InternalBackdrop-CFKIYKn-.js";import"./composite-Cae9SV4u.js";import"./index-2Ob0EkkI.js";import"./getDisabledMountTransitionStyles-Yf-KGouk.js";import"./ToolbarRootContext-BQWxRNLz.js";import"./tick-BY6ZJkTy.js";import"./svgIconContainer-hodslvqS.js";import"./small-cross-9cmVXTN9.js";import"./search-BJw96kDe.js";import"./cross-BiOP9WPq.js";import"./useValueChanged-GBBSiWne.js";import"./getPseudoElementBounds-WLqzanIA.js";import"./CompositeItem-1bj7m8dY.js";import"./makeExternalStore-i5MDKYGm.js";import"./BaseForm-C8y6_MPk.js";import"./ActionButton-D8kAp191.js";import"./Button-CpcDAbH0.js";import"./SkeletonBar-DGU8QXrV.js";import"./Tooltip-BAM2O2Bl.js";import"./info-sign-DlH_fzQ-.js";import"./chevron-up-D5jf88VI.js";import"./chevron-down-DaeYHOS7.js";import"./useEventCallback-jK9BYgZA.js";import"./iconLoader-BhdsLtRd.js";import"./Switch-WBw_4Dhj.js";import"./CompositeRoot-SxFpmTzI.js";import"./TimePicker-eMu_qbhy.js";import"./CollapsiblePanel-5jZaWXpI.js";import"./error-D67R2Dnx.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DS1Us_TM.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
