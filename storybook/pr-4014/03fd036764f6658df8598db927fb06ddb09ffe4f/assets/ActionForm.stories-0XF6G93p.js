import{j as t,g as n}from"./iframe-DkbM6O-Q.js";import{A as r}from"./action-form-4YzKdtXC.js";import"./preload-helper-DC9LUrcb.js";import"./DropdownField-BWar8h-x.js";import"./debounce-D8PxudOE.js";import"./useOsdkClient-DwOlk4Zy.js";import"./index-5Xb7iy_v.js";import"./Input-BHgKvDQ1.js";import"./useBaseUiId-CbWoUVda.js";import"./useControlled-TBJYjn-n.js";import"./index-DjV9sMAb.js";import"./index-CS7XaPdo.js";import"./PopoverPopup-CvoeuWpF.js";import"./InternalBackdrop-BGmRqVwl.js";import"./composite-CSTh2sUL.js";import"./index-cjbVZ1ML.js";import"./getDisabledMountTransitionStyles-DAwwnn7h.js";import"./ToolbarRootContext-B5sg7AjV.js";import"./tick-DWiyCXA2.js";import"./svgIconContainer-aUCWMueJ.js";import"./small-cross-Co1nXvMN.js";import"./search-eJ_oBGNG.js";import"./cross-Bgds_EJl.js";import"./useValueChanged-BhBtEc7p.js";import"./getPseudoElementBounds-qBUrNeQK.js";import"./CompositeItem-CIMhmz-B.js";import"./makeExternalStore-B4N8C8OH.js";import"./BaseForm-C46HGbyj.js";import"./ActionButton-BAEkA_vW.js";import"./Button-DDqxd8Ee.js";import"./SkeletonBar-CAFl9YhT.js";import"./Tooltip-BKA5GfZS.js";import"./info-sign-InYQKDX3.js";import"./chevron-up-Tuqv7cnq.js";import"./chevron-down-DwM4wuWt.js";import"./useEventCallback-BJqIL9gZ.js";import"./iconLoader-CbnKFZtD.js";import"./CompositeRoot-XW1VV55v.js";import"./Switch-CXf8lvOw.js";import"./TimePicker-DWtlodZw.js";import"./CollapsiblePanel-b-Y0NgWl.js";import"./error-Dg6O-1zt.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BmIxPjSX.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
