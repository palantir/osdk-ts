import{j as t,g as n}from"./iframe-97p3M09u.js";import{A as r}from"./action-form-Xj94UbAx.js";import"./preload-helper-CxVBxFAW.js";import"./DropdownField-CLkxqAQ8.js";import"./debounce-byeXsieX.js";import"./useOsdkClient-Db8XiLDB.js";import"./index-DVPCIdd3.js";import"./Input-CM6A8_jN.js";import"./useBaseUiId-DuQvLNdl.js";import"./useControlled-BVQhU86y.js";import"./index-mZLyQtJX.js";import"./index-DxXJGm8P.js";import"./PopoverPopup-Cv-T7MGp.js";import"./InternalBackdrop-DgKNXgWX.js";import"./composite-B7fVO-VQ.js";import"./index-WmjPk0xi.js";import"./getDisabledMountTransitionStyles-D7gTNN3D.js";import"./ToolbarRootContext-BkrLDfAz.js";import"./tick-CtNHx9U0.js";import"./svgIconContainer-BmP4bwRX.js";import"./small-cross-D6oSifG2.js";import"./search-C9oUUQa_.js";import"./cross-CaR0F6Vj.js";import"./useValueChanged-DmJ879ms.js";import"./getPseudoElementBounds-C3vtCcOF.js";import"./CompositeItem-goXUaz1O.js";import"./makeExternalStore-hGx-yTqS.js";import"./BaseForm-CjADeavE.js";import"./ActionButton-Cp3aDaBn.js";import"./Button-D31kv467.js";import"./SkeletonBar-scZGsopT.js";import"./Tooltip-DCQRgWv6.js";import"./info-sign-CIvJPVU7.js";import"./chevron-up-Wm3OZ7hh.js";import"./chevron-down-BW9trwrB.js";import"./useEventCallback-DsROmeik.js";import"./iconLoader-DCqxJZ9D.js";import"./Switch-D2QV4fHz.js";import"./CompositeRoot-BP4fWqzB.js";import"./TimePicker-CcxrVu4Y.js";import"./CollapsiblePanel-DfVnlVp0.js";import"./error-DutCoEmF.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-vNphc_NN.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
