import{j as t,g as n}from"./iframe-mrGpuMKA.js";import{A as r}from"./action-form-CQIIIs43.js";import"./preload-helper-bDWJHmtM.js";import"./DropdownField-BqkHAkPF.js";import"./debounce-BKwdeDHg.js";import"./useOsdkClient-D4Z99yZb.js";import"./index-hISY08zN.js";import"./Input-B84oc61c.js";import"./useBaseUiId-BkHLkay-.js";import"./useControlled-Dq35lwdk.js";import"./index-DMu33fvM.js";import"./index-Bqma_fPL.js";import"./PopoverPopup-QRxeem_z.js";import"./InternalBackdrop-U3rubu2u.js";import"./composite-7erdXABz.js";import"./index-DYAfevna.js";import"./getDisabledMountTransitionStyles-X6_-V5uQ.js";import"./ToolbarRootContext-C5hM_2Bp.js";import"./tick-BcvMJ5PG.js";import"./svgIconContainer-C-bY0sdP.js";import"./small-cross-BiLUn5X_.js";import"./search-Yrs_12vc.js";import"./cross-DPMi-K_N.js";import"./useValueChanged-BZtpoNnx.js";import"./getPseudoElementBounds-C8xxQ8d5.js";import"./CompositeItem-DUJu_nDn.js";import"./makeExternalStore-Dc6_6-hA.js";import"./BaseForm-C7BIJpW8.js";import"./ActionButton-BM4rNAaR.js";import"./Button-CQDVf8SZ.js";import"./SkeletonBar-DwNj8MYg.js";import"./Tooltip-C8kXdT26.js";import"./info-sign-DNaSB2_X.js";import"./chevron-up-D2aPUZaL.js";import"./chevron-down-CoivH60m.js";import"./useEventCallback-BPIHKofH.js";import"./iconLoader-BNoMV9L1.js";import"./CompositeRoot-B3NifesU.js";import"./Switch-DIJ5qDMP.js";import"./TimePicker-Bqtay1hc.js";import"./CollapsiblePanel-DDMWJLSE.js";import"./error-DssOxS7p.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-MvJWQIwU.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
