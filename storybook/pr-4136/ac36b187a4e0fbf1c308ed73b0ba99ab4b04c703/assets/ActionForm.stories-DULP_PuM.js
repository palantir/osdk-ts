import{j as t,g as n}from"./iframe-i61RpjX7.js";import{A as r}from"./action-form-C1fPOZHP.js";import"./preload-helper-BXpoIj2B.js";import"./DropdownField-B2dzXe09.js";import"./debounce-Du4i-gbv.js";import"./useOsdkClient-ABekNhIh.js";import"./index-DdznE6qG.js";import"./Input-BXW8qVNh.js";import"./useBaseUiId-Dw1mKB5r.js";import"./useControlled-Bd2D0MOS.js";import"./index-B1Q3wqWk.js";import"./index-CFOl5jJr.js";import"./PopoverPopup-DWX144ju.js";import"./InternalBackdrop-DQMAcjr6.js";import"./composite-q6o4xbG3.js";import"./index-Clsp1HuI.js";import"./getDisabledMountTransitionStyles-CVMvranO.js";import"./ToolbarRootContext-BlDscewO.js";import"./tick-DDsYIRYo.js";import"./svgIconContainer-BKu8iYZ4.js";import"./small-cross-CIYzC3ci.js";import"./search-DcyXoMY2.js";import"./cross-BJRIAlLu.js";import"./useValueChanged-Cinp2v4c.js";import"./getPseudoElementBounds-CSfNVXL_.js";import"./CompositeItem-CfdrXiQ-.js";import"./makeExternalStore-BnbaQL1F.js";import"./BaseForm-BKQigLeN.js";import"./ActionButton-wKRTt0XG.js";import"./Button-B7Ybnvxm.js";import"./SkeletonBar-Cude-n-r.js";import"./Tooltip-Wp77QFzG.js";import"./info-sign-HxMlA266.js";import"./chevron-up-DLjrUeF4.js";import"./chevron-down-BtDuC_bB.js";import"./useEventCallback-Nm08Lt1H.js";import"./iconLoader-B_z0pNDC.js";import"./Switch-DSG7eKBi.js";import"./CompositeRoot-CvUQeBmi.js";import"./TimePicker-D4Dku7Sn.js";import"./CollapsiblePanel-SYw_Fpkn.js";import"./error-DfGDPEBO.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Cw5kaJur.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
