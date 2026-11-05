import{j as t,g as n}from"./iframe-ClYhC0-S.js";import{A as r}from"./action-form-Cjs04iF4.js";import"./preload-helper-CNkkVcag.js";import"./DropdownField-DcyfDtmr.js";import"./debounce-Ck8WOOl2.js";import"./useOsdkClient-C5IVuxHo.js";import"./index-Bmj0xk3d.js";import"./Input-D8CWVoNO.js";import"./useBaseUiId-Dd8fT170.js";import"./useControlled-4Gm1FEJo.js";import"./index-D8PsRgog.js";import"./index-CI-u4eDt.js";import"./isObject-BxkrbndP.js";import"./InternalBackdrop-BvLY_ojf.js";import"./composite-BwqNvQ0F.js";import"./index-BMLvSUmF.js";import"./getDisabledMountTransitionStyles-DrhK1CmR.js";import"./ToolbarRootContext-DAdrKT5D.js";import"./tick-BT7qCCyz.js";import"./svgIconContainer-9bIBfj8h.js";import"./small-cross-aEaqetZ9.js";import"./search-BBIKhGWf.js";import"./cross-C_2oyR03.js";import"./useValueChanged-6OE2Wa-N.js";import"./getPseudoElementBounds-CqY0Dp1D.js";import"./CompositeItem-CPrfZrML.js";import"./makeExternalStore-BHHGj5YL.js";import"./BaseForm-oPwVTGwq.js";import"./ActionButton-DNeWdOgS.js";import"./Button-Dg23Hvs4.js";import"./SkeletonBar-BZOsAT84.js";import"./Tooltip-Cq73361T.js";import"./info-sign-uOY7iQC6.js";import"./chevron-up-DuRbxtQz.js";import"./chevron-down-DJbVh1LY.js";import"./useEventCallback-DNonn3MU.js";import"./iconLoader-Ctj1YLE6.js";import"./Switch-TlIib0o6.js";import"./CompositeRoot-BXpO_Vjm.js";import"./TimePicker-D3pcNV-I.js";import"./CollapsiblePanel-CGTT3k_x.js";import"./error-BD_aaRfa.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BvbgqpCV.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
