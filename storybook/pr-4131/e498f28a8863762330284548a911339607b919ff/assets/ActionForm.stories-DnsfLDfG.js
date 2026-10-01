import{j as t,g as n}from"./iframe-Cq4acRIY.js";import{A as r}from"./action-form-f-_Q8stH.js";import"./preload-helper-MAyNwQdY.js";import"./DropdownField-Dr1qUQl2.js";import"./debounce-h0anxrhI.js";import"./useOsdkClient-B_yscWOF.js";import"./index-6eoOxZ40.js";import"./Input-X1xzUJ9h.js";import"./useBaseUiId-Bjm3kLfn.js";import"./useControlled-BhrnnSyx.js";import"./index-DrCCi1us.js";import"./index-Dc9EpWSo.js";import"./PopoverPopup-D_YXiba0.js";import"./InternalBackdrop-ZRlsvZtW.js";import"./composite-Bn47_cTN.js";import"./index-B7t6srrF.js";import"./getDisabledMountTransitionStyles-BpVDf7Q-.js";import"./ToolbarRootContext-sZwDlHkO.js";import"./tick-BjD_cp-Z.js";import"./svgIconContainer-BeKF9m8R.js";import"./small-cross-wqGzzNw8.js";import"./search-CRBn2Ssp.js";import"./cross-DLXEiws_.js";import"./useValueChanged-C3a9CBJ-.js";import"./getPseudoElementBounds-ChlKB1vb.js";import"./CompositeItem-C3jCGG7J.js";import"./makeExternalStore-dDHEgDbO.js";import"./BaseForm-BL8s_PxT.js";import"./ActionButton-_1SeHqVp.js";import"./Button-w2RzDLnC.js";import"./SkeletonBar-C0SjzaHH.js";import"./Tooltip-DDRhmX6J.js";import"./info-sign-YOl31I6J.js";import"./chevron-up-Cfl0vVH5.js";import"./chevron-down-CdL9km5b.js";import"./useEventCallback-CADbmtD_.js";import"./iconLoader-DymolM2B.js";import"./Switch-C2-bGdoG.js";import"./CompositeRoot-CgVN4Qb8.js";import"./TimePicker-DVJB2XdQ.js";import"./CollapsiblePanel-CikQJlXN.js";import"./error-CIJkAMmO.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DB5TXya2.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
