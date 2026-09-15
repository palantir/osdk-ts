import{j as t,g as n}from"./iframe-DL6bhntV.js";import{A as r}from"./action-form-D7V7Xiea.js";import"./preload-helper-Bzx1Zh_S.js";import"./DropdownField-DNbepfr2.js";import"./debounce-B_yVPQMd.js";import"./useOsdkClient-7LhcF-kZ.js";import"./index-B8ftOcx-.js";import"./Input-BPBmB1lT.js";import"./useBaseUiId-llhhqJOe.js";import"./useControlled-DiqKmz4m.js";import"./index-Bs7nlaiS.js";import"./index-DJ4ha6JU.js";import"./PopoverPopup-CS8wg6vA.js";import"./InternalBackdrop-Bkvjmy8r.js";import"./composite-BF5DU4SU.js";import"./index-D_yYkCV1.js";import"./getDisabledMountTransitionStyles-CUMX81wn.js";import"./ToolbarRootContext-CvpBNR1-.js";import"./tick-BHAOkmD3.js";import"./svgIconContainer-DSWQOkNx.js";import"./small-cross-BUQz1fKF.js";import"./search-DfezW5-F.js";import"./cross-DyIDhlr1.js";import"./useValueChanged-CDlkl3OD.js";import"./getPseudoElementBounds-vxtOSGfI.js";import"./CompositeItem-Bp1V_qz6.js";import"./makeExternalStore-OJ90FHcV.js";import"./BaseForm-CJlJgNC1.js";import"./ActionButton-BzrCCI4n.js";import"./Button-B0CnBgjK.js";import"./SkeletonBar-DVq5tV_s.js";import"./Tooltip-CpYMs0DP.js";import"./info-sign-BSEI84TV.js";import"./chevron-up-BGIW6-mE.js";import"./chevron-down-B213Fcrt.js";import"./useEventCallback-CBeRn_5S.js";import"./iconLoader-bKk8GBKB.js";import"./CompositeRoot-CSNMjnnk.js";import"./Switch-CtpQJ3mx.js";import"./TimePicker-B-gb8e6P.js";import"./CollapsiblePanel-DoYVi0Of.js";import"./error-BD8Fuc9b.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-D6wPv70n.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
