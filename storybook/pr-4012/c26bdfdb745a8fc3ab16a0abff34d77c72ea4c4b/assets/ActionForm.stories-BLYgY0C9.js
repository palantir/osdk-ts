import{j as t,g as n}from"./iframe-D6uAV5TU.js";import{A as r}from"./action-form-CO-BNs3B.js";import"./preload-helper-DgVxICfb.js";import"./DropdownField-Dza8gOA9.js";import"./debounce-Cf7XEzCl.js";import"./useOsdkClient-o-471cIP.js";import"./index-CY-pWkIE.js";import"./Input-DgviHqP4.js";import"./useBaseUiId-Cm0jnEPf.js";import"./useControlled-CNCN21-B.js";import"./index-bpYghXGo.js";import"./index-JG_tkU8g.js";import"./PopoverPopup-CoRD32O0.js";import"./InternalBackdrop-NL9DIBlB.js";import"./composite-BEzxj37g.js";import"./index-ByXvVmI6.js";import"./getDisabledMountTransitionStyles-C4AOWP0V.js";import"./ToolbarRootContext-Cj-ulQf0.js";import"./tick-CJVi8Uyj.js";import"./svgIconContainer-to51jCpQ.js";import"./small-cross-BlyS8cCD.js";import"./search-BkhC58qY.js";import"./cross-C1qbDIAe.js";import"./useValueChanged-C6SY9C02.js";import"./getPseudoElementBounds-CI3G1dnv.js";import"./CompositeItem-BovdAW9J.js";import"./makeExternalStore-DWEUTaD3.js";import"./BaseForm-Ci2U_xqL.js";import"./ActionButton-Dm6zTNT-.js";import"./Button-D1LcAXjL.js";import"./SkeletonBar-DKDnh7uJ.js";import"./Tooltip-BDskuAWO.js";import"./info-sign-lSSaWxY2.js";import"./chevron-up-BkLRKk8D.js";import"./chevron-down-y6Dx4H3i.js";import"./useEventCallback-DVHh9L01.js";import"./iconLoader-CmF8yJdg.js";import"./CompositeRoot-jDpLqAnB.js";import"./Switch-eI3keBsd.js";import"./TimePicker-BiMtE4-I.js";import"./CollapsiblePanel-DQG7EOif.js";import"./error-AQL_lZl-.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-C88Xzccf.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
