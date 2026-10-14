import{j as t,g as n}from"./iframe-rmDWkA_9.js";import{A as r}from"./action-form-k37xAGP-.js";import"./preload-helper-C9KhRoGp.js";import"./DropdownField-m3ZbFk-Q.js";import"./debounce-BvKRQopC.js";import"./useOsdkClient-BM6gicWm.js";import"./index-BJm_TGuS.js";import"./Input-ByxvWbQj.js";import"./useBaseUiId-eTIPtAex.js";import"./useControlled-J2jUgDlJ.js";import"./index-H2c6m-1E.js";import"./index-DxDYposm.js";import"./PopoverPopup-4q2X5f4w.js";import"./InternalBackdrop-DzWBIKbq.js";import"./composite-CfWqZbx5.js";import"./index-De_UCKOS.js";import"./getDisabledMountTransitionStyles-B9EO47QZ.js";import"./ToolbarRootContext-BXp0BN9t.js";import"./tick-CuO5iyTL.js";import"./svgIconContainer-CMH5VHbE.js";import"./small-cross-Bj93jEWq.js";import"./search-C7TYX9ku.js";import"./cross-2JsEwOCU.js";import"./useValueChanged-Cj7F5rYS.js";import"./getPseudoElementBounds-2-r7YzfT.js";import"./CompositeItem-CbLxl7fO.js";import"./makeExternalStore-CTIqcnCN.js";import"./BaseForm-BTvrjgRS.js";import"./ActionButton-fx9WgCVG.js";import"./Button-CBc549Tl.js";import"./SkeletonBar-BKZCl3Vr.js";import"./Tooltip-fR1RcwZF.js";import"./info-sign-QN6HGQtx.js";import"./chevron-up-Cz2eWK4B.js";import"./chevron-down-BX-4AcWo.js";import"./useEventCallback-D8hCo4Qr.js";import"./iconLoader-D6malpPC.js";import"./Switch-DOXajqwW.js";import"./CompositeRoot-BNSrnfb2.js";import"./TimePicker-BslDtVbV.js";import"./CollapsiblePanel-BAWkr6_y.js";import"./error-xYNFBZUd.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-f5SdKW_u.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
