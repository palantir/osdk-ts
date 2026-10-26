import{j as t,g as n}from"./iframe-1hfaDqWf.js";import{A as r}from"./action-form-DiY-X2eo.js";import"./preload-helper-De53aV0r.js";import"./DropdownField-K3jo3x1W.js";import"./debounce-Bqvjn-gC.js";import"./useOsdkClient-D6tvv9UM.js";import"./index-BhraWcfW.js";import"./Input-D17xgaxz.js";import"./useBaseUiId-Deq2cxJf.js";import"./useControlled-D0I97nL6.js";import"./index-CltX__3l.js";import"./index-CNJ7D8B4.js";import"./PopoverPopup-CFLZ0LEF.js";import"./InternalBackdrop-Bwl2SQmc.js";import"./composite-DJvOABdy.js";import"./index-DUbuCag1.js";import"./getDisabledMountTransitionStyles-Dk0hinap.js";import"./ToolbarRootContext-BuC21FlU.js";import"./tick-aJFXUkvZ.js";import"./svgIconContainer-CfNLFLUV.js";import"./small-cross-C628jtsy.js";import"./search-ChOCRi6Z.js";import"./cross-BxuxKn8r.js";import"./useValueChanged-CdYXSfOs.js";import"./getPseudoElementBounds-DLRZ8Oik.js";import"./CompositeItem-CmCZmC8c.js";import"./makeExternalStore-CiOsLXpf.js";import"./BaseForm-Br8GinKX.js";import"./ActionButton-DAT1D4My.js";import"./Button-CnBcagCx.js";import"./SkeletonBar-9TZgIuFD.js";import"./Tooltip-CP0SUwq-.js";import"./info-sign-DOZLYhYk.js";import"./chevron-up-D1ab8PMK.js";import"./chevron-down-oC6N0Ou5.js";import"./useEventCallback-aip0Q_23.js";import"./iconLoader-ftK6z6iY.js";import"./Switch-C0Dn6YZi.js";import"./CompositeRoot-D2sWRw05.js";import"./TimePicker-Cbpe1QID.js";import"./CollapsiblePanel-BZNELsDM.js";import"./error-BGVtNtZh.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-pFp3tsBC.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
