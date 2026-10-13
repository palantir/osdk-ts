import{j as t,g as n}from"./iframe-BEuky4nW.js";import{A as r}from"./action-form-K8DhJPlp.js";import"./preload-helper-DXZnQA0g.js";import"./DropdownField-DpUOV1YL.js";import"./debounce-D5QhLxiq.js";import"./useOsdkClient-C8yO6X9s.js";import"./index-DYYn-JJY.js";import"./Input-Bkp6Y8Kw.js";import"./useBaseUiId-BQ-nlD4A.js";import"./useControlled-Ds39J2BB.js";import"./index-BT6wKmSC.js";import"./index-BM4hMUPD.js";import"./PopoverPopup-bBDKUc20.js";import"./InternalBackdrop-oGDKeqmq.js";import"./composite-DtclNBVm.js";import"./index-BcoFNaVU.js";import"./getDisabledMountTransitionStyles-Draku-JZ.js";import"./ToolbarRootContext-CUmbCPFZ.js";import"./tick-C7A_Ekps.js";import"./svgIconContainer-CnHhfA4g.js";import"./small-cross-DKWq78XL.js";import"./search-CUefFBvc.js";import"./cross-Ti9XTUaD.js";import"./useValueChanged-Dtjs-Tbs.js";import"./getPseudoElementBounds-nyQ3hVZk.js";import"./CompositeItem-G9820lSK.js";import"./makeExternalStore-BNzKZyz4.js";import"./BaseForm-BTacYXBB.js";import"./ActionButton-DFTc9912.js";import"./Button-BH8hgTyM.js";import"./SkeletonBar-CRaH-j-0.js";import"./Tooltip-DjGQvkmM.js";import"./info-sign-hTaJw282.js";import"./chevron-up-Buukew_o.js";import"./chevron-down-D_q9Dus0.js";import"./useEventCallback-CNTzT_sN.js";import"./iconLoader-DP1fVVe8.js";import"./Switch-DVXUwoiR.js";import"./CompositeRoot-Co_Vg0C-.js";import"./TimePicker-CaHmhTXR.js";import"./CollapsiblePanel-CbnUeaQj.js";import"./error-J-Iw-CxZ.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DVNHib_Z.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
