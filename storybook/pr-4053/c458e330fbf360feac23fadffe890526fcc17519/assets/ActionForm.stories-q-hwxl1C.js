import{j as t,g as n}from"./iframe-C1CKZi3d.js";import{A as r}from"./action-form-D7NTptFx.js";import"./preload-helper-CjKKPLuI.js";import"./DropdownField-CnUC2D2t.js";import"./debounce-D14wviNn.js";import"./useOsdkClient-CZN2Sm0O.js";import"./index-22zkYmfP.js";import"./Input-B9v9dpXG.js";import"./useBaseUiId-kwR7401f.js";import"./useControlled-DsloswUn.js";import"./index-BaUESoup.js";import"./index-TnDt-8d7.js";import"./PopoverPopup-CDFsG2BZ.js";import"./InternalBackdrop-CQIAa_cE.js";import"./composite-BHop2ulG.js";import"./index-Z2n3umrQ.js";import"./getDisabledMountTransitionStyles-BEchivte.js";import"./ToolbarRootContext-DaCQoKRW.js";import"./tick-Bf2DRJjf.js";import"./svgIconContainer-5vjXCpW3.js";import"./small-cross-HkAOyTJK.js";import"./search-Crhz7pqe.js";import"./cross-DgfaXAP1.js";import"./useValueChanged-CDUxAEZl.js";import"./getPseudoElementBounds-BNheb4Iy.js";import"./CompositeItem-D6jDCgAH.js";import"./makeExternalStore-B-NF9qcV.js";import"./BaseForm-Ca0GVv7h.js";import"./ActionButton-fTBY13Di.js";import"./Button-C8GCJke3.js";import"./SkeletonBar-DxYmE8LG.js";import"./Tooltip-D_3BkBEK.js";import"./info-sign-ipeEz7-3.js";import"./chevron-up-Cr-0mNNf.js";import"./chevron-down-x4h-9kMe.js";import"./useEventCallback-BlUSuMKe.js";import"./iconLoader-Dh5TRk-2.js";import"./Switch-BUq-10BV.js";import"./CompositeRoot-DOe-YGFq.js";import"./TimePicker-D7GqpLkO.js";import"./CollapsiblePanel-DEPs9Vux.js";import"./error-CvIXlX6i.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DM8OHQYr.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
