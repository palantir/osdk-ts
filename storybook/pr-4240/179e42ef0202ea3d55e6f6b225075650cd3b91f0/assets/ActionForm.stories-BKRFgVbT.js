import{j as t,g as n}from"./iframe-BN5ehZsU.js";import{A as r}from"./action-form-e4ZNxBUI.js";import"./preload-helper-DiI2ZQ3N.js";import"./DropdownField-CPsZXnb7.js";import"./debounce-DDVGe1yo.js";import"./useOsdkClient-D_Tzde9i.js";import"./index-CUoza1kZ.js";import"./Input-Byq2KsKZ.js";import"./useBaseUiId-BEp1f_TL.js";import"./useControlled-Dn-0uibR.js";import"./index-CNUSOrN9.js";import"./index-BMD_ABKq.js";import"./PopoverPopup-CDJ9nvZU.js";import"./InternalBackdrop-Cd1W5N03.js";import"./composite-Dz6G3wtQ.js";import"./index-cT-qCssu.js";import"./getDisabledMountTransitionStyles-CbLH7J6E.js";import"./ToolbarRootContext-C4vwBpF_.js";import"./tick-CWonoO7R.js";import"./svgIconContainer-3_nrEXxJ.js";import"./small-cross-BhsmHd15.js";import"./search-B5pZpNhj.js";import"./cross-CTzlKmgX.js";import"./useValueChanged-ByN6FCGV.js";import"./getPseudoElementBounds-B23cJjwW.js";import"./CompositeItem-CfdU5eWF.js";import"./makeExternalStore-9ZiGbHue.js";import"./BaseForm-DY7w-KaH.js";import"./ActionButton-in3xyPdG.js";import"./Button-Ca_A2rxi.js";import"./SkeletonBar-CzWtUtS0.js";import"./Tooltip-B7KHYj-o.js";import"./info-sign-C8Zfiyq4.js";import"./chevron-up-7CFsoCYd.js";import"./chevron-down-DSRGL9k7.js";import"./useEventCallback-CfoOVKbg.js";import"./iconLoader-DMFMOlTe.js";import"./Switch-s1ZkzZ5W.js";import"./CompositeRoot-DTJ2Xerl.js";import"./TimePicker-yQhdM5jb.js";import"./CollapsiblePanel-e8TDfTp5.js";import"./error-BrwUp-mO.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-XTiZGcd-.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
