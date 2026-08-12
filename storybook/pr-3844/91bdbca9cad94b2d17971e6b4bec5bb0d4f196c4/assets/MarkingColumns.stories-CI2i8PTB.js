import{f as p,j as e}from"./iframe-D0keSMdE.js";import{O as i}from"./object-table-XRSPKeAk.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CgWhzYZU.js";import"./Table-_VO1h67p.js";import"./index-BlRIDWUP.js";import"./Dialog-DMYs324-.js";import"./cross-D5Zmda7x.js";import"./svgIconContainer-DmusCROY.js";import"./useBaseUiId-BfGVExes.js";import"./InternalBackdrop-Ia9GDuBc.js";import"./composite-DXaC0pY0.js";import"./index-BEB5yinp.js";import"./index-CPRvGqlK.js";import"./index-Bp5ZfHYq.js";import"./useEventCallback-ethJwitj.js";import"./SkeletonBar-Bc2rCGVb.js";import"./LoadingCell-BnKI4h5Y.js";import"./ColumnConfigDialog-BZ0hPi45.js";import"./DraggableList-ySBav17x.js";import"./search-ZZx32mw4.js";import"./Input-CaL2qwMz.js";import"./useControlled-yw1OI-ys.js";import"./isEqual-BCTdKTnZ.js";import"./isObject-Dx34Yu9O.js";import"./Button-BAAmeZ1M.js";import"./ActionButton-BVPOosnJ.js";import"./Checkbox-BK1SkvvN.js";import"./useValueChanged-DE0ePa0Z.js";import"./CollapsiblePanel-OhRGgboZ.js";import"./MultiColumnSortDialog-DuCRYSUE.js";import"./MenuTrigger-DfDEfgVd.js";import"./CompositeItem-Dcat_OLQ.js";import"./ToolbarRootContext-C7LF38_0.js";import"./getDisabledMountTransitionStyles-eeoeUg8o.js";import"./getPseudoElementBounds-Bs1xhkgH.js";import"./chevron-down-CqaC9B7A.js";import"./index-Ck9HyH0x.js";import"./error-Cs55j0k0.js";import"./BaseCbacBanner-Ctqp3Rus.js";import"./makeExternalStore-BtSZghYs.js";import"./Tooltip-CLb0k3vN.js";import"./PopoverPopup-kbgZB1b0.js";import"./toNumber-BYHut4ds.js";import"./useOsdkClient-B9r7mj-F.js";import"./tick-BbyLm6yV.js";import"./DropdownField-DO3Vqoyf.js";import"./withOsdkMetrics-CKalA1p6.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
