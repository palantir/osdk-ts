import{j as t,g as n}from"./iframe-CdF0Fq9c.js";import{A as r}from"./action-form-BO75ilrb.js";import"./preload-helper-Ct1oZRJx.js";import"./DropdownField-DHwNGiCR.js";import"./debounce-DPATjUqM.js";import"./useOsdkClient-B8BKhdw9.js";import"./index-C157L91v.js";import"./Input-DtrPcu15.js";import"./useBaseUiId-ONWuAW-H.js";import"./useControlled-B9w800yx.js";import"./index-1mFMxabl.js";import"./index-C1-F-JKF.js";import"./PopoverPopup-D5M-MmVN.js";import"./InternalBackdrop-BmiLCT5S.js";import"./composite-CLj3gTzn.js";import"./index-DoBn_sDd.js";import"./getDisabledMountTransitionStyles-TKnsNZOB.js";import"./ToolbarRootContext-B-5g_cXd.js";import"./tick-BqfEES5I.js";import"./svgIconContainer-B4dKEY9f.js";import"./small-cross-Bkhxrwyf.js";import"./search-DhvEixTQ.js";import"./cross-DSYmSTiz.js";import"./useValueChanged-Ddn72qJ7.js";import"./getPseudoElementBounds-DjlHjzw2.js";import"./CompositeItem-D7LuxCQJ.js";import"./makeExternalStore-DXEmCGwz.js";import"./BaseForm-Dfc18QS5.js";import"./ActionButton-B0D-C4ck.js";import"./Button-BBUQ2vzx.js";import"./SkeletonBar-Txh1lAT2.js";import"./Tooltip-IWrVwCEs.js";import"./info-sign-BTltklPg.js";import"./chevron-up-JVtIWz-O.js";import"./chevron-down-duFxKh1l.js";import"./useEventCallback-CdebAKnn.js";import"./iconLoader-B5PMPKE6.js";import"./Switch-BxF4PGsL.js";import"./CompositeRoot-U1hzNcbh.js";import"./TimePicker-KdDgQDqK.js";import"./CollapsiblePanel-CkXKbl9a.js";import"./error-1hy_7Gr5.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-6s0IiMkQ.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
