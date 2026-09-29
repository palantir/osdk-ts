import{f as p,j as e}from"./iframe-CrY1A4wu.js";import{O as i}from"./object-table-8BsQhbHw.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BFzS6-eq.js";import"./Table-Jn9T8W_D.js";import"./index-BbE0G0zt.js";import"./Dialog-laDd6Dzp.js";import"./cross-CzBl0tbg.js";import"./svgIconContainer-B3_v06mI.js";import"./useBaseUiId-Cs8gIZmf.js";import"./InternalBackdrop-CNimJ3h4.js";import"./composite-AFOTQ2-F.js";import"./index-C3rJi8nM.js";import"./index-DV4D4tWk.js";import"./index-Dyb_oLLU.js";import"./useEventCallback-DaHbnggt.js";import"./SkeletonBar-DUpRMQqw.js";import"./LoadingCell-C8s-AWEb.js";import"./ColumnConfigDialog-_Ze5OvIi.js";import"./DraggableList-BA66imvX.js";import"./search-DZE4oD9r.js";import"./Input-DUtiftPz.js";import"./useControlled-BE-RLK2-.js";import"./Button-C9zZFhV6.js";import"./small-cross-B7ArTsa6.js";import"./ActionButton-BJz-dQ6B.js";import"./Checkbox-CiVl0Z7T.js";import"./useValueChanged-CKQn1SdE.js";import"./CollapsiblePanel-BO93Qs_h.js";import"./MultiColumnSortDialog-CwMfjrxh.js";import"./MenuTrigger-BybTnms_.js";import"./CompositeItem-51mDofen.js";import"./ToolbarRootContext-Coy-eXOe.js";import"./getDisabledMountTransitionStyles-B8Y0GomG.js";import"./getPseudoElementBounds-umYg5cKN.js";import"./chevron-down-Bu2NJksL.js";import"./index-CAMlkz_c.js";import"./error-CvnsbzcB.js";import"./BaseCbacBanner-D3Zdpqh2.js";import"./makeExternalStore-tkECEc_3.js";import"./Tooltip-Cijp_KA5.js";import"./PopoverPopup-CRSCUEqR.js";import"./debounce-D0SY6i1l.js";import"./useOsdkClient-EszrIw0T.js";import"./tick-hjmwYU-4.js";import"./DropdownField-r7GV--Zz.js";import"./isEqual-DCNAbXqK.js";import"./withOsdkMetrics-CHUgiBtf.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
  { locator: { type: "property", id: "fullName" } },
  { locator: { type: "property", id: "department" } },
  // MANDATORY marking — rendered as one banner per marking
  { locator: { type: "property", id: "classificationMarking" } },
  // CBAC marking — rendered with CbacBanner
  { locator: { type: "property", id: "clearanceMarking" } },
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />`}}},render:a=>e.jsx("div",{style:{height:480},children:e.jsx(i,{...a})})};var t,o,n;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: [{
      locator: {
        type: "property",
        id: "fullName"
      }
    }, {
      locator: {
        type: "property",
        id: "department"
      }
    }, {
      locator: {
        type: "property",
        id: "classificationMarking"
      }
    }, {
      locator: {
        type: "property",
        id: "clearanceMarking"
      }
    }]
  },
  parameters: {
    docs: {
      source: {
        code: \`const columnDefinitions = [
  { locator: { type: "property", id: "fullName" } },
  { locator: { type: "property", id: "department" } },
  // MANDATORY marking — rendered as one banner per marking
  { locator: { type: "property", id: "classificationMarking" } },
  // CBAC marking — rendered with CbacBanner
  { locator: { type: "property", id: "clearanceMarking" } },
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />\`
      }
    }
  },
  render: args => <div style={{
    height: 480
  }}>
      <ObjectTable {...args} />
    </div>
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const nr=["MarkingColumns"];export{r as MarkingColumns,nr as __namedExportsOrder,or as default};
