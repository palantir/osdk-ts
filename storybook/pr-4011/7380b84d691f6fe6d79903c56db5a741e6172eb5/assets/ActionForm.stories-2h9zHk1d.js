import{j as t,g as n}from"./iframe-Cd0WuP5s.js";import{A as r}from"./action-form-CGVpQYLq.js";import"./preload-helper-BULq60Sg.js";import"./DropdownField-DNOcnaLD.js";import"./debounce-DsJ8NhL-.js";import"./useOsdkClient-CpQ-3Z13.js";import"./index-Dn3UPUEv.js";import"./Input-Cxx4mnqf.js";import"./useBaseUiId-DrebTsUj.js";import"./useControlled-BoZ7gbt2.js";import"./index-C-_orMox.js";import"./index-BgMZ2AWP.js";import"./PopoverPopup-ChYnmRaP.js";import"./InternalBackdrop-dvLmHpE5.js";import"./composite-DOtbOOdR.js";import"./index-BvG0L2NH.js";import"./getDisabledMountTransitionStyles-ClCEPtPS.js";import"./ToolbarRootContext-zlKF7dlE.js";import"./tick-BO6WZzfT.js";import"./svgIconContainer-Zo359bK_.js";import"./small-cross-HxFkmVGE.js";import"./search-j5X8koaR.js";import"./cross-Cht5ZydL.js";import"./useValueChanged-DCDDQwI0.js";import"./getPseudoElementBounds-DM3ex3Qr.js";import"./CompositeItem-CUY6v9CS.js";import"./makeExternalStore-j6ewfQ1j.js";import"./BaseForm-Bt8bECMv.js";import"./ActionButton-F6IFdzY4.js";import"./Button-DQgJQ0ys.js";import"./SkeletonBar-I0-eDi0W.js";import"./Tooltip-BpBW07pw.js";import"./info-sign-By0RKtEY.js";import"./chevron-up-DD5syRc5.js";import"./chevron-down-Dtgstolr.js";import"./useEventCallback-CqLXx_Ru.js";import"./iconLoader-CDTRV-YR.js";import"./CompositeRoot-DVz_H_XK.js";import"./Switch-CJvocZrs.js";import"./TimePicker-CliKBp0p.js";import"./CollapsiblePanel-Bv729W8z.js";import"./error-BXNrYt0u.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DqISDKn-.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
