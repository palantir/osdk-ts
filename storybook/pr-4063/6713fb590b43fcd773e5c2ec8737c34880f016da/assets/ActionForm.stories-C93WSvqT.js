import{j as t,g as n}from"./iframe-CGwmlW2r.js";import{A as r}from"./action-form-SG8CFHnz.js";import"./preload-helper-CVIGiO6F.js";import"./DropdownField-B4moQZxn.js";import"./debounce-ZyuHSE7w.js";import"./useOsdkClient-Be2ZREGr.js";import"./index-CjgswMxd.js";import"./Input-pi6zEsGe.js";import"./useBaseUiId-Bm2cFh6B.js";import"./useControlled-DsP0nmCG.js";import"./index-DxRKQXJQ.js";import"./index-CafwHe0h.js";import"./PopoverPopup-ByMkl8rO.js";import"./InternalBackdrop-B-ry2Uvu.js";import"./composite-BJmQcV2t.js";import"./index-CgjmDikR.js";import"./getDisabledMountTransitionStyles-Do49NmND.js";import"./ToolbarRootContext-CxtjwMoV.js";import"./tick-DaMMKKEV.js";import"./svgIconContainer-BTPb8DLH.js";import"./small-cross-Dlo2xc3T.js";import"./search-DcxUYSzD.js";import"./cross-DQgNlB5k.js";import"./useValueChanged-Bttiqhne.js";import"./getPseudoElementBounds-DDUtEhAw.js";import"./CompositeItem-7T1omaB9.js";import"./makeExternalStore-B5u8APGM.js";import"./BaseForm-D1jnWAfu.js";import"./ActionButton-Cqfuw1XW.js";import"./Button-DFUwv3AU.js";import"./SkeletonBar-BMy2XXrH.js";import"./Tooltip-D5ZU9d0s.js";import"./info-sign-HNp0uI59.js";import"./chevron-up-CSORMd0b.js";import"./chevron-down-CfoUsUUp.js";import"./useEventCallback-BiRgUSbg.js";import"./iconLoader-b6OHYUyB.js";import"./Switch-Cw6-KEjG.js";import"./CompositeRoot-Bh5nsKzg.js";import"./TimePicker-CwWCu1p-.js";import"./CollapsiblePanel-Dbr7GgxQ.js";import"./error-CgUQsRwJ.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DDzV_xju.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
