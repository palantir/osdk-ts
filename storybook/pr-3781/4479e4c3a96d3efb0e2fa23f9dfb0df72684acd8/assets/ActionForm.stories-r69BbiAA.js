import{j as t,g as n}from"./iframe-DkjIhjOk.js";import{A as r}from"./action-form-yU96wqO-.js";import"./preload-helper-DUI5tsck.js";import"./DropdownField-BL_jj1eH.js";import"./debounce-JLt9Gzvl.js";import"./useOsdkClient-CXgoPmaj.js";import"./index-Ci1HsxQf.js";import"./Input-D-eMrt1E.js";import"./useBaseUiId-Biend9O3.js";import"./useControlled-BTghw2bz.js";import"./index-ey6hl2b8.js";import"./index--Nzol5yv.js";import"./PopoverPopup-D3VoNSFI.js";import"./InternalBackdrop-C_M3PWM9.js";import"./composite-DVDI3Vyc.js";import"./index-C-30e07L.js";import"./getDisabledMountTransitionStyles-4RzuPJj6.js";import"./ToolbarRootContext-6z2XExln.js";import"./tick-PgSwRzNQ.js";import"./svgIconContainer-bvG5TW2Y.js";import"./small-cross-Bdoag7lD.js";import"./search-BZ8v_096.js";import"./cross-BOLu8mlC.js";import"./useValueChanged-mGVslq15.js";import"./getPseudoElementBounds-Cjnm34tD.js";import"./CompositeItem-BNwAusbR.js";import"./makeExternalStore-DV2VnHUE.js";import"./BaseForm-pe4CEMyS.js";import"./ActionButton-DnSGyXBp.js";import"./Button-CwSvPgha.js";import"./SkeletonBar-xPxJdYTs.js";import"./Tooltip-A5u3Ouiv.js";import"./info-sign-DHw8Wbjp.js";import"./chevron-up-B2z461Ys.js";import"./chevron-down-DahpzRGw.js";import"./useEventCallback-BcNnEe4O.js";import"./iconLoader-CB4Kglue.js";import"./Switch-CYl2Zsdy.js";import"./CompositeRoot-DHMzLgl1.js";import"./TimePicker-BTCD6v9K.js";import"./CollapsiblePanel-DeuzuEYY.js";import"./error-B5H2RzDH.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CFjDkd46.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
