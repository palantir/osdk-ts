import{j as t,g as n}from"./iframe-bnALbjvc.js";import{A as r}from"./action-form-DVuuBzTZ.js";import"./preload-helper-C8kaRY2F.js";import"./DropdownField-FqvN8MA0.js";import"./debounce-DN86280o.js";import"./useOsdkClient--44cx8Bj.js";import"./index-CaRZXRvk.js";import"./Input-sTQZo4x7.js";import"./useBaseUiId-BxyyYmda.js";import"./useControlled-3Q0JUJSo.js";import"./index-C3s-D08F.js";import"./index-D8ht-iMr.js";import"./PopoverPopup-DUjg4Y47.js";import"./InternalBackdrop-C-wwUbvn.js";import"./composite-BdnAwbZ3.js";import"./index-DkcY6kTj.js";import"./getDisabledMountTransitionStyles-CtfsBi68.js";import"./ToolbarRootContext-mleznJTR.js";import"./tick-a6w4X9hv.js";import"./svgIconContainer-C-SVSCUi.js";import"./small-cross-W4QDLHth.js";import"./search-L4rGQlW3.js";import"./cross-CGbNp8lf.js";import"./useValueChanged-rj55CR90.js";import"./getPseudoElementBounds-CHB398KY.js";import"./CompositeItem-DQIpyI6o.js";import"./makeExternalStore-ICpfmLMh.js";import"./BaseForm-C9RHZwwF.js";import"./ActionButton-CGQnu47F.js";import"./Button-pyIzwVHB.js";import"./SkeletonBar-DhafuJvs.js";import"./Tooltip-CkyT8l5h.js";import"./info-sign-BXjedr0b.js";import"./chevron-up-hf8umDq6.js";import"./chevron-down-CZKe5U1j.js";import"./useEventCallback-Bgla3un0.js";import"./iconLoader-DpbBw3y3.js";import"./Switch-CEOdnRi7.js";import"./CompositeRoot-D_OKtw7H.js";import"./TimePicker-B09oVpRl.js";import"./CollapsiblePanel-hHq3Rqpy.js";import"./error-CRPXFfUM.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BbTXPZXR.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
