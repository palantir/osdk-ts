import{j as t,g as n}from"./iframe-BTbJEw_E.js";import{A as r}from"./action-form-CO-uHloD.js";import"./preload-helper-aCGplSKY.js";import"./DropdownField-BGUtXP7T.js";import"./debounce-B6qaA1VO.js";import"./useOsdkClient-CpDEON-O.js";import"./index-DWkrnykr.js";import"./Input-C3RqpoyV.js";import"./useBaseUiId-lBVa_0WJ.js";import"./useControlled-B9izrDgZ.js";import"./index-DdrvFQuO.js";import"./index-18NAXc1Y.js";import"./isObject-1bmMeuQz.js";import"./InternalBackdrop-Ckm1dtBk.js";import"./composite-B7RMGscZ.js";import"./index-AGrLxoIE.js";import"./getDisabledMountTransitionStyles-xzPhtnb4.js";import"./ToolbarRootContext-BJqUIRif.js";import"./tick-iJfDowrv.js";import"./svgIconContainer-DggOleom.js";import"./small-cross-DGcKzG3K.js";import"./search-DBgBL-mB.js";import"./cross-AwvJd_Ud.js";import"./useValueChanged-BSAVVzsI.js";import"./getPseudoElementBounds-BFGsCRAr.js";import"./CompositeItem-BnF_A8n_.js";import"./makeExternalStore-Cj_xL18b.js";import"./BaseForm-B-Pe5xUw.js";import"./ActionButton-BWBnELV1.js";import"./Button-vTo8rp-4.js";import"./SkeletonBar-CvQ0kAkc.js";import"./Tooltip-CZNUyLi_.js";import"./info-sign-Dp5Yx6U8.js";import"./chevron-up-DB-4H1xK.js";import"./chevron-down-CXkrXU2j.js";import"./useEventCallback-C5SBM2zO.js";import"./iconLoader-BBmcjyTT.js";import"./Switch-Cx3gxBKx.js";import"./CompositeRoot-BWaybkeT.js";import"./TimePicker-B-Z8U9oL.js";import"./CollapsiblePanel-Cweq_HxM.js";import"./error-wWqS_WOM.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-eBRijj-i.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
