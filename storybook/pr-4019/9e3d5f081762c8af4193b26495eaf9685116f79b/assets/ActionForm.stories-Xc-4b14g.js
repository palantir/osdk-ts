import{j as t,g as n}from"./iframe-Djf7Pdxr.js";import{A as r}from"./action-form-DVUZ_JFZ.js";import"./preload-helper-bqmPmNVM.js";import"./DropdownField-BbRr8BI8.js";import"./debounce-Dwy6RrjG.js";import"./useOsdkClient-Crp_QmkC.js";import"./index-q-X2FPlx.js";import"./Input-BOeBxQZ8.js";import"./useBaseUiId-CFhAQZOZ.js";import"./useControlled-DBGPJ9YV.js";import"./index-Br-LNr6E.js";import"./index-B_8x8Udt.js";import"./PopoverPopup-aCIXJynx.js";import"./InternalBackdrop-CkSj7F1A.js";import"./composite-IAQwOYh1.js";import"./index-LG6ddP-y.js";import"./getDisabledMountTransitionStyles-DC6748tP.js";import"./ToolbarRootContext-DMoWDH_V.js";import"./tick-CwOgbQYe.js";import"./svgIconContainer-BOlRpQyp.js";import"./small-cross-DLOt1VKh.js";import"./search-Ddeiu8tt.js";import"./cross-DFIWw1bP.js";import"./useValueChanged-BePRkA2B.js";import"./getPseudoElementBounds-CrTEc-vZ.js";import"./CompositeItem-CA-IJTMc.js";import"./makeExternalStore-D2eKyzGX.js";import"./BaseForm-BiSqdkVT.js";import"./ActionButton-Deev-KTG.js";import"./Button-DSU1CbLm.js";import"./SkeletonBar-Di0gRprg.js";import"./Tooltip-B7UeItRk.js";import"./info-sign-CvpftPs6.js";import"./chevron-up-Dw4yeYoV.js";import"./chevron-down-CuR5Ei1Z.js";import"./useEventCallback-B4USqeZP.js";import"./iconLoader-DoGsa3yu.js";import"./CompositeRoot-BXrdOGV5.js";import"./Switch-C3Zg07OT.js";import"./TimePicker-9EhJYJYX.js";import"./CollapsiblePanel-CfVuO8FY.js";import"./error-D2_XhANl.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Bs-xSy0E.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
