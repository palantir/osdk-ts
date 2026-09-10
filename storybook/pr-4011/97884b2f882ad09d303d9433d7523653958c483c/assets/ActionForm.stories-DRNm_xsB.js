import{j as t,g as n}from"./iframe-EfiBoZIR.js";import{A as r}from"./action-form-BpeGw7V2.js";import"./preload-helper-D_Wykq9t.js";import"./DropdownField-BsrbnwCh.js";import"./debounce-DHoJk0fe.js";import"./useOsdkClient-Cm0A3DMr.js";import"./index-0eA-Cgh_.js";import"./Input-Bf8UFFCR.js";import"./useBaseUiId-cd03ijFK.js";import"./useControlled-RgsLbGbj.js";import"./index-CaF7GUuf.js";import"./index-B7OwTQ75.js";import"./PopoverPopup-D88MF7O9.js";import"./InternalBackdrop-BzXWuiQX.js";import"./composite-CC9kaygZ.js";import"./index-QLAugMY9.js";import"./getDisabledMountTransitionStyles-CMp4u3oX.js";import"./ToolbarRootContext-VaUVpuNK.js";import"./tick-B421wai_.js";import"./svgIconContainer-Daui2Dw7.js";import"./small-cross-B5IfQiVk.js";import"./search-DW9KpidM.js";import"./cross-BOeJXaLq.js";import"./useValueChanged-DRM7hTnG.js";import"./getPseudoElementBounds-D32SWUco.js";import"./CompositeItem-Bcq4203w.js";import"./makeExternalStore-DJM-d-Lr.js";import"./BaseForm-DKeC9S31.js";import"./ActionButton-B7QgbfJ7.js";import"./Button-WoBFNDMc.js";import"./SkeletonBar-RRAm9W8p.js";import"./Tooltip-ClBCWMU5.js";import"./info-sign-BXzV5vje.js";import"./chevron-up-B0NzWakg.js";import"./chevron-down-Bjf9KWk2.js";import"./useEventCallback-BLFhQYGq.js";import"./iconLoader-D_KBTsrY.js";import"./CompositeRoot-C0VK9r29.js";import"./Switch-COB7wt3H.js";import"./TimePicker-DHfPXiCU.js";import"./CollapsiblePanel-B5r09xR-.js";import"./error-CzXhBCLL.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-EFBhc3BK.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
