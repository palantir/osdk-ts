import{j as t,g as n}from"./iframe-DGSVH7ih.js";import{A as r}from"./action-form-BXQ9Z1PY.js";import"./preload-helper-Dp1pzeXC.js";import"./useDebouncedCallback-6dMPohFl.js";import"./useEventCallback-CR9RHm-1.js";import"./isEqual-3BX1wwaO.js";import"./_baseIsEqual-CZt1h0DB.js";import"./PopoverPopup-CUzAnlgp.js";import"./InternalBackdrop-BiQg34oG.js";import"./useBaseUiId-CUzGGztv.js";import"./composite-CZStrJl6.js";import"./index-DcV7YM_0.js";import"./index-BQRwVVvU.js";import"./index-DLMh8z7x.js";import"./getDisabledMountTransitionStyles-DNsTJsOD.js";import"./ToolbarRootContext-Dx_n0qqS.js";import"./Select-B9JAKdg8.js";import"./useOsdkClient-BZZNJHHe.js";import"./index-CWCW2TNI.js";import"./Input-BMGPA6kQ.js";import"./useControlled-DIh7B-EX.js";import"./tick-CTH5_AKz.js";import"./svgIconContainer-Cr42efgU.js";import"./small-cross-CgrlmkQc.js";import"./search-Ms57RDK0.js";import"./cross-CvX0N4CS.js";import"./useValueChanged-B06XAO6O.js";import"./getPseudoElementBounds-v1o8MRIa.js";import"./CompositeItem-ChK2cRHi.js";import"./DropdownField-BWt4U9sB.js";import"./makeExternalStore-DBH296jI.js";import"./BaseForm-DiJQfO3X.js";import"./ActionButton-gW-JXC-3.js";import"./Button-hUhDz_nK.js";import"./SkeletonBar-Ccy0H5G7.js";import"./Tooltip-BfWuJBag.js";import"./info-sign-CjfQhT-K.js";import"./chevron-up-LlyaGlFb.js";import"./chevron-down-Wv7CQLfg.js";import"./iconLoader-CQ8DAP5u.js";import"./Switch-DmVvGU0n.js";import"./CompositeRoot-BVUngj2s.js";import"./TimePicker-Vz0QZqDS.js";import"./CollapsiblePanel-BNVEM1jZ.js";import"./error-B-lFLFVh.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-69zOARzS.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const oe={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const ae=["Default"];export{e as Default,ae as __namedExportsOrder,oe as default};
