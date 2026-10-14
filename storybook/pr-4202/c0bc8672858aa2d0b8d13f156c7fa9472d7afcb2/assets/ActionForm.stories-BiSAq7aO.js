import{j as t,g as n}from"./iframe-DIE5EIel.js";import{A as r}from"./action-form-DlxOY6rG.js";import"./preload-helper-CcEYMKBV.js";import"./DropdownField-C-mwMtZa.js";import"./debounce-DepqpmZg.js";import"./useOsdkClient-DwzaMKsX.js";import"./index-gAWb2dR9.js";import"./Input-Co7zI1L-.js";import"./useBaseUiId-DU3L5eHE.js";import"./useControlled-ddG6ulVP.js";import"./index-C3GNYR7s.js";import"./index-DMxLJ88X.js";import"./PopoverPopup-CLAGuQ7U.js";import"./InternalBackdrop-bmHbSXL3.js";import"./composite-DJfb-Teu.js";import"./index-BZq84Z7C.js";import"./getDisabledMountTransitionStyles-CwBqMOC1.js";import"./ToolbarRootContext-DFNBF5NL.js";import"./tick-C7X7rsGG.js";import"./svgIconContainer-Rj0rqZar.js";import"./small-cross-lJu3Ep8h.js";import"./search-UnQR1AsU.js";import"./cross-siN9VgW1.js";import"./useValueChanged-DM4JlENq.js";import"./getPseudoElementBounds-Bwg4v7rW.js";import"./CompositeItem-Crvs63Hb.js";import"./makeExternalStore-DI81UbPt.js";import"./BaseForm-XT7cFeWR.js";import"./ActionButton-8CkxKFOD.js";import"./Button-DGriahwu.js";import"./SkeletonBar-D76bwfQy.js";import"./Tooltip-Cned3Nwd.js";import"./info-sign-CaEPKPy9.js";import"./chevron-up-OaxD1A4Y.js";import"./chevron-down-CUqhLbkD.js";import"./useEventCallback-B0bLIt0P.js";import"./iconLoader-PRERgHuY.js";import"./Switch-BzXlFAFe.js";import"./CompositeRoot-CfmBhVZw.js";import"./TimePicker-D9Y9h0qx.js";import"./CollapsiblePanel-DQyn2L9g.js";import"./error-aWHvmhUp.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BWchHor7.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
