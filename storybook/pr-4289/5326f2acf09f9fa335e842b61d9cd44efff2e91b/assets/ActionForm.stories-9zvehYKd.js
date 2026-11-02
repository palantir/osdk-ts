import{j as t,g as n}from"./iframe-B4_7uhV2.js";import{A as r}from"./action-form-DxOjQRqr.js";import"./preload-helper-Cw77NyEA.js";import"./DropdownField-DTALq__z.js";import"./debounce-X8d_TWmr.js";import"./useOsdkClient-GbTGK958.js";import"./index-Mdm4Vdz6.js";import"./Input-D8cnvsnb.js";import"./useBaseUiId-jcj23Jre.js";import"./useControlled-DuB2GZAM.js";import"./index-BIAFdQmf.js";import"./index-tpsUjXJC.js";import"./PopoverPopup-DTvwoF1P.js";import"./InternalBackdrop-D-j65lhL.js";import"./composite-DzB4ymUk.js";import"./index-C1Mq3mGJ.js";import"./getDisabledMountTransitionStyles-CGBLZLsV.js";import"./ToolbarRootContext-By4aijuh.js";import"./tick-7a879WvW.js";import"./svgIconContainer-CfsWQbiM.js";import"./small-cross-Bz0aCskk.js";import"./search-CkWTC5d3.js";import"./cross-rrtuBbZ-.js";import"./useValueChanged-UlU1Gt2C.js";import"./getPseudoElementBounds-D2XWYg3z.js";import"./CompositeItem-CYgFQeQK.js";import"./makeExternalStore-D3O6kaQb.js";import"./BaseForm-DNIPXN-s.js";import"./ActionButton-DjDw0tBC.js";import"./Button-Bp6QDAip.js";import"./SkeletonBar-D706xdxV.js";import"./Tooltip-Bvngz8iq.js";import"./info-sign-Ctht9Tg8.js";import"./chevron-up-BIdRkicc.js";import"./chevron-down-DsD_ZS4y.js";import"./useEventCallback-CyCSzUSB.js";import"./iconLoader-O-yX2WrX.js";import"./Switch-DlNFZm6D.js";import"./CompositeRoot-C4SB20ex.js";import"./TimePicker-CbdbxFAV.js";import"./CollapsiblePanel-B1l4B7kE.js";import"./error-CBs6A8KU.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DXLG4Ams.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
