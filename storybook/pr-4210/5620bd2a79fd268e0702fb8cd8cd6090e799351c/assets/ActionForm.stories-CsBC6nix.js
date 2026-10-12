import{j as t,g as n}from"./iframe-BONzVWWn.js";import{A as r}from"./action-form-DZq4oA3P.js";import"./preload-helper-7aKcYg0W.js";import"./DropdownField-Y6pZ3TyF.js";import"./debounce-CL8B4SFR.js";import"./useOsdkClient-BG5uKO_5.js";import"./index-CKzfCYwc.js";import"./Input-XtFGCQpB.js";import"./useBaseUiId-BJIDGoJB.js";import"./useControlled-DfXv_ef9.js";import"./index-BbYgoHFg.js";import"./index-D15FDZn2.js";import"./PopoverPopup-B9VmNlSc.js";import"./InternalBackdrop-BUyQj1vs.js";import"./composite-B6XHh7WQ.js";import"./index-CYtGwXdQ.js";import"./getDisabledMountTransitionStyles-Csp7Nrn2.js";import"./ToolbarRootContext-BfDhsqcy.js";import"./tick-5KckzmGr.js";import"./svgIconContainer-BsJGio94.js";import"./small-cross-CGUVEOIr.js";import"./search-C37N2Xt5.js";import"./cross-OaYSvrNf.js";import"./useValueChanged-RFSTNB7h.js";import"./getPseudoElementBounds-d8wmr9di.js";import"./CompositeItem-DSj43NsN.js";import"./makeExternalStore-B5wjJeG4.js";import"./BaseForm-BZNK1UR4.js";import"./ActionButton-CC0XggjE.js";import"./Button-BME0vzML.js";import"./SkeletonBar-BkSCBaCu.js";import"./Tooltip-CCQAgWFm.js";import"./info-sign-DQiTeuTi.js";import"./chevron-up-CbBFz0gR.js";import"./chevron-down-BlXmNLUg.js";import"./useEventCallback-CoaVLJ5c.js";import"./iconLoader-jM5FzOu5.js";import"./Switch-cjQdkA-l.js";import"./CompositeRoot-DxZhRY5Y.js";import"./TimePicker-BoBPWbVp.js";import"./CollapsiblePanel-B6meFyIF.js";import"./error-DyHZRqpD.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CJnYGCPE.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
