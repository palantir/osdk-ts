import{j as t,g as n}from"./iframe-o2qKykKB.js";import{A as r}from"./action-form-D0DukMeq.js";import"./preload-helper-C27-ZLGM.js";import"./DropdownField-BbGjuJzG.js";import"./debounce-CTJxY2Tj.js";import"./useOsdkClient-B8dETVs7.js";import"./index-BGljrmTZ.js";import"./Input-3CD54kGq.js";import"./useBaseUiId-OPidnSdm.js";import"./useControlled-j9Xx4bgV.js";import"./index-DNh70Okq.js";import"./index-CvhnTB6X.js";import"./PopoverPopup-Pczz4-8n.js";import"./InternalBackdrop-DR4zGZzK.js";import"./composite-BLm43g8N.js";import"./index-BVMYD8Oa.js";import"./getDisabledMountTransitionStyles-Cs2uu7jZ.js";import"./ToolbarRootContext-CkkOTkz9.js";import"./tick-BMQAi16Z.js";import"./svgIconContainer-BhaYgLqs.js";import"./small-cross-C2cMuOH_.js";import"./search-C1CYCLwX.js";import"./cross-BTB24VP7.js";import"./useValueChanged-Cie3N3Mi.js";import"./getPseudoElementBounds-DS-R98qk.js";import"./CompositeItem-Kr2j0ah9.js";import"./makeExternalStore-DBMN3aEP.js";import"./BaseForm-CXCZcun8.js";import"./ActionButton-CeNVvCTB.js";import"./Button-DlN0yFDg.js";import"./SkeletonBar-DhdbyDRI.js";import"./Tooltip-DxXhJeja.js";import"./info-sign-CNjWFtO2.js";import"./chevron-up-DRSSxpGv.js";import"./chevron-down-QYJ-TtLl.js";import"./useEventCallback-hJBDMJsx.js";import"./iconLoader-fgMw1cxh.js";import"./CompositeRoot-BCh-MGen.js";import"./Switch-DafDgAhb.js";import"./TimePicker-DlS9KfoO.js";import"./CollapsiblePanel-CkovkzYb.js";import"./error-UQwhkZq_.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-ByPWr5gV.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
