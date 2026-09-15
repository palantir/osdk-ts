import{j as t,g as n}from"./iframe-BqB00GiJ.js";import{A as r}from"./action-form-CBj-L7eV.js";import"./preload-helper-CBNowE1F.js";import"./DropdownField-DMGNppZZ.js";import"./debounce-DJYw4rW8.js";import"./useOsdkClient-TXFw7McP.js";import"./index-B6ljFb81.js";import"./Input-BuKObC1x.js";import"./useBaseUiId-BOd5ixEm.js";import"./useControlled-BB4FINPW.js";import"./index-HDQn5rHu.js";import"./index-Bn4ERW5E.js";import"./PopoverPopup-9AX7mF7M.js";import"./InternalBackdrop-BrgH0B3m.js";import"./composite-pnQuH5Q_.js";import"./index-9yoITr-1.js";import"./getDisabledMountTransitionStyles-BLzEUkBl.js";import"./ToolbarRootContext-B0-kN55K.js";import"./tick-km-CKWcD.js";import"./svgIconContainer-BKScRVgJ.js";import"./small-cross-DuiafL3Y.js";import"./search-Bz2m71mS.js";import"./cross-NroKy72c.js";import"./useValueChanged-vVuVXkf4.js";import"./getPseudoElementBounds-DPHULfcE.js";import"./CompositeItem-E84gf2Yn.js";import"./makeExternalStore-CanGYDv6.js";import"./BaseForm-Bx7gsk7g.js";import"./ActionButton-DkxsgQ7J.js";import"./Button-UzxjVW7Z.js";import"./SkeletonBar-CqIDeBXY.js";import"./Tooltip-NtIdK9rB.js";import"./info-sign-31kZtQTU.js";import"./chevron-up-r4yG7OBX.js";import"./chevron-down-DmxY4RQH.js";import"./useEventCallback-D3Kfk8Ap.js";import"./iconLoader-C9_U9Tpq.js";import"./CompositeRoot-DLUsHFmN.js";import"./Switch-BdqE4Lme.js";import"./TimePicker-ss9yyeCL.js";import"./CollapsiblePanel-Dm2x088n.js";import"./error-D0GZGtsZ.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-D9LjqIyU.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
