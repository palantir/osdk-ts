import{j as t,g as n}from"./iframe-A_fOpVjR.js";import{A as r}from"./action-form-Cl-BY9IU.js";import"./preload-helper-NNWOvscG.js";import"./DropdownField-3zZSXBjS.js";import"./debounce-DtL1LGCj.js";import"./useOsdkClient-Bel45J9c.js";import"./index-C7FsEBhG.js";import"./Input-CPD69t9E.js";import"./useBaseUiId-C7m94P3Q.js";import"./useControlled-C2rTfK3U.js";import"./index-CSGRTjjX.js";import"./index-BpdiA8C2.js";import"./PopoverPopup-CgMv4Y2M.js";import"./InternalBackdrop-A8sqO8XG.js";import"./composite-BNlZpCYa.js";import"./index-CQmYgAHq.js";import"./getDisabledMountTransitionStyles-ChkLH3QV.js";import"./ToolbarRootContext-DqquyoSz.js";import"./tick-C7t8KzWK.js";import"./svgIconContainer-Bq9Z_PVa.js";import"./small-cross-DNEXD1XY.js";import"./search-DjdTcbXm.js";import"./cross-BwNW8yAx.js";import"./useValueChanged-R8r5ZzIC.js";import"./getPseudoElementBounds-C_2Jp177.js";import"./CompositeItem-CZZ_uEuP.js";import"./makeExternalStore-BnincROM.js";import"./BaseForm-DD72BZeE.js";import"./ActionButton-D4KDRNf3.js";import"./Button-DqOCaaxJ.js";import"./SkeletonBar-D_FkMl9_.js";import"./Tooltip-BmW3AFCg.js";import"./info-sign-BaXhpUO1.js";import"./chevron-up-CUM2XUTZ.js";import"./chevron-down-C0LTAe4-.js";import"./useEventCallback-D0ioUuoD.js";import"./iconLoader-BfSCcQP-.js";import"./Switch-eb6qaKVL.js";import"./CompositeRoot-D1ENIokx.js";import"./TimePicker-BOIMQ412.js";import"./CollapsiblePanel-D5N62OEf.js";import"./error-CBOQy5rF.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-SqCQVKc1.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
