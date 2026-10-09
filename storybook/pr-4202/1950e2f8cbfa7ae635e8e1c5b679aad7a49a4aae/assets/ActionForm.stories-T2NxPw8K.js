import{j as t,g as n}from"./iframe-DIQwlBGw.js";import{A as r}from"./action-form-B7NYKL-a.js";import"./preload-helper-DCZh2qZU.js";import"./DropdownField-33Sq78Ta.js";import"./debounce-jcF6p9SO.js";import"./useOsdkClient-DggWHq9a.js";import"./index-BMg1YwPI.js";import"./Input-BemJFGwg.js";import"./useBaseUiId-mRekfqkE.js";import"./useControlled-CIA12Xby.js";import"./index-DtMGyB9I.js";import"./index-BuSKlV2e.js";import"./PopoverPopup-BXkqjOaY.js";import"./InternalBackdrop-C6DbQw29.js";import"./composite-B2M76Ume.js";import"./index-UQtK-RIQ.js";import"./getDisabledMountTransitionStyles-CVqdgNzh.js";import"./ToolbarRootContext-D5pzp3U-.js";import"./tick-sIrdoQr_.js";import"./svgIconContainer-nWXxjIgM.js";import"./small-cross-D_-B7wlF.js";import"./search-Tzmhdcy6.js";import"./cross-D0qgRA8s.js";import"./useValueChanged-CKkyYd23.js";import"./getPseudoElementBounds-BT2tDun_.js";import"./CompositeItem-D6nOF9ZG.js";import"./makeExternalStore-C-tnPbL7.js";import"./BaseForm-Cuxsjn_k.js";import"./ActionButton-xUfD7fn9.js";import"./Button-VL7ULnuX.js";import"./SkeletonBar-DVtZv4Je.js";import"./Tooltip-DwcbeITg.js";import"./info-sign-C1qhoaB9.js";import"./chevron-up-Dxk9HDhi.js";import"./chevron-down-Be7rb41D.js";import"./useEventCallback-DxY1G1xy.js";import"./iconLoader-Dwhyn-K-.js";import"./Switch-Bzb406_L.js";import"./CompositeRoot-DinkaM13.js";import"./TimePicker-De3zOo_n.js";import"./CollapsiblePanel-BXhFX321.js";import"./error-Bhb1P9AB.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CrDHFYla.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
