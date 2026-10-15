import{j as t,g as n}from"./iframe-5HuVSaDQ.js";import{A as r}from"./action-form-CaCwuIds.js";import"./preload-helper-CfrIZ5Cf.js";import"./DropdownField-Ck4UJuFu.js";import"./debounce-Cfvf-nRd.js";import"./useOsdkClient-DRBxpjGK.js";import"./index-DjoqjxLj.js";import"./Input-LKVNjJW6.js";import"./useBaseUiId-DUhNtAkB.js";import"./useControlled-DSyajAtW.js";import"./index-HPsAfhDB.js";import"./index--ZjbYOmd.js";import"./PopoverPopup-DIoQ4is4.js";import"./InternalBackdrop-qL7awpYB.js";import"./composite-BgONfLPA.js";import"./index-B1NpA2Ke.js";import"./getDisabledMountTransitionStyles-Dh8ST-vn.js";import"./ToolbarRootContext-BJk-KcZN.js";import"./tick-CLH4usX-.js";import"./svgIconContainer-CilU-cRt.js";import"./small-cross-Dmab4i0O.js";import"./search-Cj2_GDbi.js";import"./cross-Fbd8rPWM.js";import"./useValueChanged-DFA8OMKn.js";import"./getPseudoElementBounds-DEmyDmHB.js";import"./CompositeItem-zoxZc06w.js";import"./makeExternalStore-CgO7rqjT.js";import"./BaseForm-DMgNn8_h.js";import"./ActionButton-CeiHGQTe.js";import"./Button-DOSN-M_K.js";import"./SkeletonBar-DKI9Ld3o.js";import"./Tooltip-ClzZDh1Z.js";import"./info-sign-CRN3mW1-.js";import"./chevron-up-CGkQGkWf.js";import"./chevron-down-DpQjt-J8.js";import"./useEventCallback-CcusE86W.js";import"./iconLoader-o8xPUjf_.js";import"./Switch-CgKa0hmq.js";import"./CompositeRoot-BQPnNEt3.js";import"./TimePicker-DFX-TnjT.js";import"./CollapsiblePanel-DRekZkpH.js";import"./error-CMmWSsIq.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CADXJLOh.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
