import{j as t,g as n}from"./iframe-_9fkTt32.js";import{A as r}from"./action-form-DOuGBKzB.js";import"./preload-helper-C1KDN5-b.js";import"./DropdownField-D3_R9BRa.js";import"./debounce-BM4LBZIr.js";import"./useOsdkClient-_fcxm1-q.js";import"./index-cWweuLXs.js";import"./Input-BJm5qzbn.js";import"./useBaseUiId-B9cqL2iw.js";import"./useControlled-MrPxBQF8.js";import"./index-Bmp8eXG6.js";import"./index-B3Qi-0mZ.js";import"./PopoverPopup-DDdOTGgE.js";import"./InternalBackdrop-ChDAtvSF.js";import"./composite-Cv5hA45I.js";import"./index-CVU17NaB.js";import"./getDisabledMountTransitionStyles-DZsAnPct.js";import"./ToolbarRootContext-BGC6f2SR.js";import"./tick-B_jFaN4q.js";import"./svgIconContainer-Bj9lR9eQ.js";import"./small-cross-BsjnHbCi.js";import"./search-2EBlNsrp.js";import"./cross-CLyRJbq3.js";import"./useValueChanged-DtU61oMW.js";import"./getPseudoElementBounds-Bjiyc-Ax.js";import"./CompositeItem-_4ruefbl.js";import"./makeExternalStore-vS9m26hr.js";import"./BaseForm-DUDwXUZv.js";import"./ActionButton-UeHjpWA6.js";import"./Button-BQ2hDtz9.js";import"./SkeletonBar-NFYkElve.js";import"./Tooltip-BO96ovIJ.js";import"./info-sign-ANLiV7Jh.js";import"./chevron-up-BLdxhQEz.js";import"./chevron-down-YT2yainA.js";import"./useEventCallback-DviACpK2.js";import"./iconLoader-CJdfFk6K.js";import"./CompositeRoot-DN9C83JT.js";import"./Switch-DDugekKA.js";import"./TimePicker-B8l78leN.js";import"./CollapsiblePanel-CX7PBUWu.js";import"./error-BJKVIKgH.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-lqXp9PIO.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
