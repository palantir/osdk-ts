import{j as t,g as n}from"./iframe-BOmrqFPc.js";import{A as r}from"./action-form-C0qwzNDk.js";import"./preload-helper-DHdkCmlX.js";import"./DropdownField-Dbo12qhB.js";import"./debounce-CRQ5iXC9.js";import"./useOsdkClient-BKdn_EkF.js";import"./index-CsuBd3Ct.js";import"./Input-DztT7-KE.js";import"./useBaseUiId-BbxoKReU.js";import"./useControlled-fJQSQ2l_.js";import"./index-CwZfU70k.js";import"./index-CmDTuj0A.js";import"./PopoverPopup-CvmU8NRY.js";import"./InternalBackdrop-Bi_UxEim.js";import"./composite-DD_Mh2Hz.js";import"./index-OMceiRFh.js";import"./getDisabledMountTransitionStyles-BpRjKf3X.js";import"./ToolbarRootContext-CZljBiwl.js";import"./tick-DWpFBI3S.js";import"./svgIconContainer-BIv09OFd.js";import"./small-cross-DJnfj9QP.js";import"./search-BDQnen_f.js";import"./cross-C3JW1YVW.js";import"./useValueChanged-Dhmmb8Eg.js";import"./getPseudoElementBounds-BxchgAnl.js";import"./CompositeItem-BQhn1KAi.js";import"./makeExternalStore-CIMBrNRu.js";import"./BaseForm-Q0BSlpjc.js";import"./ActionButton-BDtYk-kf.js";import"./Button-CzVdVKcN.js";import"./SkeletonBar-CCtYn663.js";import"./Tooltip-Cf3Cg01o.js";import"./info-sign-BZ5tztbs.js";import"./chevron-up-C0Rd-ssI.js";import"./chevron-down-CjR8Mc2-.js";import"./useEventCallback-BCbidy2u.js";import"./iconLoader-HRY2NdMf.js";import"./CompositeRoot-DmCOYPCl.js";import"./Switch-CLDtdLdb.js";import"./TimePicker-DGjE-FBS.js";import"./CollapsiblePanel-gIOqhaYB.js";import"./error-lpzYnACL.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CHgAtXdu.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
