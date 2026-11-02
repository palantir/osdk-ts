import{j as t,g as n}from"./iframe-Yw9TZb4u.js";import{A as r}from"./action-form-DMDdpKYM.js";import"./preload-helper-D_xjOrEt.js";import"./DropdownField-Dzx1y_MO.js";import"./debounce-BfGqlc0J.js";import"./useOsdkClient-ClnO36Ir.js";import"./index-8aWnL4Lo.js";import"./Input-CSG_diAL.js";import"./useBaseUiId-BO9crViw.js";import"./useControlled-BzIkjd0M.js";import"./index-kxnQI0Cl.js";import"./index-DC5PMXgz.js";import"./PopoverPopup-5dJ4xSYR.js";import"./InternalBackdrop-B1PWndwc.js";import"./composite-BNHMrFyE.js";import"./index-CJnR7cM_.js";import"./getDisabledMountTransitionStyles-8x2Gf4ix.js";import"./ToolbarRootContext-BU6uR7dz.js";import"./tick-8C35Ay4D.js";import"./svgIconContainer-BIiUvxcP.js";import"./small-cross-DkpqNIrR.js";import"./search-BQQODEli.js";import"./cross-DTT8xN_V.js";import"./useValueChanged-CulitGOu.js";import"./getPseudoElementBounds-DuGEZlai.js";import"./CompositeItem-BD6lDA45.js";import"./makeExternalStore-C9-V4S7e.js";import"./BaseForm-B3Eyp77M.js";import"./ActionButton-wy0NESyC.js";import"./Button-C1MrjwiB.js";import"./SkeletonBar-3dZxATgt.js";import"./Tooltip-DMJgRtRS.js";import"./info-sign-BMsEFLd2.js";import"./chevron-up-kQ0i4uYc.js";import"./chevron-down-oj878TNR.js";import"./useEventCallback-BiHOi3SY.js";import"./iconLoader-B7b9fJRp.js";import"./Switch-DCUg-apP.js";import"./CompositeRoot-C4K0-3qe.js";import"./TimePicker-KYObQjLo.js";import"./CollapsiblePanel-DTI6vdFY.js";import"./error-BrfIeh_k.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-ChgDZqBx.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
