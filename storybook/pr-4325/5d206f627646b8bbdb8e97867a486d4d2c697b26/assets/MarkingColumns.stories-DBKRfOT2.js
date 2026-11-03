import{f as p,j as e}from"./iframe-D4r_-dEc.js";import{O as i}from"./object-table-A7euv14f.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-6ZtcGGS6.js";import"./Table-XWns758I.js";import"./index-7caLYRtX.js";import"./Dialog-Dc1LT3hO.js";import"./cross-D7UvadIv.js";import"./svgIconContainer-Dh_c1Bbk.js";import"./useBaseUiId-Di53fTVw.js";import"./InternalBackdrop-CZm9G_S4.js";import"./composite-DCTx9hyK.js";import"./index-QrOM1WuB.js";import"./index-BMA4s8ZI.js";import"./index-CoFQrcih.js";import"./useEventCallback-DqALnZfq.js";import"./SkeletonBar-CvzkLxwM.js";import"./LoadingCell-CSLcXk57.js";import"./ColumnConfigDialog-B8OLPnjr.js";import"./DraggableList-BDTeK6ae.js";import"./search-DXq3JDJP.js";import"./Input-B2HDaQON.js";import"./useControlled-BmrimB4V.js";import"./Button-Bk2BCIeA.js";import"./small-cross-BkHUlaQn.js";import"./ActionButton-DP6StPqT.js";import"./Checkbox-CPRtZsV2.js";import"./useValueChanged-C-kvsFRL.js";import"./CollapsiblePanel-yRKwIWIq.js";import"./MultiColumnSortDialog-F4ahE3SX.js";import"./MenuTrigger-BlAB2oa9.js";import"./CompositeItem-Dyw9HZNd.js";import"./ToolbarRootContext-nt_JLtrz.js";import"./getDisabledMountTransitionStyles-BiBMpt_n.js";import"./getPseudoElementBounds-CEVXpGUD.js";import"./chevron-down-ToRQzCeL.js";import"./index-_HJbTBBE.js";import"./error-1vTQ2DTJ.js";import"./BaseCbacBanner-Cxz-7EBN.js";import"./makeExternalStore-6c6hwxKy.js";import"./Tooltip-C_exduk2.js";import"./PopoverPopup-fn5YEEDm.js";import"./debounce-DwQf9jej.js";import"./useOsdkClient-bldReknQ.js";import"./tick-D-AaSPeq.js";import"./DropdownField-H8Z-0aRQ.js";import"./isEqual-Ct3XBS6E.js";import"./withOsdkMetrics-CYIlN546.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
