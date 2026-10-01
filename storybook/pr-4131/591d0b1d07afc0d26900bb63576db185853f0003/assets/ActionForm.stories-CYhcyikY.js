import{j as t,g as n}from"./iframe-DHfhGWcA.js";import{A as r}from"./action-form-Co8dbWd1.js";import"./preload-helper-D14EGrrK.js";import"./DropdownField-BwayLWA9.js";import"./debounce-Di14C5je.js";import"./useOsdkClient-C7hhAH6C.js";import"./index-CCF9MEs2.js";import"./Input-zMxDvO-I.js";import"./useBaseUiId-BATl1CQr.js";import"./useControlled-Bxerh3bt.js";import"./index-Blf5so-r.js";import"./index-C5pfUNxc.js";import"./PopoverPopup-CLeXoVr6.js";import"./InternalBackdrop-Cg_x7WdZ.js";import"./composite-DbTWPUQ9.js";import"./index-C0hgrkVR.js";import"./getDisabledMountTransitionStyles-C5UuzqSY.js";import"./ToolbarRootContext-erU_8-54.js";import"./tick-BOovpBqZ.js";import"./svgIconContainer-BaEBe_Ou.js";import"./small-cross-oBABr6h6.js";import"./search-DWYoVV2s.js";import"./cross-Dj-fC_ys.js";import"./useValueChanged-Bsu0ebqY.js";import"./getPseudoElementBounds-D6EOINUP.js";import"./CompositeItem-CLlZ6Yb0.js";import"./makeExternalStore-C1Pxa9L5.js";import"./BaseForm-CsQzfw9t.js";import"./ActionButton-w10zUXoM.js";import"./Button-Dj3Gc0R8.js";import"./SkeletonBar-K08P4YrG.js";import"./Tooltip-nGSUir4H.js";import"./info-sign-C-cCMVih.js";import"./chevron-up-sXC435XN.js";import"./chevron-down-DR6eEQC2.js";import"./useEventCallback-CxgY780e.js";import"./iconLoader-BaUQHPrs.js";import"./Switch-BGQNuHma.js";import"./CompositeRoot-Pu_atRrg.js";import"./TimePicker-CDxpWX6T.js";import"./CollapsiblePanel-tIBbRKCQ.js";import"./error-CAZmovtj.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DU0hnwkS.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
