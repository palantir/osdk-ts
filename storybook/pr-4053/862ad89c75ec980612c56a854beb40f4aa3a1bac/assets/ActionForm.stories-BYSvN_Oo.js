import{j as t,g as n}from"./iframe-CrxwL2-E.js";import{A as r}from"./action-form-CGVV31HB.js";import"./preload-helper-D8KRM-Lu.js";import"./DropdownField-BYVn9WPt.js";import"./debounce-DK8acQf4.js";import"./useOsdkClient-BA2LnazC.js";import"./index-CnRzHgPn.js";import"./Input-WST8cByM.js";import"./useBaseUiId-CHWsF01c.js";import"./useControlled-CMyIOoxO.js";import"./index-Bk2-PvCo.js";import"./index-C9NLr5O0.js";import"./PopoverPopup-CXhQbr-D.js";import"./InternalBackdrop-DA84w9Xz.js";import"./composite-D_Dq2ROx.js";import"./index-D9YXYt3K.js";import"./getDisabledMountTransitionStyles-B7vaymp7.js";import"./ToolbarRootContext-Bp3YN5W7.js";import"./tick-D-sBs8EZ.js";import"./svgIconContainer-BZaQ0M_F.js";import"./small-cross-CMkmo5Aj.js";import"./search-KIDsIAAK.js";import"./cross-tJCZU9dn.js";import"./useValueChanged-DuqgSL6S.js";import"./getPseudoElementBounds-Dd8-3VJH.js";import"./CompositeItem-DXFhogU1.js";import"./makeExternalStore-BiTIhgiy.js";import"./BaseForm-BkPgolOL.js";import"./ActionButton-BQ5ayi6b.js";import"./Button-BPy55ub1.js";import"./SkeletonBar-BLCNwj4V.js";import"./Tooltip-C8FjudTm.js";import"./info-sign-BF4uHqnk.js";import"./chevron-up-D0Czmpz5.js";import"./chevron-down-DTO6IXlJ.js";import"./useEventCallback-BcRGgLnB.js";import"./iconLoader-BIQUtuN1.js";import"./Switch-BYSoNV8O.js";import"./CompositeRoot-C-JCyI2S.js";import"./TimePicker-W3kJ50fB.js";import"./CollapsiblePanel-CEbB2UNo.js";import"./error-CIWz4OVj.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CQbNyfnl.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
