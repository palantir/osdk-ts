import{j as t,g as n}from"./iframe-DyxaUq2K.js";import{A as r}from"./action-form-CkIfvSZ-.js";import"./preload-helper-RXXcFWVp.js";import"./DropdownField-7FFksTTF.js";import"./debounce-Dhv4Wot5.js";import"./useOsdkClient-NthVmhh7.js";import"./index-04K8kL6p.js";import"./Input-Ci8-51zi.js";import"./useBaseUiId-B2pmxP6_.js";import"./useControlled--GslnpxD.js";import"./index-CXKzX9X0.js";import"./index-Df5y4IMk.js";import"./PopoverPopup-DXEKH04o.js";import"./InternalBackdrop-BBHbL8SK.js";import"./composite-DNSc_3T9.js";import"./index-DKo2aq1I.js";import"./getDisabledMountTransitionStyles-CKsY1twY.js";import"./ToolbarRootContext-pFU5HeoC.js";import"./tick-BSn6tzcY.js";import"./svgIconContainer-Dx_A2X3i.js";import"./small-cross-DdubBf-L.js";import"./search-Dqp-f9oD.js";import"./cross-DlOxrMTv.js";import"./useValueChanged-vKl7h4vt.js";import"./getPseudoElementBounds-BmT1xLZA.js";import"./CompositeItem-BKwp9a98.js";import"./makeExternalStore-DcK2tIHU.js";import"./BaseForm-D8kr3Le0.js";import"./ActionButton-Dzu9roh2.js";import"./Button-BJP0lB5I.js";import"./SkeletonBar-Bqj4hPxh.js";import"./Tooltip--dIkHBOm.js";import"./info-sign-COkWqZak.js";import"./chevron-up-DTVIHzut.js";import"./chevron-down-DiWP7BJ0.js";import"./useEventCallback-D4ZMCqPC.js";import"./iconLoader-WPaioeXs.js";import"./Switch-BqAMfuif.js";import"./CompositeRoot-D9PLGY3m.js";import"./TimePicker-BPzsXx4u.js";import"./CollapsiblePanel-BQrErOfm.js";import"./error-BkdYgUyU.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-ac55KtkN.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
