import{j as t,g as n}from"./iframe-tNZJ_yts.js";import{A as r}from"./action-form-D1eYBFpr.js";import"./preload-helper-Cs-zZmWk.js";import"./DropdownField-Bn2CvIkr.js";import"./debounce-DkKRnBI2.js";import"./useOsdkClient-BvPv-iE2.js";import"./index-GtjnSSRw.js";import"./Input-Bd3UykWw.js";import"./useBaseUiId-CfzXRAwD.js";import"./useControlled-BcyW94WW.js";import"./index-B8odcJPp.js";import"./index-BI50CR4r.js";import"./PopoverPopup-BsY6KTlb.js";import"./InternalBackdrop-jubCrN1B.js";import"./composite-BiyNCJEr.js";import"./index-9T6sqMOx.js";import"./getDisabledMountTransitionStyles-Wli5EKop.js";import"./ToolbarRootContext-Bgv8jhAk.js";import"./tick-B76tZgIx.js";import"./svgIconContainer-Cg9fo9q3.js";import"./small-cross-C9dMCIc4.js";import"./search-380Wfs82.js";import"./cross-ocv2rHpU.js";import"./useValueChanged-D4hqIs_l.js";import"./getPseudoElementBounds-B-GSVRKS.js";import"./CompositeItem-DK62Ja5z.js";import"./makeExternalStore-BGIMf0MS.js";import"./BaseForm-5W4shJ3T.js";import"./ActionButton-BB8RqWff.js";import"./Button-q3PQJ8YO.js";import"./SkeletonBar-sb4uPQ8b.js";import"./Tooltip-DwSNZTrr.js";import"./info-sign-DHp5apcl.js";import"./chevron-up-R7htkY2h.js";import"./chevron-down-B8TK3y2h.js";import"./useEventCallback-D6FBSsJz.js";import"./iconLoader-CP9d9IAR.js";import"./Switch-BdwG5l8m.js";import"./CompositeRoot-CFSn1tEq.js";import"./TimePicker-BEL06CTQ.js";import"./CollapsiblePanel-BvhEme4S.js";import"./error-DA-ZYNwq.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CxocJMpO.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
