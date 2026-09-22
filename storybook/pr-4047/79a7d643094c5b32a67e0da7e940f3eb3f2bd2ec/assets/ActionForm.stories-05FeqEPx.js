import{j as t,g as n}from"./iframe-NBWgt9Kz.js";import{A as r}from"./action-form-Djb5hrRY.js";import"./preload-helper-dD2tealv.js";import"./DropdownField-r_qJh2io.js";import"./debounce-Daxc9dxM.js";import"./useOsdkClient-4hMfsXGF.js";import"./index-CvVwqIuN.js";import"./Input-CslBGOUO.js";import"./useBaseUiId-CQ82DsVx.js";import"./useControlled-CzU7BR2U.js";import"./index-zqSU5Gel.js";import"./index-CGp-CZFX.js";import"./PopoverPopup-C6XCNR8l.js";import"./InternalBackdrop-C_OBf41a.js";import"./composite-fJ5Lq9kI.js";import"./index-4CUL2nMU.js";import"./getDisabledMountTransitionStyles-CFAUpb7c.js";import"./ToolbarRootContext-Ds0fuH8S.js";import"./tick-DEzFYdsE.js";import"./svgIconContainer-ClcvIiJ_.js";import"./small-cross-DNAO4fiY.js";import"./search-DE3aPm_j.js";import"./cross-DT-CTOSO.js";import"./useValueChanged-dmynfG-H.js";import"./getPseudoElementBounds-Ce9dJaFF.js";import"./CompositeItem-C9UmmHfT.js";import"./makeExternalStore-Db1JM_b8.js";import"./BaseForm-BcGdMe5z.js";import"./ActionButton-CoxL5yHI.js";import"./Button-BFGOLVaf.js";import"./SkeletonBar-CSguwWtT.js";import"./Tooltip-DcFVb-7H.js";import"./info-sign-BIFyNNm4.js";import"./chevron-up-DmrxnCTU.js";import"./chevron-down-BQb3Bdcv.js";import"./useEventCallback-C2WEzDGK.js";import"./iconLoader-CHkCeu0P.js";import"./Switch-5DGsn5BE.js";import"./CompositeRoot-CMO-6k5Q.js";import"./TimePicker-Dli0UUuP.js";import"./CollapsiblePanel-UmPQakJ4.js";import"./error-EEVYrIXI.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-P_2UpnBY.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
