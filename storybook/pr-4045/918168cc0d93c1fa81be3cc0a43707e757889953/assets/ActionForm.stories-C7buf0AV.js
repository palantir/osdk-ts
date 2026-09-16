import{j as t,g as n}from"./iframe-BAp-mBFg.js";import{A as r}from"./action-form-o4nQ3d13.js";import"./preload-helper-DMA-8k7h.js";import"./DropdownField-ClNc4bFA.js";import"./debounce-Cb4zQ-Dj.js";import"./useOsdkClient-CWsVjcHT.js";import"./index-BL8Ey2sj.js";import"./Input-CAD3JQQ8.js";import"./useBaseUiId-CLc976mR.js";import"./useControlled-DqAef5Et.js";import"./index-bbZZKUgK.js";import"./index-CZnpWueQ.js";import"./PopoverPopup-BjqCWmO1.js";import"./InternalBackdrop-BMvkPGPo.js";import"./composite-ziK8MZ0d.js";import"./index-r6qGL197.js";import"./getDisabledMountTransitionStyles-F5l8rP_A.js";import"./ToolbarRootContext-Ul6dl8O6.js";import"./tick-DsIbBRWu.js";import"./svgIconContainer-CBRcPR9-.js";import"./small-cross-DtUlhkvJ.js";import"./search-CXHMKnff.js";import"./cross-YEQVvPJ0.js";import"./useValueChanged-Bu3JV_v0.js";import"./getPseudoElementBounds-rnzBkK8G.js";import"./CompositeItem-DuZe3uzk.js";import"./makeExternalStore-Ct8XmniK.js";import"./BaseForm-QRWeafUo.js";import"./ActionButton-CwoDW7qs.js";import"./Button-jiVV_CtX.js";import"./SkeletonBar-CE7RHls9.js";import"./Tooltip-CKf84lvP.js";import"./info-sign-6omRPxqx.js";import"./chevron-up-C64on9e6.js";import"./chevron-down-DRRMSp6v.js";import"./useEventCallback-DsNDBn2R.js";import"./iconLoader-DreOf_3C.js";import"./Switch-Ca0LX9O9.js";import"./CompositeRoot-Cm7-hfoe.js";import"./TimePicker-CdbZUsEc.js";import"./CollapsiblePanel-DsuV6JMN.js";import"./error-WBAOjD-R.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BuxsjMHL.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
