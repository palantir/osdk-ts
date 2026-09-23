import{j as t,g as n}from"./iframe-ChtCM8dE.js";import{A as r}from"./action-form-C0VI01Nz.js";import"./preload-helper-Cmiw_6tL.js";import"./DropdownField-C9V2hn37.js";import"./debounce-BwEiO4_c.js";import"./useOsdkClient-B5IwJgMz.js";import"./index-uT5HIxUp.js";import"./Input-CiDCxeu9.js";import"./useBaseUiId-BlvSRiC6.js";import"./useControlled-hlF0PwpK.js";import"./index-Pe_luz3n.js";import"./index-B31cE8Rp.js";import"./PopoverPopup-BYkXE_FS.js";import"./InternalBackdrop-B9QtOURg.js";import"./composite-B9COiNPT.js";import"./index-BxGNaB71.js";import"./getDisabledMountTransitionStyles-B73YPMyD.js";import"./ToolbarRootContext-D57ExyiR.js";import"./tick-BBG2XDQr.js";import"./svgIconContainer-B0Hb1RBl.js";import"./small-cross-9UuSLKex.js";import"./search-NDA-MaEJ.js";import"./cross-Cx7UUYd1.js";import"./useValueChanged-CTkt07aq.js";import"./getPseudoElementBounds-bHysKEfO.js";import"./CompositeItem-DamdrYTg.js";import"./makeExternalStore-CrEYLMCO.js";import"./BaseForm-BpMSzxDg.js";import"./ActionButton-DCP5cEeb.js";import"./Button-CY6Mleoh.js";import"./SkeletonBar-BNPeEFnR.js";import"./Tooltip-DfOSlZk9.js";import"./info-sign-BAI84Xr_.js";import"./chevron-up-DqI-k4m8.js";import"./chevron-down-9ZFNeU84.js";import"./useEventCallback-BwYTBeHy.js";import"./iconLoader-DuN75yze.js";import"./Switch-CmMnX7tY.js";import"./CompositeRoot-BGFsyASZ.js";import"./TimePicker-D1SzWttn.js";import"./CollapsiblePanel-DEfmw082.js";import"./error-C3rrhmyZ.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DVdIQmET.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
