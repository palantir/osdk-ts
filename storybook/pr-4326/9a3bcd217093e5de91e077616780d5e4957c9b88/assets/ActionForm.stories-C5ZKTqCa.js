import{j as t,g as n}from"./iframe-BSBY3PjJ.js";import{A as r}from"./action-form-Fiqfkt0g.js";import"./preload-helper-DpSdlFS8.js";import"./DropdownField-DL8lskl1.js";import"./debounce-0JtHt6-L.js";import"./useOsdkClient-COaUlzkH.js";import"./index-DK106w7q.js";import"./Input-DLFn8nXq.js";import"./useBaseUiId-BWCrzuEr.js";import"./useControlled-Ki3OxTZR.js";import"./index-DVvqS1th.js";import"./index-CKbXy3Dj.js";import"./PopoverPopup-B_rMzGeU.js";import"./InternalBackdrop-BAAE8sPY.js";import"./composite-iYZqsZLy.js";import"./index-tq3mLcAa.js";import"./getDisabledMountTransitionStyles-CnzqGvPD.js";import"./ToolbarRootContext-5qjYeV0P.js";import"./tick-CwHYlOtH.js";import"./svgIconContainer-CVR7Tkh3.js";import"./small-cross-DYeQuCck.js";import"./search-D4Uipsbf.js";import"./cross-ChnkwhQq.js";import"./useValueChanged-srC6xFPd.js";import"./getPseudoElementBounds-B4FwyunF.js";import"./CompositeItem-B9uKrben.js";import"./makeExternalStore-DU_ddruH.js";import"./BaseForm-MPcgn9Ee.js";import"./ActionButton-C4rmndSw.js";import"./Button-DyRQe702.js";import"./SkeletonBar-C6FAa51I.js";import"./Tooltip-BAR8Dcp7.js";import"./info-sign-CvPOSO8S.js";import"./chevron-up-fAnMhF1z.js";import"./chevron-down-BHUr8iy5.js";import"./useEventCallback-Cz9YIY33.js";import"./iconLoader-DqFK-XpU.js";import"./Switch-CiJU0Wvr.js";import"./CompositeRoot-C2p9IfuB.js";import"./TimePicker-BTO4R5ri.js";import"./CollapsiblePanel-BIFNkFs4.js";import"./error-iycxY9-l.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-C3TRqwn-.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
