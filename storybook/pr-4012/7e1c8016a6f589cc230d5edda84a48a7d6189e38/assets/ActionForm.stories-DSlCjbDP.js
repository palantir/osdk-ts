import{j as t,g as n}from"./iframe-BrWV3VGg.js";import{A as r}from"./action-form-Bw6cT4_t.js";import"./preload-helper-D6ZQDyfK.js";import"./DropdownField-srPoQHQr.js";import"./debounce-CK3d8RX5.js";import"./useOsdkClient-BN__21fG.js";import"./index-DYvdPCiw.js";import"./Input-CDM3tu-K.js";import"./useBaseUiId-C6P9jJC8.js";import"./useControlled-DP9gX7Yn.js";import"./index-D9RcQQYw.js";import"./index-BNPYibjQ.js";import"./PopoverPopup-CrFMP63L.js";import"./InternalBackdrop-D1UeMOCj.js";import"./composite-CPJHb2Y2.js";import"./index-C83r31cI.js";import"./getDisabledMountTransitionStyles-n4up3zHU.js";import"./ToolbarRootContext-C9pKuHkV.js";import"./tick-CFOMyABR.js";import"./svgIconContainer-BUmNfWM-.js";import"./small-cross-CSnrRgMJ.js";import"./search-Bx9ioHBB.js";import"./cross-BVo6wQKR.js";import"./useValueChanged-BenORVWn.js";import"./getPseudoElementBounds-Dt0T_qF0.js";import"./CompositeItem-gO6CPQln.js";import"./makeExternalStore-mRetLKqP.js";import"./BaseForm-DhfnWiII.js";import"./ActionButton-BL72bfc_.js";import"./Button-DQPjTYox.js";import"./SkeletonBar-rvURuLEV.js";import"./Tooltip-DI2aqz32.js";import"./info-sign-DqKprDqH.js";import"./chevron-up-BABUamT1.js";import"./chevron-down-hd2kSFPo.js";import"./useEventCallback-S146GLX7.js";import"./iconLoader-DuZ-AKK6.js";import"./CompositeRoot-CGQYcdRE.js";import"./Switch-CNSB6Dtn.js";import"./TimePicker-C1ANK0pS.js";import"./CollapsiblePanel-CaX-I3uU.js";import"./error-DAF972ng.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CQ4mIL1e.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
