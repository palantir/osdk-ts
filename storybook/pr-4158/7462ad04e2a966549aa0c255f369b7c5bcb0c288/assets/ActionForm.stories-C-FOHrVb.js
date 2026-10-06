import{j as t,g as n}from"./iframe-DWfCOAQu.js";import{A as r}from"./action-form-C3wXGcDw.js";import"./preload-helper-AetNKwh5.js";import"./DropdownField-B_3NuYm-.js";import"./debounce-0ot9PSoS.js";import"./useOsdkClient-C6t9DPq1.js";import"./index-CqJhMuS2.js";import"./Input-B5DqZdR7.js";import"./useBaseUiId-BKma_f4b.js";import"./useControlled-CnSP5Uy7.js";import"./index-CrNU2B9N.js";import"./index-WpqqJaJk.js";import"./PopoverPopup-BN0RPWQk.js";import"./InternalBackdrop-gdbKvKDa.js";import"./composite-DNxX4Nkb.js";import"./index-CpM3OnKB.js";import"./getDisabledMountTransitionStyles-BXtKCsRk.js";import"./ToolbarRootContext-BnN-yS54.js";import"./tick-DxeMA9RK.js";import"./svgIconContainer-Q7lczhdT.js";import"./small-cross-BqKc-LeJ.js";import"./search-BgPhvmky.js";import"./cross-B_xAvT3d.js";import"./useValueChanged-CLfvSLZ_.js";import"./getPseudoElementBounds-CK6ToQgj.js";import"./CompositeItem-CfFTNcKF.js";import"./makeExternalStore-CS1-iCYk.js";import"./BaseForm-CeCaqBG4.js";import"./ActionButton-DAgVBgto.js";import"./Button-C6vZxzg6.js";import"./SkeletonBar-EPFSLYlJ.js";import"./Tooltip-BDvqRvi5.js";import"./info-sign-CdLYQ6S5.js";import"./chevron-up-DSNBFXpG.js";import"./chevron-down-Dt5AdPlw.js";import"./useEventCallback-C6ACKCKc.js";import"./iconLoader-CEAPtrlv.js";import"./Switch-BjKoBUJP.js";import"./CompositeRoot-D_E17u2k.js";import"./TimePicker-CuAxiRcl.js";import"./CollapsiblePanel-BpxVECEg.js";import"./error-D0MXudnr.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Dn5f43wd.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
