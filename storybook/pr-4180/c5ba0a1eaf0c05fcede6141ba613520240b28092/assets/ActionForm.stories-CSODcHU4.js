import{j as t,g as n}from"./iframe-B0BeHSW3.js";import{A as r}from"./action-form-C69PZxOZ.js";import"./preload-helper-DAJqEBqZ.js";import"./DropdownField-BHYbQQp4.js";import"./debounce-DeBplguO.js";import"./useOsdkClient-CYqnm12a.js";import"./index-fkdnmgoB.js";import"./Input-BhPQq-YU.js";import"./useBaseUiId-CFx2OXwB.js";import"./useControlled-Y2VvyFT1.js";import"./index-CeseuNBk.js";import"./index-B8qFFoze.js";import"./PopoverPopup-DAPZVEwH.js";import"./InternalBackdrop-xPEFo0aI.js";import"./composite-BKG8TgZ7.js";import"./index-ChyoeDYU.js";import"./getDisabledMountTransitionStyles--mZk6BZS.js";import"./ToolbarRootContext-BU8BYZpt.js";import"./tick-cnkBzsXZ.js";import"./svgIconContainer-3LirYjxc.js";import"./small-cross-GcZN--Q5.js";import"./search-Eov1ZRug.js";import"./cross-ChIXxlFh.js";import"./useValueChanged-IjvfJjRR.js";import"./getPseudoElementBounds-B-DwAZaN.js";import"./CompositeItem-CCwjGTNJ.js";import"./makeExternalStore-CLIh_9sw.js";import"./BaseForm-BhoFLu6_.js";import"./ActionButton-DWP5wTUe.js";import"./Button-CUzfzg16.js";import"./SkeletonBar-C5AffQmv.js";import"./Tooltip-DNEHwr8p.js";import"./info-sign-DbW8mx4u.js";import"./chevron-up-CMUh9_HD.js";import"./chevron-down-CIEyD1Re.js";import"./useEventCallback-B0c3gcjQ.js";import"./iconLoader-BMf8RgKl.js";import"./Switch-cY6dkzgC.js";import"./CompositeRoot-CGGtDIvD.js";import"./TimePicker-COF3lXWo.js";import"./CollapsiblePanel-chL21z8S.js";import"./error-LXXuPtJW.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CRG9AD3M.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
