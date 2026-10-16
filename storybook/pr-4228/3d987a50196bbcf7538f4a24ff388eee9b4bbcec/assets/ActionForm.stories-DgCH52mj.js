import{j as t,g as n}from"./iframe-D48Q2Ih8.js";import{A as r}from"./action-form-CjEMuUCL.js";import"./preload-helper-CL77aTRo.js";import"./DropdownField-BzDGU56S.js";import"./debounce-B6B9DlWV.js";import"./useOsdkClient-BH3gu2IN.js";import"./index-BAc81QxV.js";import"./Input-BYdVsABv.js";import"./useBaseUiId-DGTp0U_O.js";import"./useControlled-CFgtbz8z.js";import"./index-DKv9tcd8.js";import"./index-CMlea4RE.js";import"./PopoverPopup-CTXF1CIh.js";import"./InternalBackdrop-C1aj-xTs.js";import"./composite-AHBdhfMT.js";import"./index-BHqJ1oa6.js";import"./getDisabledMountTransitionStyles-CW-RwN9m.js";import"./ToolbarRootContext-RyVic0HL.js";import"./tick-Clvl1m1w.js";import"./svgIconContainer-C8Iv3sR3.js";import"./small-cross-DjM-LCX5.js";import"./search-C9PzHLND.js";import"./cross-7sczFfzI.js";import"./useValueChanged-_pNhoUMT.js";import"./getPseudoElementBounds-9xeptCZR.js";import"./CompositeItem-CIsGCI0M.js";import"./makeExternalStore-CP04809A.js";import"./BaseForm-7yPaI3i-.js";import"./ActionButton-DXiBkKho.js";import"./Button-CRna_EZj.js";import"./SkeletonBar-B5oNwZvF.js";import"./Tooltip-UTWEnQHo.js";import"./info-sign-C1fdIxLP.js";import"./chevron-up-DpbWoxka.js";import"./chevron-down-BKXBxbNC.js";import"./useEventCallback-aEIzFPGy.js";import"./iconLoader-BGLePWzQ.js";import"./Switch-C2BnCyTk.js";import"./CompositeRoot-BFpwLrpz.js";import"./TimePicker-DtKJUU08.js";import"./CollapsiblePanel-otyxGyv7.js";import"./error-CmBzdsaE.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-D4HQPyjO.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
