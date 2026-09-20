import{j as t,g as n}from"./iframe-BdKsMQww.js";import{A as r}from"./action-form-VQV2xVDA.js";import"./preload-helper-MlpURx7u.js";import"./DropdownField-B3O32GOa.js";import"./debounce-BNPeqOUu.js";import"./useOsdkClient-DZdPds6c.js";import"./index-DKUuG3z9.js";import"./Input-D7CFUCMW.js";import"./useBaseUiId-DO0eFKXX.js";import"./useControlled-7KbTYIa_.js";import"./index-EXOzxBPi.js";import"./index-DYRORlje.js";import"./PopoverPopup-B2wOVFFv.js";import"./InternalBackdrop-DjojD6Rk.js";import"./composite-BNox4Mzc.js";import"./index-DhxjQLte.js";import"./getDisabledMountTransitionStyles-TgKlIubu.js";import"./ToolbarRootContext-CdO1SR-V.js";import"./tick-B_ziR0EA.js";import"./svgIconContainer-BnCWnnko.js";import"./small-cross-BxFuyZcX.js";import"./search-PSF1rGs2.js";import"./cross-DNiGESUx.js";import"./useValueChanged-D6y7mlr9.js";import"./getPseudoElementBounds-D4Wbrwbn.js";import"./CompositeItem-e2FL5qAU.js";import"./makeExternalStore-BoNEUCBG.js";import"./BaseForm-DWRVyXds.js";import"./ActionButton-DsqqImyB.js";import"./Button-CcSyVXzr.js";import"./SkeletonBar-MNZpFCNa.js";import"./Tooltip-BTAbXJfa.js";import"./info-sign-2t1DdIXb.js";import"./chevron-up-Ce4FETTr.js";import"./chevron-down-Bw8Fchsf.js";import"./useEventCallback--olNvQB0.js";import"./iconLoader-DttBEOi0.js";import"./Switch-CZ3zQEVZ.js";import"./CompositeRoot-CwHpMXLT.js";import"./TimePicker-CjUKAd77.js";import"./CollapsiblePanel-DCh2QXjz.js";import"./error-Nv9n4Hjz.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-C12liwOp.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
