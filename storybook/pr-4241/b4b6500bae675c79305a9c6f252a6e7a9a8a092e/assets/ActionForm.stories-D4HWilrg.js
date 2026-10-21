import{j as t,g as n}from"./iframe-Bg0i_UAO.js";import{A as r}from"./action-form-kPo8MRwN.js";import"./preload-helper-bomzM5Jo.js";import"./DropdownField-DD3uTne1.js";import"./debounce-BL-pXwMa.js";import"./useOsdkClient-r7ETv_l7.js";import"./index-iuNvYGUj.js";import"./Input-DGqcQ9G-.js";import"./useBaseUiId-Dy2tLJKh.js";import"./useControlled-BYTWKxAR.js";import"./index-BNlKleF-.js";import"./index-DmhiGDhn.js";import"./PopoverPopup-BF-Javiq.js";import"./InternalBackdrop-CVk0rAPJ.js";import"./composite-DU2hn-v2.js";import"./index-Ce8RK2-k.js";import"./getDisabledMountTransitionStyles-DmbZ1RCY.js";import"./ToolbarRootContext-BrU5VQqZ.js";import"./tick-CXF_8gMW.js";import"./svgIconContainer-458A5wVg.js";import"./small-cross-CCjOzjzK.js";import"./search-FIM5R_Xb.js";import"./cross-DYXULJqv.js";import"./useValueChanged-B-bZoMqO.js";import"./getPseudoElementBounds-HKqm4JQP.js";import"./CompositeItem-DcA0lzjF.js";import"./makeExternalStore-DXmjaos-.js";import"./BaseForm-CFWXElTE.js";import"./ActionButton-DnfLk4MD.js";import"./Button-BG7UnPBU.js";import"./SkeletonBar-C9Q9W8wl.js";import"./Tooltip-De8rcIwq.js";import"./info-sign-Cd7R5SKj.js";import"./chevron-up-B4yy4nu1.js";import"./chevron-down-WqwXZksn.js";import"./useEventCallback-DQN4LN3R.js";import"./iconLoader-CGntaali.js";import"./Switch-JvWqrp_e.js";import"./CompositeRoot-C3CwfXtV.js";import"./TimePicker-Xz7nwlm8.js";import"./CollapsiblePanel-CQh_sS0z.js";import"./error-DVM1iMsf.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CcEO5U0p.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
