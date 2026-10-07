import{j as t,g as n}from"./iframe-Dsupwakr.js";import{A as r}from"./action-form-jYxahznh.js";import"./preload-helper-CR7mXLCL.js";import"./DropdownField-7N09oAJb.js";import"./debounce-FnFOEK_K.js";import"./useOsdkClient-3MHXKvwo.js";import"./index-CkpgR3fu.js";import"./Input-C5vpLtnd.js";import"./useBaseUiId-DzCfcDkQ.js";import"./useControlled-CqadE3GD.js";import"./index-B_g_AMfh.js";import"./index-ChctX4zI.js";import"./PopoverPopup-BdZyFeD4.js";import"./InternalBackdrop-TqY-ZmCF.js";import"./composite-HdCWnL8f.js";import"./index-CkY0X6aD.js";import"./getDisabledMountTransitionStyles-C4yseyHM.js";import"./ToolbarRootContext-BtvPE-us.js";import"./tick-hPempDzT.js";import"./svgIconContainer-C-Aw8Ccc.js";import"./small-cross-lpp9GSO5.js";import"./search-B3WEXmh0.js";import"./cross-CWb-HvPA.js";import"./useValueChanged-D8HWHRkD.js";import"./getPseudoElementBounds-C9z3taTH.js";import"./CompositeItem-B9L7nJBI.js";import"./makeExternalStore-cmPwX49q.js";import"./BaseForm-B51mTGpq.js";import"./ActionButton-DFIDoYFE.js";import"./Button-D1tcxnZe.js";import"./SkeletonBar-CS_2Phj-.js";import"./Tooltip-CcYrLi8s.js";import"./info-sign-Dv_vWrfd.js";import"./chevron-up-CVk7Qd1e.js";import"./chevron-down-CDVIUa1b.js";import"./useEventCallback-hg8NIUwU.js";import"./iconLoader-DUcbrqsB.js";import"./Switch-Bz7uCpt1.js";import"./CompositeRoot-AbTQ-SnI.js";import"./TimePicker-VrrBUjf9.js";import"./CollapsiblePanel-DHvmYoFQ.js";import"./error-CLndc-8a.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Chrjv6Bf.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
