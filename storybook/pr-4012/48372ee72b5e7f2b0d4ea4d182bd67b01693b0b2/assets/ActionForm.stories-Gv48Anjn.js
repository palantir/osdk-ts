import{j as t,g as n}from"./iframe-VN1YMwbH.js";import{A as r}from"./action-form-8Sxn1gkZ.js";import"./preload-helper-DgM3fVqV.js";import"./DropdownField-DPxf8Qq2.js";import"./debounce-DR4NOvcQ.js";import"./useOsdkClient-ClOfe-xH.js";import"./index-BQ-hfR18.js";import"./Input-CGbGPxHL.js";import"./useBaseUiId-DJ36Kcth.js";import"./useControlled-BilpsNEK.js";import"./index-C-8kYW2Y.js";import"./index-CJqO1XSq.js";import"./PopoverPopup--znTKWjy.js";import"./InternalBackdrop-BrgOtY4c.js";import"./composite-DEJ-tsuW.js";import"./index-BKRJqYvH.js";import"./getDisabledMountTransitionStyles-CVnZ4zDW.js";import"./ToolbarRootContext--QULbV7a.js";import"./tick-6T4uvXq1.js";import"./svgIconContainer-BXOSkGjh.js";import"./small-cross-dIKOYPBo.js";import"./search-BLvYvb41.js";import"./cross-CRpIa4b8.js";import"./useValueChanged-D-aOQneF.js";import"./getPseudoElementBounds-CrZB1QbV.js";import"./CompositeItem-BMVV3PhA.js";import"./makeExternalStore-Dy4LBBRG.js";import"./BaseForm-BPii9cwj.js";import"./ActionButton-qmmmYuGS.js";import"./Button-Cj2Rzj_x.js";import"./SkeletonBar-BGXPo9d8.js";import"./Tooltip-CLzQYsh0.js";import"./info-sign-Cnb2CC92.js";import"./chevron-up-D6msriXE.js";import"./chevron-down-DrICZ5Jz.js";import"./useEventCallback-nXdgyEdi.js";import"./iconLoader-CVQD8hMr.js";import"./CompositeRoot-BJF5tvmL.js";import"./Switch-BaGXj758.js";import"./TimePicker-DhMmT51K.js";import"./CollapsiblePanel-DF51Tb6H.js";import"./error-BSNYyaSK.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BlQ92REe.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
