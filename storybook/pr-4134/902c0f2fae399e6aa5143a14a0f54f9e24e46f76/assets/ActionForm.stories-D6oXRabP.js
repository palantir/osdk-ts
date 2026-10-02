import{j as t,g as n}from"./iframe-Bhu5go17.js";import{A as r}from"./action-form-t3s9J9zz.js";import"./preload-helper-BSWPIZ9o.js";import"./DropdownField-S5eVipBF.js";import"./debounce-5wYFOWPv.js";import"./useOsdkClient-CqOWvh60.js";import"./index-BczdwF9K.js";import"./Input-BJnqdqBy.js";import"./useBaseUiId-DjMEAOTb.js";import"./useControlled-BGnzZuWo.js";import"./index-CuqdVt9a.js";import"./index-BWunv9eA.js";import"./PopoverPopup-N9jR4N_b.js";import"./InternalBackdrop-CxE63-bR.js";import"./composite-uZlHnppD.js";import"./index-C1X1ILrQ.js";import"./getDisabledMountTransitionStyles-CwjdI3sa.js";import"./ToolbarRootContext-B9BOuPbm.js";import"./tick-ByjNKKea.js";import"./svgIconContainer-Bcnn9wIP.js";import"./small-cross-tIwGRVh9.js";import"./search-x6Mg2DJR.js";import"./cross-CkWL52XL.js";import"./useValueChanged-DCvj2vHv.js";import"./getPseudoElementBounds-MRfF10fy.js";import"./CompositeItem-Jhmf5Smc.js";import"./makeExternalStore-BTwq4qvu.js";import"./BaseForm-CbtnuSow.js";import"./ActionButton-B4l5Ynsa.js";import"./Button-DVcXfrSy.js";import"./SkeletonBar-DfPaevzv.js";import"./Tooltip-DljM22fJ.js";import"./info-sign-BNwovgf1.js";import"./chevron-up-C9DJ2khF.js";import"./chevron-down-CB9qX917.js";import"./useEventCallback-B5a6fAJF.js";import"./iconLoader-DKx6FBwJ.js";import"./Switch-Dt0_vPI4.js";import"./CompositeRoot-DpRdut-O.js";import"./TimePicker-DqH2C8CX.js";import"./CollapsiblePanel-CAZpLduE.js";import"./error-DUAUa5ZT.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-pTv3z3ht.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
