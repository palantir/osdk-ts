import{j as t,g as n}from"./iframe-CUIuiQ8M.js";import{A as r}from"./action-form-D8diQ5yj.js";import"./preload-helper-w0MMDoBI.js";import"./DropdownField-CUeKvgWP.js";import"./debounce-COj0D1HK.js";import"./useOsdkClient-B4O694Ba.js";import"./index-B5rq4E8c.js";import"./Input-CUX61x5u.js";import"./useBaseUiId-CO_Scg4B.js";import"./useControlled-AW4odFH0.js";import"./index-BXDM3eUI.js";import"./index-nHMpUj1A.js";import"./PopoverPopup-BR39rcA2.js";import"./InternalBackdrop-Y4Nj-4X1.js";import"./composite-CfWLpG35.js";import"./index-DkpbIJUD.js";import"./getDisabledMountTransitionStyles-vKVZiAas.js";import"./ToolbarRootContext-mQ2qjFjd.js";import"./tick-Clfa24KY.js";import"./svgIconContainer-XQGxfFa5.js";import"./small-cross-DaAqxcp4.js";import"./search-DuRjWaqd.js";import"./cross-BEDlXMDX.js";import"./useValueChanged-CL6SvqY3.js";import"./getPseudoElementBounds-QgHfLMx-.js";import"./CompositeItem-DqTHESiL.js";import"./makeExternalStore-elmJ7ql4.js";import"./BaseForm-DM5rqWLl.js";import"./ActionButton-DtPhv0MM.js";import"./Button-BsH4UFjg.js";import"./SkeletonBar-CwNsNlh8.js";import"./Tooltip-DLKdaeP_.js";import"./info-sign-CXp2IiYt.js";import"./chevron-up-Cr0e8Qqr.js";import"./chevron-down-BPe3l6Fo.js";import"./useEventCallback-C_grctXi.js";import"./iconLoader-oDaNoRBh.js";import"./Switch-DFVh9Dp5.js";import"./CompositeRoot-Bura2FJa.js";import"./TimePicker-HCJlY_X8.js";import"./CollapsiblePanel-CUDS3fRJ.js";import"./error-BGt6yMaY.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CQMJUMD-.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
