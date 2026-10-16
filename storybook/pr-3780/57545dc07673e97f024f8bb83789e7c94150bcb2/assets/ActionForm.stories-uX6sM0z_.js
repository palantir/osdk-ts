import{j as t,g as n}from"./iframe-D7EFQRRI.js";import{A as r}from"./action-form-CYv7yOvb.js";import"./preload-helper-DBMS08LA.js";import"./DropdownField-DMJHlGEY.js";import"./debounce-r8k1w_qp.js";import"./useOsdkClient-BEOdzoOt.js";import"./index-B9Qvampu.js";import"./Input-HTLW9b7o.js";import"./useBaseUiId-COi7p9FR.js";import"./useControlled-Cf-FNH0o.js";import"./index-rAm3g95R.js";import"./index-DDeQJ70A.js";import"./PopoverPopup-C_I4MKVN.js";import"./InternalBackdrop-4x9DkIt7.js";import"./composite-Cv-Bf0NV.js";import"./index-Y14U1RM4.js";import"./getDisabledMountTransitionStyles-CFJHuyCX.js";import"./ToolbarRootContext-D62k46w9.js";import"./tick-CI4-naJe.js";import"./svgIconContainer-C7NvX0SX.js";import"./small-cross-DDGaf3lk.js";import"./search-BPccI-R0.js";import"./cross-DpjEKdZW.js";import"./useValueChanged-uhgfqj97.js";import"./getPseudoElementBounds-BOIO0YwO.js";import"./CompositeItem-CD0LNPn5.js";import"./makeExternalStore-BbrBxZRi.js";import"./BaseForm-Ct1AGdrp.js";import"./ActionButton-CCZJngrN.js";import"./Button-CJHmLXwA.js";import"./SkeletonBar-DW4oEvsQ.js";import"./Tooltip-D15tO1qp.js";import"./info-sign-rD03HtWB.js";import"./chevron-up-CjTpoPt2.js";import"./chevron-down-i0CR3gCi.js";import"./useEventCallback-GjhSB_CQ.js";import"./iconLoader-BHMFDAYH.js";import"./Switch-CuZF-cYC.js";import"./CompositeRoot-Bw6PjinX.js";import"./TimePicker-D5-iOnvI.js";import"./CollapsiblePanel-CBYHu2Hi.js";import"./error-BRWfMQ2f.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-B9e4IhYZ.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
