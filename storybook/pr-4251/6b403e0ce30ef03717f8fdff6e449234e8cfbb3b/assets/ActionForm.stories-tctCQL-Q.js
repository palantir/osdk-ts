import{j as t,g as n}from"./iframe-D3lsV3bM.js";import{A as r}from"./action-form-dj8MOje0.js";import"./preload-helper-B0DSvxC2.js";import"./DropdownField-BKtsIZHj.js";import"./debounce-DKdoEzLY.js";import"./useOsdkClient-CjCuVbH9.js";import"./index-D11sJHPZ.js";import"./Input-CiqPSABQ.js";import"./useBaseUiId-6o6e03Dj.js";import"./useControlled-bq-ZFaDd.js";import"./index-BLDv51Tl.js";import"./index-Dxb68UZ2.js";import"./PopoverPopup-HW4fQdCB.js";import"./InternalBackdrop-DWpv92EC.js";import"./composite-9R0QeF6F.js";import"./index-DB3xED8F.js";import"./getDisabledMountTransitionStyles-dC28mhVQ.js";import"./ToolbarRootContext-Bgqyz9vO.js";import"./tick-DjGBapZW.js";import"./svgIconContainer-DfM6sw_L.js";import"./small-cross-DsJLV_gX.js";import"./search-O4ijEoIs.js";import"./cross-_tMTONVW.js";import"./useValueChanged-DQOtE3bQ.js";import"./getPseudoElementBounds-B7WJxdIq.js";import"./CompositeItem-DJyMopxi.js";import"./makeExternalStore-l2x05IWc.js";import"./BaseForm-B18pYjbB.js";import"./ActionButton-B7Qk2YJZ.js";import"./Button-DakXe1NE.js";import"./SkeletonBar-DfbOeTxN.js";import"./Tooltip-CdBxAJkp.js";import"./info-sign-u_aRopeW.js";import"./chevron-up-DPaPf_g6.js";import"./chevron-down-1CFj8X53.js";import"./useEventCallback-DosG7uBT.js";import"./iconLoader-vUJC3TV8.js";import"./Switch-BP5X6zr8.js";import"./CompositeRoot-DRJCFUeS.js";import"./TimePicker-DMIEnn_B.js";import"./CollapsiblePanel-D933QPH8.js";import"./error-XRO96CTm.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CyI1jVrw.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
