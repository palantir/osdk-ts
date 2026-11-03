import{j as t,g as n}from"./iframe-B5RHZXsu.js";import{A as r}from"./action-form-Cj2sX5fT.js";import"./preload-helper-tHX7vXiV.js";import"./DropdownField-BnK7E9TF.js";import"./debounce-BxIoRoJ-.js";import"./useOsdkClient-ClQGOlrW.js";import"./index-UZy2jxQz.js";import"./Input-BXzrXoG1.js";import"./useBaseUiId-CuPoV62G.js";import"./useControlled-DlsNgd8K.js";import"./index-VU42HTLU.js";import"./index-BHsGwZQS.js";import"./PopoverPopup-DfYrZwnF.js";import"./InternalBackdrop-DQlLfdJE.js";import"./composite-BR00GrWy.js";import"./index-BiYhGcN8.js";import"./getDisabledMountTransitionStyles-BCopWTyc.js";import"./ToolbarRootContext-DwV7g7uX.js";import"./tick-BcP6gfmV.js";import"./svgIconContainer-B_LjJP-U.js";import"./small-cross-D2pF67Rj.js";import"./search-CznqLCy2.js";import"./cross-BlEfWoOy.js";import"./useValueChanged-BfhksQOL.js";import"./getPseudoElementBounds-CkNhuPMZ.js";import"./CompositeItem-XiaPpMq3.js";import"./makeExternalStore-82wrc-fZ.js";import"./BaseForm--GW6YJUx.js";import"./ActionButton-y0Novnh7.js";import"./Button-Cie7BQIA.js";import"./SkeletonBar-DP2T5nTp.js";import"./Tooltip-DlHQ0CXj.js";import"./info-sign-5Jp3CSTJ.js";import"./chevron-up-B8jThciJ.js";import"./chevron-down-UdMSp5ir.js";import"./useEventCallback-CUl5eVDE.js";import"./iconLoader-whJmUsjz.js";import"./Switch-BjE3MzxU.js";import"./CompositeRoot--gYXUvfe.js";import"./TimePicker-yU4fY7xk.js";import"./CollapsiblePanel-CCt5xsKY.js";import"./error-BhBB_kyZ.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-VuSz_R8I.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
