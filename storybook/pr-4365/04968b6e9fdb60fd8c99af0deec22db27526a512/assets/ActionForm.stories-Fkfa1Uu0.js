import{j as t,g as n}from"./iframe-CRvr4m23.js";import{A as r}from"./action-form-0P04LYPQ.js";import"./preload-helper-DdCCWYOA.js";import"./DropdownField-m8FHeW1l.js";import"./debounce-B7GzlHZ2.js";import"./useOsdkClient-Bx3PkGcF.js";import"./index-D9ceHjwW.js";import"./Input-Bb951IY0.js";import"./useBaseUiId-B6Sq2DDd.js";import"./useControlled-CzRMF11H.js";import"./index-C-IWKanX.js";import"./index-DjDCowvu.js";import"./isObject-B8xrtduv.js";import"./InternalBackdrop-BxZfZedD.js";import"./composite-BaJaFCUV.js";import"./index-DJL6J6Yv.js";import"./getDisabledMountTransitionStyles-C-PY_iOt.js";import"./ToolbarRootContext-CSQhZUTB.js";import"./tick-CR12WH8n.js";import"./svgIconContainer-DGdcF-OS.js";import"./small-cross-B41-2T8P.js";import"./search-S4tClITX.js";import"./cross-C9z9h8JK.js";import"./useValueChanged-CZQ4YioP.js";import"./getPseudoElementBounds-CyO_YVnW.js";import"./CompositeItem-AIxAUMBi.js";import"./makeExternalStore-B5l5c53p.js";import"./BaseForm-B08N1p8s.js";import"./ActionButton-CdBe91xX.js";import"./Button-CICDzuCH.js";import"./SkeletonBar-BcFufqC8.js";import"./Tooltip-CRs42sBR.js";import"./info-sign-CobsjJco.js";import"./chevron-up-BuGMyoYo.js";import"./chevron-down-D0i9lEgO.js";import"./useEventCallback-D3cYyTze.js";import"./iconLoader-AwS-882E.js";import"./Switch-D1TTa3FN.js";import"./CompositeRoot-DQs23Z0I.js";import"./TimePicker-UYlBDOYH.js";import"./CollapsiblePanel-DOhZMIUq.js";import"./error-ClpIR9By.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Dd7zkJUD.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
