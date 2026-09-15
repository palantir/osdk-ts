import{j as t,g as n}from"./iframe-BcMMFnf6.js";import{A as r}from"./action-form-maG3bpUu.js";import"./preload-helper-Bdi1tYmS.js";import"./DropdownField-CM1t1x7G.js";import"./debounce-BMh6x8y-.js";import"./useOsdkClient-CfZDOufs.js";import"./index-BMHtYDol.js";import"./Input-BrlK9Tqs.js";import"./useBaseUiId-Dh5_vj5x.js";import"./useControlled-DFUxWacU.js";import"./index-BnYXDYMU.js";import"./index-CPLAyU55.js";import"./PopoverPopup-CokHJSIa.js";import"./InternalBackdrop-CFb38Fo8.js";import"./composite-B2X0dip5.js";import"./index-CXDE3lu9.js";import"./getDisabledMountTransitionStyles-BDC06-FA.js";import"./ToolbarRootContext-BPQo0iii.js";import"./tick-D5j9FNYd.js";import"./svgIconContainer-C05amAGf.js";import"./small-cross-enohh6ER.js";import"./search-2DDBXVlF.js";import"./cross-6YkLE3rk.js";import"./useValueChanged-CFpnpCX0.js";import"./getPseudoElementBounds-DxN6LO-t.js";import"./CompositeItem-t1YG6a8m.js";import"./makeExternalStore-DdbizQyP.js";import"./BaseForm-C8nTxDtW.js";import"./ActionButton-9uXzTSfY.js";import"./Button-DEYF-M81.js";import"./SkeletonBar-CwdmwRXI.js";import"./Tooltip-DTTbLAmt.js";import"./info-sign-B8smXXwa.js";import"./chevron-up-Bi69W96J.js";import"./chevron-down-Co1TC95K.js";import"./useEventCallback-B-CAuCE6.js";import"./iconLoader-BVVQcRzi.js";import"./CompositeRoot-BZoZAOEs.js";import"./Switch-CNuZyR6F.js";import"./TimePicker-D4acJ2sD.js";import"./CollapsiblePanel-OHw4Wyuf.js";import"./error-DAhNXKes.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BH4rg4j0.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
