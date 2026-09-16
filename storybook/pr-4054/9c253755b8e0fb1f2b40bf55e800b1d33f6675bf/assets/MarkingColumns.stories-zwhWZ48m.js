import{f as p,j as e}from"./iframe-EpH4H8Ct.js";import{O as i}from"./object-table-DWYlyXh4.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-AInD9Bcq.js";import"./Table-COuN_wlR.js";import"./index-6wkuS9kk.js";import"./Dialog-1NHwSkrj.js";import"./cross-Bw1kg8R1.js";import"./svgIconContainer-BEULmRQq.js";import"./useBaseUiId-B53jZkpD.js";import"./InternalBackdrop-BVHPaONx.js";import"./composite-CXo_dnRM.js";import"./index-Dy-Nc8BB.js";import"./index-5GEbdtwp.js";import"./index-BQgIKsZn.js";import"./useEventCallback-DNP1HUKE.js";import"./SkeletonBar-Cwoxu6yL.js";import"./LoadingCell-CfUzZulW.js";import"./ColumnConfigDialog-CyRYuEAz.js";import"./DraggableList-CXgZh0ko.js";import"./search-Bdehc4Bq.js";import"./Input-DNhi3I7C.js";import"./useControlled-D6NLbg_O.js";import"./Button-BXHz7yPF.js";import"./small-cross--Yq5_IWh.js";import"./ActionButton-BG7PpZze.js";import"./Checkbox-N8sASeun.js";import"./useValueChanged-CdM5uEF8.js";import"./CollapsiblePanel-lqnKFpJk.js";import"./MultiColumnSortDialog-DLqVf03q.js";import"./MenuTrigger-CX9dMlco.js";import"./CompositeItem-DzD_vpNX.js";import"./ToolbarRootContext-BhZagEjX.js";import"./getDisabledMountTransitionStyles-Vp1URACM.js";import"./getPseudoElementBounds-C0OS-1z6.js";import"./chevron-down-B3Hf5n4h.js";import"./index-Dva8VjAa.js";import"./error-CwB_EWnJ.js";import"./BaseCbacBanner-CPNKIQw_.js";import"./makeExternalStore-BOo8e2Do.js";import"./Tooltip-DZvrsB4L.js";import"./PopoverPopup-AU4um7RM.js";import"./debounce-PtscUFWK.js";import"./useOsdkClient-Df-lYPH1.js";import"./tick-BpAUUczH.js";import"./DropdownField-DQrZT-V6.js";import"./isEqual-DQIzKkQH.js";import"./withOsdkMetrics-Cj7SQvcU.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
