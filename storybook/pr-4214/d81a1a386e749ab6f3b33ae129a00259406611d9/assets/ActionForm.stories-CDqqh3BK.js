import{j as t,g as n}from"./iframe-Dm4_VxTL.js";import{A as r}from"./action-form-BLh9uYzJ.js";import"./preload-helper-CLzuKVE9.js";import"./DropdownField-DsklnAii.js";import"./debounce-C1x-2e5s.js";import"./useOsdkClient-CcArCLJk.js";import"./index-DPnE6q58.js";import"./Input-i9kUqoLh.js";import"./useBaseUiId-D93ZS7uD.js";import"./useControlled-B_aXLH8g.js";import"./index-BP8U4N-x.js";import"./index-T3ZNqMdJ.js";import"./PopoverPopup-CvZJgDeN.js";import"./InternalBackdrop-BS6ANn3h.js";import"./composite-BJxyUUdi.js";import"./index-Buyt4UOA.js";import"./getDisabledMountTransitionStyles-Bt69eCjx.js";import"./ToolbarRootContext-BL7rYCZY.js";import"./tick-CIiArSAU.js";import"./svgIconContainer-CxeeKywm.js";import"./small-cross-DkNS4-YY.js";import"./search-D_26udtD.js";import"./cross-DHCOcICo.js";import"./useValueChanged-iV7bvjzs.js";import"./getPseudoElementBounds-BBXWE-v2.js";import"./CompositeItem-CY6sGbtS.js";import"./makeExternalStore-C9EcSKlD.js";import"./BaseForm-MLTy8pfs.js";import"./ActionButton-CYmCepXw.js";import"./Button-Bzv6XgGX.js";import"./SkeletonBar-DhJDhcRv.js";import"./Tooltip-uKlMJCx4.js";import"./info-sign-Cy1qhLH5.js";import"./chevron-up-DPTvidoe.js";import"./chevron-down-CO8_Do7Y.js";import"./useEventCallback-DBHwmb2c.js";import"./iconLoader-DTwclxRS.js";import"./Switch-CBtzxfAT.js";import"./CompositeRoot-BgEYe06a.js";import"./TimePicker-BmmQQuSf.js";import"./CollapsiblePanel-C06Pqxf1.js";import"./error-D_jQgHrY.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DBhVFgeV.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
