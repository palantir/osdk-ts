import{j as t,g as n}from"./iframe-O11Zq4F1.js";import{A as r}from"./action-form-C26-HyGm.js";import"./preload-helper-DlwmVUfx.js";import"./DropdownField-CiK_mq9u.js";import"./debounce-Dl6mTpZa.js";import"./useOsdkClient-BQdHiZjk.js";import"./index-JCX27zQ_.js";import"./Input-KS7sPzNw.js";import"./useBaseUiId-Cu9t8yGo.js";import"./useControlled-B8YHL1ap.js";import"./index-D4Y1diP4.js";import"./index-CZs8bj4M.js";import"./PopoverPopup-DJWamGiS.js";import"./InternalBackdrop-Bmok97NN.js";import"./composite-CXM_4XfT.js";import"./index-BOHBCutb.js";import"./getDisabledMountTransitionStyles-BgcrLDKx.js";import"./ToolbarRootContext-tyPorBFs.js";import"./tick-BEQDUDLL.js";import"./svgIconContainer-niJASFYH.js";import"./small-cross-6TCOHgWS.js";import"./search-Cj99250y.js";import"./cross-CgbZ2Lur.js";import"./useValueChanged-D4OR8Hts.js";import"./getPseudoElementBounds-B3Xs9Miq.js";import"./CompositeItem-DLmG3BnZ.js";import"./makeExternalStore-DxYkAphJ.js";import"./BaseForm-vzQaQ5V_.js";import"./ActionButton-DwwC6gXd.js";import"./Button-C08V9i3x.js";import"./SkeletonBar-Dbg84bcv.js";import"./Tooltip-B3y41h0B.js";import"./info-sign-BXh9tmHs.js";import"./chevron-up-CtCQuxIs.js";import"./chevron-down-vcyh2ihf.js";import"./useEventCallback-BYLo8DjX.js";import"./iconLoader-D2PGMCDH.js";import"./CompositeRoot-CAOZhsn6.js";import"./Switch-BKsPqRiE.js";import"./TimePicker-B2WdUVgk.js";import"./CollapsiblePanel-DrNBsuTo.js";import"./error-Cg1niATE.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-5_bEfQA7.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/experimental";

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
        code: \`import { ActionForm } from "@osdk/react-components/experimental";

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
