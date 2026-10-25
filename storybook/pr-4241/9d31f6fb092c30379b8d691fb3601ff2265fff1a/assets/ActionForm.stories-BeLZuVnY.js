import{j as t,g as n}from"./iframe-nl_vu0vo.js";import{A as r}from"./action-form-CMXHk3cE.js";import"./preload-helper-Dj6yhN1L.js";import"./DropdownField-BU9E5XBo.js";import"./debounce-DmK_7Xqg.js";import"./useOsdkClient-D5Z564TK.js";import"./index-Bw4Di_Av.js";import"./Input-DsULXrnF.js";import"./useBaseUiId-BIN8dWsl.js";import"./useControlled-BwxmcO0L.js";import"./index-DbGOmI0j.js";import"./index-Bt64noRU.js";import"./PopoverPopup-ClK3uhCd.js";import"./InternalBackdrop-BwYnyTy7.js";import"./composite-BrMY9sNC.js";import"./index-B_91enxX.js";import"./getDisabledMountTransitionStyles-CTsc8Cvf.js";import"./ToolbarRootContext-C4XGK6eV.js";import"./tick-C_3Us6Ua.js";import"./svgIconContainer-dVj22x2p.js";import"./small-cross-qF70xz6k.js";import"./search-Cx3JC5DT.js";import"./cross-BwLhOV3t.js";import"./useValueChanged-D8sRyeVl.js";import"./getPseudoElementBounds-Dgz0mXJB.js";import"./CompositeItem-ylAvuyxw.js";import"./makeExternalStore-lr4yKVc-.js";import"./BaseForm-v5CjiaQv.js";import"./ActionButton-DNw29PFB.js";import"./Button-B0tw-VeI.js";import"./SkeletonBar-Cf0WHzle.js";import"./Tooltip-BDbtIfcD.js";import"./info-sign-SLn7JQn5.js";import"./chevron-up-GkIkPLav.js";import"./chevron-down-Cg1zW2dH.js";import"./useEventCallback-Clb2jbe4.js";import"./iconLoader-Ckx9A12S.js";import"./Switch-8_N6daoP.js";import"./CompositeRoot-D3g13w29.js";import"./TimePicker-B9Yb0QV8.js";import"./CollapsiblePanel-CIkexinm.js";import"./error-CXoZGWHU.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DScTmPNl.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
