import{j as t,g as n}from"./iframe-BoRHmw1P.js";import{A as r}from"./action-form-uTcZHUQo.js";import"./preload-helper-BwC4djfE.js";import"./DropdownField-D0TX0D9X.js";import"./debounce-fg_UNTnM.js";import"./useOsdkClient-CMKxLvF9.js";import"./index-CKE1HitJ.js";import"./Input-C1OYcJfy.js";import"./useBaseUiId-CclY9vCT.js";import"./useControlled-DCVjIVG_.js";import"./index-DtzOCkwB.js";import"./index-CrIjACAu.js";import"./PopoverPopup-DYqs8h8g.js";import"./InternalBackdrop-C0dWxoMX.js";import"./composite-NGGk8Cjx.js";import"./index-DJcZ5Upx.js";import"./getDisabledMountTransitionStyles-CL6SxWwa.js";import"./ToolbarRootContext-CcVDjx55.js";import"./tick-DIjubJnt.js";import"./svgIconContainer-BiIenURc.js";import"./small-cross-tSFsGM1S.js";import"./search-DY5E4Hwb.js";import"./cross-CXHDS3ru.js";import"./useValueChanged-DZj1boR2.js";import"./getPseudoElementBounds-BowpVekl.js";import"./CompositeItem-BuKhldON.js";import"./makeExternalStore-DDuoJFnu.js";import"./BaseForm-D1Mu4Ofn.js";import"./ActionButton-Uz6_D_U2.js";import"./Button-D_pTSnh0.js";import"./SkeletonBar-BF5QQ5Lz.js";import"./Tooltip-0AEySry7.js";import"./info-sign-4vvuVHL9.js";import"./chevron-up-DPtMsXVg.js";import"./chevron-down-DOBMuKk4.js";import"./useEventCallback-s1Vmoh60.js";import"./iconLoader-tcfxBYuV.js";import"./Switch-PPeWjBs6.js";import"./CompositeRoot-BfyIfqM1.js";import"./TimePicker-DNpkXlIL.js";import"./CollapsiblePanel-CuhbJXth.js";import"./error-sO_QuGwO.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-D9OdN7A-.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
