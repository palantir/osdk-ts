import{j as t,g as n}from"./iframe-YNEpMth_.js";import{A as r}from"./action-form-CGrneNkb.js";import"./preload-helper-DJ1mpgSP.js";import"./DropdownField-CxRjqDt2.js";import"./debounce-lENr_Rz7.js";import"./useOsdkClient-CddY0wY9.js";import"./index-B2puki5T.js";import"./Input-pwxvUMdX.js";import"./useBaseUiId-CHPLJ4sE.js";import"./useControlled-BW2zwjNJ.js";import"./index-rgrCnizS.js";import"./index-CyFPGQhr.js";import"./PopoverPopup-_aMPVtOd.js";import"./InternalBackdrop-DA38PjxL.js";import"./composite-vOR0gMDm.js";import"./index-ClAp5_lm.js";import"./getDisabledMountTransitionStyles-CqnrcrqL.js";import"./ToolbarRootContext-D9Oiyr8g.js";import"./tick-CtCofIiZ.js";import"./svgIconContainer-BhHr47Fp.js";import"./small-cross-DhU5yWFp.js";import"./search-uuqEPS6n.js";import"./cross-C6C4JYc8.js";import"./useValueChanged-CAGtW709.js";import"./getPseudoElementBounds-CqBdaJPM.js";import"./CompositeItem-C4SXKvmu.js";import"./makeExternalStore-VqCxcddq.js";import"./BaseForm-CPpc05hq.js";import"./ActionButton-B303YVFF.js";import"./Button-Cg8b97WO.js";import"./SkeletonBar-DU-mDkYe.js";import"./Tooltip-D3ZEzSU3.js";import"./info-sign-BJ6BRu7s.js";import"./chevron-up-Ct6tyaz2.js";import"./chevron-down-UgMmigdo.js";import"./useEventCallback-Cm02Rmqs.js";import"./iconLoader-D8xW0f6L.js";import"./CompositeRoot-CF9u9FGy.js";import"./Switch-FoPy594J.js";import"./TimePicker-CtdSXESn.js";import"./CollapsiblePanel-CX929Hyr.js";import"./error-VfGLFz6H.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CvLC4P61.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
