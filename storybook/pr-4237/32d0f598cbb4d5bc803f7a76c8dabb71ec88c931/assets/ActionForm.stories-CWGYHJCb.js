import{j as t,g as n}from"./iframe-D46iQmwz.js";import{A as r}from"./action-form-DYyqeucc.js";import"./preload-helper-CD5q78pN.js";import"./DropdownField-CVhHYQdg.js";import"./debounce-CZeVCb1Q.js";import"./useOsdkClient-DUJkV3uU.js";import"./index-aAuOiy4H.js";import"./Input-Y05_-7l4.js";import"./useBaseUiId-CzYRzxTP.js";import"./useControlled-B0hedhV2.js";import"./index-B9mI2qXL.js";import"./index-B11g5eQq.js";import"./PopoverPopup-l6zrAa5D.js";import"./InternalBackdrop-by-ceIbs.js";import"./composite-DKDexQnG.js";import"./index-U-d4CKYD.js";import"./getDisabledMountTransitionStyles-3PNri0U8.js";import"./ToolbarRootContext-D_lRWVni.js";import"./tick-CSNy2-E-.js";import"./svgIconContainer-B30Y3J7X.js";import"./small-cross-BSVqwTPi.js";import"./search-CTXiTDhB.js";import"./cross-DILS2Eyl.js";import"./useValueChanged-BMGjZ3vx.js";import"./getPseudoElementBounds-CjKg6Y1I.js";import"./CompositeItem-K2_1UaBE.js";import"./makeExternalStore-BRMHbBWy.js";import"./BaseForm-DBoLgWpJ.js";import"./ActionButton-BYzYLETk.js";import"./Button-C713JtES.js";import"./SkeletonBar-CcQvDZ8T.js";import"./Tooltip-Co7-V-9X.js";import"./info-sign-BcABZXFI.js";import"./chevron-up-DzgvA9uv.js";import"./chevron-down-CLNkT6er.js";import"./useEventCallback-V7mrEIFj.js";import"./iconLoader-V16VyQww.js";import"./Switch-CKg3oFM3.js";import"./CompositeRoot-Dq0N1Y5H.js";import"./TimePicker-Bre4j1QW.js";import"./CollapsiblePanel-Dtiip96Z.js";import"./error-C1HeeVQA.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BBV3u7Lm.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
