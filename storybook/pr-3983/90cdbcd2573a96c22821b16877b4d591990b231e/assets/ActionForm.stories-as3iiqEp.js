import{j as t,g as n}from"./iframe-CJ4psHOg.js";import{A as r}from"./action-form-CsOvdI5R.js";import"./preload-helper-CnvWLU9s.js";import"./DropdownField-DJtngQjG.js";import"./debounce-DtKena2t.js";import"./useOsdkClient-Bs3HId-B.js";import"./index-C3yQNnbT.js";import"./Input-C8hdlhUf.js";import"./useBaseUiId-DyrOymcM.js";import"./useControlled-FXpF1HMA.js";import"./index-B0t-MH7Z.js";import"./index-Cld24Chi.js";import"./PopoverPopup-ZyXkzEeN.js";import"./InternalBackdrop-DqSa3KH2.js";import"./composite-BxTUVSqW.js";import"./index-BmDdDnIx.js";import"./getDisabledMountTransitionStyles-CGJlU2Jf.js";import"./ToolbarRootContext-C-4jRAr6.js";import"./tick-CaD1yuR8.js";import"./svgIconContainer-BaNWfr18.js";import"./small-cross-BUvQb5Jp.js";import"./search-B2UifxoD.js";import"./cross-Bare-byH.js";import"./useValueChanged-Eg63Arfo.js";import"./getPseudoElementBounds-BQVnQvY_.js";import"./CompositeItem-CwkxMYBx.js";import"./makeExternalStore-CZxqc8La.js";import"./BaseForm-BEve533r.js";import"./ActionButton-I4J4bzq7.js";import"./Button-23ABSMgl.js";import"./SkeletonBar-ClzesOCU.js";import"./Tooltip-X1bNRoko.js";import"./info-sign-CW0s-w_y.js";import"./chevron-up-v8dgVcmY.js";import"./chevron-down-BegRN8q-.js";import"./useEventCallback-dIcMHu5I.js";import"./iconLoader-DxfAs-KO.js";import"./CompositeRoot-BOsY6xRO.js";import"./Switch-DnkM2wLY.js";import"./TimePicker-DvAT6X0H.js";import"./CollapsiblePanel-BPqkIw8T.js";import"./error-Bn4V0LpQ.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DlR5OldO.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/experimental";

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
