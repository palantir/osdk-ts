import{j as t,g as n}from"./iframe-ByGxztuR.js";import{A as r}from"./action-form-CyiLWOlg.js";import"./preload-helper-Dp1pzeXC.js";import"./useDebouncedCallback-CiTG6wRJ.js";import"./useEventCallback-jNWNQjbn.js";import"./isEqual-DF2C28I7.js";import"./_baseIsEqual-Ck41N75x.js";import"./PopoverPopup-CaNVB3SN.js";import"./InternalBackdrop-DgqbQRDj.js";import"./useBaseUiId-CwX2o4Wt.js";import"./composite-DJoo4D6V.js";import"./index-YFgfuOe9.js";import"./index-Das4h1Wa.js";import"./index-CkNTyrKZ.js";import"./getDisabledMountTransitionStyles-C7v_y2WO.js";import"./ToolbarRootContext-CvTQ741x.js";import"./Select-CvqHSLxV.js";import"./useOsdkClient-CVOauZ1U.js";import"./index-C_NmzukE.js";import"./Input-CuOC6fkL.js";import"./useControlled-BeV8RDqE.js";import"./tick-BQpeUazS.js";import"./svgIconContainer-GMqm2qsj.js";import"./small-cross-BEW2vdRK.js";import"./search-CzmiRz1J.js";import"./cross-EOhwFFJB.js";import"./useValueChanged-Z8Bv9K84.js";import"./getPseudoElementBounds-TA-1Gcka.js";import"./CompositeItem-CzWKxF8z.js";import"./DropdownField-Ce4MJtTK.js";import"./makeExternalStore-BO8GdXCg.js";import"./BaseForm-P9HjvBb_.js";import"./ActionButton-BlTtKw0A.js";import"./Button-BOr-KM70.js";import"./SkeletonBar-D-CJ2Xd8.js";import"./Tooltip-DIrk5jKg.js";import"./info-sign-Dkx56wjq.js";import"./chevron-up-BMyGvsIb.js";import"./chevron-down-Bod3Eu0k.js";import"./iconLoader-Fnwgo1Nz.js";import"./Switch-CfQpzx82.js";import"./CompositeRoot-B-xRTWa6.js";import"./TimePicker-B-5Oz37N.js";import"./CollapsiblePanel-DhK36AQZ.js";import"./error-DHSjI_y4.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CzSXt9I1.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const oe={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const ae=["Default"];export{e as Default,ae as __namedExportsOrder,oe as default};
