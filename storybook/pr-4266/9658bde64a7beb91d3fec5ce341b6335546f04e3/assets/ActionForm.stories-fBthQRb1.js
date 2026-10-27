import{j as t,g as n}from"./iframe-BK92nj8O.js";import{A as r}from"./action-form-CEU3Fox3.js";import"./preload-helper-BzvFWRwm.js";import"./DropdownField-CfACKZfD.js";import"./debounce-CcroCpX3.js";import"./useOsdkClient-CR-tfmoo.js";import"./index-Cp-oegvQ.js";import"./Input-R7iFBYJw.js";import"./useBaseUiId-DJzLMsdJ.js";import"./useControlled-D4vgYWXW.js";import"./index-CRvcO-Mq.js";import"./index-Vq2K6jMQ.js";import"./PopoverPopup-mBT0X6Cq.js";import"./InternalBackdrop-CXx_gZFt.js";import"./composite-CUOp8zR0.js";import"./index-BOzml72P.js";import"./getDisabledMountTransitionStyles-Dx3aHikn.js";import"./ToolbarRootContext-DaxowF1A.js";import"./tick-DePsAy0F.js";import"./svgIconContainer-CUCnXzLA.js";import"./small-cross-DGwpD6_s.js";import"./search-Cx7lcCpX.js";import"./cross-CQouWOVo.js";import"./useValueChanged-DREFbt6f.js";import"./getPseudoElementBounds-BOjBrs5G.js";import"./CompositeItem-BUqJx2UC.js";import"./makeExternalStore-C6TfNWC7.js";import"./BaseForm-BGO5DedR.js";import"./ActionButton-BkWRPx-v.js";import"./Button-CLd3GlZq.js";import"./SkeletonBar-CUN-Db9r.js";import"./Tooltip-DraOFyZC.js";import"./info-sign-DLTsxJag.js";import"./chevron-up-CIbPOuc_.js";import"./chevron-down-DFEA5aIq.js";import"./useEventCallback-DW2JMFk8.js";import"./iconLoader-bbxeWiWv.js";import"./Switch-BTtxanfp.js";import"./CompositeRoot-DldYV1eq.js";import"./TimePicker-CjV8jqln.js";import"./CollapsiblePanel-fv8SIwpm.js";import"./error-CpelSvOO.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-F47lPElZ.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
