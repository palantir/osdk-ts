import{j as t,g as n}from"./iframe-DPxX1jR-.js";import{A as r}from"./action-form-S-7N0qLa.js";import"./preload-helper-Bl3woUlG.js";import"./DropdownField-CpYwJ58e.js";import"./debounce-DlKAS5ft.js";import"./useOsdkClient-BjyL2cyC.js";import"./index-D6OGPiBG.js";import"./Input-DFF83YG7.js";import"./useBaseUiId-BKCJofKJ.js";import"./useControlled-C7cllYbm.js";import"./index-B-sWsLH5.js";import"./index-DQPQvAfC.js";import"./PopoverPopup-BLHlUUDe.js";import"./InternalBackdrop-BDTL8dMK.js";import"./composite-BcAnYQh9.js";import"./index-DSDqA_Ss.js";import"./getDisabledMountTransitionStyles-DXbjzshq.js";import"./ToolbarRootContext-B53u_0Lg.js";import"./tick-CTGvo1gM.js";import"./svgIconContainer-DQ5sgBjC.js";import"./small-cross-BDDqqJMU.js";import"./search-B5aBIEi3.js";import"./cross-BO6SlDqo.js";import"./useValueChanged-i5EMwMR_.js";import"./getPseudoElementBounds-CjxlBCdr.js";import"./CompositeItem-rTVyKIYC.js";import"./makeExternalStore-64rcfTGa.js";import"./BaseForm-DhmQH8xy.js";import"./ActionButton-1Q3tX4Fy.js";import"./Button-DQXd7O9l.js";import"./SkeletonBar-BGjKDv0N.js";import"./Tooltip-BOGu4iQx.js";import"./info-sign-wfXtR3P0.js";import"./chevron-up-Cbm2znj3.js";import"./chevron-down-DxRPC7K7.js";import"./useEventCallback-Bvjybx93.js";import"./iconLoader-BDC8DnW8.js";import"./Switch-5KsaR0Uc.js";import"./CompositeRoot-CRhqbX45.js";import"./TimePicker-p-V9a_OE.js";import"./CollapsiblePanel-HGrFWplr.js";import"./error-ChO0zkiL.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-NcqisCon.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
