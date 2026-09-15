import{j as t,g as n}from"./iframe-B0400XAV.js";import{A as r}from"./action-form-CYoiK84U.js";import"./preload-helper-Bn7pmSUb.js";import"./DropdownField-CdBamLDl.js";import"./debounce-D1VOMgMZ.js";import"./useOsdkClient-J40VcFnd.js";import"./index-DZ4vxiLW.js";import"./Input-BRGSYo1e.js";import"./useBaseUiId-B9k80gJ8.js";import"./useControlled-DjWHSFCM.js";import"./index-C_9Kpq7B.js";import"./index-2o5KGJI0.js";import"./PopoverPopup-1szLhiqM.js";import"./InternalBackdrop-DmO0kWzU.js";import"./composite-BH1fXSiW.js";import"./index-Ej3jcQKp.js";import"./getDisabledMountTransitionStyles-CGuB9paQ.js";import"./ToolbarRootContext--iPu1vj7.js";import"./tick-DHoO3CIv.js";import"./svgIconContainer-JRfXSFeh.js";import"./small-cross-ESv-X2fK.js";import"./search-BeppLusu.js";import"./cross-DQqnupWk.js";import"./useValueChanged-BsB5HN0-.js";import"./getPseudoElementBounds-DLMLBgRr.js";import"./CompositeItem-CoJRCpBo.js";import"./makeExternalStore-B2IR-Z_q.js";import"./BaseForm-RRNx3sCO.js";import"./ActionButton-BrvBwGrb.js";import"./Button-YA4JYpq1.js";import"./SkeletonBar-DJor0eXp.js";import"./Tooltip-0d-ScaQ8.js";import"./info-sign-bTOgxgvT.js";import"./chevron-up-7Ij6yN3a.js";import"./chevron-down-CEDiPbvm.js";import"./useEventCallback-JQnAZWI3.js";import"./iconLoader-q-OzNPBz.js";import"./CompositeRoot-e82S1FUk.js";import"./Switch-CeUkbmyU.js";import"./TimePicker-DCIXA9tR.js";import"./CollapsiblePanel-B3Zzdgcc.js";import"./error-BZwgl63S.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CZrqSehW.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
