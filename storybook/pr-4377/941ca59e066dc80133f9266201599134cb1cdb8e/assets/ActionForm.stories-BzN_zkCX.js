import{j as t,g as n}from"./iframe-C3GSLy5o.js";import{A as r}from"./action-form-BsiYDoRh.js";import"./preload-helper-D1pMQ95h.js";import"./DropdownField-M-86bao8.js";import"./debounce-BTUnznPP.js";import"./useOsdkClient-C6Bijc8m.js";import"./index-BqbG7XLm.js";import"./Input-C6r5AvcX.js";import"./useBaseUiId-BAyO3Mf6.js";import"./useControlled-Byp-7XUM.js";import"./index-BwMTOFIg.js";import"./index-DXO-Swuq.js";import"./isObject-VV2I263M.js";import"./InternalBackdrop-Dum2xeez.js";import"./composite-BVI_0hxc.js";import"./index-CZROecO1.js";import"./getDisabledMountTransitionStyles-CmNfXk7f.js";import"./ToolbarRootContext-DHSDX_M4.js";import"./tick-J5BevPob.js";import"./svgIconContainer-F6eoLrGz.js";import"./small-cross-DrCyLNki.js";import"./search-DVQaImB8.js";import"./cross-dj-R22cu.js";import"./useValueChanged-CnNP0I2h.js";import"./getPseudoElementBounds-DXbT67tB.js";import"./CompositeItem-BdOQd8fF.js";import"./makeExternalStore-BkjVxrjL.js";import"./BaseForm-rbtlS8qm.js";import"./ActionButton-DhwSIxab.js";import"./Button-BYai770H.js";import"./SkeletonBar-CVOuSg9f.js";import"./Tooltip-BESMOsqJ.js";import"./info-sign-CkQ-FXPN.js";import"./chevron-up-CjxQMRRY.js";import"./chevron-down-CZCskiqb.js";import"./useEventCallback-BJ1Px1w8.js";import"./iconLoader-kHhwgLY6.js";import"./Switch-DBIxoeWu.js";import"./CompositeRoot-CSTc0dWf.js";import"./TimePicker-BsdxBzKm.js";import"./CollapsiblePanel-BqBPvrl-.js";import"./error-73rgwKrP.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BcmXRm6y.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
