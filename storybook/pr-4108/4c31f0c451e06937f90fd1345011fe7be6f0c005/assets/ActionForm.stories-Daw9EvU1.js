import{j as t,g as n}from"./iframe-BjbHRI0z.js";import{A as r}from"./action-form-D7oLAhOv.js";import"./preload-helper-BUM7BTsm.js";import"./DropdownField-D4-t_biV.js";import"./debounce-B0atJeU8.js";import"./useOsdkClient-EcavFoEZ.js";import"./index-CGlA5dXU.js";import"./Input-BVornoU9.js";import"./useBaseUiId-BfNPJ7-Z.js";import"./useControlled-rSaw5pb5.js";import"./index-CI8QNR9V.js";import"./index-CiZKopjl.js";import"./PopoverPopup-DUUESn5Y.js";import"./InternalBackdrop-44a6AIl-.js";import"./composite-BFEQAufL.js";import"./index-DLLtCTGJ.js";import"./getDisabledMountTransitionStyles-DIaPn1J1.js";import"./ToolbarRootContext-BIp7KVlb.js";import"./tick-BUlj9YHj.js";import"./svgIconContainer-BQW7jGob.js";import"./small-cross-CN9po8rh.js";import"./search-DugTyXej.js";import"./cross-DFCaIKoy.js";import"./useValueChanged-ls6nut0P.js";import"./getPseudoElementBounds-Cz_FAddT.js";import"./CompositeItem-BUg5QAEv.js";import"./makeExternalStore-CeeAAQpn.js";import"./BaseForm-BXWdXpOE.js";import"./ActionButton-BDL-FgSv.js";import"./Button-D9KcyGxn.js";import"./SkeletonBar-CAHftrLV.js";import"./Tooltip-B88xm2HD.js";import"./info-sign-DkB-Awz2.js";import"./chevron-up-CW2vtVbA.js";import"./chevron-down-C9nnJYZM.js";import"./useEventCallback-C_WUDWdo.js";import"./iconLoader-BZ2FiUIR.js";import"./Switch-E9mMXcI-.js";import"./CompositeRoot-DtrPK98k.js";import"./TimePicker-Dgu-v2KW.js";import"./CollapsiblePanel-D9oIVLW-.js";import"./error-Cl6EUNrf.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BjQ5Qn0j.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
