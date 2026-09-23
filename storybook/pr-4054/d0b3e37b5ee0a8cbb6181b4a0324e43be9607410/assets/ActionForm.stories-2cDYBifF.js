import{j as t,g as n}from"./iframe-D9P9JPnE.js";import{A as r}from"./action-form-GsxQDqRe.js";import"./preload-helper-CSJ4fD8P.js";import"./DropdownField-DAFOn67q.js";import"./debounce-BZCp6Mj3.js";import"./useOsdkClient-Cl7iWri5.js";import"./index-B0GYFgPw.js";import"./Input-BAe5Vta8.js";import"./useBaseUiId-LUhCiIEN.js";import"./useControlled-D8iAD7lp.js";import"./index-BLSs3q_T.js";import"./index--Qtm9bZ-.js";import"./PopoverPopup-Ez6UvTSW.js";import"./InternalBackdrop-BQix0v67.js";import"./composite-CwGSSnNe.js";import"./index-BGyPj0mm.js";import"./getDisabledMountTransitionStyles-BiVo7WJG.js";import"./ToolbarRootContext-D2FTFjj2.js";import"./tick-CM-K1iFc.js";import"./svgIconContainer-DE8FpRUq.js";import"./small-cross-iaDGlrGg.js";import"./search-DVgZ7um_.js";import"./cross-Bk7QQAW7.js";import"./useValueChanged-DmZj1mM7.js";import"./getPseudoElementBounds-CZz-p69t.js";import"./CompositeItem-Cn9ylTax.js";import"./makeExternalStore-Ds2qVRO7.js";import"./BaseForm-DBJvI_Xf.js";import"./ActionButton-BWc4f3QT.js";import"./Button-DQyP3ss1.js";import"./SkeletonBar-CBLTPv0p.js";import"./Tooltip-D9x1TMqS.js";import"./info-sign-F8xvYNz9.js";import"./chevron-up-CximDJv9.js";import"./chevron-down-aDiXlal5.js";import"./useEventCallback-P_K3auvj.js";import"./iconLoader-Bwb8l1Vs.js";import"./Switch-R6BcjD_g.js";import"./CompositeRoot-DXMfdk6L.js";import"./TimePicker-BDcxhDOT.js";import"./CollapsiblePanel-B75bc_M-.js";import"./error-CRea6GYa.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DdvxW2hf.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
