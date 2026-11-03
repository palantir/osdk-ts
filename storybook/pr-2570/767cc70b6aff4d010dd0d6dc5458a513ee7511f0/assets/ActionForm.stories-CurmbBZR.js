import{j as t,g as n}from"./iframe-D9CyQ-7D.js";import{A as r}from"./action-form-B-yA9H85.js";import"./preload-helper-D5O23N40.js";import"./DropdownField-GBcl7Wc9.js";import"./debounce-Axu-J2_C.js";import"./useOsdkClient-WrTrHCKg.js";import"./index-DuJGsL9q.js";import"./Input-CmtlVQ4G.js";import"./useBaseUiId-D_fLEN6E.js";import"./useControlled-C_-Glr9o.js";import"./index-1c9qBFFa.js";import"./index-AxS2IGOk.js";import"./PopoverPopup-B0CqW0hV.js";import"./InternalBackdrop-DeKeGHaG.js";import"./composite-XfhWG8gu.js";import"./index-BOD_CvT4.js";import"./getDisabledMountTransitionStyles-D4n7H05A.js";import"./ToolbarRootContext-BcdYYsZZ.js";import"./tick-BiI5E4yJ.js";import"./svgIconContainer-AOGkHpnu.js";import"./small-cross-B9cBwOBi.js";import"./search-DGt86ZvF.js";import"./cross-BenluPmH.js";import"./useValueChanged-CjMx0qik.js";import"./getPseudoElementBounds-DDgTpPXV.js";import"./CompositeItem-DcIoFALJ.js";import"./makeExternalStore-tubzd2Ls.js";import"./BaseForm-CpNKB9RW.js";import"./ActionButton-BfglUtnD.js";import"./Button-BQcwiuJB.js";import"./SkeletonBar-Cv4TXNgc.js";import"./Tooltip-DYOaLqjU.js";import"./info-sign-DtSmsln1.js";import"./chevron-up-cri8uVAA.js";import"./chevron-down-CdLJsGpG.js";import"./useEventCallback-ypal6-pO.js";import"./iconLoader-D1L-NAjH.js";import"./Switch-BN-CHXYl.js";import"./CompositeRoot-B-6l-Lt8.js";import"./TimePicker-BDBEOjuV.js";import"./CollapsiblePanel-mjI7efHF.js";import"./error-C3QVKQPv.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-C8sht1w0.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
