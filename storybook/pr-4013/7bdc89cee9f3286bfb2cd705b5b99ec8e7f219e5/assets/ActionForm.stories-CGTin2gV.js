import{j as t,g as n}from"./iframe-B8NhUX_0.js";import{A as r}from"./action-form-DwHqKm5m.js";import"./preload-helper-DjGFPnLe.js";import"./DropdownField-BxGt7Ohj.js";import"./debounce-uoRbC81R.js";import"./useOsdkClient-BUtE_XGy.js";import"./index-qsMi88gm.js";import"./Input-SBCQtK3z.js";import"./useBaseUiId-Cn8iX50p.js";import"./useControlled-Bf5eet3i.js";import"./index-CQvGYdFy.js";import"./index-DWq__3H-.js";import"./PopoverPopup-DU44Cqzs.js";import"./InternalBackdrop-Zc3lnf0p.js";import"./composite-BwIOwpx5.js";import"./index-Ba4Tc_iW.js";import"./getDisabledMountTransitionStyles-O8DCg2MV.js";import"./ToolbarRootContext-bf_wSBCX.js";import"./tick-DJSkN9NZ.js";import"./svgIconContainer-Bf9SOHJ7.js";import"./small-cross-nXdJrVSH.js";import"./search-BmvHXAW1.js";import"./cross-D9Q-WwoP.js";import"./useValueChanged-g78IRiUM.js";import"./getPseudoElementBounds-CbA1rS7d.js";import"./CompositeItem-C5ZLF5hx.js";import"./makeExternalStore-BpOl3JpH.js";import"./BaseForm-4OGBqrCX.js";import"./ActionButton-2e8flOqN.js";import"./Button-DNRq2HIP.js";import"./SkeletonBar-DmZ0r3ux.js";import"./Tooltip-Cw796QuD.js";import"./info-sign-Ce4rb7Rw.js";import"./chevron-up-UPXgI0xV.js";import"./chevron-down-DxRnKcur.js";import"./useEventCallback-xA1EFPwl.js";import"./iconLoader-C0EIJ2iR.js";import"./CompositeRoot-DWiKmzI3.js";import"./Switch-DncE3Xtk.js";import"./TimePicker-BsYAIsBf.js";import"./CollapsiblePanel-BJZlXQuG.js";import"./error-CPePVciD.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BzqeXglY.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
