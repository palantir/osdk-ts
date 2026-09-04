import{j as t,g as n}from"./iframe-sCC61k92.js";import{A as r}from"./action-form-Dbeilnt8.js";import"./preload-helper-Dp1pzeXC.js";import"./DropdownField-BAeW6QRw.js";import"./debounce-DfOnU9UJ.js";import"./useOsdkClient-C8WGuLkk.js";import"./index-COwL7OJ8.js";import"./Input-oPnlo5ZK.js";import"./useBaseUiId-BliaD1O6.js";import"./useControlled-QNZ0QZkj.js";import"./index-BO4p12nE.js";import"./index-BPgVurxA.js";import"./PopoverPopup-DWR0jCHo.js";import"./InternalBackdrop-B3dfpWNK.js";import"./composite-CISHKC9x.js";import"./index-BPupFXYK.js";import"./getDisabledMountTransitionStyles-a-o7jZ9k.js";import"./ToolbarRootContext-C2ojXHeq.js";import"./tick-DkGxN_Ch.js";import"./svgIconContainer-hqfoTYTd.js";import"./small-cross-DuGAeEln.js";import"./search-BCt11QUz.js";import"./cross-DRK3VtDX.js";import"./useValueChanged-ClT-kz_1.js";import"./getPseudoElementBounds-DMHhNAb7.js";import"./CompositeItem-DoarEqny.js";import"./makeExternalStore-BHhNjBOZ.js";import"./BaseForm-C6djE5c0.js";import"./ActionButton-KMvLy2U-.js";import"./Button-CuqFP7rB.js";import"./SkeletonBar-CwQdqdMR.js";import"./Tooltip-tKWANxvR.js";import"./info-sign-BYTXqaqX.js";import"./chevron-up-Bq0OGvlL.js";import"./chevron-down-5SB1wRqG.js";import"./useEventCallback-Ce-cRsvG.js";import"./iconLoader-AalUA2yO.js";import"./CompositeRoot-BPozR5Pl.js";import"./Switch-DlydGd0W.js";import"./TimePicker-D3rJaR6e.js";import"./CollapsiblePanel-nEea4UtK.js";import"./error-DG5J3I3H.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-B8lVQvrV.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
