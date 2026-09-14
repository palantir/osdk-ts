import{j as t,g as n}from"./iframe-D3x4g0gw.js";import{A as r}from"./action-form-BzSWmCin.js";import"./preload-helper-DpKiFXQE.js";import"./DropdownField-BTbdugIo.js";import"./debounce-Dgw7wFze.js";import"./useOsdkClient-CcBCF4jU.js";import"./index-DmJVhxkC.js";import"./Input-D7XVlSnc.js";import"./useBaseUiId-Cza7NB65.js";import"./useControlled-u8Kd9MbQ.js";import"./index-BFwtMTR7.js";import"./index-CHX_y3YQ.js";import"./PopoverPopup-BJayu4w5.js";import"./InternalBackdrop-DRfabTHE.js";import"./composite-CbVzOtkL.js";import"./index-BM_v9pt3.js";import"./getDisabledMountTransitionStyles-BDg7WwLA.js";import"./ToolbarRootContext-D-JTlGY6.js";import"./tick-E3YA_PC9.js";import"./svgIconContainer-Ch07AZiN.js";import"./small-cross-DojPJSHV.js";import"./search-Vpq8vYa6.js";import"./cross-noZD8yCQ.js";import"./useValueChanged-Cm3ghXGz.js";import"./getPseudoElementBounds-m4kZMHaS.js";import"./CompositeItem-C81j0gfv.js";import"./makeExternalStore-B-EBN1-5.js";import"./BaseForm-CDKBYCER.js";import"./ActionButton-D4pNdjo7.js";import"./Button-waIQuOK_.js";import"./SkeletonBar-BBCGvtlx.js";import"./Tooltip-Cny1QPUK.js";import"./info-sign-h9SYLxUi.js";import"./chevron-up-DgNf9jm_.js";import"./chevron-down-F1u7ETIP.js";import"./useEventCallback-DKxR4GSB.js";import"./iconLoader-DaR9rPvR.js";import"./CompositeRoot-deDqMk6G.js";import"./Switch-ubzTY51F.js";import"./TimePicker-KWou6pGC.js";import"./CollapsiblePanel-MtWIBxII.js";import"./error-EOjqK743.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-q2ysVhnq.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
