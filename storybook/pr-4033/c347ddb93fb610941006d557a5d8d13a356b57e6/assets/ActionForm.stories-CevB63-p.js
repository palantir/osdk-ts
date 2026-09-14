import{j as t,g as n}from"./iframe-W94gYwuG.js";import{A as r}from"./action-form-BfgZIty9.js";import"./preload-helper-BZdF85c1.js";import"./DropdownField-4fOxRAUh.js";import"./debounce-DXg9Ea7B.js";import"./useOsdkClient-CUKa_SZN.js";import"./index-Cuk5CzZs.js";import"./Input-CjZq1vGj.js";import"./useBaseUiId-DLO1E5rV.js";import"./useControlled-BNYkrsEO.js";import"./index-Dr7s6soJ.js";import"./index-DDztdIhx.js";import"./PopoverPopup-Dwm_HE2U.js";import"./InternalBackdrop-DEnvfhpS.js";import"./composite-DlnNiwsN.js";import"./index-CAHmDUH2.js";import"./getDisabledMountTransitionStyles-CJr3sVjs.js";import"./ToolbarRootContext-BJjWSvlz.js";import"./tick-DhBqls0o.js";import"./svgIconContainer-DML7KnhH.js";import"./small-cross-DTRNmX-j.js";import"./search-c21shtzO.js";import"./cross-B_Jh2OAU.js";import"./useValueChanged-DQx8oeSu.js";import"./getPseudoElementBounds-Di9nobCt.js";import"./CompositeItem-DfviX0qN.js";import"./makeExternalStore-CHaLvDqs.js";import"./BaseForm-C49uIWvA.js";import"./ActionButton-CkSfOtXe.js";import"./Button-DaHI_b0v.js";import"./SkeletonBar-Dgza8SlF.js";import"./Tooltip-CifKjXPD.js";import"./info-sign-BeFSOpp7.js";import"./chevron-up-Bj_aV9-Q.js";import"./chevron-down-C2jygjf1.js";import"./useEventCallback-BTozI7bp.js";import"./iconLoader-xOJo1GI3.js";import"./CompositeRoot-SaWHLFAx.js";import"./Switch-DrkfY_OH.js";import"./TimePicker-cEwu3u3r.js";import"./CollapsiblePanel-CU0W5mdF.js";import"./error-BiPx4nD4.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BUuBi764.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
