import{j as t,g as n}from"./iframe-Dnji8ErS.js";import{A as r}from"./action-form-DcbvLIZ0.js";import"./preload-helper-DBdP8Q4o.js";import"./DropdownField-Lc5xugId.js";import"./debounce-BAxkMmEn.js";import"./useOsdkClient-CR7GyxlC.js";import"./index-BNoiE65C.js";import"./Input-DyynrLgV.js";import"./useBaseUiId-ScNjevUP.js";import"./useControlled-DmavZ4hp.js";import"./index-Calwhz4q.js";import"./index-BVgNOwgs.js";import"./PopoverPopup-DmROoIcA.js";import"./InternalBackdrop-9jtE3fb7.js";import"./composite-Bo0dFacb.js";import"./index-Bka3S9OK.js";import"./getDisabledMountTransitionStyles-DeZ02XBV.js";import"./ToolbarRootContext-BPwepJKC.js";import"./tick-PvaRxYp4.js";import"./svgIconContainer-B0znNA-B.js";import"./small-cross-wM2Fg1Ze.js";import"./search-C5sdVGIt.js";import"./cross-BWKDw-8_.js";import"./useValueChanged-GZrrpvDZ.js";import"./getPseudoElementBounds-C5houf6l.js";import"./CompositeItem-YgQK4Acr.js";import"./makeExternalStore-BNNlgyK5.js";import"./BaseForm-PwVCHRor.js";import"./ActionButton-B5ftVOcR.js";import"./Button-D-1VZnj-.js";import"./SkeletonBar-gGwHwvfg.js";import"./Tooltip-DMaI5dDd.js";import"./info-sign-CDIBR_vf.js";import"./chevron-up-DAO7uCe4.js";import"./chevron-down-r7E6FDSt.js";import"./useEventCallback-56O3ZT4v.js";import"./iconLoader-BIS3GjKw.js";import"./Switch-BJas9POA.js";import"./CompositeRoot-noEm189K.js";import"./TimePicker-DIdyUf-V.js";import"./CollapsiblePanel-BYjZCBYa.js";import"./error-CpTRDjda.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DdDqJJvP.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
