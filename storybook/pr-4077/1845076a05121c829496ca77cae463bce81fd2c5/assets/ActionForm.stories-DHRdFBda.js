import{j as t,g as n}from"./iframe-BcWEdWfB.js";import{A as r}from"./action-form-CwgQL4hv.js";import"./preload-helper-CVa1rIJ3.js";import"./DropdownField-B8TqC271.js";import"./debounce-B-M85eRT.js";import"./useOsdkClient-Cb16LKZK.js";import"./index-CwkFMZjv.js";import"./Input-BARy-z-s.js";import"./useBaseUiId-DAACsJ_e.js";import"./useControlled-BOuSIVI5.js";import"./index-oIyMgkgm.js";import"./index-cVAitoMW.js";import"./PopoverPopup-C8yuAyjI.js";import"./InternalBackdrop-CE9SLGDS.js";import"./composite-C2TbRxj5.js";import"./index-BtKdi8uW.js";import"./getDisabledMountTransitionStyles-2lA8cPr-.js";import"./ToolbarRootContext-C3UpIzPe.js";import"./tick-DjnJsHe3.js";import"./svgIconContainer-D3wylWJt.js";import"./small-cross-BoP5SHxC.js";import"./search-BS0hsyoc.js";import"./cross-BZ3hgBtX.js";import"./useValueChanged-DOMZUlbB.js";import"./getPseudoElementBounds-ykQ7nCp3.js";import"./CompositeItem-3OABFBu2.js";import"./makeExternalStore-DAxtPfWd.js";import"./BaseForm-99yRGFRe.js";import"./ActionButton-BIm8wQj8.js";import"./Button-BuWDqgqc.js";import"./SkeletonBar-vf1eVt6J.js";import"./Tooltip-BwYW0r-w.js";import"./info-sign-Dt5f571f.js";import"./chevron-up-CWgKr7rQ.js";import"./chevron-down-BTTnF4Fu.js";import"./useEventCallback-ZJD0lbuw.js";import"./iconLoader-DLddjLhG.js";import"./Switch-BDZaeriQ.js";import"./CompositeRoot-B09OoZAG.js";import"./TimePicker-HucQybOS.js";import"./CollapsiblePanel-VV5j-F5g.js";import"./error-Dx8WDHU2.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-YvSA4_Vm.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
