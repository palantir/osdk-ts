import{j as t,g as n}from"./iframe-B-0GKdAh.js";import{A as r}from"./action-form-Dc2RsGq9.js";import"./preload-helper-BxGs137T.js";import"./DropdownField-BT9Qh08E.js";import"./debounce-D7txzNNR.js";import"./useOsdkClient-C5XwldCE.js";import"./index-CeTv2GEb.js";import"./Input-m2Y-zZM0.js";import"./useBaseUiId-CuPeP6_V.js";import"./useControlled-CvXSRSaz.js";import"./index-B28VTjrg.js";import"./index-Bvaqc28t.js";import"./PopoverPopup-C6laaofs.js";import"./InternalBackdrop-Dx-S1k2g.js";import"./composite-LajQ-4YU.js";import"./index-C_O2JK4N.js";import"./getDisabledMountTransitionStyles-D6yAx4Zz.js";import"./ToolbarRootContext-CwO2Drzb.js";import"./tick-C2VLoN1r.js";import"./svgIconContainer-D680pERF.js";import"./small-cross-D9tlZ127.js";import"./search-wHoqdl81.js";import"./cross-ysBsIoNl.js";import"./useValueChanged-CJf6xuTk.js";import"./getPseudoElementBounds-0hkPmral.js";import"./CompositeItem-nISr-y05.js";import"./makeExternalStore-CNR6geF1.js";import"./BaseForm-Bndzjbny.js";import"./ActionButton-BL9rXH5v.js";import"./Button-DglVf80r.js";import"./SkeletonBar-BCo3EIVq.js";import"./Tooltip-DTEpkTPa.js";import"./info-sign-ChocD6-Z.js";import"./chevron-up-CPdcUnzM.js";import"./chevron-down-CJ1qMpgz.js";import"./useEventCallback-C4lws8eU.js";import"./iconLoader-DxrEQEhy.js";import"./CompositeRoot-CPS5Fm7u.js";import"./Switch-20H1lzC6.js";import"./TimePicker-CPp5IDhR.js";import"./CollapsiblePanel-uVUj59mq.js";import"./error-z9s112Ur.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DXKy8BiX.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
