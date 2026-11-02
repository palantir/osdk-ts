import{j as t,g as n}from"./iframe-Cjxg6iNn.js";import{A as r}from"./action-form-Cuu-hNLJ.js";import"./preload-helper-Cxg0i_EX.js";import"./DropdownField-DkMSVjea.js";import"./debounce-C5Se__zz.js";import"./useOsdkClient-AZh_79x-.js";import"./index-C7K0gZWV.js";import"./Input-BQ8CO2Zx.js";import"./useBaseUiId-CnlnTXqN.js";import"./useControlled-DvCyj3QQ.js";import"./index-CSSvwtgv.js";import"./index-CHnUBrda.js";import"./PopoverPopup-BX8ciyA_.js";import"./InternalBackdrop-CpFHocTv.js";import"./composite-BjxBGEhF.js";import"./index-DFkF7jqg.js";import"./getDisabledMountTransitionStyles-BvfAIkEV.js";import"./ToolbarRootContext-DZlA8QGQ.js";import"./tick-YxVbnp5T.js";import"./svgIconContainer-CZvHNGTg.js";import"./small-cross-CigndlKD.js";import"./search-DdTpXEBG.js";import"./cross-B4PrOhV3.js";import"./useValueChanged-DIJyPS0-.js";import"./getPseudoElementBounds-DMxNZQvA.js";import"./CompositeItem-CNr4k86k.js";import"./makeExternalStore-CNSVvc9t.js";import"./BaseForm-rgwxpjXE.js";import"./ActionButton-Du7n99Za.js";import"./Button-DgwxYDBH.js";import"./SkeletonBar-X_1w1HPl.js";import"./Tooltip-B5VRIXsW.js";import"./info-sign-CeZ6FvSj.js";import"./chevron-up-BrBa_e1-.js";import"./chevron-down-bhCi1ARW.js";import"./useEventCallback-uFwCyQiz.js";import"./iconLoader-CL-ygkZl.js";import"./Switch-BXyBY23i.js";import"./CompositeRoot-CF6O8bI1.js";import"./TimePicker-BFpBSocz.js";import"./CollapsiblePanel-O8dFOxez.js";import"./error-BXzFpfZ4.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BpvOsnqH.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
