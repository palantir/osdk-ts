import{j as t,g as n}from"./iframe-DLqxDfy6.js";import{A as r}from"./action-form-BpjPDWrl.js";import"./preload-helper-CR03nPFs.js";import"./DropdownField-B5dfcEAD.js";import"./debounce-Dr-1fVLW.js";import"./useOsdkClient-BijjMken.js";import"./index-DvJ5FsVz.js";import"./Input-CWq-CC7y.js";import"./useBaseUiId-FG2DzWS6.js";import"./useControlled-DTSmocRM.js";import"./index-DDPWTNxY.js";import"./index-CN3BhaNE.js";import"./PopoverPopup-DxKG4t8k.js";import"./InternalBackdrop-BdVK5n-m.js";import"./composite-Bp3q5gsu.js";import"./index-B5UrRZWQ.js";import"./getDisabledMountTransitionStyles-DNfc66vB.js";import"./ToolbarRootContext-DcKYwC3S.js";import"./tick-CV4p6HDo.js";import"./svgIconContainer-siAEGujy.js";import"./small-cross-RqoJ2JIq.js";import"./search-GkSvXq-b.js";import"./cross-_XB01iuh.js";import"./useValueChanged-Dtu8G-Bz.js";import"./getPseudoElementBounds-DQ39nn50.js";import"./CompositeItem-B4qptw8k.js";import"./makeExternalStore-B-39pyxw.js";import"./BaseForm-MHqZJlsm.js";import"./ActionButton-DBD5MXXU.js";import"./Button-X3mSZ2fF.js";import"./SkeletonBar-BDVOGHkd.js";import"./Tooltip-DQ-6PpWV.js";import"./info-sign-yqH37pZS.js";import"./chevron-up-n9QaJLd2.js";import"./chevron-down-D8Abc2XY.js";import"./useEventCallback-CkXPCxJ3.js";import"./iconLoader-Ci0xpDhw.js";import"./Switch-6PHySDRM.js";import"./CompositeRoot-vKA4N3eP.js";import"./TimePicker-OOj3qBs-.js";import"./CollapsiblePanel-DqOXsBJw.js";import"./error-D8ORw_lv.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DR4XRGWA.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
