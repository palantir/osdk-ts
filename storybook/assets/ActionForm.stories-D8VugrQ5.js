import{j as t,g as n}from"./iframe-Dk0apQWL.js";import{A as r}from"./action-form-DvTYg6BC.js";import"./preload-helper-Dp1pzeXC.js";import"./DropdownField-SyLzUpD6.js";import"./debounce-Bisu8SDu.js";import"./useOsdkClient-vEcJQf38.js";import"./index-BB76_vsP.js";import"./Input-BWvGoQIW.js";import"./useBaseUiId-DQQ7To9Z.js";import"./useControlled-BoHpDSdR.js";import"./index-Dw8JwmE5.js";import"./index-D4wGw7f5.js";import"./PopoverPopup-GacXe4V2.js";import"./InternalBackdrop-BUdWMD8m.js";import"./composite-Cbj8LV8T.js";import"./index-QtJ8ftv1.js";import"./getDisabledMountTransitionStyles-ByloQe2_.js";import"./ToolbarRootContext-Cfg54QU-.js";import"./tick-DMn6pr7G.js";import"./svgIconContainer-BwfkG_x4.js";import"./small-cross-CylaTMSl.js";import"./search-DeE9hnrl.js";import"./cross-mMEGpaf9.js";import"./useValueChanged-D0eJODMY.js";import"./getPseudoElementBounds-Bat3eBC6.js";import"./CompositeItem-C2KsOfaA.js";import"./makeExternalStore-hT_U_1se.js";import"./BaseForm-COsIXdEe.js";import"./ActionButton-Dz0C2N0K.js";import"./Button-cnivFiIY.js";import"./SkeletonBar-Dk0v_u2l.js";import"./Tooltip-DbhzqFNA.js";import"./info-sign-B2Uc1egk.js";import"./chevron-up-DpOwjUJM.js";import"./chevron-down-BDsXaIBN.js";import"./useEventCallback-BqQVBoQ2.js";import"./iconLoader-B4DBGQva.js";import"./Switch-DOV1RZ59.js";import"./CompositeRoot-CKIYjpf5.js";import"./TimePicker-Rf93HQUn.js";import"./CollapsiblePanel-BM1L2j_O.js";import"./error-gPnUZGMu.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Bwt22oAD.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
