import{j as t,g as n}from"./iframe-N69vsxs5.js";import{A as r}from"./action-form-DGRErsZs.js";import"./preload-helper-DK0eU9jP.js";import"./DropdownField-ByuxOcSB.js";import"./debounce-DK55d19x.js";import"./useOsdkClient-CzCwxYrp.js";import"./index-DFVx6FW1.js";import"./Input-DVgfJ9ud.js";import"./useBaseUiId-BOlvpNsK.js";import"./useControlled-HSJHWmyV.js";import"./index-CshN8TfA.js";import"./index-CmUIsfdi.js";import"./PopoverPopup-mInLly2E.js";import"./InternalBackdrop-CJ-MZyS5.js";import"./composite-DlZg84y_.js";import"./index-B5NyIwpH.js";import"./getDisabledMountTransitionStyles-DMbVH12F.js";import"./ToolbarRootContext-DAvYZo9n.js";import"./tick-CIuihs4e.js";import"./svgIconContainer-DHGJTaRH.js";import"./small-cross-BCBXkrpc.js";import"./search-DHKYFAa1.js";import"./cross-BdjHCXJd.js";import"./useValueChanged-Cmw18dL4.js";import"./getPseudoElementBounds-DOAH-UkU.js";import"./CompositeItem-zsosIukW.js";import"./makeExternalStore-BlbjB80h.js";import"./BaseForm-Ck_wC7T8.js";import"./ActionButton-_QLSmCEl.js";import"./Button-KvR9mvY1.js";import"./SkeletonBar-CxOLm6U3.js";import"./Tooltip-bOGOT-9E.js";import"./info-sign-D2zKTBBQ.js";import"./chevron-up-hi0T1DAo.js";import"./chevron-down-I26OMj3W.js";import"./useEventCallback-CIsta-Kv.js";import"./iconLoader-DJpco_uZ.js";import"./Switch-BmysE9_W.js";import"./CompositeRoot-CB-vBuO1.js";import"./TimePicker-DiCyjnnH.js";import"./CollapsiblePanel-BxyEH4DM.js";import"./error-vgCxf202.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-D0jHdLVm.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
