import{j as t,g as n}from"./iframe-Ch9GCQZw.js";import{A as r}from"./action-form-BexNbsuq.js";import"./preload-helper-DnJKIcik.js";import"./DropdownField-BkydTfoJ.js";import"./debounce-CoINGggm.js";import"./useOsdkClient-CbQE4lpc.js";import"./index-BWo0Chvm.js";import"./Input-M42Jtpmt.js";import"./useBaseUiId-BHSh6ZdF.js";import"./useControlled-DlKs0eKw.js";import"./index-CoyQ9qTH.js";import"./index-DpdzW1OH.js";import"./PopoverPopup-C3k9he2s.js";import"./InternalBackdrop-DiQHfJed.js";import"./composite-B_lrLvaS.js";import"./index-CooRRF-s.js";import"./getDisabledMountTransitionStyles-BRB-pv4J.js";import"./ToolbarRootContext-CxoySA_i.js";import"./tick-n5pxQxar.js";import"./svgIconContainer-DaQYNeFs.js";import"./small-cross-Avc7MGqG.js";import"./search-Bgjfk80F.js";import"./cross-BBG8uB8A.js";import"./useValueChanged-DuDVOcc4.js";import"./getPseudoElementBounds-DIP85sgc.js";import"./CompositeItem-lOcuUhYq.js";import"./makeExternalStore-CXGYFkuo.js";import"./BaseForm-BFYl1VRr.js";import"./ActionButton-Cb3Wx3py.js";import"./Button-lGY5omo3.js";import"./SkeletonBar-Df6Ulzih.js";import"./Tooltip-DC42mvHN.js";import"./info-sign-q9suZNaj.js";import"./chevron-up-BL-hJhuT.js";import"./chevron-down-D219skL8.js";import"./useEventCallback-BmWtV1Ho.js";import"./iconLoader-B-4nMzAR.js";import"./Switch-Dj4MREDm.js";import"./CompositeRoot-BsVfpLUa.js";import"./TimePicker-C947bZbe.js";import"./CollapsiblePanel-BXjVu9cP.js";import"./error-CMZUpiIv.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DaboQw0b.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
