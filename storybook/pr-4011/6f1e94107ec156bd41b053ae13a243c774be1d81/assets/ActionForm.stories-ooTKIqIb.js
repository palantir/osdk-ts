import{j as t,g as n}from"./iframe-CxIn-rG9.js";import{A as r}from"./action-form-fj8j1miP.js";import"./preload-helper-X6xNaBfi.js";import"./DropdownField-e5290CV8.js";import"./debounce-DN6pYKk6.js";import"./useOsdkClient-BIrOkiuO.js";import"./index-DFQNuVuF.js";import"./Input-DMEekJro.js";import"./useBaseUiId-B2Xt2brM.js";import"./useControlled-DojYWrxF.js";import"./index-DDGK9wch.js";import"./index-CC8ad_XL.js";import"./PopoverPopup-BndJ4L0f.js";import"./InternalBackdrop-Du9CNWbl.js";import"./composite-BqqFykrE.js";import"./index-Dk7lf_Pd.js";import"./getDisabledMountTransitionStyles-DlmAc0el.js";import"./ToolbarRootContext-O9MvMR3V.js";import"./tick-DnpOCE6f.js";import"./svgIconContainer-c9igszEF.js";import"./small-cross-BY7zwxBs.js";import"./search-jqi3oncJ.js";import"./cross-TMn9ETj9.js";import"./useValueChanged-Cykl9Has.js";import"./getPseudoElementBounds-8yyQ5dXu.js";import"./CompositeItem-AwSF7S2C.js";import"./makeExternalStore-CFux59qT.js";import"./BaseForm-C11LXmNM.js";import"./ActionButton-qIvloGNZ.js";import"./Button-B9HFamKv.js";import"./SkeletonBar-BBK8X7z7.js";import"./Tooltip-BY1oJx1C.js";import"./info-sign-WPrXagtM.js";import"./chevron-up-A5u2TI9Q.js";import"./chevron-down-kODRI2uy.js";import"./useEventCallback-B1iES3kj.js";import"./iconLoader-r8tLM4j5.js";import"./CompositeRoot-C-9VwybT.js";import"./Switch-BXg1YYwq.js";import"./TimePicker-BuHtEyBO.js";import"./CollapsiblePanel-LVh3LC_t.js";import"./error-LS_wz8gU.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Ci9E-Vmh.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
