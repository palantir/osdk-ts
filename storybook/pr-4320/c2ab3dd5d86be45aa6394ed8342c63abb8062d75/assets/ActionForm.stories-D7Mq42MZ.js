import{j as t,g as n}from"./iframe-Cj5xKvLA.js";import{A as r}from"./action-form-B3t9W_C0.js";import"./preload-helper-D1DDVoTO.js";import"./DropdownField-5C_sV8hr.js";import"./debounce-D6aQMZp0.js";import"./useOsdkClient-oka-dZbc.js";import"./index-BBh4Z0mE.js";import"./Input-Bffgvop9.js";import"./useBaseUiId-n2QF9Zar.js";import"./useControlled-D5krREh9.js";import"./index-DKWCLtL5.js";import"./index-Cb9jn425.js";import"./isObject-DuNnO_hx.js";import"./InternalBackdrop-CYszCwsc.js";import"./composite-925znV2G.js";import"./index-C38bxeqR.js";import"./getDisabledMountTransitionStyles-BgDH7Jb-.js";import"./ToolbarRootContext-DFdsIL16.js";import"./tick-Cf_flWq8.js";import"./svgIconContainer-DZYGEA7n.js";import"./small-cross-CADTU48B.js";import"./search-BmtS1KCs.js";import"./cross-BPLfBPr7.js";import"./useValueChanged-owXuKPN-.js";import"./getPseudoElementBounds-DXisblbi.js";import"./CompositeItem-Cu_iWJpi.js";import"./makeExternalStore-BZjXkoXh.js";import"./BaseForm-BNur2-Ad.js";import"./ActionButton-D9I3daR7.js";import"./Button-Be388aOs.js";import"./SkeletonBar-_qu8whIi.js";import"./Tooltip-D09713yr.js";import"./info-sign-BAw_K5KZ.js";import"./chevron-up-BLaMXbBL.js";import"./chevron-down-C93yiICa.js";import"./useEventCallback-ByjKqT98.js";import"./iconLoader-DYhel1Q6.js";import"./Switch-FOoBoBur.js";import"./CompositeRoot-CgebjbKf.js";import"./TimePicker-C3hyOq7E.js";import"./CollapsiblePanel-Ba92qoA8.js";import"./error-Bd1ykK4E.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Dl0Rlheu.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
