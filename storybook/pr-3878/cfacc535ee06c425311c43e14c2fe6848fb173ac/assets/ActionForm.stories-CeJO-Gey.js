import{j as t,g as n}from"./iframe-DV_zKu2G.js";import{A as r}from"./action-form-DRlvKdxm.js";import"./preload-helper-NfN-SgeO.js";import"./DropdownField-BmgdesBZ.js";import"./debounce-YrrW1v9C.js";import"./useOsdkClient-Tcdi_rac.js";import"./index-Dg4pCXXs.js";import"./Input-DFXIqK_7.js";import"./useBaseUiId-B5XoADBe.js";import"./useControlled-93X90FOH.js";import"./index-Qh3Fcvsg.js";import"./index-CEG-DU55.js";import"./PopoverPopup-DRiAk7M2.js";import"./InternalBackdrop-Du_GPTcx.js";import"./composite-DcSj9RrZ.js";import"./index-D_SsiIjb.js";import"./getDisabledMountTransitionStyles-AFz6B6Pn.js";import"./ToolbarRootContext-D3r4geEZ.js";import"./tick-DQhJP467.js";import"./svgIconContainer-kLwaY0s0.js";import"./small-cross-DRu3YnII.js";import"./search-DYE1hvQ2.js";import"./cross-APJrfIvW.js";import"./useValueChanged-fRUG-rpo.js";import"./getPseudoElementBounds-jFSea8zF.js";import"./CompositeItem-CHs--B7N.js";import"./makeExternalStore-CH15L2gT.js";import"./BaseForm-D49cPHZb.js";import"./ActionButton-CSVekI6l.js";import"./Button-BVbWdILw.js";import"./SkeletonBar-quVsDzQk.js";import"./Tooltip-CqNia_Sj.js";import"./info-sign-6TkqJe1K.js";import"./chevron-up-CXTvmrDk.js";import"./chevron-down-D7mWu-TA.js";import"./useEventCallback-BQBFJmB-.js";import"./iconLoader-DhByehUu.js";import"./CompositeRoot-B0KjWhm9.js";import"./Switch-CBAe8DRn.js";import"./TimePicker-B23AQB_X.js";import"./CollapsiblePanel-DqqKh1h2.js";import"./error-DQ-loBpb.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-B6P3j5oP.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
