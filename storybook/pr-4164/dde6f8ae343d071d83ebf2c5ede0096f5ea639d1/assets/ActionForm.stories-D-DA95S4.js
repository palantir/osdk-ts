import{j as t,g as n}from"./iframe-BmAfqmVA.js";import{A as r}from"./action-form-BvZxwi3e.js";import"./preload-helper-Dw8BIZgV.js";import"./DropdownField-D1g5_LVv.js";import"./debounce-J4cnnbIe.js";import"./useOsdkClient-Dkseg2Ko.js";import"./index-B62tNakJ.js";import"./Input-Nk05MRQJ.js";import"./useBaseUiId-Ve_Ndjtk.js";import"./useControlled-DnfhwrQ9.js";import"./index-dHY7n0A_.js";import"./index-fK0RIQv7.js";import"./PopoverPopup-BO42v_DZ.js";import"./InternalBackdrop-B-HL31XO.js";import"./composite-D_ZO_GVZ.js";import"./index-sRqT8LaY.js";import"./getDisabledMountTransitionStyles-D7fYxIXW.js";import"./ToolbarRootContext-BGE7RlZq.js";import"./tick-C2TrJ_N8.js";import"./svgIconContainer-DmqE13LP.js";import"./small-cross-hJq0bu3d.js";import"./search-CXOC_cUa.js";import"./cross-CIbg1fnp.js";import"./useValueChanged-BOO_UIZl.js";import"./getPseudoElementBounds-vijoVG-C.js";import"./CompositeItem-DXCwTfSl.js";import"./makeExternalStore-Bdb1GDa3.js";import"./BaseForm-PgiYuni4.js";import"./ActionButton-C7nJBpda.js";import"./Button-B6o09hJ9.js";import"./SkeletonBar-CpgIKy9M.js";import"./Tooltip-CvzNm6MG.js";import"./info-sign-CoSsOG6z.js";import"./chevron-up-ClOJJEG1.js";import"./chevron-down-BlYRgYBH.js";import"./useEventCallback-Dst592Es.js";import"./iconLoader-Dn6abXAI.js";import"./Switch-C7WnPM_5.js";import"./CompositeRoot-B18AJa_f.js";import"./TimePicker-Ci-CNBW5.js";import"./CollapsiblePanel-BARvj3J1.js";import"./error-Dmi1futd.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-ihUosZll.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
