import{j as t,g as n}from"./iframe-KOHCB4Ql.js";import{A as r}from"./action-form-BZr_R7L9.js";import"./preload-helper-C6JW-Yng.js";import"./DropdownField-Bm-pLwGh.js";import"./debounce-BkPBmf3P.js";import"./useOsdkClient-CE0gmR96.js";import"./index-BNcO0wRN.js";import"./Input-D6-DkH9C.js";import"./useBaseUiId-CnRKbAt1.js";import"./useControlled-BY7stmzf.js";import"./index-CBKKW39b.js";import"./index-BQDXS8xb.js";import"./PopoverPopup-ysDfGGix.js";import"./InternalBackdrop-imINBtvi.js";import"./composite-ChHDZB6E.js";import"./index-DCkGiwqv.js";import"./getDisabledMountTransitionStyles-AK4QR3JS.js";import"./ToolbarRootContext-DilrPmxZ.js";import"./tick-B2vqXtjq.js";import"./svgIconContainer-C4qAid9G.js";import"./small-cross-CvWdYn_H.js";import"./search-Dd1zov5c.js";import"./cross-BUaadKZZ.js";import"./useValueChanged-BSGCys20.js";import"./getPseudoElementBounds-DQfcxaUz.js";import"./CompositeItem-wiNuWtyF.js";import"./makeExternalStore-DeVyI-Ob.js";import"./BaseForm-CdNiun2d.js";import"./ActionButton-D9pI43aQ.js";import"./Button-uumGSIHU.js";import"./SkeletonBar-8CMS4org.js";import"./Tooltip-C7mgMzGT.js";import"./info-sign-CM6XaO-O.js";import"./chevron-up-DA-oKW4V.js";import"./chevron-down-InZk2kmp.js";import"./useEventCallback-Bb5XrgmO.js";import"./iconLoader-CNSp4W9N.js";import"./Switch-CPTs36yA.js";import"./CompositeRoot-B4djeu73.js";import"./TimePicker-CC-P47aa.js";import"./CollapsiblePanel-CHpI8fT2.js";import"./error-C0G7w8jF.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BvJsymAS.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
