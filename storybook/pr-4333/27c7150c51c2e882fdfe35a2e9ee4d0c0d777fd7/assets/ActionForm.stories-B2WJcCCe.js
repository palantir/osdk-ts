import{j as t,g as n}from"./iframe-DfZQ9M6i.js";import{A as r}from"./action-form-q06WWQ92.js";import"./preload-helper-E2urLAES.js";import"./DropdownField-cD4Mi-ZJ.js";import"./debounce-BFxxFhvU.js";import"./useOsdkClient-BVS0pOON.js";import"./index-B0k0bEti.js";import"./Input-CYJZLefv.js";import"./useBaseUiId-Chm1jq62.js";import"./useControlled-CftsWT9B.js";import"./index-DMZF7jCE.js";import"./index-DLq5Bkcx.js";import"./PopoverPopup-BcGfAJQo.js";import"./InternalBackdrop-vRXRm5Ri.js";import"./composite-C2Pj8gPK.js";import"./index-BrA1DhLb.js";import"./getDisabledMountTransitionStyles-CSW-SIFW.js";import"./ToolbarRootContext-CfFBsMXS.js";import"./tick-BTiK-OOO.js";import"./svgIconContainer-eylyBn5f.js";import"./small-cross-DlqkxE_Y.js";import"./search-g1T2rl--.js";import"./cross-BioDKNkS.js";import"./useValueChanged-BssawWRm.js";import"./getPseudoElementBounds-C9x04IRz.js";import"./CompositeItem-Hd7LuzxE.js";import"./makeExternalStore-ChnBYuE7.js";import"./BaseForm-UFMPG1c2.js";import"./ActionButton-DWlru8XN.js";import"./Button-B2R87CaB.js";import"./SkeletonBar-xgByqOHn.js";import"./Tooltip-BJ0dhB1V.js";import"./info-sign-BnFGqSTp.js";import"./chevron-up-BLsB_a-Y.js";import"./chevron-down-tsxmIRBn.js";import"./useEventCallback-CuX5Jevb.js";import"./iconLoader-BP58gRD5.js";import"./Switch-BUNl7Zts.js";import"./CompositeRoot-HXK9hrzX.js";import"./TimePicker-CuWp5-Na.js";import"./CollapsiblePanel-DfOA0fLb.js";import"./error-BTFoLABS.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-lGVwuAms.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
