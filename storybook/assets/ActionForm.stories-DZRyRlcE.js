import{j as t,g as n}from"./iframe-DeJWYCn1.js";import{A as r}from"./action-form-5qZMVXXB.js";import"./preload-helper-Dp1pzeXC.js";import"./DropdownField-BiG-Qys8.js";import"./debounce-DaBf6ZBx.js";import"./useOsdkClient-CNpvmYWs.js";import"./index-B5Yva2Xc.js";import"./Input-ChnYFThm.js";import"./useBaseUiId-DhBsrvdy.js";import"./useControlled-DyW4-M2H.js";import"./index-B6JIIbmg.js";import"./index-Bkdv8Oep.js";import"./PopoverPopup-BUbNU-wA.js";import"./InternalBackdrop-BJau4LqI.js";import"./composite-q4pLTQsX.js";import"./index-Ccr_Oqxn.js";import"./getDisabledMountTransitionStyles-xtYaaI8G.js";import"./ToolbarRootContext-Bw_XS67E.js";import"./tick-DsYG6Jvb.js";import"./svgIconContainer-D4OdXIbd.js";import"./small-cross-CfWYRnkb.js";import"./search-ymO1htD2.js";import"./cross-BHBLhOoQ.js";import"./useValueChanged-B2CAJ-lq.js";import"./getPseudoElementBounds-Cyi5-PCV.js";import"./CompositeItem-BhfhJAmc.js";import"./makeExternalStore-DYjFjmyg.js";import"./BaseForm-DQeaScNi.js";import"./ActionButton-DPXABoY3.js";import"./Button-BTjXEyn6.js";import"./SkeletonBar-BwPzkscq.js";import"./Tooltip-BhujbOiL.js";import"./info-sign-WO2iJNpU.js";import"./chevron-up-Bi4USfde.js";import"./chevron-down-C0hhObXO.js";import"./useEventCallback-DdrNhhpd.js";import"./iconLoader-Diryf2Zb.js";import"./Switch-CzKlNluP.js";import"./CompositeRoot-C_4lfzRs.js";import"./TimePicker-DjkxGbXN.js";import"./CollapsiblePanel-BMKqCEZr.js";import"./error-CPbKcdrM.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BUS-C4Xd.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
