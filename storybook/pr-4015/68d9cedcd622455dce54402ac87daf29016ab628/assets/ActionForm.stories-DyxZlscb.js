import{j as t,g as n}from"./iframe-CgX-XfZe.js";import{A as r}from"./action-form-2nfsU49a.js";import"./preload-helper-B7xu4jFf.js";import"./DropdownField-D1OnXseu.js";import"./debounce-542eBR78.js";import"./useOsdkClient-CGTaZpCt.js";import"./index-BcViD_AJ.js";import"./Input-yuy0l2cX.js";import"./useBaseUiId-BXQE2Tij.js";import"./useControlled-CVDZAttb.js";import"./index-a2F2ZKsn.js";import"./index-BmNCbeoV.js";import"./PopoverPopup-AplR6RR1.js";import"./InternalBackdrop-CvIKv91P.js";import"./composite-CuhqFDst.js";import"./index-DrrGWtE8.js";import"./getDisabledMountTransitionStyles-CY7m0Re-.js";import"./ToolbarRootContext-auY9xRTT.js";import"./tick-8a_8sCFa.js";import"./svgIconContainer-CXZEPhaW.js";import"./small-cross-CldOek9E.js";import"./search-DTGDsddM.js";import"./cross-Nv8Io3xy.js";import"./useValueChanged-CJQsRnGQ.js";import"./getPseudoElementBounds-Cb9yX_CQ.js";import"./CompositeItem-Cosvl6JF.js";import"./makeExternalStore-CRMwT7Da.js";import"./BaseForm-DWpvWUj0.js";import"./ActionButton-eETZToHJ.js";import"./Button-BRRWL_gG.js";import"./SkeletonBar-rtQtEYsd.js";import"./Tooltip-C7b0j1Nz.js";import"./info-sign-CwJ8_Ihf.js";import"./chevron-up-gtJhThd4.js";import"./chevron-down-QOEZh7s4.js";import"./useEventCallback-CJOkzsfk.js";import"./iconLoader-CPFrgmvy.js";import"./CompositeRoot-DDmELU8T.js";import"./Switch-BM_pHald.js";import"./TimePicker-p4X23igy.js";import"./CollapsiblePanel-ztAj1qzb.js";import"./error-ByGGXW3h.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-N-qC9xyD.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
