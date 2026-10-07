import{j as t,g as n}from"./iframe-BuDnfqKQ.js";import{A as r}from"./action-form-C71ACx6R.js";import"./preload-helper-B6J6BeBc.js";import"./DropdownField-Cn3SsOCQ.js";import"./debounce-hk0kLUMs.js";import"./useOsdkClient-W2M41dpd.js";import"./index-B6xFqDwW.js";import"./Input-fZvrHimm.js";import"./useBaseUiId-Cy8x85cF.js";import"./useControlled-BWRXH__P.js";import"./index-VpAGjtCA.js";import"./index-Bcup2US4.js";import"./PopoverPopup-WRtj1oNl.js";import"./InternalBackdrop-DkXtTuDL.js";import"./composite-DOI6fCuf.js";import"./index-DNpn1j7J.js";import"./getDisabledMountTransitionStyles-C7ybyuH6.js";import"./ToolbarRootContext-DTTMwqZv.js";import"./tick-DGYqdZi_.js";import"./svgIconContainer-DN1WNNEt.js";import"./small-cross-CDW2_ykz.js";import"./search-CoDCGLUE.js";import"./cross-FLwBoLKf.js";import"./useValueChanged-B0zicMaZ.js";import"./getPseudoElementBounds-DcYnu62v.js";import"./CompositeItem-Dc19RcBz.js";import"./makeExternalStore-CDWi_CU5.js";import"./BaseForm-hdN-uhTy.js";import"./ActionButton-Dsev2y4b.js";import"./Button-Ckrw6oVp.js";import"./SkeletonBar-D9mhSkMY.js";import"./Tooltip-vIT7M_iB.js";import"./info-sign-BuD_snNd.js";import"./chevron-up-ju3oQ9KM.js";import"./chevron-down-C4fOxkM5.js";import"./useEventCallback-D_AQe9Gp.js";import"./iconLoader-5JTzqkz8.js";import"./Switch-CcsDqPEo.js";import"./CompositeRoot-CooFzpS9.js";import"./TimePicker-BnTJ24JL.js";import"./CollapsiblePanel-DY0hwdGx.js";import"./error-DtRlIBmm.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-cl6CbOTk.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
