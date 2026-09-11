import{j as t,g as n}from"./iframe-DUUN6t7i.js";import{A as r}from"./action-form-DXEHtXJW.js";import"./preload-helper-BzY2PQK8.js";import"./DropdownField-DUhPo9yt.js";import"./debounce-CCRuevd-.js";import"./useOsdkClient-BfrDVP7e.js";import"./index-CllJbB6n.js";import"./Input-eja5fv_S.js";import"./useBaseUiId-DD-rnAgn.js";import"./useControlled-OksHndqL.js";import"./index-CF3EfJQa.js";import"./index-Cyo2_RId.js";import"./PopoverPopup-Bh2SXv5G.js";import"./InternalBackdrop-50xUnS5H.js";import"./composite-DXLhbd5q.js";import"./index-zmjPNORe.js";import"./getDisabledMountTransitionStyles-DUae_uwF.js";import"./ToolbarRootContext-sOFoFOUi.js";import"./tick-CVC53zOF.js";import"./svgIconContainer-BiEJIKWJ.js";import"./small-cross-Brklb7bd.js";import"./search-BOFS1DOk.js";import"./cross-BL0CmC8v.js";import"./useValueChanged-DbYhsi4t.js";import"./getPseudoElementBounds-BVQl0rR8.js";import"./CompositeItem-C7oLwUzE.js";import"./makeExternalStore-DSCive7G.js";import"./BaseForm-DTeJUkz6.js";import"./ActionButton-Dc9XrfLH.js";import"./Button-BiBj2Ngy.js";import"./SkeletonBar-D_7uUrgz.js";import"./Tooltip-2hA_c5uF.js";import"./info-sign-B-x88aJ8.js";import"./chevron-up-D1sI8car.js";import"./chevron-down-9ao4cWz0.js";import"./useEventCallback-C8EWv1mM.js";import"./iconLoader-DzJSaEco.js";import"./CompositeRoot-Ce_1Mdri.js";import"./Switch-CiQvB58S.js";import"./TimePicker-vT1vnvS0.js";import"./CollapsiblePanel-DY2xqSav.js";import"./error-Btl2ABt3.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-YnroKoAT.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
