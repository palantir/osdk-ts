import{j as t,g as n}from"./iframe-DSFURlDA.js";import{A as r}from"./action-form-CleJRzZX.js";import"./preload-helper-B1VAjeN0.js";import"./DropdownField-Ewv0QYli.js";import"./debounce-BCr80lUe.js";import"./useOsdkClient-B7Ec3XZP.js";import"./index-n2cVRLUV.js";import"./Input-TT4Euawv.js";import"./useBaseUiId-CPQbMaU1.js";import"./useControlled-C2QQWcpQ.js";import"./index-DEWyNal3.js";import"./index-DatMcuFW.js";import"./PopoverPopup-BM6OifUC.js";import"./InternalBackdrop-i93WBNhG.js";import"./composite-zLymdlB4.js";import"./index-1g8QVa9w.js";import"./getDisabledMountTransitionStyles-C6-Suj3S.js";import"./ToolbarRootContext-D4dmc43x.js";import"./tick-Bd1kaq1w.js";import"./svgIconContainer-DdvBD_9a.js";import"./small-cross-1OkFxGzR.js";import"./search-BUp5dxQj.js";import"./cross-BfC9nIFZ.js";import"./useValueChanged-CboUDFgk.js";import"./getPseudoElementBounds-B4-845mD.js";import"./CompositeItem-4TlbRyqO.js";import"./makeExternalStore-DipsHuCX.js";import"./BaseForm-DfB9V8t3.js";import"./ActionButton-63CS6rUE.js";import"./Button-B9oX6qDj.js";import"./SkeletonBar-BAkRYcYG.js";import"./Tooltip-D-FrCqJr.js";import"./info-sign-Dxc6f2CU.js";import"./chevron-up-Ce33y_zj.js";import"./chevron-down-DT3G6LtT.js";import"./useEventCallback-D-jfKQ1Z.js";import"./iconLoader-CxjeqRl9.js";import"./Switch-C7X9yifI.js";import"./CompositeRoot-Co6W6f7L.js";import"./TimePicker-B4EOALZh.js";import"./CollapsiblePanel-7-q3gSlS.js";import"./error-DUIlp0md.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CcZF-o22.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
