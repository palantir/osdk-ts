import{j as t,g as n}from"./iframe-BH9-Vfs1.js";import{A as r}from"./action-form-CKLxt6Kw.js";import"./preload-helper-CoJdsvxJ.js";import"./DropdownField-BPBBYIiE.js";import"./debounce-CErsKOIl.js";import"./useOsdkClient-B78DQJmL.js";import"./index-_6Q5jVBK.js";import"./Input-CYVECsi-.js";import"./useBaseUiId-CdU1pKU6.js";import"./useControlled-UCeQQNPP.js";import"./index-CUm5VRBM.js";import"./index-iq-MawLa.js";import"./PopoverPopup-Diu6AqpB.js";import"./InternalBackdrop-C4RHDXX9.js";import"./composite-aDEaeN1m.js";import"./index-D_GYi7KZ.js";import"./getDisabledMountTransitionStyles-Bavl1m2r.js";import"./ToolbarRootContext-CbUVM7d6.js";import"./tick-sRS91U9j.js";import"./svgIconContainer-BPyIUPO5.js";import"./small-cross-Ws2nfjsL.js";import"./search-CaTzsfhK.js";import"./cross-HuW5yWPa.js";import"./useValueChanged-C51YJ2lo.js";import"./getPseudoElementBounds-fo53-Bfk.js";import"./CompositeItem-D5PXOQkD.js";import"./makeExternalStore-Cax4wnWM.js";import"./BaseForm-irPD53Hy.js";import"./ActionButton-CgXb0xmm.js";import"./Button-DJTiAyTL.js";import"./SkeletonBar-DUzCarP5.js";import"./Tooltip-D8UPmHEX.js";import"./info-sign-BjJtiiZ8.js";import"./chevron-up-CyXdAHIW.js";import"./chevron-down-SngEWHwD.js";import"./useEventCallback-BM_lCHBk.js";import"./iconLoader-B6nfzpFb.js";import"./Switch-DUvigo_W.js";import"./CompositeRoot-C4LeCwy8.js";import"./TimePicker-TVKDfKXV.js";import"./CollapsiblePanel-b7brQAbP.js";import"./error-BMBrp2lF.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DsCWHvB2.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
