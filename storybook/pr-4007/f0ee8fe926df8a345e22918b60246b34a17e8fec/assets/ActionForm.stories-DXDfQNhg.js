import{j as t,g as n}from"./iframe-BXr8Xp2f.js";import{A as r}from"./action-form-C2yAU1Iu.js";import"./preload-helper-QMSJ2T2z.js";import"./DropdownField-DdBf8ANg.js";import"./debounce-C89iykon.js";import"./useOsdkClient-B7TJU7Dn.js";import"./index-Di1QXXOB.js";import"./Input-C5ZRCR8-.js";import"./useBaseUiId-BnWXJnJX.js";import"./useControlled-B8QMfPVX.js";import"./index-B1TvT34D.js";import"./index-Bxr4aZil.js";import"./PopoverPopup-6Xu4OLUV.js";import"./InternalBackdrop-BC2Mb0IP.js";import"./composite-DX-jTCFh.js";import"./index-DklSHYVg.js";import"./getDisabledMountTransitionStyles-BMa-7_u5.js";import"./ToolbarRootContext-CF3RFtFR.js";import"./tick-DbVcYKyy.js";import"./svgIconContainer-DI5sy3Bm.js";import"./small-cross-Bd1moWk7.js";import"./search-zzPZfnCA.js";import"./cross-BWStps-6.js";import"./useValueChanged-91n4n7Az.js";import"./getPseudoElementBounds-x4SpAFDI.js";import"./CompositeItem-4cSdCb7D.js";import"./makeExternalStore-BWoLV1uK.js";import"./BaseForm-Dm8yd3lq.js";import"./ActionButton-BUgkVL_1.js";import"./Button-C-QbecBZ.js";import"./SkeletonBar-BerAdX9-.js";import"./Tooltip-CR0agNo_.js";import"./info-sign-f69FyY5C.js";import"./chevron-up-CgAQ9KWK.js";import"./chevron-down-IAwnATnI.js";import"./useEventCallback-D_2naMiZ.js";import"./iconLoader-1SSxpEQy.js";import"./CompositeRoot-BdT-xVyS.js";import"./Switch-Cmo2qFOY.js";import"./TimePicker-CglnMLjo.js";import"./CollapsiblePanel-BcVKiAEP.js";import"./error-CCe_KGjt.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-D8QddkhH.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
