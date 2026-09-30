import{j as t,g as n}from"./iframe-BqOAaVYX.js";import{A as r}from"./action-form-BBZD5SLQ.js";import"./preload-helper-DfAqa6Ns.js";import"./DropdownField-p3inN5wv.js";import"./debounce-ZhhJhx1c.js";import"./useOsdkClient-tsebv1JW.js";import"./index-hhMnxhy8.js";import"./Input-DGoYfUS_.js";import"./useBaseUiId-D8PXSJwD.js";import"./useControlled-Cw0rstUZ.js";import"./index-D2HyYCxp.js";import"./index-W1jvd9mH.js";import"./PopoverPopup-CpsJz6b_.js";import"./InternalBackdrop-BGIegr0x.js";import"./composite-FQnt6Ug_.js";import"./index-BV9JiV1x.js";import"./getDisabledMountTransitionStyles-BkrhF4eN.js";import"./ToolbarRootContext-Db3ZHaqK.js";import"./tick-CuisNnxV.js";import"./svgIconContainer-fHQR-WGO.js";import"./small-cross-Ce9UNZ-K.js";import"./search-BrbOR0sP.js";import"./cross-VDw2oJTP.js";import"./useValueChanged-DoWuflaR.js";import"./getPseudoElementBounds-vNNMy6F8.js";import"./CompositeItem-lsMfNC7P.js";import"./makeExternalStore-BiBaRYea.js";import"./BaseForm-Cm594OBu.js";import"./ActionButton-yXrzzXD9.js";import"./Button-DLn-Tp2Y.js";import"./SkeletonBar-CCrdDLAf.js";import"./Tooltip-Dg7ObhIp.js";import"./info-sign-Cmrtt90a.js";import"./chevron-up-CX9ShSqo.js";import"./chevron-down-CWxaKaem.js";import"./useEventCallback-B27Rxp7L.js";import"./iconLoader-B-UlQQRT.js";import"./Switch-CFQBPlpu.js";import"./CompositeRoot-_ulds24G.js";import"./TimePicker-mQPFqTie.js";import"./CollapsiblePanel-BoQbvN_j.js";import"./error-BmfSiLn5.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DCrwrvzV.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
