import{j as t,g as n}from"./iframe-CHEKlg6X.js";import{A as r}from"./action-form-DQEToDIr.js";import"./preload-helper-Bk_EBvkM.js";import"./DropdownField-DMVGeKqk.js";import"./debounce-L-eLPBO3.js";import"./useOsdkClient-D_1rD8l7.js";import"./index-BlVg7-ny.js";import"./Input-BQ285Nrh.js";import"./useBaseUiId-Dm5MMLjS.js";import"./useControlled-YILXX2lb.js";import"./index-D9r-VgWS.js";import"./index-B4M03-o8.js";import"./PopoverPopup-lRNkVQdy.js";import"./InternalBackdrop-C-VD7cf_.js";import"./composite-CfCX0gh6.js";import"./index-D-2F9sJ3.js";import"./getDisabledMountTransitionStyles-HaZ0LwJT.js";import"./ToolbarRootContext-Cjz1--hk.js";import"./tick-BxZLRw17.js";import"./svgIconContainer-CkU_wGfW.js";import"./small-cross-D0U4JMZD.js";import"./search-C2zDUTqA.js";import"./cross-CLXDm_xy.js";import"./useValueChanged-DpZywDla.js";import"./getPseudoElementBounds-eH10EFit.js";import"./CompositeItem-BM163bD9.js";import"./makeExternalStore--de5UDab.js";import"./BaseForm-Coyu8pEd.js";import"./ActionButton-BEr53hKB.js";import"./Button-BeqL8QWK.js";import"./SkeletonBar-BRlkv3E0.js";import"./Tooltip-B-MZurAO.js";import"./info-sign-DiPxNzJ4.js";import"./chevron-up-CG3q86df.js";import"./chevron-down-2mN8R6m0.js";import"./useEventCallback-OPC9ZPah.js";import"./iconLoader-Cq8P5S28.js";import"./CompositeRoot-DMYuCTXX.js";import"./Switch-BDSopo3c.js";import"./TimePicker-CMaEy1qd.js";import"./CollapsiblePanel-BhAp95bX.js";import"./error-DR3tFMqe.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CBYIB_jK.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
