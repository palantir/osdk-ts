import{f as p,j as e}from"./iframe-ZcCW6_Wz.js";import{O as i}from"./object-table-DSC3APB0.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BB_y-aog.js";import"./Table-bPyT45_u.js";import"./index-DyeMh41W.js";import"./Dialog-Bk-FWIZW.js";import"./cross-wMIvDcbp.js";import"./svgIconContainer-0fT5nrJe.js";import"./useBaseUiId-BpaZn96w.js";import"./InternalBackdrop-CY-OiTbx.js";import"./composite-foIRj0KC.js";import"./index-CBeU0MC7.js";import"./index-T8wYhAz8.js";import"./index-DlkuYEj_.js";import"./useEventCallback-D4DJY73l.js";import"./SkeletonBar-Cg2dgNGY.js";import"./LoadingCell-B5SIM5LH.js";import"./ColumnConfigDialog-UzbFEaKV.js";import"./DraggableList-BadaIhe-.js";import"./search-Bc3gx_gy.js";import"./Input-Dpme7joy.js";import"./useControlled-DiaTlfr8.js";import"./Button-Cm8wb-cw.js";import"./small-cross-BbnAuCAy.js";import"./ActionButton-ElN4wuMZ.js";import"./Checkbox-Bk41vIIz.js";import"./useValueChanged-CuPWfF1v.js";import"./CollapsiblePanel-DMPMYfth.js";import"./MultiColumnSortDialog-CuBwNQkn.js";import"./MenuTrigger-iAuxsFAd.js";import"./CompositeItem-B_VWcRPv.js";import"./ToolbarRootContext-BqQcS-8Q.js";import"./getDisabledMountTransitionStyles-BCKcQTMv.js";import"./getPseudoElementBounds-DDkxky54.js";import"./chevron-down-BAQtbrwT.js";import"./index-BJaF-zGC.js";import"./error-DOcHLiil.js";import"./BaseCbacBanner-CQrvMZnF.js";import"./makeExternalStore-BySX7A9V.js";import"./Tooltip-1LklJdbb.js";import"./PopoverPopup-DFELR-u8.js";import"./debounce-CXdCzSka.js";import"./useOsdkClient-CchBrSdw.js";import"./tick-BVQ9cMuo.js";import"./DropdownField-DXdhalb8.js";import"./isEqual-BsjTcvbt.js";import"./withOsdkMetrics-C-7rZzkE.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
