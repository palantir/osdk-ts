import{j as t,g as n}from"./iframe-C3HGDapW.js";import{A as r}from"./action-form-BBxqOxen.js";import"./preload-helper-Dd-r_PP_.js";import"./DropdownField-FtuodETP.js";import"./debounce-KZy00M_V.js";import"./useOsdkClient-CO8K2hWt.js";import"./index-CJ776Wah.js";import"./Input-BSSKD0Yf.js";import"./useBaseUiId-DDU_oadF.js";import"./useControlled-U-IEPHgG.js";import"./index-DQeQgx2N.js";import"./index-BijSJOSI.js";import"./PopoverPopup-Cr_rWDbz.js";import"./InternalBackdrop-Be2xXmYq.js";import"./composite-C0TGio2P.js";import"./index-CI4EIWpq.js";import"./getDisabledMountTransitionStyles-C6vvAqBU.js";import"./ToolbarRootContext-DquNC5M6.js";import"./tick-l_Py6lRO.js";import"./svgIconContainer-CFN5a8Be.js";import"./small-cross-AZq4qJ1d.js";import"./search-B43uCRp2.js";import"./cross-D5WvDMJV.js";import"./useValueChanged-Dgd9m4pd.js";import"./getPseudoElementBounds-CkAjQIKN.js";import"./CompositeItem-ug1IBEV3.js";import"./makeExternalStore-CFal4aDF.js";import"./BaseForm-DSMHk1Tv.js";import"./ActionButton-C4HUNn1x.js";import"./Button-D-rdzhRE.js";import"./SkeletonBar-vwa0QD39.js";import"./Tooltip-5nh3-0V1.js";import"./info-sign-DXmM1PGN.js";import"./chevron-up-B0cng5yR.js";import"./chevron-down-DzjGRqJz.js";import"./useEventCallback-Lx0RHoQ3.js";import"./iconLoader-C_8SrrMJ.js";import"./CompositeRoot-Dxm_XJ_M.js";import"./Switch-DPU4haUD.js";import"./TimePicker-DnJQRz8-.js";import"./CollapsiblePanel-BL4COOfP.js";import"./error-BHy_Uegk.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-TK1FZJZJ.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
