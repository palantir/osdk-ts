import{j as t,g as n}from"./iframe-DbQMorYR.js";import{A as r}from"./action-form-Wlsdh6r-.js";import"./preload-helper-DES03_oL.js";import"./DropdownField-DwSBz2YC.js";import"./debounce-DMgjlNzy.js";import"./useOsdkClient-3n3qj0TA.js";import"./index-CHOCnb0f.js";import"./Input-Q-MRNWMg.js";import"./useBaseUiId-CKJO2MlM.js";import"./useControlled-DOgj4MtD.js";import"./index-DpVhWfLY.js";import"./index-C0C-Vl87.js";import"./PopoverPopup-uiUnYz9Z.js";import"./InternalBackdrop-Buze4txO.js";import"./composite-BjHYFgsw.js";import"./index-Dkbx_AOS.js";import"./getDisabledMountTransitionStyles-T22xlpK-.js";import"./ToolbarRootContext-D619hRph.js";import"./tick-DtRotk-c.js";import"./svgIconContainer-Cwo2AziM.js";import"./small-cross-Cq5E9zQ8.js";import"./search-ChjdgZEs.js";import"./cross-CE7V7QeW.js";import"./useValueChanged-BH_8poyT.js";import"./getPseudoElementBounds-CcW8NnN6.js";import"./CompositeItem-DHvx_K1s.js";import"./makeExternalStore-smBq6vy5.js";import"./BaseForm-DnHhuNZL.js";import"./ActionButton-CMzKEzrG.js";import"./Button-S-V8j-aZ.js";import"./SkeletonBar-CHw8W08J.js";import"./Tooltip-DxJ5tz0m.js";import"./info-sign-CSKrko47.js";import"./chevron-up-CtLRiEQ7.js";import"./chevron-down-CVwhtMCl.js";import"./useEventCallback-DDVJcajp.js";import"./iconLoader-0I3oWPk6.js";import"./Switch-3LZKNLAA.js";import"./CompositeRoot-Cd1N_6hG.js";import"./TimePicker-BAM16__s.js";import"./CollapsiblePanel-_cTDz2Uo.js";import"./error-CkRxITwV.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BpNcVo1X.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
