import{j as t,g as n}from"./iframe-BhDMRuCM.js";import{A as r}from"./action-form-Dd7dncvW.js";import"./preload-helper-L4oI3E3x.js";import"./DropdownField-BgP4Cuvb.js";import"./debounce-B52DysiE.js";import"./useOsdkClient-BjgYjtiw.js";import"./index-DBdWVfZr.js";import"./Input-DwhP00hs.js";import"./useBaseUiId-DsydWgv8.js";import"./useControlled-BwLkCqLj.js";import"./index-DO7zbhCL.js";import"./index-DbLkd8ga.js";import"./isObject-B1y-rg-V.js";import"./InternalBackdrop-BhWEQZmU.js";import"./composite-D7bHzIxr.js";import"./index-DqjKS_CZ.js";import"./getDisabledMountTransitionStyles-CM0ztPZS.js";import"./ToolbarRootContext-DcA5VE7P.js";import"./tick-Dp3tm096.js";import"./svgIconContainer-DvnFME-C.js";import"./small-cross-CD_34XFY.js";import"./search-B2ohHoFm.js";import"./cross-B8g5lC7t.js";import"./useValueChanged-BkQAOqLx.js";import"./getPseudoElementBounds-BmSKtFW_.js";import"./CompositeItem-BUYvwABx.js";import"./makeExternalStore-Bbk8Brxu.js";import"./BaseForm-BVrB1Xkr.js";import"./ActionButton-CeCQyXSo.js";import"./Button-CqxlV9z0.js";import"./SkeletonBar-BtXVrziY.js";import"./Tooltip-okrVPvXT.js";import"./info-sign-HW1onVeY.js";import"./chevron-up-Bo_U_gN-.js";import"./chevron-down-CJ-s6D7k.js";import"./useEventCallback-CyRRrF3x.js";import"./iconLoader-BgzkdVaf.js";import"./Switch-cLL_nO_p.js";import"./CompositeRoot-YI5tx5AI.js";import"./TimePicker-DfdX3LC_.js";import"./CollapsiblePanel-4GkiMrTG.js";import"./error-Dy988hUQ.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BI0vBwDP.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
