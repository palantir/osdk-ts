import{j as t,g as n}from"./iframe-CZutwAHo.js";import{A as r}from"./action-form-C6RbgNMs.js";import"./preload-helper-Cn3SJHww.js";import"./DropdownField-CGLxykfT.js";import"./debounce-0IA_cAla.js";import"./useOsdkClient-DgvAplUI.js";import"./index-CppgNV0M.js";import"./Input-oDj_0Z0d.js";import"./useBaseUiId-CtEICjky.js";import"./useControlled-DwVRdNhF.js";import"./index-B50GZKUg.js";import"./index-2k1Tvx5C.js";import"./PopoverPopup-CJaw97SK.js";import"./InternalBackdrop-G99DwSaZ.js";import"./composite-mcUSxhXz.js";import"./index-HA6Va8NR.js";import"./getDisabledMountTransitionStyles-BZ863oN2.js";import"./ToolbarRootContext-FQPAQT5c.js";import"./tick-Dwj_TbVz.js";import"./svgIconContainer-CmX1H1mx.js";import"./small-cross-CFVLA5Ia.js";import"./search-C59PF3w9.js";import"./cross-D02obdgD.js";import"./useValueChanged-CZKUaGQu.js";import"./getPseudoElementBounds-D34_EoM3.js";import"./CompositeItem-DdZNAqnt.js";import"./makeExternalStore-CCR0CM05.js";import"./BaseForm-DG1iM-CF.js";import"./ActionButton-axhhg9v5.js";import"./Button-sSK8eFI-.js";import"./SkeletonBar-B0Lj-A75.js";import"./Tooltip-8A2JRkIJ.js";import"./info-sign-CzIwd5ap.js";import"./chevron-up-Do7i4imw.js";import"./chevron-down--5qYG9Xz.js";import"./useEventCallback-DZshVR4a.js";import"./iconLoader-S3nN5qa7.js";import"./Switch--jkkJzpt.js";import"./CompositeRoot-C8u2mIP6.js";import"./TimePicker-__Rligw4.js";import"./CollapsiblePanel-Dsv7xvDY.js";import"./error-CZtG4Hsy.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Bw7lmz7K.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
