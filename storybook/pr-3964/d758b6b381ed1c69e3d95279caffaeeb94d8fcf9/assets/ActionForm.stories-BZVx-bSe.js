import{j as t,g as n}from"./iframe-C1V-jMWZ.js";import{A as r}from"./action-form-Bw62EwMa.js";import"./preload-helper-CJz78Ui1.js";import"./DropdownField-D_ZzXFne.js";import"./debounce-Ci2ufMQt.js";import"./useOsdkClient-GDIak-vt.js";import"./index-XvzsJt6X.js";import"./Input-JJCAZvBE.js";import"./useBaseUiId-CpkLkrsv.js";import"./useControlled-DOOaGi2X.js";import"./index-BxNUxb4e.js";import"./index-dKWUfAZT.js";import"./PopoverPopup-kQgVAtEr.js";import"./InternalBackdrop-BnvKha4W.js";import"./composite-CHf1Zuon.js";import"./index-BwhYThVP.js";import"./getDisabledMountTransitionStyles-Budio66N.js";import"./ToolbarRootContext-ChsX3fpL.js";import"./tick-B97Q10mL.js";import"./svgIconContainer-DtEZy4uz.js";import"./small-cross-CvxomOO6.js";import"./search-DDETT7aQ.js";import"./cross-DeZPYttd.js";import"./useValueChanged-Dmqe1Ovy.js";import"./getPseudoElementBounds-5RQPQhG8.js";import"./CompositeItem-CJ-8czWx.js";import"./makeExternalStore-RQ5jibpo.js";import"./BaseForm-BtPXUtkP.js";import"./ActionButton-eephJdo4.js";import"./Button-B_XFbB5W.js";import"./SkeletonBar-B6frXfeY.js";import"./Tooltip-Cw_JuZjL.js";import"./info-sign-BTQ_1rDV.js";import"./chevron-up-Dp3PAr-E.js";import"./chevron-down-BByq1bS3.js";import"./useEventCallback-Bd_7eACD.js";import"./iconLoader-BTsuWXHs.js";import"./CompositeRoot-C_T9Ti_N.js";import"./Switch-nDqZ00qE.js";import"./TimePicker-DspwH_Zf.js";import"./CollapsiblePanel-NwiHp10r.js";import"./error-BvMD1TOJ.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BO4tQ83f.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/experimental";

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
