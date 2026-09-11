import{j as t,g as n}from"./iframe-ooeZhevd.js";import{A as r}from"./action-form-lmd1x1mb.js";import"./preload-helper-BnwSBXhQ.js";import"./DropdownField-w_-x_8X7.js";import"./debounce-Bz4zrZ7K.js";import"./useOsdkClient-niwjXdb6.js";import"./index-Opepl_3W.js";import"./Input-ChnU8vn2.js";import"./useBaseUiId-C4sL4iAi.js";import"./useControlled-Gm0PZX0G.js";import"./index-CYHbLiIc.js";import"./index-BCos5_Jn.js";import"./PopoverPopup-BxQimM2r.js";import"./InternalBackdrop-x2qoBta4.js";import"./composite-DKgZ9LEy.js";import"./index-B9EyyIgd.js";import"./getDisabledMountTransitionStyles-BzrJdGmZ.js";import"./ToolbarRootContext-DJcBXYiU.js";import"./tick-BBpzHv2k.js";import"./svgIconContainer-ibzsHUTw.js";import"./small-cross-BLYu_41q.js";import"./search-DiIwZt1O.js";import"./cross-iJZIJRn7.js";import"./useValueChanged-DdWwkIMT.js";import"./getPseudoElementBounds-DWlgx5fm.js";import"./CompositeItem-CeghUTrN.js";import"./makeExternalStore-BQ6V8XYd.js";import"./BaseForm-BRIueJSg.js";import"./ActionButton-W94KnoF6.js";import"./Button-DqC8xzBf.js";import"./SkeletonBar-BEN-vvtf.js";import"./Tooltip-CXPB0dJ-.js";import"./info-sign-zNirwG5v.js";import"./chevron-up-D1TV3JWh.js";import"./chevron-down-BdjihE2B.js";import"./useEventCallback-EkipuQOe.js";import"./iconLoader-C_fS4OH2.js";import"./CompositeRoot-Mhsb_vEB.js";import"./Switch-BgQ538Ag.js";import"./TimePicker-BrVSj5Ht.js";import"./CollapsiblePanel-Dp0b_V1p.js";import"./error-Cy4V0hs4.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BKB5x-AQ.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
