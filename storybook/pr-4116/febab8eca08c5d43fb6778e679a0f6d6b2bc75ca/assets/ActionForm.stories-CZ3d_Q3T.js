import{j as t,g as n}from"./iframe-CAlFL39P.js";import{A as r}from"./action-form-DFD2GHZo.js";import"./preload-helper-Di8UnZgY.js";import"./DropdownField-DbH7bzp-.js";import"./debounce-sXHlCwpy.js";import"./useOsdkClient-BWqfO9Ex.js";import"./index-Btel0vm8.js";import"./Input-BBwNdl2L.js";import"./useBaseUiId-DZP7PN-D.js";import"./useControlled-CagAHQp0.js";import"./index-CFlCfQcw.js";import"./index-BkqKFdv7.js";import"./PopoverPopup-CDqtgdJD.js";import"./InternalBackdrop-CJFWdMDJ.js";import"./composite-Do6HvbOs.js";import"./index-vkk_5yOj.js";import"./getDisabledMountTransitionStyles-C65SjH8s.js";import"./ToolbarRootContext-NYYVBOfJ.js";import"./tick-C2A5bpz7.js";import"./svgIconContainer-B3bjsS48.js";import"./small-cross-BLQbHCb6.js";import"./search-B49Txj1R.js";import"./cross-C-7oEPIv.js";import"./useValueChanged-BMf8iwn2.js";import"./getPseudoElementBounds-DAJFGzrR.js";import"./CompositeItem-BD07_lL8.js";import"./makeExternalStore-H3EygE5L.js";import"./BaseForm-B3GpoLzI.js";import"./ActionButton-DjRyKh7y.js";import"./Button-C360afnZ.js";import"./SkeletonBar-D07kBYWy.js";import"./Tooltip-DivaijH4.js";import"./info-sign-djOB6quT.js";import"./chevron-up-BOo88cIL.js";import"./chevron-down-C4L1Vt1n.js";import"./useEventCallback-DuUtYSXt.js";import"./iconLoader-BewQfjX5.js";import"./Switch-T_kODFYS.js";import"./CompositeRoot-meFPhZU1.js";import"./TimePicker-BerP8HHI.js";import"./CollapsiblePanel-EQ6Qu2qu.js";import"./error-DNzjg8ag.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-D_LiGSK5.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
