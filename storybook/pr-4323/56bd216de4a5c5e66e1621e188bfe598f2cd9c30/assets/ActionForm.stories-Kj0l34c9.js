import{j as t,g as n}from"./iframe-xO7-cFQE.js";import{A as r}from"./action-form-CweX7w0g.js";import"./preload-helper-CjE4C0sP.js";import"./DropdownField-ScPov9Rd.js";import"./debounce-GWee0BQR.js";import"./useOsdkClient-CDqxUxHE.js";import"./index-BOQrkF-F.js";import"./Input-99mwA4VF.js";import"./useBaseUiId-DvKVHufz.js";import"./useControlled-Wgq9Q75K.js";import"./index-BJwULR6g.js";import"./index-CXPZCOfE.js";import"./PopoverPopup-hp660gJk.js";import"./InternalBackdrop-C9ZmsvjR.js";import"./composite-CWWmbaS7.js";import"./index-1a1U9ieG.js";import"./getDisabledMountTransitionStyles-aVxKVFQR.js";import"./ToolbarRootContext-D7XQqVeD.js";import"./tick-C49IxArq.js";import"./svgIconContainer-Bxzx9KVi.js";import"./small-cross-BYaqaz9R.js";import"./search-Bazo2FVF.js";import"./cross-D5U-IDeN.js";import"./useValueChanged-Dgs0e82c.js";import"./getPseudoElementBounds-C2y6c8Y1.js";import"./CompositeItem-BPvfL8qH.js";import"./makeExternalStore-Czx_Amad.js";import"./BaseForm-nIJ5vQ2C.js";import"./ActionButton-DJcroEAc.js";import"./Button-BCHzki1U.js";import"./SkeletonBar-f3m0sjLr.js";import"./Tooltip-DPJAxssW.js";import"./info-sign-Dw65_QZM.js";import"./chevron-up-CFt9WkeK.js";import"./chevron-down-hptZ4LWp.js";import"./useEventCallback-fopAPD8Y.js";import"./iconLoader-Dbs9lq0R.js";import"./Switch-DWJhPBhB.js";import"./CompositeRoot-Bp7eweTA.js";import"./TimePicker-CmCubUnf.js";import"./CollapsiblePanel-CGLiej8s.js";import"./error-n609TGyv.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BDGk6jsR.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
