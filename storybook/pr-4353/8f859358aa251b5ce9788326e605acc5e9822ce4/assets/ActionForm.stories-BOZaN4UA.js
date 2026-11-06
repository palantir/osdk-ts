import{j as t,g as n}from"./iframe-BS0M2hwP.js";import{A as r}from"./action-form-BIT9lrkp.js";import"./preload-helper-C0HkGCdU.js";import"./DropdownField-BSb2qsUX.js";import"./debounce-DAswCS-u.js";import"./useOsdkClient-BxlQ8pCq.js";import"./index-CPPTt-fG.js";import"./Input-C2-Y_50j.js";import"./useBaseUiId-77uYocVy.js";import"./useControlled-C2cZAxJ2.js";import"./index-C8CN-2yF.js";import"./index-CnbN8-s2.js";import"./PopoverPopup-DpckpHOT.js";import"./InternalBackdrop-hDcB9FVt.js";import"./composite-Dtpk2934.js";import"./index-Cd_-CKig.js";import"./getDisabledMountTransitionStyles-B7XR0ec5.js";import"./ToolbarRootContext-3PBXuwUh.js";import"./tick-B7id9DB4.js";import"./svgIconContainer-NUXlWCmy.js";import"./small-cross-DmunPPRL.js";import"./search-DzKPAVbq.js";import"./cross-DzypzeyC.js";import"./useValueChanged-DN5r-FMv.js";import"./getPseudoElementBounds-CEDHgaG-.js";import"./CompositeItem-BonvX_5i.js";import"./makeExternalStore-BO2WwozP.js";import"./BaseForm-CCM3ZYhF.js";import"./ActionButton-B-OGv12r.js";import"./Button-Ba1VM7tv.js";import"./SkeletonBar-D1-iix8R.js";import"./Tooltip-D4cxOObb.js";import"./info-sign-Dqc332qM.js";import"./chevron-up-D_DWaB0_.js";import"./chevron-down-OJJdZYcx.js";import"./useEventCallback-CgXNOiJD.js";import"./iconLoader-D0VWB7I3.js";import"./Switch-MX28hwRt.js";import"./CompositeRoot-BzvJBHno.js";import"./TimePicker-BdtYgaTB.js";import"./CollapsiblePanel-BCL9LE3M.js";import"./error-B91-GI1R.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DDHgU96d.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
