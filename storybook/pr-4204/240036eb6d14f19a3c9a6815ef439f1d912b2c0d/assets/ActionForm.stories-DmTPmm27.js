import{j as t,g as n}from"./iframe-C2bn1_9y.js";import{A as r}from"./action-form-zsQXMy8I.js";import"./preload-helper-BKCOmGZc.js";import"./DropdownField-Czf-9CkU.js";import"./debounce-VRVIwWBB.js";import"./useOsdkClient-CRP05prZ.js";import"./index-Rse0ui84.js";import"./Input-M9Th-rY9.js";import"./useBaseUiId-BEW7P3cF.js";import"./useControlled-BN9CT1rQ.js";import"./index-pp8KWnVv.js";import"./index-Dvlf4PX0.js";import"./PopoverPopup-CtnZgejC.js";import"./InternalBackdrop-DHxqqy0U.js";import"./composite-DfH2wcee.js";import"./index-CIcHY6Ua.js";import"./getDisabledMountTransitionStyles-Cw6nwd_1.js";import"./ToolbarRootContext-C-eiR_Mr.js";import"./tick-CkUSwppG.js";import"./svgIconContainer-DPC29kub.js";import"./small-cross-BbD3VZXI.js";import"./search-BCScHNOJ.js";import"./cross-D3-SLGNH.js";import"./useValueChanged-CitzyAfL.js";import"./getPseudoElementBounds-jQ_Lb5TR.js";import"./CompositeItem-Dhse_QgT.js";import"./makeExternalStore-DeVLvyOh.js";import"./BaseForm-uummkHBj.js";import"./ActionButton-C1OuBZSx.js";import"./Button-DYwf6UQE.js";import"./SkeletonBar-CjAl8nh4.js";import"./Tooltip-AZ5zh1rm.js";import"./info-sign-C6nScuSM.js";import"./chevron-up-BILZRy9w.js";import"./chevron-down-BOQ5t9w6.js";import"./useEventCallback-DVSHSqJV.js";import"./iconLoader-DsVKiQbg.js";import"./Switch-Bb6PhSVt.js";import"./CompositeRoot-Dt31koM5.js";import"./TimePicker-CPfVquTQ.js";import"./CollapsiblePanel-BM0qN9C1.js";import"./error-DBJpIi5X.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-B5yrVNzh.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
