import{j as t,g as n}from"./iframe-C-vShDHk.js";import{A as r}from"./action-form-DcYUYL52.js";import"./preload-helper-B2rWRkvC.js";import"./DropdownField-8AdR6NdB.js";import"./debounce-Bbzc0_G8.js";import"./useOsdkClient-DoM56k-f.js";import"./index-Cx2OgQ-2.js";import"./Input-ChQ78XH9.js";import"./useBaseUiId-CVgLKRhh.js";import"./useControlled-TStxGFbD.js";import"./index-D6DLWMjA.js";import"./index-MAhWZ1KQ.js";import"./PopoverPopup-OKdPLocf.js";import"./InternalBackdrop-XSBRP9bo.js";import"./composite-BHa_u3nf.js";import"./index-qTup-brw.js";import"./getDisabledMountTransitionStyles-C4qD4WmU.js";import"./ToolbarRootContext-JfRNTAAS.js";import"./tick-DHJZpSr9.js";import"./svgIconContainer-BXOzj86j.js";import"./small-cross-BX5QWifh.js";import"./search-D9klcMPO.js";import"./cross-CPOUhrWH.js";import"./useValueChanged-CG5ViM36.js";import"./getPseudoElementBounds-BF0_fsUP.js";import"./CompositeItem-DCzVtAix.js";import"./makeExternalStore-ChsmDhDe.js";import"./BaseForm-RBt9wk6J.js";import"./ActionButton-DSWfmCy7.js";import"./Button-LZsipjsn.js";import"./SkeletonBar-CHZBGodV.js";import"./Tooltip-BVcNQFLP.js";import"./info-sign-nd5sx9Qw.js";import"./chevron-up-jfJEWVzR.js";import"./chevron-down-BslLGd1l.js";import"./useEventCallback-CQwRrFQE.js";import"./iconLoader-D9bU38Iw.js";import"./Switch-DkX0kn44.js";import"./CompositeRoot-Do48ivJ8.js";import"./TimePicker-ADobxdb8.js";import"./CollapsiblePanel-CaYYpdck.js";import"./error-Dym_fJRU.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-195aR8r9.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
