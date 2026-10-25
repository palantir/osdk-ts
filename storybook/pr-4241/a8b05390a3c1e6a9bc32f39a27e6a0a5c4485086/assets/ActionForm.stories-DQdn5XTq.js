import{j as t,g as n}from"./iframe-8ifTlOPI.js";import{A as r}from"./action-form-3AyGRS0O.js";import"./preload-helper-qjA7iF_h.js";import"./DropdownField-Bmo9g9ce.js";import"./debounce-BDQ7N1x4.js";import"./useOsdkClient-CfP7K8UM.js";import"./index-zP_CtKeM.js";import"./Input-CMGBsI9h.js";import"./useBaseUiId-Cwh1jhj-.js";import"./useControlled-CyFBz6dn.js";import"./index-CoyaXW0G.js";import"./index-DwMFEFqg.js";import"./PopoverPopup-DyGtJCKe.js";import"./InternalBackdrop-DcUvvNEJ.js";import"./composite-B4CIj8hm.js";import"./index-pH-MRX5y.js";import"./getDisabledMountTransitionStyles-CisZNLPx.js";import"./ToolbarRootContext-BVL9-YVY.js";import"./tick-FRfoFGPl.js";import"./svgIconContainer-D_TXE4Bb.js";import"./small-cross-B646WFen.js";import"./search-cZtZgUJN.js";import"./cross-CL785k1k.js";import"./useValueChanged-TYhdJ9yM.js";import"./getPseudoElementBounds-BktluGq2.js";import"./CompositeItem-DP3maplG.js";import"./makeExternalStore-BjHpzMBx.js";import"./BaseForm-BdN7NAWK.js";import"./ActionButton-CxCutMvr.js";import"./Button-CkeTq1uo.js";import"./SkeletonBar-CAFjcspr.js";import"./Tooltip-D1NVsbbj.js";import"./info-sign-DIfpQ_FJ.js";import"./chevron-up-BBOSnLhC.js";import"./chevron-down-BBwBJyH3.js";import"./useEventCallback-DNuPjnYr.js";import"./iconLoader-n9uWtITg.js";import"./Switch-BViyE5ih.js";import"./CompositeRoot-Ccf4syiJ.js";import"./TimePicker-B8g6QC09.js";import"./CollapsiblePanel-Dr80mgLX.js";import"./error-CEWX4lms.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-C5cd7yWV.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
