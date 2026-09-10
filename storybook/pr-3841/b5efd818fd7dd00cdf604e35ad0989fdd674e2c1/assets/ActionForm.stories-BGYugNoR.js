import{j as t,g as n}from"./iframe-B9IeBNGg.js";import{A as r}from"./action-form--KxW_Rq5.js";import"./preload-helper-ClkC783W.js";import"./DropdownField-DXf__6c2.js";import"./debounce-DavaxxZS.js";import"./useOsdkClient-CSJF8avV.js";import"./index-DybWhixB.js";import"./Input-Iq2bz4Jn.js";import"./useBaseUiId-CH6EGP3F.js";import"./useControlled-DKviyNQT.js";import"./index-CnuXrNj3.js";import"./index-CJqGIAUW.js";import"./PopoverPopup-Cyw_X9pn.js";import"./InternalBackdrop-gCLjnSXP.js";import"./composite-boJAotvg.js";import"./index-B4YI5UQN.js";import"./getDisabledMountTransitionStyles-DCV7TnnH.js";import"./ToolbarRootContext-B71dHQV4.js";import"./tick-Dbw2_oO_.js";import"./svgIconContainer-BmjXdC_z.js";import"./small-cross-DIgXmNYJ.js";import"./search-Deq1gtA1.js";import"./cross-BHBvGy8S.js";import"./useValueChanged-DEPR-2Hx.js";import"./getPseudoElementBounds-DpZ43xVJ.js";import"./CompositeItem-c0dv1mNX.js";import"./makeExternalStore-B8vFN8aQ.js";import"./BaseForm-DDIRCHdK.js";import"./ActionButton-f-P6g5hs.js";import"./Button-CoXfleKP.js";import"./SkeletonBar-C48ZenHQ.js";import"./Tooltip-BogKNoc8.js";import"./info-sign-BrgPwiYK.js";import"./chevron-up-DbfTWqEA.js";import"./chevron-down-CKtjlwoI.js";import"./useEventCallback-DbN_DqZs.js";import"./iconLoader-B9YQQ_um.js";import"./CompositeRoot-YP594CFC.js";import"./Switch-2xsdn5Rm.js";import"./TimePicker-BlBUPI6v.js";import"./CollapsiblePanel-B5ry5wH_.js";import"./error-Cg3e0-pZ.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-C0Di3XLY.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
