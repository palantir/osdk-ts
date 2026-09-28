import{j as t,g as n}from"./iframe-BoQuj6Ft.js";import{A as r}from"./action-form-D9nZYzV8.js";import"./preload-helper-DFHoCRfY.js";import"./DropdownField-B9wcQ97-.js";import"./debounce-DKOD7ARd.js";import"./useOsdkClient-BlIU4lOf.js";import"./index-B3vkyGje.js";import"./Input-BrV6l60a.js";import"./useBaseUiId-DKKiKBjO.js";import"./useControlled-DfpvXrbD.js";import"./index-BQDMsvBO.js";import"./index-BUrjWVUX.js";import"./PopoverPopup-CtGLWZkC.js";import"./InternalBackdrop-DgOgxUR-.js";import"./composite-CvoBvof0.js";import"./index-DsXJv-A-.js";import"./getDisabledMountTransitionStyles-CAOvj7ui.js";import"./ToolbarRootContext-Civm9m7-.js";import"./tick-Cdn4730X.js";import"./svgIconContainer-D1Y91RJ2.js";import"./small-cross-PzH5JPQr.js";import"./search-DxfJTzvK.js";import"./cross-DIlflA87.js";import"./useValueChanged-DxKn8kpX.js";import"./getPseudoElementBounds-W6TVi3du.js";import"./CompositeItem-DPojjMsZ.js";import"./makeExternalStore-ILzBw2IP.js";import"./BaseForm-BBSiOuTF.js";import"./ActionButton-ZwUOGMpg.js";import"./Button-CVGCG-PX.js";import"./SkeletonBar-nJu3VKHu.js";import"./Tooltip-RUFZkZKo.js";import"./info-sign-DNmn4HB4.js";import"./chevron-up-KRx7WT9j.js";import"./chevron-down-DuDBYDyj.js";import"./useEventCallback-DnyNlyEn.js";import"./iconLoader-C9j5N-4V.js";import"./Switch-CZAPxPE4.js";import"./CompositeRoot-DjmA6m7I.js";import"./TimePicker-pVigE2Lk.js";import"./CollapsiblePanel-CDq3d3lQ.js";import"./error-ovbXz9QM.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Bww6KylD.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
