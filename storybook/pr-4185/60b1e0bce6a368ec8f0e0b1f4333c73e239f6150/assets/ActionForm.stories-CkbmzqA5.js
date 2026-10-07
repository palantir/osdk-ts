import{j as t,g as n}from"./iframe-DaskLrq8.js";import{A as r}from"./action-form-D4IMG2S9.js";import"./preload-helper-BVj_xxLy.js";import"./DropdownField-DABHoDU6.js";import"./debounce-CTR7NOXB.js";import"./useOsdkClient-ijg_QbI1.js";import"./index-Bqih82xZ.js";import"./Input-DB2lb1xd.js";import"./useBaseUiId-DMXF2oMu.js";import"./useControlled-CYCM7Lap.js";import"./index-C_mHhOwa.js";import"./index-Dy_kZRgY.js";import"./PopoverPopup-DJm9oZWc.js";import"./InternalBackdrop-B9JHXWHe.js";import"./composite-BYKbQoC1.js";import"./index-D-OWq9M9.js";import"./getDisabledMountTransitionStyles-Dofl4-A2.js";import"./ToolbarRootContext-BzuzU9vE.js";import"./tick-BkVL6nis.js";import"./svgIconContainer-tkjo1pD1.js";import"./small-cross-C_TPDXPW.js";import"./search-25BjkPAP.js";import"./cross-B-0FObLb.js";import"./useValueChanged-C2EMO01l.js";import"./getPseudoElementBounds-CAy3MVIr.js";import"./CompositeItem-BVBCC1HX.js";import"./makeExternalStore-CIn7ze2w.js";import"./BaseForm-XfHpbmGs.js";import"./ActionButton-BtmJUWQ1.js";import"./Button-BrqzKE8K.js";import"./SkeletonBar-hMNf9COI.js";import"./Tooltip-TPcB9Skk.js";import"./info-sign-Ck9eZg9S.js";import"./chevron-up-BMkjSMDP.js";import"./chevron-down-CjfhpjkO.js";import"./useEventCallback-CByJ231d.js";import"./iconLoader-nzDUMgrt.js";import"./Switch-X1EpSKjd.js";import"./CompositeRoot-BNgyz3CD.js";import"./TimePicker-BspezeWN.js";import"./CollapsiblePanel-BAg1IJpg.js";import"./error-5sU13yE2.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CjFNfKow.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
