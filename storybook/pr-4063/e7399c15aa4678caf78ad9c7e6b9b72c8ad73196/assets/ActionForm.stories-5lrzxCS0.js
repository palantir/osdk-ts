import{j as t,g as n}from"./iframe-C4MIlXUU.js";import{A as r}from"./action-form-BHleJeBQ.js";import"./preload-helper-DCfOkHUu.js";import"./DropdownField-iPMHZz0u.js";import"./debounce-NhhwNg05.js";import"./useOsdkClient-BdpGzgo-.js";import"./index-QdXGOJ9B.js";import"./Input-u7GRO9F9.js";import"./useBaseUiId-BLYxIIxg.js";import"./useControlled-DaM2GsbY.js";import"./index-fTGPOK7q.js";import"./index-DDMEfKUV.js";import"./PopoverPopup-BqUvpiAJ.js";import"./InternalBackdrop-C98GTYMM.js";import"./composite-7GWV62aV.js";import"./index-Cltx_TvU.js";import"./getDisabledMountTransitionStyles-BIGg12Vn.js";import"./ToolbarRootContext-DtcwdZup.js";import"./tick-Be-lb4_a.js";import"./svgIconContainer-DoAfVxUT.js";import"./small-cross-CI-bZQTO.js";import"./search-Bbx7uHY2.js";import"./cross-D03lplef.js";import"./useValueChanged-C4rXhlJi.js";import"./getPseudoElementBounds-Bg5q8lr3.js";import"./CompositeItem-C-l5BZdt.js";import"./makeExternalStore-D8FJMeEh.js";import"./BaseForm-CgzOuAK4.js";import"./ActionButton-DY1T25ma.js";import"./Button-BxGZ6LLp.js";import"./SkeletonBar-DZ93h05E.js";import"./Tooltip-hAryQfwI.js";import"./info-sign-Beho0s6v.js";import"./chevron-up-BLDpobnJ.js";import"./chevron-down-DQjtaLz5.js";import"./useEventCallback-A9aazwfG.js";import"./iconLoader-Il0ozg9p.js";import"./Switch-DKb-JCDD.js";import"./CompositeRoot-cqE1mAP-.js";import"./TimePicker-DSOL2QLg.js";import"./CollapsiblePanel-DHh5X-RV.js";import"./error-m5JvGXlH.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-P9SsSnz2.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
