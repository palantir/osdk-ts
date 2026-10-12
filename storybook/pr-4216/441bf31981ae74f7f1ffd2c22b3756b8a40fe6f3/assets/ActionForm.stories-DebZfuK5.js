import{j as t,g as n}from"./iframe-Bnd7pp_H.js";import{A as r}from"./action-form-DAU3e8-X.js";import"./preload-helper-CQp4ttna.js";import"./DropdownField-28PDU_yD.js";import"./debounce-CLMmEpMo.js";import"./useOsdkClient-Bzkrieut.js";import"./index-Dq4Q7R9n.js";import"./Input-Dh0I0gBB.js";import"./useBaseUiId-C3FoEBlZ.js";import"./useControlled-BJ3TNVDx.js";import"./index-CdD4spHg.js";import"./index-CFBknfgj.js";import"./PopoverPopup-DVwvpeMg.js";import"./InternalBackdrop-DF5eA8FP.js";import"./composite-ChdURaw7.js";import"./index-_ppv4b-3.js";import"./getDisabledMountTransitionStyles-B1HGzF4D.js";import"./ToolbarRootContext-V1EJjV6d.js";import"./tick-BMXdWkDm.js";import"./svgIconContainer-BHFCuUIe.js";import"./small-cross-Fvp5VPfx.js";import"./search-C2rfWWoo.js";import"./cross-nf57os0A.js";import"./useValueChanged-CBe6yFc7.js";import"./getPseudoElementBounds-DRM09z-T.js";import"./CompositeItem-B1cp5WfN.js";import"./makeExternalStore-BZ_ZxDJW.js";import"./BaseForm-B7Ztf380.js";import"./ActionButton-Dfv8zCtw.js";import"./Button-wIX1QNwU.js";import"./SkeletonBar-DNsqmLz9.js";import"./Tooltip-DxkXYJMW.js";import"./info-sign-e65uP70A.js";import"./chevron-up-BxknkjiV.js";import"./chevron-down-CkIljS9G.js";import"./useEventCallback-DrUAM8i2.js";import"./iconLoader-DH_LzfKQ.js";import"./Switch-BMn9zK-x.js";import"./CompositeRoot-DYTIixOI.js";import"./TimePicker-DbZ1U8c9.js";import"./CollapsiblePanel-DplLNpgq.js";import"./error-vnD_TY7d.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CtQ2hxG_.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
