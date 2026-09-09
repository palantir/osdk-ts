import{j as t,g as n}from"./iframe-b_8xiy3W.js";import{A as r}from"./action-form-Ig9ns0SI.js";import"./preload-helper-D0v6g8Db.js";import"./DropdownField-BCzLIobc.js";import"./debounce-B2LvOlKd.js";import"./useOsdkClient-yfgmgRbP.js";import"./index-oZ2AYheq.js";import"./Input-Co7UsBkP.js";import"./useBaseUiId-DT31E3Yo.js";import"./useControlled-CAq9EV0h.js";import"./index-C8Xx4cgL.js";import"./index-xZwO_cAf.js";import"./PopoverPopup-BtxX0L1I.js";import"./InternalBackdrop-CLpVUHm8.js";import"./composite-cYMewAOc.js";import"./index-BMWwnwmI.js";import"./getDisabledMountTransitionStyles-CCClTCas.js";import"./ToolbarRootContext-BKksKq4U.js";import"./tick-HvfLanm4.js";import"./svgIconContainer-ByDmaFbM.js";import"./small-cross-BNQLIIyh.js";import"./search-CbAtzBKJ.js";import"./cross-CALAWLOA.js";import"./useValueChanged-CeFg2HVM.js";import"./getPseudoElementBounds-nU4-wp7y.js";import"./CompositeItem-O5ez4ulJ.js";import"./makeExternalStore-c0rjbvLB.js";import"./BaseForm-DJA3OaSl.js";import"./ActionButton-CodfAc7s.js";import"./Button-CQKahg2d.js";import"./SkeletonBar-Bd96z6dI.js";import"./Tooltip-Bamtogyy.js";import"./info-sign-DTL7m7yp.js";import"./chevron-up-BJdWY50h.js";import"./chevron-down-DItPxyzq.js";import"./useEventCallback-CAsu19Vq.js";import"./iconLoader-CmfAlher.js";import"./CompositeRoot-Bl25qG29.js";import"./Switch-CoVVQGQC.js";import"./TimePicker-gWiOKpMj.js";import"./CollapsiblePanel-D3gQHqx1.js";import"./error-BHsdjMmH.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BpRFFsXx.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
