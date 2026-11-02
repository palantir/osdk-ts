import{j as t,g as n}from"./iframe-DycPRZ3_.js";import{A as r}from"./action-form-CuypT7BD.js";import"./preload-helper-CwFGYy97.js";import"./DropdownField-XtF6381b.js";import"./debounce-BnD1fViJ.js";import"./useOsdkClient-DFeWJms6.js";import"./index-D8OuJnBD.js";import"./Input-DlxWReQQ.js";import"./useBaseUiId-BcdZIsRg.js";import"./useControlled-CSrl2eWz.js";import"./index-DsXNa1nt.js";import"./index-CUewPl3I.js";import"./PopoverPopup-CkUDMz4E.js";import"./InternalBackdrop-C-dfpcw1.js";import"./composite-BS35o5ci.js";import"./index-BL25K-TO.js";import"./getDisabledMountTransitionStyles-BL7UYAd-.js";import"./ToolbarRootContext-O9iZr2zE.js";import"./tick-Dro8bbOl.js";import"./svgIconContainer-CdogxpvZ.js";import"./small-cross-DHlLl8iv.js";import"./search-_YpI-rXF.js";import"./cross-BCqcqOvJ.js";import"./useValueChanged-CoxCzpHk.js";import"./getPseudoElementBounds-Bp1o7LjX.js";import"./CompositeItem-BFpto-ga.js";import"./makeExternalStore-Ko2ktWoV.js";import"./BaseForm-PFHREVOs.js";import"./ActionButton-KL_G11f2.js";import"./Button-BRZRYHG0.js";import"./SkeletonBar-C2Omcp_Q.js";import"./Tooltip-BkvL-duP.js";import"./info-sign-c_CMOsin.js";import"./chevron-up-DTvHtvAF.js";import"./chevron-down-oahySAf9.js";import"./useEventCallback-lJ2DHBKq.js";import"./iconLoader-CNbK1c7s.js";import"./Switch-GGV0RZB-.js";import"./CompositeRoot-Bv3EQm_U.js";import"./TimePicker-Tqv9WnNz.js";import"./CollapsiblePanel-v1RS7AoO.js";import"./error-CfB5jUCL.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BKuNAfM3.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
