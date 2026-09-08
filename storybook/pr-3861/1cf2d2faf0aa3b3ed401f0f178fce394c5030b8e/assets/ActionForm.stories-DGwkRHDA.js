import{j as t,g as n}from"./iframe-CtO4Vlsv.js";import{A as r}from"./action-form-BBZMQ50U.js";import"./preload-helper-YqejZBGo.js";import"./DropdownField-Bo8r8-09.js";import"./debounce-BO6wUQGo.js";import"./useOsdkClient-ScCgYAaB.js";import"./index-D6VuR_bO.js";import"./Input-D94oZ1yC.js";import"./useBaseUiId-B7sMgTKT.js";import"./useControlled-Dnk1LplJ.js";import"./index-BcgXYDjH.js";import"./index-Ct5AqRLg.js";import"./PopoverPopup-ClkuOGbd.js";import"./InternalBackdrop-BQN3hAK8.js";import"./composite-1A59BLWV.js";import"./index-D1KfpWj6.js";import"./getDisabledMountTransitionStyles-BZ333I0A.js";import"./ToolbarRootContext-BV8nTPdY.js";import"./tick-Co0_coOt.js";import"./svgIconContainer-dYvBsUdw.js";import"./small-cross-CStP_9vV.js";import"./search-BP5Cq0-y.js";import"./cross-DIyr606b.js";import"./useValueChanged-QyFlMkIr.js";import"./getPseudoElementBounds-CWG0I-Qb.js";import"./CompositeItem-CyExzK58.js";import"./makeExternalStore-C1nOJgZ5.js";import"./BaseForm-DWnhrmvb.js";import"./ActionButton-DUxsUnvW.js";import"./Button-n85r1nQ7.js";import"./SkeletonBar-DK-zeHoP.js";import"./Tooltip-DGCiUH60.js";import"./info-sign-BvGBVQNZ.js";import"./chevron-up-C8zXz5bF.js";import"./chevron-down-BoBfGWo-.js";import"./useEventCallback-08xL6vGn.js";import"./iconLoader-DihnR76D.js";import"./CompositeRoot-4xffGSd3.js";import"./Switch-B5z67Ng5.js";import"./TimePicker-ewxZwzoF.js";import"./CollapsiblePanel-C_0dIlmL.js";import"./error-xCVe8qee.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DviXph28.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
