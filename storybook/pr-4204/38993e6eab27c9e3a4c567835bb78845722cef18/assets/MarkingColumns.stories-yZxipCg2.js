import{f as p,j as e}from"./iframe-BPD7a-d3.js";import{O as i}from"./object-table-D-tCC7x0.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BMJg2fth.js";import"./Table-X6gXC-rQ.js";import"./index-DWlOJTtZ.js";import"./Dialog-zxTOVbxW.js";import"./cross-BQBN2sBj.js";import"./svgIconContainer-9WeLc1W4.js";import"./useBaseUiId-B7NeBfTl.js";import"./InternalBackdrop-BqFiGGtG.js";import"./composite-2r4XaYyI.js";import"./index-BFdep0Pu.js";import"./index-CPwIgA5j.js";import"./index-Dc2JolBW.js";import"./useEventCallback-BLd4X65y.js";import"./SkeletonBar-DXu4hwWS.js";import"./LoadingCell-D1PldjSx.js";import"./ColumnConfigDialog-EzXdePxC.js";import"./DraggableList-Km3Db3w6.js";import"./search-DDY46Bsb.js";import"./Input-BsWtOrbL.js";import"./useControlled-DcoiTjSg.js";import"./Button-J8RQxXRy.js";import"./small-cross-DKMapFDw.js";import"./ActionButton-DQ15zJBD.js";import"./Checkbox-DKjVjgpk.js";import"./useValueChanged-CW-dzw8w.js";import"./CollapsiblePanel-DZA1hbiz.js";import"./MultiColumnSortDialog-DaToBdED.js";import"./MenuTrigger-C0rTEkZ4.js";import"./CompositeItem-CQbGZkro.js";import"./ToolbarRootContext-CvDFIQMo.js";import"./getDisabledMountTransitionStyles-GoNHsGRT.js";import"./getPseudoElementBounds-wmkfIGoM.js";import"./chevron-down-TG9TSSoU.js";import"./index-BUYfos0b.js";import"./error-DxTVaEkU.js";import"./BaseCbacBanner-CCV7S7vH.js";import"./makeExternalStore-BXsO-6Dt.js";import"./Tooltip-y6dqO2XM.js";import"./PopoverPopup-DLgHHGX6.js";import"./debounce-D2ZCRJTn.js";import"./useOsdkClient-jf6lJmqS.js";import"./tick-0nx9bnwa.js";import"./DropdownField-Dpdo-uvo.js";import"./isEqual-DKT0xxpO.js";import"./withOsdkMetrics-zev-jqP5.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
