import{j as t,g as n}from"./iframe-DSCKXMMn.js";import{A as r}from"./action-form-C-BTjGeP.js";import"./preload-helper-ByptHhz6.js";import"./DropdownField-B7i6TyJK.js";import"./debounce-CC8-tWmy.js";import"./useOsdkClient-BI1XigGe.js";import"./index-C7t8d6sq.js";import"./Input-BzhFYkRc.js";import"./useBaseUiId-C9Ey5z8I.js";import"./useControlled-D9fcHZz8.js";import"./index-CCGpCs03.js";import"./index-DTvEyVWA.js";import"./PopoverPopup-wHBjGNnn.js";import"./InternalBackdrop-DJscdhsG.js";import"./composite-CJGYUM8R.js";import"./index-BEvWt0A3.js";import"./getDisabledMountTransitionStyles-MuBPPf6T.js";import"./ToolbarRootContext-DcygcfWk.js";import"./tick-DglZI497.js";import"./svgIconContainer-D4l9MrWe.js";import"./small-cross-ClLnfsZa.js";import"./search-D1zNkldZ.js";import"./cross-D9ih38aN.js";import"./useValueChanged-CJeLgR2q.js";import"./getPseudoElementBounds-BMTzjDxj.js";import"./CompositeItem-DuylraaY.js";import"./makeExternalStore-BTu3d_5y.js";import"./BaseForm-Dut14xyr.js";import"./ActionButton-CDDQzDqj.js";import"./Button-DsHbP2Ls.js";import"./SkeletonBar-DseYvX2N.js";import"./Tooltip-BjyKOyVF.js";import"./info-sign-B9bIwXDT.js";import"./chevron-up-DELVbimy.js";import"./chevron-down-CoJlRxaZ.js";import"./useEventCallback-B0RejaLo.js";import"./iconLoader-BsJcWIgs.js";import"./Switch-CKUVxiVZ.js";import"./CompositeRoot-ZRLs-cek.js";import"./TimePicker-CjIbDCpW.js";import"./CollapsiblePanel-CwSDo6aL.js";import"./error-KXOxkvIx.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DIi3nPfP.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
