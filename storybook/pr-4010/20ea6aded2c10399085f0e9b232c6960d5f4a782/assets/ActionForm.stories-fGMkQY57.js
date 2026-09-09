import{j as t,g as n}from"./iframe-CMVepAJE.js";import{A as r}from"./action-form-MvUfYgN0.js";import"./preload-helper-B-pat0t1.js";import"./DropdownField-B3BsKGIg.js";import"./debounce-DwOMz3I5.js";import"./useOsdkClient-9-M1ms6x.js";import"./index-DjkhfCfT.js";import"./Input-BrboKIWX.js";import"./useBaseUiId-DzJi2twx.js";import"./useControlled-BNdmAelW.js";import"./index-DFWQdO8O.js";import"./index-D8Snt0rf.js";import"./PopoverPopup-Db5oD-HC.js";import"./InternalBackdrop-D5ExGecl.js";import"./composite-BNbUAYfg.js";import"./index-tAYlbVzq.js";import"./getDisabledMountTransitionStyles-DeWLLfFW.js";import"./ToolbarRootContext-qvOmnhBt.js";import"./tick-OGu8ycnQ.js";import"./svgIconContainer-Bbnic8gm.js";import"./small-cross-Daxd_o57.js";import"./search-ByupdJIi.js";import"./cross-Bt6SdNHm.js";import"./useValueChanged-2qNB1H9S.js";import"./getPseudoElementBounds-CLKaAdce.js";import"./CompositeItem-DR4WY-BM.js";import"./makeExternalStore-CylZcwCT.js";import"./BaseForm-D630h5JH.js";import"./ActionButton-7uiQn5bN.js";import"./Button-Rom60jiD.js";import"./SkeletonBar-DMdShgvr.js";import"./Tooltip-CpbJ4M8Z.js";import"./info-sign-C9MOqkdU.js";import"./chevron-up-CkEC6eU2.js";import"./chevron-down-DvYjBW4w.js";import"./useEventCallback-BNdTIoO0.js";import"./iconLoader-8J8l4qXj.js";import"./CompositeRoot-DelFyLZl.js";import"./Switch-BE_PEFQl.js";import"./TimePicker-D5N6gQeN.js";import"./CollapsiblePanel-DRHJsQ_R.js";import"./error-BP38p0Wz.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-fhlMSJmK.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
