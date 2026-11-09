import{j as t,g as n}from"./iframe-KzP54st8.js";import{A as r}from"./action-form-ViFHsoAD.js";import"./preload-helper-CZ0_peag.js";import"./DropdownField-DBmNVyJA.js";import"./debounce-BGthoR0W.js";import"./useOsdkClient-DlRniYh9.js";import"./index-B5nqBBWp.js";import"./Input-C6qaftyN.js";import"./useBaseUiId-BA1-4W3F.js";import"./useControlled-DYaDm29f.js";import"./index-Br5P7C2V.js";import"./index-BMXD2udq.js";import"./PopoverPopup-BCLXp0oS.js";import"./InternalBackdrop-CzWxzLnJ.js";import"./composite-CfrzbkGj.js";import"./index-BQoDxnvf.js";import"./getDisabledMountTransitionStyles-D7SWM4VP.js";import"./ToolbarRootContext-xfunMS_N.js";import"./tick-DIqBuVUT.js";import"./svgIconContainer-B_IEjFSj.js";import"./small-cross-CSHoeFRw.js";import"./search-Cb-crZIr.js";import"./cross-lnMk7dXt.js";import"./useValueChanged-JwsuVPmt.js";import"./getPseudoElementBounds-C-w8h5Fq.js";import"./CompositeItem-5AIUt4bR.js";import"./makeExternalStore-DSq9r9yQ.js";import"./BaseForm-D9ZNADGW.js";import"./ActionButton-DBQ-TeBZ.js";import"./Button-DwGnaIDL.js";import"./SkeletonBar-DFXSW7YC.js";import"./Tooltip-BCepzJDL.js";import"./info-sign-BTpf_kLc.js";import"./chevron-up-BJLKBzHn.js";import"./chevron-down-C83fmB_G.js";import"./useEventCallback-CHYc0JHW.js";import"./iconLoader-DgtpWgVl.js";import"./Switch-DR8HyGLv.js";import"./CompositeRoot-DBRO5K0z.js";import"./TimePicker-e0CmW5WJ.js";import"./CollapsiblePanel-CYOujYEK.js";import"./error-CnxGfdHo.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DzdVKn4L.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
