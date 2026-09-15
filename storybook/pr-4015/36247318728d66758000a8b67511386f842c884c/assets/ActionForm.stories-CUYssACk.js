import{j as t,g as n}from"./iframe-Y1CUkKP1.js";import{A as r}from"./action-form-djIHFDl0.js";import"./preload-helper-8Wffe73s.js";import"./DropdownField-CeKz5eyy.js";import"./debounce-DaCmMChm.js";import"./useOsdkClient-D-yv75yo.js";import"./index-BgIb3D7l.js";import"./Input-Db9jSpBp.js";import"./useBaseUiId-AScn4b_2.js";import"./useControlled-21Syoeuq.js";import"./index-iBVyzjTo.js";import"./index-Bp2ZqYOt.js";import"./PopoverPopup-C3sIFE_l.js";import"./InternalBackdrop-BL3OC3Mi.js";import"./composite-BF49Bsji.js";import"./index-5n049uw8.js";import"./getDisabledMountTransitionStyles-DoO-DKYl.js";import"./ToolbarRootContext-MbtwPZ1o.js";import"./tick-1VZvyctz.js";import"./svgIconContainer-zBluTTvF.js";import"./small-cross-CpXS7-E7.js";import"./search-kvTlC8VP.js";import"./cross-C6CQ-Bph.js";import"./useValueChanged-tlFrKVn1.js";import"./getPseudoElementBounds-BBCNTbus.js";import"./CompositeItem-Dj9wX2bL.js";import"./makeExternalStore-BeEve9Lc.js";import"./BaseForm-CcxZugD6.js";import"./ActionButton-C9oPSSlN.js";import"./Button-DxN7lWSP.js";import"./SkeletonBar-DGyBVuc7.js";import"./Tooltip-DFQq_M9K.js";import"./info-sign-mFQ4VtXT.js";import"./chevron-up-C1kyhv0K.js";import"./chevron-down-AzVM-11H.js";import"./useEventCallback-563WN3on.js";import"./iconLoader-DeiCQVUW.js";import"./CompositeRoot-ByAMmmOq.js";import"./Switch-CZgBANiz.js";import"./TimePicker-BdU2ZGxT.js";import"./CollapsiblePanel-Bb6ZrGRp.js";import"./error-CxOGSZqi.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-B3ENf8sD.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
