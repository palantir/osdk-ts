import{j as t,g as n}from"./iframe-DGHdiPVF.js";import{A as r}from"./action-form-BeNRIKPJ.js";import"./preload-helper-Dwawx57G.js";import"./DropdownField-CvEOum2T.js";import"./debounce-BS1ne0cG.js";import"./useOsdkClient-jX8T137v.js";import"./index-CfDWuSgz.js";import"./Input-CON8UdB3.js";import"./useBaseUiId-DSFsxKY7.js";import"./useControlled-BEh8mP6Z.js";import"./index-D6q9eE8T.js";import"./index-CvnU9MrA.js";import"./PopoverPopup-C2CAOZi1.js";import"./InternalBackdrop-Ca1YtWjW.js";import"./composite-D0rWnQN7.js";import"./index-CD180WQx.js";import"./getDisabledMountTransitionStyles-Cg-wyC-n.js";import"./ToolbarRootContext-SNm3mtrK.js";import"./tick-BziusfMA.js";import"./svgIconContainer-Cn2xvZW5.js";import"./small-cross-DQbMxM7N.js";import"./search-B7igo8wt.js";import"./cross-B2_lH3br.js";import"./useValueChanged-C5WGo09l.js";import"./getPseudoElementBounds-C4GLDEW1.js";import"./CompositeItem-Bbw7hYJK.js";import"./makeExternalStore-CWOokT-C.js";import"./BaseForm-DaPKqvnO.js";import"./ActionButton-BMxdUIOw.js";import"./Button-BowS6vUa.js";import"./SkeletonBar-C3HyLBXM.js";import"./Tooltip-D3MjycZw.js";import"./info-sign-fOc1pwAw.js";import"./chevron-up-a0O93LiA.js";import"./chevron-down-DP9lMKr_.js";import"./useEventCallback-CB_1zqCu.js";import"./iconLoader-C-gMDqe-.js";import"./Switch-Dxrv6NkV.js";import"./CompositeRoot-auzbGKeK.js";import"./TimePicker-mrKGYIJK.js";import"./CollapsiblePanel-CamAlsBH.js";import"./error-BdbrlX1x.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DkGiRBlo.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
