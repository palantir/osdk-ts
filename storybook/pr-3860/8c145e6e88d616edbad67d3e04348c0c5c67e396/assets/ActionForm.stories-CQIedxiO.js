import{j as t,g as n}from"./iframe-Dixwoq4L.js";import{A as r}from"./action-form-Bk15iHqp.js";import"./preload-helper-BsHp-RGP.js";import"./DropdownField-pxQBJOyD.js";import"./debounce-atOz-W-P.js";import"./useOsdkClient-DiAIchaF.js";import"./index-CcIVVuqf.js";import"./Input-gkS7bq_U.js";import"./useBaseUiId-DaT4VLXm.js";import"./useControlled-CJEoS3fz.js";import"./index-BX_I2TdV.js";import"./index-BXWUqN74.js";import"./PopoverPopup-CA0CFdoY.js";import"./InternalBackdrop-B-8CQy8W.js";import"./composite-BiAYM8pY.js";import"./index-Ch_N0PFP.js";import"./getDisabledMountTransitionStyles-DYbvwZ2K.js";import"./ToolbarRootContext-Dg49HtmA.js";import"./tick-D209HxbV.js";import"./svgIconContainer-CffeXbYk.js";import"./small-cross-CaDB4jvF.js";import"./search-DAIXcQnY.js";import"./cross-D7TdtDyo.js";import"./useValueChanged-CiXWMzHQ.js";import"./getPseudoElementBounds-DeapELKt.js";import"./CompositeItem-BVhXUg3I.js";import"./makeExternalStore-ClZX4f5E.js";import"./BaseForm-B0RicG7h.js";import"./ActionButton-CdFwVFbZ.js";import"./Button-Dr6WGivc.js";import"./SkeletonBar-Dfdp1Pfv.js";import"./Tooltip-yiNDpymw.js";import"./info-sign-PgNsM3Ez.js";import"./chevron-up-CXGOAf4Z.js";import"./chevron-down-BK-6EzsA.js";import"./useEventCallback-C8toBuB-.js";import"./iconLoader-Dt_nUP8V.js";import"./CompositeRoot-DV1d4smP.js";import"./Switch-COgsCAv0.js";import"./TimePicker-BWDrJVKv.js";import"./CollapsiblePanel-zs8L02cO.js";import"./error-CqJY6TRA.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CHTNEF0W.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
