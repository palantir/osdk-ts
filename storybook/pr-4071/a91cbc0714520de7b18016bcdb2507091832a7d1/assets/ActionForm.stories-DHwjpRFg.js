import{j as t,g as n}from"./iframe-m0ugFJ_n.js";import{A as r}from"./action-form-DBDJZisF.js";import"./preload-helper-KeOwj4qj.js";import"./DropdownField-Dv2YzHOX.js";import"./debounce-B4kVVAWf.js";import"./useOsdkClient-BOwEJ48t.js";import"./index-CrjphzT5.js";import"./Input-BmzIYnaH.js";import"./useBaseUiId-DnAq2IXn.js";import"./useControlled-Cbg37gEr.js";import"./index-FGKMGa8g.js";import"./index-Cv1cYxMy.js";import"./PopoverPopup-DtCGLRJW.js";import"./InternalBackdrop-CRgyIZok.js";import"./composite-CkzXePM6.js";import"./index-CJxlEYMP.js";import"./getDisabledMountTransitionStyles-CQzsyu-N.js";import"./ToolbarRootContext-DuKgQD9s.js";import"./tick-Bn7hFcMc.js";import"./svgIconContainer-Y7-V7Oui.js";import"./small-cross-DLIPGDB9.js";import"./search-BBD2MUX2.js";import"./cross-BQwE0Wie.js";import"./useValueChanged-CtZddPP0.js";import"./getPseudoElementBounds-B0jU5gJz.js";import"./CompositeItem-DwEHzZa4.js";import"./makeExternalStore-gYyz61fG.js";import"./BaseForm-BuNYCsjX.js";import"./ActionButton-75hIFgs2.js";import"./Button-BYPOjnzJ.js";import"./SkeletonBar-C5qsauJF.js";import"./Tooltip-BRPBf4sJ.js";import"./info-sign-fDWnbkOV.js";import"./chevron-up-B5ukEuhN.js";import"./chevron-down-CRZsF1SF.js";import"./useEventCallback-Cuom9Pax.js";import"./iconLoader-BFoeOFwV.js";import"./Switch-BN9r265C.js";import"./CompositeRoot-DukGxd8t.js";import"./TimePicker-DOEk8s_7.js";import"./CollapsiblePanel-D7qJlDW0.js";import"./error-C7YpCdj7.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-B3S-uWw6.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
