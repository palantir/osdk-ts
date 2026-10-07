import{j as t,g as n}from"./iframe-BMLtitQA.js";import{A as r}from"./action-form-D7ICKeeB.js";import"./preload-helper-B7zvwNzg.js";import"./DropdownField-Dinvefr-.js";import"./debounce-CQ_Rs17S.js";import"./useOsdkClient-DL7Kf8Sx.js";import"./index-BKoaBi8s.js";import"./Input-D3mEoBXJ.js";import"./useBaseUiId-Bv7ijZL9.js";import"./useControlled-BSRFoePA.js";import"./index-1wGhlHyg.js";import"./index-G040djXj.js";import"./PopoverPopup-CFeC_ntr.js";import"./InternalBackdrop-CHrkdZLj.js";import"./composite-0pBAMAMm.js";import"./index-AqEp1dK7.js";import"./getDisabledMountTransitionStyles-CmHRQiW3.js";import"./ToolbarRootContext-C3i3QER6.js";import"./tick-BiexrdJO.js";import"./svgIconContainer-DG_uvfKl.js";import"./small-cross-Cu-xAWUl.js";import"./search-CINj6xtb.js";import"./cross-B9AlOyDj.js";import"./useValueChanged-3DIww79j.js";import"./getPseudoElementBounds-C6QupuvE.js";import"./CompositeItem-FfLXXCMg.js";import"./makeExternalStore-6yj2j-8e.js";import"./BaseForm-AM_7_9Iu.js";import"./ActionButton-BE8P3Fn6.js";import"./Button-eAAIImFA.js";import"./SkeletonBar-BrybbI32.js";import"./Tooltip-Bk1044gE.js";import"./info-sign-CaniFzov.js";import"./chevron-up-D0YU9iNA.js";import"./chevron-down-BmGdKwgH.js";import"./useEventCallback-DBFZ4mZ7.js";import"./iconLoader-CZjO20cw.js";import"./Switch-tC8QyVMu.js";import"./CompositeRoot-CdNOM7Hm.js";import"./TimePicker-CmP6ebYU.js";import"./CollapsiblePanel-DJu6yMtL.js";import"./error-DwpvxQx3.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Bco6NPuI.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
