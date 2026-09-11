import{j as t,g as n}from"./iframe-CrZ39q4W.js";import{A as r}from"./action-form-OgB6ayWj.js";import"./preload-helper-CBYzcUhb.js";import"./DropdownField-CpkGq24N.js";import"./debounce-CrnOUVh-.js";import"./useOsdkClient-DGv3o-sm.js";import"./index-BD7m3jFK.js";import"./Input-DIQd25cc.js";import"./useBaseUiId-sTwbXHgE.js";import"./useControlled-BBNkc-4m.js";import"./index-C_XnOq4s.js";import"./index--ClJ2plo.js";import"./PopoverPopup-DSVB_f17.js";import"./InternalBackdrop-C5GI9506.js";import"./composite-DRGdlpPN.js";import"./index-CE_0GkNT.js";import"./getDisabledMountTransitionStyles-D3nUrh49.js";import"./ToolbarRootContext-Bd0nHJjt.js";import"./tick-lwLiufa4.js";import"./svgIconContainer-JiAQFJfX.js";import"./small-cross-Dpu5uUbJ.js";import"./search-BqRMZJ3s.js";import"./cross-CgqXpQyr.js";import"./useValueChanged-6_0vBwFL.js";import"./getPseudoElementBounds-C_NMVDl6.js";import"./CompositeItem-DwChmrQE.js";import"./makeExternalStore-Bbx2CBha.js";import"./BaseForm-DQk78YEt.js";import"./ActionButton-DwqwMLmx.js";import"./Button-C2GAq-XZ.js";import"./SkeletonBar-CM8cFu92.js";import"./Tooltip-GYXLgvYO.js";import"./info-sign-32zJ75Mb.js";import"./chevron-up-DwgqwUol.js";import"./chevron-down-Do1ARTyC.js";import"./useEventCallback-B3yH_W0Y.js";import"./iconLoader-zWP9B8wZ.js";import"./CompositeRoot-Dwe7qPFT.js";import"./Switch-BGo7-37i.js";import"./TimePicker-76vdjdyi.js";import"./CollapsiblePanel-AgJKSqQy.js";import"./error-mXLWjtku.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CEEcnA0Y.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
