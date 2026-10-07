import{j as t,g as n}from"./iframe-YBx9KFiE.js";import{A as r}from"./action-form-Bodo6-m1.js";import"./preload-helper-L6jHOpxv.js";import"./DropdownField-BmpXUboA.js";import"./debounce-B6PzjAEI.js";import"./useOsdkClient-DDS_VkM8.js";import"./index-CgtaO5QM.js";import"./Input-YDKKpO0z.js";import"./useBaseUiId-DlhJsTYI.js";import"./useControlled-CH_x4H3X.js";import"./index-B01ATWUm.js";import"./index-CLwqcVa2.js";import"./PopoverPopup-BLviECMH.js";import"./InternalBackdrop-D3r8VljM.js";import"./composite-BJEKXzZu.js";import"./index-B6YErJ_s.js";import"./getDisabledMountTransitionStyles-BSZVA_yI.js";import"./ToolbarRootContext-C-_578ut.js";import"./tick-o0shge2a.js";import"./svgIconContainer-D6iAjNhU.js";import"./small-cross-DiaL-97l.js";import"./search-CuFB4Okz.js";import"./cross-C3v-dhLA.js";import"./useValueChanged-BFvWMPKM.js";import"./getPseudoElementBounds-CLbdnn0u.js";import"./CompositeItem-C9bwnjwV.js";import"./makeExternalStore-Bp5v93FT.js";import"./BaseForm-JnI88wM1.js";import"./ActionButton-Dr3JNs2L.js";import"./Button-CIORHkhd.js";import"./SkeletonBar-SWKUARU8.js";import"./Tooltip-C_t3RzXT.js";import"./info-sign-BIepkw0P.js";import"./chevron-up-ChxRNWPt.js";import"./chevron-down-DfhavGPs.js";import"./useEventCallback-BF1IxF5d.js";import"./iconLoader-BvG1G1Jn.js";import"./Switch-CnoFnw-i.js";import"./CompositeRoot-CdaQtaZQ.js";import"./TimePicker-Aqh_g-o1.js";import"./CollapsiblePanel-BqouLg2L.js";import"./error-CI50fd9w.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BU_fIGZP.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
