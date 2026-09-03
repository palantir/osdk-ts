import{f as p,j as e}from"./iframe-CVgWx_mk.js";import{O as i}from"./object-table-F8273WKJ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CFfBa7BD.js";import"./Table-ee8B848t.js";import"./index-KhqTHjvK.js";import"./Dialog-DbMkWdGC.js";import"./cross-Ch2oGVZP.js";import"./svgIconContainer-MI5luthc.js";import"./useBaseUiId-B0ovho4b.js";import"./InternalBackdrop-w-gmvkMd.js";import"./composite-mrQGTihx.js";import"./index-Dj_0AH5M.js";import"./index-kHlCzxdB.js";import"./index-xvBWe_nZ.js";import"./useEventCallback-KGEKy1Kp.js";import"./SkeletonBar-DSJVYfMY.js";import"./LoadingCell-C4Fh_PtS.js";import"./ColumnConfigDialog-rdQ95Jra.js";import"./DraggableList-N7PPscOJ.js";import"./search-BdiQZg80.js";import"./Input-B_ebmuiE.js";import"./useControlled-CmMjx2zB.js";import"./Button-BdWA5AOv.js";import"./small-cross-Ct--V4I5.js";import"./ActionButton-CMmqUJoP.js";import"./Checkbox-DUqXmOBs.js";import"./useValueChanged-BbKX3ggH.js";import"./CollapsiblePanel-CjrlksH3.js";import"./MultiColumnSortDialog-CB3-aHjQ.js";import"./MenuTrigger-BqO-RbZe.js";import"./CompositeItem-CCjIa2t2.js";import"./ToolbarRootContext-CaqtX5pJ.js";import"./getDisabledMountTransitionStyles-BU3lkCAL.js";import"./getPseudoElementBounds-BHTi51r7.js";import"./chevron-down-DTQ9C7Jw.js";import"./index-Bo_a2b3D.js";import"./error-aoO-9vvY.js";import"./BaseCbacBanner-dCyQbW6T.js";import"./makeExternalStore-Dyx7TWX2.js";import"./Tooltip-DP4ZeHkc.js";import"./PopoverPopup-X41W4tQB.js";import"./debounce-BtFrK_-r.js";import"./useOsdkClient-9IMUcDL7.js";import"./tick-BnV8UH-j.js";import"./DropdownField-BXwDMn-1.js";import"./isEqual-Csoq5Do4.js";import"./withOsdkMetrics-DoeckjWh.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
