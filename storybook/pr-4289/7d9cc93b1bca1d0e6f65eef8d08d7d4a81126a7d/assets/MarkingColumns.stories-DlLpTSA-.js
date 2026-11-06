import{f as p,j as e}from"./iframe-CYWKmKsr.js";import{O as i}from"./object-table-CYu743XN.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CZxqSgr4.js";import"./Table-B7FNh3h6.js";import"./index-BjhNRAAe.js";import"./Dialog-C0XHXV-E.js";import"./cross-DwHZ8wsx.js";import"./svgIconContainer-uvoYHEep.js";import"./useBaseUiId-CUYHUXgP.js";import"./InternalBackdrop-o-O31_oB.js";import"./composite-BLYmi_ZT.js";import"./index-BIzhtmMD.js";import"./index-CV_T3ZWx.js";import"./index-E5eoVw6A.js";import"./useEventCallback-CEYn9Z7G.js";import"./SkeletonBar-BmvrkymP.js";import"./LoadingCell-Dhlo7QCt.js";import"./ColumnConfigDialog-vj0c16i5.js";import"./DraggableList-DgsnRl74.js";import"./search-DEjEejFg.js";import"./Input-DhtTH-yg.js";import"./useControlled-Cmfvaful.js";import"./Button-Dsxz3sQ9.js";import"./small-cross-Bq0Rd3mQ.js";import"./ActionButton-D6ugCtzY.js";import"./Checkbox-BJCnezq_.js";import"./useValueChanged-CyYxoKaI.js";import"./CollapsiblePanel-CNqItG4o.js";import"./MultiColumnSortDialog-DkqN_a2d.js";import"./MenuTrigger-CJ_KappX.js";import"./CompositeItem-DES--d3v.js";import"./ToolbarRootContext-D-OgFfxn.js";import"./getDisabledMountTransitionStyles-jsr2iyKL.js";import"./getPseudoElementBounds-CdbUSWec.js";import"./chevron-down-CS2_34kJ.js";import"./index-BAMyMGOv.js";import"./error-D0LuxI0-.js";import"./BaseCbacBanner-B2BRkW3t.js";import"./makeExternalStore-BcIe4sBs.js";import"./Tooltip-d1W559-2.js";import"./isObject-BtxB2d-s.js";import"./debounce-FzhUUz5q.js";import"./useOsdkClient-KfXWcl-D.js";import"./tick-D7vMFMoW.js";import"./DropdownField-D7boWEU7.js";import"./isEqual-BMzS8efs.js";import"./_baseIsEqual-DJxltLfr.js";import"./withOsdkMetrics-C5qHzwaF.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const ir=["MarkingColumns"];export{r as MarkingColumns,ir as __namedExportsOrder,nr as default};
