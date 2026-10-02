import{j as t,g as n}from"./iframe-DO7dF-ar.js";import{A as r}from"./action-form-CemhAUpd.js";import"./preload-helper-BW5WH-mc.js";import"./DropdownField-DysS70c1.js";import"./debounce-DmQhFwOT.js";import"./useOsdkClient-CyRh6KvI.js";import"./index-kenPv2GE.js";import"./Input-CK_329wL.js";import"./useBaseUiId-Bt-nl6bS.js";import"./useControlled-6UP7zcXc.js";import"./index-ChtT1bsq.js";import"./index-DTtqbecA.js";import"./PopoverPopup-joRMvQbq.js";import"./InternalBackdrop-BOw_21MB.js";import"./composite-DP63OVsA.js";import"./index-V_wqwxtw.js";import"./getDisabledMountTransitionStyles-Br24ubGK.js";import"./ToolbarRootContext-CZAMPnmu.js";import"./tick-B49pnBc3.js";import"./svgIconContainer-DjMCTipa.js";import"./small-cross-J_4yazEf.js";import"./search-BLUkB-J4.js";import"./cross-C1UL2-2h.js";import"./useValueChanged-BuoGHQuA.js";import"./getPseudoElementBounds-CJowpxqF.js";import"./CompositeItem-BwVsaSQK.js";import"./makeExternalStore-Am-Ru7Ep.js";import"./BaseForm-utvx8lBT.js";import"./ActionButton-BAj8Q7M-.js";import"./Button-CizE_ePi.js";import"./SkeletonBar-BKAHRTQk.js";import"./Tooltip-D0Q-VN51.js";import"./info-sign-D_7rOsNs.js";import"./chevron-up-4kQ7rw_l.js";import"./chevron-down-C1ai5XRC.js";import"./useEventCallback-C0Kp26Ia.js";import"./iconLoader-6NFpmMPV.js";import"./Switch-Co8Zktjv.js";import"./CompositeRoot-BaakZJv5.js";import"./TimePicker-Bsb0Uap5.js";import"./CollapsiblePanel-B9T_imQv.js";import"./error-D0RjPgCd.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Btt-8vLh.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
