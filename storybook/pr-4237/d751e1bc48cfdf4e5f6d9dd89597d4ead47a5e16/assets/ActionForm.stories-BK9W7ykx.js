import{j as t,g as n}from"./iframe-DFHLrRxy.js";import{A as r}from"./action-form-Cyn5QDpW.js";import"./preload-helper-D3OFW4Wp.js";import"./DropdownField-Dh5_GV1H.js";import"./debounce-Bd8h-BFs.js";import"./useOsdkClient-CEmmd5-D.js";import"./index-lMBTNEhC.js";import"./Input-CI74CICo.js";import"./useBaseUiId-D2rxFRGv.js";import"./useControlled-DfjEV_zy.js";import"./index-CWojmVv7.js";import"./index-DCHHusj_.js";import"./PopoverPopup-hcZaO1Rb.js";import"./InternalBackdrop-DWPCMmWX.js";import"./composite-nDV_ik1F.js";import"./index-DO2q5FSh.js";import"./getDisabledMountTransitionStyles-Dk_YrDen.js";import"./ToolbarRootContext-BjfNF6P-.js";import"./tick-D7elqOw7.js";import"./svgIconContainer-CWuGvQcW.js";import"./small-cross-CtE4NcWg.js";import"./search-DQslwNpY.js";import"./cross-CvONLWGq.js";import"./useValueChanged-BakNeGfp.js";import"./getPseudoElementBounds-O3DfICBX.js";import"./CompositeItem-BYZr26cD.js";import"./makeExternalStore-D-LxbjRt.js";import"./BaseForm-CExwyByf.js";import"./ActionButton-njAVZN5A.js";import"./Button-yx5bONTn.js";import"./SkeletonBar-7Q4DLrdr.js";import"./Tooltip-XUDsdyce.js";import"./info-sign-P_EBoKPz.js";import"./chevron-up-Dq4sWNuZ.js";import"./chevron-down-DoelWXMj.js";import"./useEventCallback-DMNzBcY_.js";import"./iconLoader-DGI9yVFB.js";import"./Switch-C7lL7KJQ.js";import"./CompositeRoot-V2V3zKwE.js";import"./TimePicker-BtWEEcJt.js";import"./CollapsiblePanel-DAe7qxxF.js";import"./error-C-yk3J4q.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BEBmRKsA.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
