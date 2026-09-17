import{j as t,g as n}from"./iframe-D_qRpeHj.js";import{A as r}from"./action-form-tU-n8FKx.js";import"./preload-helper-D_9N_6Hv.js";import"./DropdownField-DV5YVhPE.js";import"./debounce-BbOjOfo_.js";import"./useOsdkClient-BidZgNy-.js";import"./index-ze-4_PID.js";import"./Input-BNbV4MTG.js";import"./useBaseUiId-By5i2rdz.js";import"./useControlled-Y53AopBQ.js";import"./index-CZLowYbM.js";import"./index-DfyhkSOl.js";import"./PopoverPopup-BEmt1_nM.js";import"./InternalBackdrop-Dc_uxBhE.js";import"./composite-C0V0hw5E.js";import"./index-C-sm0l73.js";import"./getDisabledMountTransitionStyles-ml_2UbZr.js";import"./ToolbarRootContext-Dkj0BbLv.js";import"./tick-D_JbwVBf.js";import"./svgIconContainer-CoeSRgcf.js";import"./small-cross-C2VJaSVZ.js";import"./search-BGYV6IKj.js";import"./cross-BxS6mKVf.js";import"./useValueChanged-DldrlgwL.js";import"./getPseudoElementBounds-Dt8npt-l.js";import"./CompositeItem-B_Ho19nn.js";import"./makeExternalStore-Cgf26SsV.js";import"./BaseForm-DrQ1AngD.js";import"./ActionButton-Bs7eblYb.js";import"./Button-BV5h0__V.js";import"./SkeletonBar-EN4eDWhb.js";import"./Tooltip-BDUJFrAT.js";import"./info-sign-B0keHbxi.js";import"./chevron-up-DYjXMRo1.js";import"./chevron-down-4vjSc27s.js";import"./useEventCallback-Cv2yWZv2.js";import"./iconLoader-DvM5Jgge.js";import"./CompositeRoot-smJwtwn7.js";import"./Switch-BktEPc1V.js";import"./TimePicker-sYvpMWI_.js";import"./CollapsiblePanel-PgBvtzuh.js";import"./error-CushKjuF.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-B7kRIAyY.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
