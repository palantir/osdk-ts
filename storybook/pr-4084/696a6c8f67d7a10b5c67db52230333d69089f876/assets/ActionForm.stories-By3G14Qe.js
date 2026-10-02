import{j as t,g as n}from"./iframe-Btqvg51n.js";import{A as r}from"./action-form-BpyT6Zdc.js";import"./preload-helper-syhdZDkE.js";import"./DropdownField-DQbsKt9D.js";import"./debounce-BAYS4VQz.js";import"./useOsdkClient-CDUGXlsx.js";import"./index-BD28I-pc.js";import"./Input-DshYp2Vv.js";import"./useBaseUiId-BkjQeUzK.js";import"./useControlled-sKyg4XQp.js";import"./index-C-bm7M0d.js";import"./index-DI6u9RXJ.js";import"./PopoverPopup-Dknz7An3.js";import"./InternalBackdrop-XTodM-Lf.js";import"./composite-DISAoOje.js";import"./index-C1ab4uqR.js";import"./getDisabledMountTransitionStyles-Dj_QuE4i.js";import"./ToolbarRootContext-AyD5CGSz.js";import"./tick-BmuiIbFi.js";import"./svgIconContainer-DO6E7UDs.js";import"./small-cross-DDu4FjQa.js";import"./search-CS3jZQxq.js";import"./cross-4sLVfr-a.js";import"./useValueChanged-CGpXR8sb.js";import"./getPseudoElementBounds-DXcg_kO_.js";import"./CompositeItem-QpGH5PhM.js";import"./makeExternalStore-D879CjGU.js";import"./BaseForm-CTHcSfde.js";import"./ActionButton-DPOxkhPL.js";import"./Button-Cjefz3Ec.js";import"./SkeletonBar-g4Zrl_9a.js";import"./Tooltip-C9dIavbW.js";import"./info-sign-C5Vu_kKP.js";import"./chevron-up-DLypuey8.js";import"./chevron-down-HGlEUxE6.js";import"./useEventCallback-Birv-DIv.js";import"./iconLoader-BcGizv49.js";import"./Switch-VBwyCNxh.js";import"./CompositeRoot-D6Trz0k9.js";import"./TimePicker-C9wkqwL5.js";import"./CollapsiblePanel-P1TD94b_.js";import"./error-BHl0yOWM.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-D8UgdzXc.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
