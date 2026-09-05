import{j as t,g as n}from"./iframe-B0aax5t4.js";import{A as r}from"./action-form-BLyx7ZA8.js";import"./preload-helper-B_i0Odcu.js";import"./DropdownField-ELR4mU-J.js";import"./debounce-DhQIUNPS.js";import"./useOsdkClient-Bk4AmunN.js";import"./index-CA_7V0ln.js";import"./Input-DuNf2WGN.js";import"./useBaseUiId-C9EFBUqt.js";import"./useControlled-Cjro_C_L.js";import"./index-FaCZN02u.js";import"./index-BOMUn4js.js";import"./PopoverPopup-Dawl7HJi.js";import"./InternalBackdrop-YHaUWllu.js";import"./composite-Cu5vApVf.js";import"./index-Crxx3EiI.js";import"./getDisabledMountTransitionStyles-DopRS8uM.js";import"./ToolbarRootContext-D_WwjLAe.js";import"./tick-CGBQp0dn.js";import"./svgIconContainer-DSeQyMEd.js";import"./small-cross-BXeSo4Fh.js";import"./search-7EK0E19p.js";import"./cross-C3BbzJF1.js";import"./useValueChanged-DrFFTdCP.js";import"./getPseudoElementBounds-CxIE0dVy.js";import"./CompositeItem-DhB66LbS.js";import"./makeExternalStore-C8fdPEkr.js";import"./BaseForm-BTwJJRLp.js";import"./ActionButton-B3wz3E9S.js";import"./Button-DcLOyqPK.js";import"./SkeletonBar-DvtukVW0.js";import"./Tooltip-D1IoO4LU.js";import"./info-sign-DDghj-3G.js";import"./chevron-up-Bk5dNefX.js";import"./chevron-down-59Pc7DyK.js";import"./useEventCallback-81QtWnOW.js";import"./iconLoader-CAsPXTYm.js";import"./CompositeRoot-CEtJtRCB.js";import"./Switch-Dyr-Vn43.js";import"./TimePicker-Bixu9IYK.js";import"./CollapsiblePanel-BouT-1X2.js";import"./error-DSukmTRO.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BMYYjUQJ.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
