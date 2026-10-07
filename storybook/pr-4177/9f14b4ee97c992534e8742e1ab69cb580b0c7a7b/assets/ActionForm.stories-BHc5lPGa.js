import{j as t,g as n}from"./iframe-DXrbmFQU.js";import{A as r}from"./action-form-jn5gHp2d.js";import"./preload-helper-BpeD6mmz.js";import"./DropdownField-B-USOmOG.js";import"./debounce-CPG8fLwA.js";import"./useOsdkClient-DVkOG91y.js";import"./index-CC0lkARs.js";import"./Input-sDtqAHjV.js";import"./useBaseUiId-Bmo8e_yl.js";import"./useControlled-B7qMp3Jr.js";import"./index-C1FzfM-T.js";import"./index-F1aEIIjQ.js";import"./PopoverPopup-BkZ0u7Nq.js";import"./InternalBackdrop-CZ7SS8XL.js";import"./composite-CtPqGv2Q.js";import"./index-CIJdhEvE.js";import"./getDisabledMountTransitionStyles-C_81mHPe.js";import"./ToolbarRootContext-D7OAZc3v.js";import"./tick-BRRV4IxG.js";import"./svgIconContainer-D3MknpC0.js";import"./small-cross-op6IWr8S.js";import"./search-B06mFuBu.js";import"./cross-CS_4qYPy.js";import"./useValueChanged-DqKKufXw.js";import"./getPseudoElementBounds-BxGouxy3.js";import"./CompositeItem-BFe5eqlW.js";import"./makeExternalStore-CmG1_iz5.js";import"./BaseForm-Bdtkpf7j.js";import"./ActionButton-zcaUPaLa.js";import"./Button-CaEsIWhF.js";import"./SkeletonBar-D5AKklLC.js";import"./Tooltip-DqU4cO90.js";import"./info-sign-CWuPZVM1.js";import"./chevron-up-BZwni23l.js";import"./chevron-down-Dt-I4rTn.js";import"./useEventCallback-D7stwHp4.js";import"./iconLoader-DI5X8YnT.js";import"./Switch-DN7VjI7w.js";import"./CompositeRoot-BMwn0jDR.js";import"./TimePicker-BAcOI2B2.js";import"./CollapsiblePanel-BcteEw7K.js";import"./error-DTlfxxBy.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CrZM7ObA.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
