import{j as t,g as n}from"./iframe-BWanzCtz.js";import{A as r}from"./action-form-BXZ8PqT2.js";import"./preload-helper-DAi-P9Ju.js";import"./DropdownField-ScfJ-83O.js";import"./debounce-ChP0u6Gi.js";import"./useOsdkClient-CY0unRSX.js";import"./index-Cay7iVqb.js";import"./Input-Bt15IjV-.js";import"./useBaseUiId-C5dN58Q0.js";import"./useControlled-OnnNsrqI.js";import"./index-ChQ5JBSj.js";import"./index-Dt-Mk7jk.js";import"./PopoverPopup-DgQdAKzP.js";import"./InternalBackdrop-TV8p7nHD.js";import"./composite-BafjzlJM.js";import"./index-D9z2WP2p.js";import"./getDisabledMountTransitionStyles-CvKZ4Y_-.js";import"./ToolbarRootContext-De0bccAd.js";import"./tick-BXFsjeh2.js";import"./svgIconContainer-DSaD-I6F.js";import"./small-cross-CVFLscZG.js";import"./search-DRygowk4.js";import"./cross-BVvC7Zca.js";import"./useValueChanged-KxYyG3ZS.js";import"./getPseudoElementBounds-O3K5JmaN.js";import"./CompositeItem-BcxNHfQK.js";import"./makeExternalStore-_zqsQAA7.js";import"./BaseForm-QgAVIVUQ.js";import"./ActionButton-BVuwYTIs.js";import"./Button-BAzXvXXK.js";import"./SkeletonBar-CYNtPgHh.js";import"./Tooltip-DLH2JBkg.js";import"./info-sign-BXT2-K6I.js";import"./chevron-up-hkk7eA-X.js";import"./chevron-down-BeOHwgJN.js";import"./useEventCallback-BWB9gGvg.js";import"./iconLoader-BUtc7Vco.js";import"./Switch-GZaBhnM1.js";import"./CompositeRoot-DeTqeY2T.js";import"./TimePicker-BLTHSXm3.js";import"./CollapsiblePanel-BgKRL3mk.js";import"./error-CdqtE7bq.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-d8l__l47.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
