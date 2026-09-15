import{j as t,g as n}from"./iframe-BYyS3cG-.js";import{A as r}from"./action-form-B5g2gDwL.js";import"./preload-helper-BXbEnpda.js";import"./DropdownField-DMszTIIw.js";import"./debounce-BSTm8Z6M.js";import"./useOsdkClient-CZiykm71.js";import"./index-BXxvc4Z_.js";import"./Input-C27Z_igv.js";import"./useBaseUiId-CGKSvxjI.js";import"./useControlled-Br7xWf3M.js";import"./index-D2gKK-6z.js";import"./index-DvCEvxA7.js";import"./PopoverPopup-Zw1VqF60.js";import"./InternalBackdrop-80Nj_94O.js";import"./composite-ZjlJlMFO.js";import"./index-2l1FSn_M.js";import"./getDisabledMountTransitionStyles-Dqbr5jIl.js";import"./ToolbarRootContext-dI5H3gst.js";import"./tick-D6fAtfPQ.js";import"./svgIconContainer-Dk59z4vq.js";import"./small-cross-j0KzCO-W.js";import"./search-Can7HIrw.js";import"./cross-K2cagqs8.js";import"./useValueChanged-R62FXs_N.js";import"./getPseudoElementBounds-Do85zsEf.js";import"./CompositeItem-GKFr0mZp.js";import"./makeExternalStore-DxNQWYP7.js";import"./BaseForm-jmXajJN8.js";import"./ActionButton-DudpqNmL.js";import"./Button-DO8jDkqh.js";import"./SkeletonBar-BaIiRjVZ.js";import"./Tooltip-BB4biWHU.js";import"./info-sign-dv_pFE-v.js";import"./chevron-up-C5RiP6tL.js";import"./chevron-down-QowdN_dJ.js";import"./useEventCallback-CVm-QX4M.js";import"./iconLoader-ByoVcIKh.js";import"./CompositeRoot-DaXVn6BX.js";import"./Switch-BWHLecLF.js";import"./TimePicker-1o8lRj4h.js";import"./CollapsiblePanel-74GeumXY.js";import"./error-BijATQGq.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DhZ_7yXB.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
