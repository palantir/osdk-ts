import{j as t,g as n}from"./iframe-BjnXfZ9H.js";import{A as r}from"./action-form-C0Cw5d41.js";import"./preload-helper-bepxIrLy.js";import"./DropdownField-CDdmQF3S.js";import"./debounce-BbeoZOOC.js";import"./useOsdkClient-ByYF3VD2.js";import"./index-BelFyW9j.js";import"./Input-DOBVQBLE.js";import"./useBaseUiId--nXvl9pb.js";import"./useControlled-30IDLW3T.js";import"./index-B42gKKnv.js";import"./index-BA9yDYNK.js";import"./PopoverPopup-C-RgfkQV.js";import"./InternalBackdrop-BLN5UK4x.js";import"./composite-CmHNarO8.js";import"./index-DuJvB77H.js";import"./getDisabledMountTransitionStyles-DPwXStNv.js";import"./ToolbarRootContext-Dapwrg0X.js";import"./tick-_NQRZlmZ.js";import"./svgIconContainer-CwvuHzUD.js";import"./small-cross-D7Hbyjsr.js";import"./search-4U4uPWIz.js";import"./cross-Ca4hBGJI.js";import"./useValueChanged-A_lNNdYi.js";import"./getPseudoElementBounds-CpUcIsOX.js";import"./CompositeItem-DVl86_s7.js";import"./makeExternalStore-C1Xa5Pr9.js";import"./BaseForm-r4VTfzrz.js";import"./ActionButton-CQYbxlLb.js";import"./Button-87n6zTQD.js";import"./SkeletonBar-DfILH45u.js";import"./Tooltip-C16yb5G_.js";import"./info-sign-B8eudYgV.js";import"./chevron-up-DsjO8iRj.js";import"./chevron-down-C_lHJsgk.js";import"./useEventCallback-BKqRKbmG.js";import"./iconLoader-tG-b7vek.js";import"./CompositeRoot-Djh9YnPA.js";import"./Switch-DozqsidC.js";import"./TimePicker-DN35g8ZX.js";import"./CollapsiblePanel-CS2mE_oJ.js";import"./error-B6h0Ljte.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-9hdMnSaG.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/experimental";

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
        code: \`import { ActionForm } from "@osdk/react-components/experimental";

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
