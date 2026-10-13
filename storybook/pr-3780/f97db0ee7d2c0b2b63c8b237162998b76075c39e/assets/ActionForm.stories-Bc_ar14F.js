import{j as t,g as n}from"./iframe-BQKQTmXB.js";import{A as r}from"./action-form-hlPo_IjV.js";import"./preload-helper-DpY65_Qx.js";import"./DropdownField-DG4-GpYq.js";import"./debounce-eoEcRIUs.js";import"./useOsdkClient-CM8jZA73.js";import"./index-BAgavFcN.js";import"./Input-BvQQtcuT.js";import"./useBaseUiId-D4SYKib3.js";import"./useControlled-C-CBJQhx.js";import"./index-DW4OjGFj.js";import"./index-DOiTTslB.js";import"./PopoverPopup-DXEOdufz.js";import"./InternalBackdrop-DOuWLN2E.js";import"./composite-BB13Acp8.js";import"./index-DtlmBYgM.js";import"./getDisabledMountTransitionStyles-DnQGFrBG.js";import"./ToolbarRootContext-C9Gx_t9N.js";import"./tick-CNB2_64c.js";import"./svgIconContainer-s1izGso1.js";import"./small-cross-DRGYN-SH.js";import"./search-C5fONMO5.js";import"./cross-BbeReS0g.js";import"./useValueChanged-aOvOP-Fs.js";import"./getPseudoElementBounds-D05yaNHB.js";import"./CompositeItem-BvDVmAAl.js";import"./makeExternalStore-g6QM0BRI.js";import"./BaseForm-DBRDoyYQ.js";import"./ActionButton-BXjwvh-b.js";import"./Button-DY1Aghm3.js";import"./SkeletonBar-CHr63-jY.js";import"./Tooltip-BNCx0jB1.js";import"./info-sign-DT2HkNt1.js";import"./chevron-up-DyWu1xdg.js";import"./chevron-down-D5kmZbrP.js";import"./useEventCallback-jzD9VSkj.js";import"./iconLoader-Bdfk1HlR.js";import"./Switch-C7U0Q2cZ.js";import"./CompositeRoot-C1Mupa4a.js";import"./TimePicker-CmPcPPTh.js";import"./CollapsiblePanel-BmP8oKEK.js";import"./error-dE1POcw9.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DsblZkp9.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
