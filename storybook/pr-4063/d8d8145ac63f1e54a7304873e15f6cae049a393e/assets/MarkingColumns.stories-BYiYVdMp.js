import{f as p,j as e}from"./iframe-Bhffutgo.js";import{O as i}from"./object-table-C15_AY3f.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CijB9Qe5.js";import"./Table-BReufemI.js";import"./index-Cy8HD2CD.js";import"./Dialog-BZ52wkJR.js";import"./cross-B-UQ3Jxc.js";import"./svgIconContainer-Cic0cef0.js";import"./useBaseUiId--v1O0VA1.js";import"./InternalBackdrop-BkF4CyJK.js";import"./composite-DtoUIyyt.js";import"./index-JMjhMIpk.js";import"./index-DRActumb.js";import"./index-D-zTWlPE.js";import"./useEventCallback-Bd38vKKP.js";import"./SkeletonBar-ZDVpKAdj.js";import"./LoadingCell-9Ct1dbft.js";import"./ColumnConfigDialog-DarnXWK2.js";import"./DraggableList-Cr7FMIsr.js";import"./search-IXw9ma12.js";import"./Input-OY1OZr6O.js";import"./useControlled-B1I8CTdR.js";import"./Button-_SLvpwek.js";import"./small-cross-DELXwmlb.js";import"./ActionButton-BsZDi0RP.js";import"./Checkbox-DWDBNL5s.js";import"./useValueChanged-CXt43HWH.js";import"./CollapsiblePanel-BdEsZMnJ.js";import"./MultiColumnSortDialog-BT0SOBVp.js";import"./MenuTrigger-SZzKg6Lr.js";import"./CompositeItem-BZDrB-0o.js";import"./ToolbarRootContext-CmYX2cG0.js";import"./getDisabledMountTransitionStyles-Bh7kTFsz.js";import"./getPseudoElementBounds-0bpQxymW.js";import"./chevron-down-BcqETG9N.js";import"./index-srbhg0-l.js";import"./error-IjGqGtmT.js";import"./BaseCbacBanner-B8Ba5V9l.js";import"./makeExternalStore-NyFQcR5i.js";import"./Tooltip-C-_NZOL1.js";import"./PopoverPopup-BVUMi5tg.js";import"./debounce-SIEms-6v.js";import"./useOsdkClient-25Kii0Nm.js";import"./tick-Cb1TF6t_.js";import"./DropdownField-CuxPlTct.js";import"./isEqual-D8xq866P.js";import"./withOsdkMetrics-DAy7jDWc.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
