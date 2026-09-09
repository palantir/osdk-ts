import{j as t,g as n}from"./iframe-MqLOwkyt.js";import{A as r}from"./action-form-Ci9maAzT.js";import"./preload-helper-BI4FsuTE.js";import"./DropdownField-BVO8q73p.js";import"./debounce-DCOl06T4.js";import"./useOsdkClient-DyeTERCd.js";import"./index-CYsLXWAq.js";import"./Input-CquXhMGI.js";import"./useBaseUiId-xxBCoKYK.js";import"./useControlled-DHUJWjTK.js";import"./index-B53EBtE1.js";import"./index-DYFGinsg.js";import"./PopoverPopup-ixK-S_Jv.js";import"./InternalBackdrop-wUQuVyKv.js";import"./composite-NEozLeoL.js";import"./index-C3pKlSiY.js";import"./getDisabledMountTransitionStyles-B3gQ57ui.js";import"./ToolbarRootContext-YqisKJxJ.js";import"./tick-3f1cvuZk.js";import"./svgIconContainer-CpAJhJ6x.js";import"./small-cross-CvOnK5fR.js";import"./search-CxS15Af3.js";import"./cross-CrEHvwXy.js";import"./useValueChanged-e8AMyRv1.js";import"./getPseudoElementBounds-BRF46eiy.js";import"./CompositeItem-cvG07j6P.js";import"./makeExternalStore-DNVCbBN4.js";import"./BaseForm-C89LnC90.js";import"./ActionButton-_HVLo196.js";import"./Button-CBsI2feD.js";import"./SkeletonBar-BnG9_9qz.js";import"./Tooltip-CMpFEXG9.js";import"./info-sign-BgW7TXW8.js";import"./chevron-up-DhcxO564.js";import"./chevron-down-CCwfXTdl.js";import"./useEventCallback-Cw57MZdH.js";import"./iconLoader-CEmAu12K.js";import"./CompositeRoot-BMkiZXYl.js";import"./Switch-B3f3ZUnK.js";import"./TimePicker-Cfh8DiAx.js";import"./CollapsiblePanel-C5mk5Aup.js";import"./error-CN-8K1J8.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-D3nMdfcR.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
