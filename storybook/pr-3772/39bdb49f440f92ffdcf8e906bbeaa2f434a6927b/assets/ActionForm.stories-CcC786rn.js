import{j as t,g as n}from"./iframe-C8SPWzFD.js";import{A as r}from"./action-form-BUGVfcPs.js";import"./preload-helper-0-zjDLXH.js";import"./DropdownField-C8LjKSnS.js";import"./debounce-B5Hx5zW4.js";import"./useOsdkClient-Gc4DZ-CV.js";import"./index-CGimpnDA.js";import"./Input-B7RJGze7.js";import"./useBaseUiId-C57VmH3J.js";import"./useControlled-Yy6Nm7q-.js";import"./index-VKcShZXo.js";import"./index-BwAo9-Ip.js";import"./PopoverPopup-D5c_P4sS.js";import"./InternalBackdrop-DxF2V30r.js";import"./composite-DPxUJccb.js";import"./index-DI8w2Wrl.js";import"./getDisabledMountTransitionStyles-XmNCU5wP.js";import"./ToolbarRootContext-BVFmYY-d.js";import"./tick-Dd7xtzHi.js";import"./svgIconContainer-B40AAOuO.js";import"./small-cross-94u2Um9w.js";import"./search-bHMR0YBt.js";import"./cross-yQkVXtk-.js";import"./useValueChanged-DPIPHUs8.js";import"./getPseudoElementBounds-ckCn8Eoc.js";import"./CompositeItem--Cz5F4Xa.js";import"./makeExternalStore-C93JHYzf.js";import"./BaseForm-DHlXSYYA.js";import"./ActionButton-BkWFOmHW.js";import"./Button-BSl9QmF1.js";import"./SkeletonBar-o-eg2SlE.js";import"./Tooltip-BOvX8lE8.js";import"./info-sign-BFExx0Ve.js";import"./chevron-up-meoMkqja.js";import"./chevron-down-C45MQu-J.js";import"./useEventCallback-DjuFsSbR.js";import"./iconLoader-BZnNjhUk.js";import"./CompositeRoot-COC918y2.js";import"./Switch-BzEqJEkf.js";import"./TimePicker-CDh9GtNl.js";import"./CollapsiblePanel-BSR-rgRE.js";import"./error-B5OE4NvJ.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-jd8u8gq8.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/experimental";

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
        code: \`import { ActionForm } from "@osdk/react-components/experimental";

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
