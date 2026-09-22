import{j as t,g as n}from"./iframe-b99LbP9m.js";import{A as r}from"./action-form-AJakUnqC.js";import"./preload-helper-DVhK3iQp.js";import"./DropdownField-B091wn9X.js";import"./debounce-BQ_I9Yzc.js";import"./useOsdkClient-B5OWGTmv.js";import"./index-lvCDhi6D.js";import"./Input-hdA3kWA3.js";import"./useBaseUiId-6kqzncOU.js";import"./useControlled-ByvbEfpA.js";import"./index-DJmpNsh_.js";import"./index-CQtcp48q.js";import"./PopoverPopup-CtpNbWOs.js";import"./InternalBackdrop-COXnZoqL.js";import"./composite-CtvoA4ac.js";import"./index-DPKFJAUb.js";import"./getDisabledMountTransitionStyles-4C3EEDb3.js";import"./ToolbarRootContext-BgL_RAO8.js";import"./tick-DHP_OEKV.js";import"./svgIconContainer-BihU0y1S.js";import"./small-cross-CVBamzYp.js";import"./search-CC467d8u.js";import"./cross-DIxLp0N9.js";import"./useValueChanged-CqszMfOm.js";import"./getPseudoElementBounds-CP-KB6E2.js";import"./CompositeItem-CKc0sSZR.js";import"./makeExternalStore-BPDPOT32.js";import"./BaseForm-Di2iYNFS.js";import"./ActionButton-CgHWaoxM.js";import"./Button-C5yqAo8p.js";import"./SkeletonBar-DiB2OCWt.js";import"./Tooltip-GFqETB97.js";import"./info-sign-BhG7_3iO.js";import"./chevron-up-3lhbrUVC.js";import"./chevron-down-D4nxFd5U.js";import"./useEventCallback-BRh0F3Gc.js";import"./iconLoader-niuW7kVB.js";import"./Switch-DzYNSOWD.js";import"./CompositeRoot-BY362AcT.js";import"./TimePicker-L-Q0w_uj.js";import"./CollapsiblePanel-Bq-rJ7Pf.js";import"./error-DAEmkM_5.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-C6RLviWF.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
