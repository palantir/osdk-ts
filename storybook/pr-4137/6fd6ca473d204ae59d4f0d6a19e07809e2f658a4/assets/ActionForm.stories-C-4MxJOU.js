import{j as t,g as n}from"./iframe-BolfAo4P.js";import{A as r}from"./action-form-CsOlNouH.js";import"./preload-helper-ByLp_rEH.js";import"./DropdownField-1RfM4rou.js";import"./debounce-B4mSXpkc.js";import"./useOsdkClient-BZmtEJhW.js";import"./index-Dmp4oRqW.js";import"./Input-DnQW0UEK.js";import"./useBaseUiId-DvZ-ac1w.js";import"./useControlled-C5FT7OgD.js";import"./index-Bt9kKuNp.js";import"./index-Cea80THD.js";import"./PopoverPopup-CE-WFncL.js";import"./InternalBackdrop-DZT8OdtD.js";import"./composite-kotVvYj1.js";import"./index-D4xBMDlg.js";import"./getDisabledMountTransitionStyles-D2DQ87Q4.js";import"./ToolbarRootContext-Dsfyi3tb.js";import"./tick-CY1tZTIW.js";import"./svgIconContainer-zqDwx0Og.js";import"./small-cross-CxRkjASt.js";import"./search-Sp-9ghy3.js";import"./cross-CPB91upb.js";import"./useValueChanged-DaE8aoFn.js";import"./getPseudoElementBounds-JSG5w0o1.js";import"./CompositeItem-BQgJHL6C.js";import"./makeExternalStore-B6jLw3hY.js";import"./BaseForm-CosqkOZr.js";import"./ActionButton-duX_H6Q1.js";import"./Button-D-ABdEsl.js";import"./SkeletonBar-DUdd9eS6.js";import"./Tooltip-SA4YBfEO.js";import"./info-sign-DOwjxSDZ.js";import"./chevron-up-DQQUjxtC.js";import"./chevron-down-Bj7fILeX.js";import"./useEventCallback-CGEex2j7.js";import"./iconLoader-DOZ-JyBH.js";import"./Switch-DwJI3LsN.js";import"./CompositeRoot-B2zEO4pR.js";import"./TimePicker-C-kwtnLe.js";import"./CollapsiblePanel-CpsBsEMc.js";import"./error-Dnl49oZI.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DkkczEbv.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
