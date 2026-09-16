import{j as t,g as n}from"./iframe-CPLN-ZbK.js";import{A as r}from"./action-form-CcDZIkr7.js";import"./preload-helper-Dp1pzeXC.js";import"./DropdownField-BZy0Vjfn.js";import"./debounce-BHYl5DP-.js";import"./useOsdkClient-DQiZ2tYF.js";import"./index-Cjge5u51.js";import"./Input-DTYOcpRg.js";import"./useBaseUiId-BCid-a8z.js";import"./useControlled-CjsGTJEt.js";import"./index-CcftVgrB.js";import"./index-CTI5qcoR.js";import"./PopoverPopup-B1UMbbjh.js";import"./InternalBackdrop-H5MHz81r.js";import"./composite-DajkLm6o.js";import"./index-8miuT5ZT.js";import"./getDisabledMountTransitionStyles-BAd08XlN.js";import"./ToolbarRootContext-Bf2tT3Hj.js";import"./tick-COEqwA56.js";import"./svgIconContainer-DJorehzp.js";import"./small-cross-vfsVsU9u.js";import"./search-vlNNCCei.js";import"./cross-DkzWzcR0.js";import"./useValueChanged-D-cfwHFM.js";import"./getPseudoElementBounds-CVyFvNKv.js";import"./CompositeItem-2xQpagLs.js";import"./makeExternalStore-GKMGQTfP.js";import"./BaseForm-CadW5piA.js";import"./ActionButton-DQdOoyph.js";import"./Button-CwRu4Y7L.js";import"./SkeletonBar-BsNNEfxd.js";import"./Tooltip-D82cN-2b.js";import"./info-sign-Du0Kv8oX.js";import"./chevron-up-BqxdWpTR.js";import"./chevron-down-jQvrZLIb.js";import"./useEventCallback-CwloqOs8.js";import"./iconLoader-DhJJ9BbT.js";import"./Switch-BQDGAMr7.js";import"./CompositeRoot-B1JVMz8M.js";import"./TimePicker-pUCyu4vQ.js";import"./CollapsiblePanel-D7FGbcZd.js";import"./error-CfVtgGYX.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DxyXNPGX.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
