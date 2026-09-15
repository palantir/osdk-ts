import{j as t,g as n}from"./iframe-a31F6Zea.js";import{A as r}from"./action-form-9ObKv4kR.js";import"./preload-helper-BfFj_4tp.js";import"./DropdownField-C3Jn0eQq.js";import"./debounce-CODw_OdZ.js";import"./useOsdkClient-Ci2TgkT7.js";import"./index-BnGZPYV4.js";import"./Input-CBWYwmBc.js";import"./useBaseUiId-CSUeT06E.js";import"./useControlled-CN75eaZx.js";import"./index-DFESKWXH.js";import"./index-DSAvdwec.js";import"./PopoverPopup--cbpjW0Q.js";import"./InternalBackdrop-DjwrHJRF.js";import"./composite-B8asvRon.js";import"./index-CTMiLHyK.js";import"./getDisabledMountTransitionStyles-DnjPaBF0.js";import"./ToolbarRootContext-wQy2gScd.js";import"./tick-D6JN-An3.js";import"./svgIconContainer-DxZS3Oh3.js";import"./small-cross-DydNjtyB.js";import"./search-BWfh2RdL.js";import"./cross-Ctxx23y-.js";import"./useValueChanged-BCR7isnN.js";import"./getPseudoElementBounds-BXq9UpA2.js";import"./CompositeItem-mbuOs1fC.js";import"./makeExternalStore-CySlHC0C.js";import"./BaseForm-Bp8wsW4l.js";import"./ActionButton-DRwEwaLd.js";import"./Button-a8my9L0w.js";import"./SkeletonBar-4ArO1hst.js";import"./Tooltip-Bta8a6KY.js";import"./info-sign-DTGsM-0_.js";import"./chevron-up-Jd-bDiIb.js";import"./chevron-down-hBWeBGBN.js";import"./useEventCallback-DbzrgPEa.js";import"./iconLoader-D8VIXm7J.js";import"./CompositeRoot-DTD1nVz-.js";import"./Switch-Biew1TcH.js";import"./TimePicker-BUatDnbw.js";import"./CollapsiblePanel-BhG8Ptxn.js";import"./error-C3q1XKPy.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-B5cAgh1b.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
