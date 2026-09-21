import{j as t,g as n}from"./iframe-BOj5ppke.js";import{A as r}from"./action-form-CLP9yhjk.js";import"./preload-helper-CBHct16F.js";import"./DropdownField-D4MnIHgF.js";import"./debounce-DoyNhnA7.js";import"./useOsdkClient-n_KwCS3w.js";import"./index-HKvlrTBa.js";import"./Input-D8jSSVKT.js";import"./useBaseUiId-BNy53Xwg.js";import"./useControlled-7cY7BcCI.js";import"./index-yY_I17Ls.js";import"./index-D09ehKI5.js";import"./PopoverPopup-DVsaBUbG.js";import"./InternalBackdrop-2JUdJu3v.js";import"./composite-BIYhI5rN.js";import"./index-60fYJKFG.js";import"./getDisabledMountTransitionStyles-BPfNVA-k.js";import"./ToolbarRootContext-BwQvbarU.js";import"./tick-ZiYqSkEH.js";import"./svgIconContainer-BuTDWv6N.js";import"./small-cross-Bg4ILemt.js";import"./search-Df27sRIb.js";import"./cross-DNHN82gf.js";import"./useValueChanged-1Gqn7W9E.js";import"./getPseudoElementBounds-BnmQ9bfG.js";import"./CompositeItem-DOYu6l81.js";import"./makeExternalStore-EqBWCSWE.js";import"./BaseForm-BUaSYS76.js";import"./ActionButton-BOz9rn69.js";import"./Button-KVqGzs9n.js";import"./SkeletonBar-B-IOK4wU.js";import"./Tooltip-DoFeRf33.js";import"./info-sign-Bvpmj31x.js";import"./chevron-up-CqVYUoaB.js";import"./chevron-down-CNYfkkhw.js";import"./useEventCallback-6T1KNzx1.js";import"./iconLoader-Dis7hhLL.js";import"./Switch-DbMODR_S.js";import"./CompositeRoot-P1GK0rN_.js";import"./TimePicker-BLHNPnJA.js";import"./CollapsiblePanel-C2WGctBy.js";import"./error-DVmdWFmh.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-RevSluC0.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
