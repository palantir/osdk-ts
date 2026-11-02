import{j as t,g as n}from"./iframe-C51H6UNa.js";import{A as r}from"./action-form-Dw34_JaL.js";import"./preload-helper-DPRquFXQ.js";import"./DropdownField-BbfVhW4P.js";import"./debounce-DxRcBaI1.js";import"./useOsdkClient-D8E3YhRa.js";import"./index-XgCK3bCN.js";import"./Input-578UpJoR.js";import"./useBaseUiId-BO3VYUv8.js";import"./useControlled-CDSAxchT.js";import"./index-DJOOHoWw.js";import"./index-Cf0yVo51.js";import"./PopoverPopup-CZx3Vhv9.js";import"./InternalBackdrop-D_glzBrd.js";import"./composite-BT7MKZYR.js";import"./index-DJa5-hKe.js";import"./getDisabledMountTransitionStyles-Cq4DahQq.js";import"./ToolbarRootContext-Dquj6J6i.js";import"./tick-obAEPBey.js";import"./svgIconContainer-BcKhCUV6.js";import"./small-cross-Wl991iyC.js";import"./search-CUjniAIx.js";import"./cross-Da8aR7tr.js";import"./useValueChanged-BXBXo6ad.js";import"./getPseudoElementBounds-CE1EUuF6.js";import"./CompositeItem-B83sK6r-.js";import"./makeExternalStore-DINTZeIb.js";import"./BaseForm-BB3DFPiI.js";import"./ActionButton-BFr5UQ2Z.js";import"./Button-BbdKgphf.js";import"./SkeletonBar-DSiG1Rwc.js";import"./Tooltip-BMyMoL9M.js";import"./info-sign-DkQgwSte.js";import"./chevron-up-ZftVvxdh.js";import"./chevron-down-CiXp0wUf.js";import"./useEventCallback-Dyoji95Y.js";import"./iconLoader-BHWvOmL7.js";import"./Switch-Cr2_ljrI.js";import"./CompositeRoot-DIqE-wXB.js";import"./TimePicker-BC_09Xnz.js";import"./CollapsiblePanel-C3NDAcsc.js";import"./error-BabcdKAa.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-55ZGkUds.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
