import{j as t,g as n}from"./iframe-DcH5xezC.js";import{A as r}from"./action-form-DXjO427u.js";import"./preload-helper-zu47KBbI.js";import"./DropdownField-CrN4lGdi.js";import"./debounce-CGWpxv8T.js";import"./useOsdkClient-D5k8Tf4N.js";import"./index-DbAD30nX.js";import"./Input-CHJLRFkf.js";import"./useBaseUiId-Bbtq32g0.js";import"./useControlled-BYauL-0P.js";import"./index-DRxO555y.js";import"./index-B91Y8CCx.js";import"./PopoverPopup-Bkoo-Q_-.js";import"./InternalBackdrop-DyFOy9BL.js";import"./composite-DA4kpS88.js";import"./index--Rg5YMM0.js";import"./getDisabledMountTransitionStyles-DP9RwCAa.js";import"./ToolbarRootContext-DDNTKhTz.js";import"./tick-JU-3FL-Z.js";import"./svgIconContainer-B5leceMR.js";import"./small-cross-VAMEtZ-6.js";import"./search-BF1ckEWB.js";import"./cross-Chd2V34f.js";import"./useValueChanged-CM-EGciU.js";import"./getPseudoElementBounds-Dlvy_Xcp.js";import"./CompositeItem-D4A9PZVo.js";import"./makeExternalStore-DyQTnfpK.js";import"./BaseForm-DELhIGWt.js";import"./ActionButton-CqL2_MDd.js";import"./Button-DWi0EVGU.js";import"./SkeletonBar-CrKV3y2b.js";import"./Tooltip-DJvrdrIe.js";import"./info-sign-BuaPhzi9.js";import"./chevron-up-BbhsIX5q.js";import"./chevron-down-cNoDE_3k.js";import"./useEventCallback-CLRIu-kV.js";import"./iconLoader-DHoGPX-f.js";import"./CompositeRoot-BW1y_slJ.js";import"./Switch-D9Vs1lfP.js";import"./TimePicker-DozRwFVh.js";import"./CollapsiblePanel-D0_hAvFL.js";import"./error-BKi4y-Uw.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BohsC0KD.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
