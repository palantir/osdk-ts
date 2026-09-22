import{j as t,g as n}from"./iframe-X-VSGX-m.js";import{A as r}from"./action-form-Dnove1DS.js";import"./preload-helper-BSxm0T4I.js";import"./DropdownField-C4WdNJVH.js";import"./debounce-Bzn4rKQW.js";import"./useOsdkClient-BeU_8fLS.js";import"./index-CGDH48tf.js";import"./Input-CjGosPl8.js";import"./useBaseUiId-BBsjPzS0.js";import"./useControlled-CS7Ud3A1.js";import"./index-DSvAdAem.js";import"./index-C6OnhXV1.js";import"./PopoverPopup-CiCOaPLV.js";import"./InternalBackdrop-CcwzaUSK.js";import"./composite-BZ7oE03c.js";import"./index-CsJagvQr.js";import"./getDisabledMountTransitionStyles-C88V7r9e.js";import"./ToolbarRootContext-CAbB3DSY.js";import"./tick-BYWClfY9.js";import"./svgIconContainer-BdGqJkEg.js";import"./small-cross-uFhshZcJ.js";import"./search-CzcR_jWd.js";import"./cross-CrghqoWd.js";import"./useValueChanged-D6DhfqaH.js";import"./getPseudoElementBounds-BMlsPGB0.js";import"./CompositeItem-Dt-41Y4b.js";import"./makeExternalStore-CDBEj4Yx.js";import"./BaseForm-BPVoBvZh.js";import"./ActionButton-6IO1Kg5J.js";import"./Button-BvYXLNva.js";import"./SkeletonBar-BmODE2fF.js";import"./Tooltip-DQt_Cnav.js";import"./info-sign-B6LuwkFt.js";import"./chevron-up-CbCJqwQx.js";import"./chevron-down-Z8wpnP0p.js";import"./useEventCallback-BQT_oghC.js";import"./iconLoader-DmEpg8EN.js";import"./CompositeRoot-BJcQ097z.js";import"./Switch-BgRXWkZj.js";import"./TimePicker-CtmGcZWr.js";import"./CollapsiblePanel-Bg9eBIxx.js";import"./error-D6m_rkvI.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-hcsSE1Yl.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
