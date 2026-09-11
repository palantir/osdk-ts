import{j as t,g as n}from"./iframe-D0YyS42l.js";import{A as r}from"./action-form-B5Yhr7oM.js";import"./preload-helper-BCB_Qe4i.js";import"./DropdownField-CTN60ABC.js";import"./debounce-La9qLeq9.js";import"./useOsdkClient-B0pex126.js";import"./index-Bsavn4W3.js";import"./Input-souD-H1n.js";import"./useBaseUiId-D4SQ7WJt.js";import"./useControlled-BGd4K6A9.js";import"./index-O1djYu27.js";import"./index-C1kCmh68.js";import"./PopoverPopup-VnWmhErJ.js";import"./InternalBackdrop-D9upuHND.js";import"./composite-z8nqybue.js";import"./index-Dc1DVeAQ.js";import"./getDisabledMountTransitionStyles-K03_8xe9.js";import"./ToolbarRootContext-Dm0HFQW0.js";import"./tick-SAyJyQPf.js";import"./svgIconContainer-ppOpPTiK.js";import"./small-cross-DJSbcK9x.js";import"./search-BXsTnHq3.js";import"./cross-dsq08tGB.js";import"./useValueChanged-ekySp4OE.js";import"./getPseudoElementBounds-b9qWfldr.js";import"./CompositeItem-CUm9EsTA.js";import"./makeExternalStore-Bdcno4ct.js";import"./BaseForm-DSYg9AKn.js";import"./ActionButton-XaTJJChP.js";import"./Button-tmtP2Iw5.js";import"./SkeletonBar-CbGoPUD7.js";import"./Tooltip-BQWGFJIA.js";import"./info-sign-Cmgau43G.js";import"./chevron-up-DZVTcENu.js";import"./chevron-down-B2Awu_XJ.js";import"./useEventCallback-ME00EgX0.js";import"./iconLoader-z-1r9GP2.js";import"./CompositeRoot-CvCbKzH7.js";import"./Switch-CIfIzYN6.js";import"./TimePicker-BF0JHFV1.js";import"./CollapsiblePanel-Bw7Zr0mb.js";import"./error-CbeKU1Tz.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-D7tqwlWZ.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
