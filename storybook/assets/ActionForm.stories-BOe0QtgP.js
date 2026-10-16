import{j as t,g as n}from"./iframe-CE0i8pTB.js";import{A as r}from"./action-form-D30ADh0K.js";import"./preload-helper-Dp1pzeXC.js";import"./DropdownField-Drtn2NQI.js";import"./debounce-6QIE8t0g.js";import"./useOsdkClient-DcXY1zGj.js";import"./index-B12pLj4f.js";import"./Input-Bhr3RBZS.js";import"./useBaseUiId-DyVtWBOW.js";import"./useControlled-CDXR85QA.js";import"./index-D0yQsmtH.js";import"./index-BxLsqAz-.js";import"./PopoverPopup-DjwUMmwA.js";import"./InternalBackdrop-BV_Rke0C.js";import"./composite-C3AQHTlr.js";import"./index-CWtwdWGx.js";import"./getDisabledMountTransitionStyles-C6UHxgiN.js";import"./ToolbarRootContext-DUj8Vy75.js";import"./tick-_bZ7VOxl.js";import"./svgIconContainer-B8VYHmcD.js";import"./small-cross-Cqq_EZqy.js";import"./search-B_4eoJVo.js";import"./cross-B7SwfS_M.js";import"./useValueChanged-BNETI0SY.js";import"./getPseudoElementBounds-BNWxnzVQ.js";import"./CompositeItem-Ei3HHm0y.js";import"./makeExternalStore-CD97K3xm.js";import"./BaseForm-Nl7geQGq.js";import"./ActionButton-B8HjZLzN.js";import"./Button-CEwAliaC.js";import"./SkeletonBar-CseY9H7t.js";import"./Tooltip-C8uGck5Z.js";import"./info-sign-BtznHuG8.js";import"./chevron-up-ChqwJ-qy.js";import"./chevron-down-D2N1M9YY.js";import"./useEventCallback-OX93Cv40.js";import"./iconLoader-DrJ3PicB.js";import"./Switch-70W0JWMy.js";import"./CompositeRoot-BxThsILO.js";import"./TimePicker-BAy8OXTy.js";import"./CollapsiblePanel-BXnErSCf.js";import"./error-WOehnpts.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DRff-iWr.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
