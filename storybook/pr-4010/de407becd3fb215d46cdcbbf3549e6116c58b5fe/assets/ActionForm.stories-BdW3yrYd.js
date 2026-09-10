import{j as t,g as n}from"./iframe-BlpejkzI.js";import{A as r}from"./action-form-BMO7egfC.js";import"./preload-helper-BA1cUfXb.js";import"./DropdownField-BsA-cNSp.js";import"./debounce-7JU4VUDc.js";import"./useOsdkClient-CkQ9QpN3.js";import"./index-CpPkHQnY.js";import"./Input-eoJV0GlP.js";import"./useBaseUiId-BUVwvBQZ.js";import"./useControlled-CKCXNsan.js";import"./index-BdLU453s.js";import"./index-DVMy9f1T.js";import"./PopoverPopup-Bm6cnNyX.js";import"./InternalBackdrop-DKB_eEnM.js";import"./composite-CdbN3ck3.js";import"./index-DOZcBLPY.js";import"./getDisabledMountTransitionStyles-Bq97lFh4.js";import"./ToolbarRootContext-CBW-R_pU.js";import"./tick-_qvOZWIW.js";import"./svgIconContainer-aKnF_69u.js";import"./small-cross-CbD0uJgb.js";import"./search-IpDNvhGA.js";import"./cross-DiWsYg3r.js";import"./useValueChanged-CD7wCe1x.js";import"./getPseudoElementBounds-CclledTt.js";import"./CompositeItem-D29vF932.js";import"./makeExternalStore-CmmUlmnz.js";import"./BaseForm-ADCScDQZ.js";import"./ActionButton-mHtuKYOM.js";import"./Button-DfGArVBU.js";import"./SkeletonBar-XgXRifQ0.js";import"./Tooltip-B1OUttcu.js";import"./info-sign-BPyqk426.js";import"./chevron-up-BQHARJYX.js";import"./chevron-down-DDoBjNkd.js";import"./useEventCallback-BDK4Z8u2.js";import"./iconLoader-DnYJ6L4K.js";import"./CompositeRoot-BXvNLTo-.js";import"./Switch-D7Hl8L_I.js";import"./TimePicker-9c3bCrNe.js";import"./CollapsiblePanel-Bxo4k_hM.js";import"./error-CNoirV31.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CHL30NBG.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
