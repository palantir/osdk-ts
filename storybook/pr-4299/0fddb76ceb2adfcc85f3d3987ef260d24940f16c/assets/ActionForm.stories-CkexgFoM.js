import{j as t,g as n}from"./iframe-CBNJ8HWE.js";import{A as r}from"./action-form-CqTNDklj.js";import"./preload-helper-D-aeZqn2.js";import"./DropdownField-Xxjx_nIV.js";import"./debounce-DK-9Ersu.js";import"./useOsdkClient-D0-D6lZc.js";import"./index-Dae7Nrzr.js";import"./Input-j-S77mRt.js";import"./useBaseUiId-OM3pRXHK.js";import"./useControlled-BpsS1h83.js";import"./index-BDSNEOy8.js";import"./index-BbBV-ipX.js";import"./PopoverPopup-DbRag64C.js";import"./InternalBackdrop-CpbO4ilr.js";import"./composite-DVVFhOLL.js";import"./index-BXIyua5V.js";import"./getDisabledMountTransitionStyles-Dq0tUHT-.js";import"./ToolbarRootContext-DGgj03xf.js";import"./tick-sVfQea33.js";import"./svgIconContainer-Cmsji56X.js";import"./small-cross-uu7GABB3.js";import"./search-ctIWqbIr.js";import"./cross-IIpRFnCv.js";import"./useValueChanged-B6AjTcH0.js";import"./getPseudoElementBounds-BkaQV1Oc.js";import"./CompositeItem-CFJInvfd.js";import"./makeExternalStore-BJGSOQw4.js";import"./BaseForm-BNMuPfUN.js";import"./ActionButton-BFsA5ZAh.js";import"./Button-nKcb30G0.js";import"./SkeletonBar-BAwTWyeA.js";import"./Tooltip-urAvcjFd.js";import"./info-sign-Xq2Z53N_.js";import"./chevron-up-D3ci6q-C.js";import"./chevron-down-Df7Rgxm0.js";import"./useEventCallback-CnH-PQd4.js";import"./iconLoader-BnoCUSXA.js";import"./Switch-CGPaOlcX.js";import"./CompositeRoot-D1r1QqxZ.js";import"./TimePicker-Df9lVjp9.js";import"./CollapsiblePanel-NQPBhepg.js";import"./error-CtfkQOQ0.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CqZNs336.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
