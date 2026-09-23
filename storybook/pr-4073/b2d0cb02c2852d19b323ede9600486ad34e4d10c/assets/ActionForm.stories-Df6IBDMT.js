import{j as t,g as n}from"./iframe-ClVzwAwQ.js";import{A as r}from"./action-form-kqDyhoQk.js";import"./preload-helper-Cv11LvJP.js";import"./DropdownField-A48OUsRe.js";import"./debounce-BkQeQk7N.js";import"./useOsdkClient-Dz0dl0jy.js";import"./index-BGl-ufsM.js";import"./Input-BEJWa7gG.js";import"./useBaseUiId-DBp6INKz.js";import"./useControlled-CYJtKTqW.js";import"./index-CY6w5O7H.js";import"./index-CPJZzp1O.js";import"./PopoverPopup-Noi5w6Yr.js";import"./InternalBackdrop-CCEA6-di.js";import"./composite-cy3jdAoe.js";import"./index-Blka6ILz.js";import"./getDisabledMountTransitionStyles-CoM1w8pQ.js";import"./ToolbarRootContext-D3yxcxuQ.js";import"./tick-D0aeUq8y.js";import"./svgIconContainer-Bay1n-zA.js";import"./small-cross-C_AyMX1J.js";import"./search-DY6yvOy6.js";import"./cross-DkZeF945.js";import"./useValueChanged-C8lzD6_j.js";import"./getPseudoElementBounds-DGWwlxa5.js";import"./CompositeItem-B_fSDSC7.js";import"./makeExternalStore-Bgk32_hH.js";import"./BaseForm-CZLYFWmv.js";import"./ActionButton-QCwrftMT.js";import"./Button-D5bJOK4o.js";import"./SkeletonBar-D5O3BqcP.js";import"./Tooltip-8hgn-ueX.js";import"./info-sign-DuPUf5ZM.js";import"./chevron-up-Duc1UKrz.js";import"./chevron-down-UByA3gj5.js";import"./useEventCallback-B9S91Yw2.js";import"./iconLoader-B-WXPkQL.js";import"./Switch-CcQiSTRa.js";import"./CompositeRoot-C-00yf4w.js";import"./TimePicker-tD8Vphk8.js";import"./CollapsiblePanel-CugK17NU.js";import"./error-BmOSQ-Av.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-B7DbvHC0.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
