import{j as t,g as n}from"./iframe-Dxf7pqeg.js";import{A as r}from"./action-form-BsdUSMUX.js";import"./preload-helper-CF9q8wC-.js";import"./DropdownField-CGNqz11o.js";import"./debounce-CKRCdOlE.js";import"./useOsdkClient-BclyzzCm.js";import"./index-wDaQCgfa.js";import"./Input-B-AK0ISA.js";import"./useBaseUiId-DVv5YeQ_.js";import"./useControlled-COWGSBWf.js";import"./index-6J7TyXcf.js";import"./index-BoUI8uiT.js";import"./PopoverPopup-BKxQctdQ.js";import"./InternalBackdrop-0R1WE3fv.js";import"./composite-DX7eZJ2_.js";import"./index-BwEpBM25.js";import"./getDisabledMountTransitionStyles-BObfekIg.js";import"./ToolbarRootContext-DwNvvDcu.js";import"./tick-Cm8FJ6ZM.js";import"./svgIconContainer-DeyZ4zWj.js";import"./small-cross-DYWSmTGJ.js";import"./search-n-Z5MtR9.js";import"./cross-jA7YlUXs.js";import"./useValueChanged-hug1LV6U.js";import"./getPseudoElementBounds-D9abS4hX.js";import"./CompositeItem-DXqXcqtg.js";import"./makeExternalStore-B474c-YK.js";import"./BaseForm-Bf02hZ1z.js";import"./ActionButton-BDiX3ANK.js";import"./Button-C2uuxQ9H.js";import"./SkeletonBar-CbuQfCLG.js";import"./Tooltip-BjgMSx3f.js";import"./info-sign-Dp-YSaoB.js";import"./chevron-up-BDJsVBdV.js";import"./chevron-down-CeBUa0jW.js";import"./useEventCallback-B4KD4d9L.js";import"./iconLoader-Bdl_Mgnd.js";import"./Switch-BYAlpsMM.js";import"./CompositeRoot-Dg3o0s8n.js";import"./TimePicker-CrV6ezJx.js";import"./CollapsiblePanel-C66-rvaM.js";import"./error-LTA79L0B.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BVzotg80.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
