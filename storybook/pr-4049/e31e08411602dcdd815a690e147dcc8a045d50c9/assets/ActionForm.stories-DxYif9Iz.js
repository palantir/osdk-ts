import{j as t,g as n}from"./iframe-CYdVR6sB.js";import{A as r}from"./action-form-DAwJjELr.js";import"./preload-helper-BXur23Md.js";import"./DropdownField-B6eovdov.js";import"./debounce-CbnfdRbo.js";import"./useOsdkClient-B70HxYsA.js";import"./index-BALJL5HN.js";import"./Input-8WX07h9e.js";import"./useBaseUiId-DWAeiyj4.js";import"./useControlled-DJ_ChqUq.js";import"./index-DoUPlBgv.js";import"./index-B8qCRObq.js";import"./PopoverPopup-xCKZwX1o.js";import"./InternalBackdrop--MuUQ9Ln.js";import"./composite-Cc3NubB-.js";import"./index-BqyVDr6I.js";import"./getDisabledMountTransitionStyles-CA4nP4MP.js";import"./ToolbarRootContext-ryiKPViF.js";import"./tick-BTWCOhDI.js";import"./svgIconContainer-BA_bcDbd.js";import"./small-cross-DNLJnJK1.js";import"./search-Ceaj3yJ_.js";import"./cross-Cw6hhHQ7.js";import"./useValueChanged-C6DcZDB6.js";import"./getPseudoElementBounds-DwFXzaQG.js";import"./CompositeItem-C73xX0Ds.js";import"./makeExternalStore-CoWYgG6l.js";import"./BaseForm-C0v0sGPw.js";import"./ActionButton-CJlnBbXa.js";import"./Button-DXqS5gF6.js";import"./SkeletonBar-n38Gly5n.js";import"./Tooltip-tNCAdybw.js";import"./info-sign-LBHTKvqg.js";import"./chevron-up-JM4U7PPB.js";import"./chevron-down-BTVG76nb.js";import"./useEventCallback-DQs5DmXL.js";import"./iconLoader-DR7orpj5.js";import"./Switch-DyYnu5bb.js";import"./CompositeRoot-B6EvVlLu.js";import"./TimePicker-CjgghQ7M.js";import"./CollapsiblePanel-CJCKVm3B.js";import"./error-D8UfR1ZG.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DXfIJx3f.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
