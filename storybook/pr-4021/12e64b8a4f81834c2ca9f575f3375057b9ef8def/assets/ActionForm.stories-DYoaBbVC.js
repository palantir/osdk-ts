import{j as t,g as n}from"./iframe-DBsN32YB.js";import{A as r}from"./action-form-Bol9Tecu.js";import"./preload-helper-D8tz-Fbl.js";import"./DropdownField-II4e2JLl.js";import"./debounce-DaYdPsaE.js";import"./useOsdkClient-0ECQxVY2.js";import"./index-nhJVH1tz.js";import"./Input-DkxwhWbl.js";import"./useBaseUiId-CSOklioX.js";import"./useControlled-BvDU6EbQ.js";import"./index-vWZxRhPY.js";import"./index-Cf_xmn3O.js";import"./PopoverPopup-0gvGwbx8.js";import"./InternalBackdrop-DYY9GSmo.js";import"./composite-BNtgV9XE.js";import"./index-BWmQuch2.js";import"./getDisabledMountTransitionStyles-OsqmWLyJ.js";import"./ToolbarRootContext-6JBun5UY.js";import"./tick-DsjN0rWO.js";import"./svgIconContainer-X_dBFOT2.js";import"./small-cross-Cim7XK7q.js";import"./search-rD_BABVw.js";import"./cross-DPk5SIsZ.js";import"./useValueChanged-NXrJU1s1.js";import"./getPseudoElementBounds-Bc1_ckMu.js";import"./CompositeItem-Dfbl7Tdw.js";import"./makeExternalStore-DbaTP8FP.js";import"./BaseForm-L8RcbLv4.js";import"./ActionButton-koQGMFye.js";import"./Button-CQwlNKu1.js";import"./SkeletonBar-OO5fv2aQ.js";import"./Tooltip-BjuL9DjV.js";import"./info-sign-B8qffOe1.js";import"./chevron-up-C4B6mav5.js";import"./chevron-down-eJT7_Kub.js";import"./useEventCallback-BDGHapFp.js";import"./iconLoader-Bu3T_-OH.js";import"./CompositeRoot-D8peGb2J.js";import"./Switch-C9lyw2ER.js";import"./TimePicker-D03m_moX.js";import"./CollapsiblePanel-U9o9y0a2.js";import"./error-C3JCbj1L.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-1oll6lxC.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
