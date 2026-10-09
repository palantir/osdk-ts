import{j as t,g as n}from"./iframe-BPD7a-d3.js";import{A as r}from"./action-form-CKN2hLdZ.js";import"./preload-helper-BMJg2fth.js";import"./DropdownField-Dpdo-uvo.js";import"./debounce-D2ZCRJTn.js";import"./useOsdkClient-jf6lJmqS.js";import"./index-DWlOJTtZ.js";import"./Input-BsWtOrbL.js";import"./useBaseUiId-B7NeBfTl.js";import"./useControlled-DcoiTjSg.js";import"./index-BFdep0Pu.js";import"./index-CPwIgA5j.js";import"./PopoverPopup-DLgHHGX6.js";import"./InternalBackdrop-BqFiGGtG.js";import"./composite-2r4XaYyI.js";import"./index-Dc2JolBW.js";import"./getDisabledMountTransitionStyles-GoNHsGRT.js";import"./ToolbarRootContext-CvDFIQMo.js";import"./tick-0nx9bnwa.js";import"./svgIconContainer-9WeLc1W4.js";import"./small-cross-DKMapFDw.js";import"./search-DDY46Bsb.js";import"./cross-BQBN2sBj.js";import"./useValueChanged-CW-dzw8w.js";import"./getPseudoElementBounds-wmkfIGoM.js";import"./CompositeItem-CQbGZkro.js";import"./makeExternalStore-BXsO-6Dt.js";import"./BaseForm-Cw1ZRB62.js";import"./ActionButton-DQ15zJBD.js";import"./Button-J8RQxXRy.js";import"./SkeletonBar-DXu4hwWS.js";import"./Tooltip-y6dqO2XM.js";import"./info-sign-BcqYnFiq.js";import"./chevron-up-BTzeox3B.js";import"./chevron-down-TG9TSSoU.js";import"./useEventCallback-BLd4X65y.js";import"./iconLoader-D43e-Daf.js";import"./Switch-BBq_sY4D.js";import"./CompositeRoot-BKUcpFOa.js";import"./TimePicker-D5GOTBa4.js";import"./CollapsiblePanel-DZA1hbiz.js";import"./error-DxTVaEkU.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-zev-jqP5.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
