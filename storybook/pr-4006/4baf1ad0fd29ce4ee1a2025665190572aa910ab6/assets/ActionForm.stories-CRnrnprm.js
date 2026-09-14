import{j as t,g as n}from"./iframe-CGyuUHxy.js";import{A as r}from"./action-form-De-xZmGn.js";import"./preload-helper-CHXR4TEM.js";import"./DropdownField-DV35Ur0Z.js";import"./debounce-qtcXepJn.js";import"./useOsdkClient-Dvl_qWbV.js";import"./index-BY9adCgo.js";import"./Input-C3-P_z4v.js";import"./useBaseUiId-CxRjJ2eA.js";import"./useControlled-DMowJxn0.js";import"./index-BAxLRNzk.js";import"./index-CiafOJ6c.js";import"./PopoverPopup-C8iqkpjZ.js";import"./InternalBackdrop-D2QUgXtn.js";import"./composite-Ccbhb-G_.js";import"./index-BeL2DRU1.js";import"./getDisabledMountTransitionStyles-BiBOKD-Z.js";import"./ToolbarRootContext-B3Ikfeie.js";import"./tick-BgWIPs4c.js";import"./svgIconContainer-BsIK3M0v.js";import"./small-cross-C5mq1gMO.js";import"./search-lH3pU1gQ.js";import"./cross-IJIRpi8I.js";import"./useValueChanged-BTu-LDDs.js";import"./getPseudoElementBounds-Di2B7QRI.js";import"./CompositeItem-C9KCjhut.js";import"./makeExternalStore-DIn4B4sN.js";import"./BaseForm-BLqtxmFQ.js";import"./ActionButton-1oqP8PoB.js";import"./Button-BCdalSJc.js";import"./SkeletonBar-DpG5K-jj.js";import"./Tooltip-qASfieF8.js";import"./info-sign-BG5GlB-3.js";import"./chevron-up-Cv2Ke0fm.js";import"./chevron-down-DvkSXyV_.js";import"./useEventCallback-D7IhiRBC.js";import"./iconLoader-BxAOwJF2.js";import"./CompositeRoot-2FnPGbNx.js";import"./Switch-DUTxkacg.js";import"./TimePicker-DkfdzUDa.js";import"./CollapsiblePanel-BrxTnTCc.js";import"./error-2nP38RK7.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BUGq6PJK.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
