import{j as t,g as n}from"./iframe-DUenp6lH.js";import{A as r}from"./action-form-D_z2xeGG.js";import"./preload-helper-BrQ2IwN3.js";import"./DropdownField-CKAcXByL.js";import"./debounce-BqwG49z-.js";import"./useOsdkClient-ByG7-mm8.js";import"./index-CR7YeDMv.js";import"./Input-D9S29-Xm.js";import"./useBaseUiId-C5AD1Gq1.js";import"./useControlled-CqXkm6hT.js";import"./index-DiIhoR1V.js";import"./index-Ki6h912l.js";import"./PopoverPopup-BoCkIIy2.js";import"./InternalBackdrop-BOQvDSVB.js";import"./composite-cl-eg-Mr.js";import"./index-DzdVgYkQ.js";import"./getDisabledMountTransitionStyles-B1jh3EhZ.js";import"./ToolbarRootContext-CHqPptLt.js";import"./tick-Bkdmgl55.js";import"./svgIconContainer-CPPwWmWb.js";import"./small-cross-Gsoau07o.js";import"./search-DYKYo547.js";import"./cross-DwLsQDiH.js";import"./useValueChanged-BebdI0MG.js";import"./getPseudoElementBounds-DK2fCaAe.js";import"./CompositeItem-C4zuFT9w.js";import"./makeExternalStore-8dLgdQIB.js";import"./BaseForm-w446Gu4w.js";import"./ActionButton-DG7GAKjE.js";import"./Button-HrxQOGa9.js";import"./SkeletonBar-CnPy04Zb.js";import"./Tooltip-B4-11Oly.js";import"./info-sign-DVgEr4qr.js";import"./chevron-up-B2sbYsO1.js";import"./chevron-down-iXJuV4q7.js";import"./useEventCallback-DwkKTB_T.js";import"./iconLoader-BXQhGkFT.js";import"./CompositeRoot-Cem-KCcr.js";import"./Switch-CxeJ-b4D.js";import"./TimePicker-muGRR1_t.js";import"./CollapsiblePanel-DyVSO9SW.js";import"./error-BN9liXL6.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Zv84aaRv.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
