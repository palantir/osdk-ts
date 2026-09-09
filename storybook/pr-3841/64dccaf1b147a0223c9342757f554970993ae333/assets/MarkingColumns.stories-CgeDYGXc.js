import{f as p,j as e}from"./iframe-00do0GFe.js";import{O as i}from"./object-table-DiR-FaNs.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BybtXQP0.js";import"./Table-BKn5_CcO.js";import"./index-BGd643c2.js";import"./Dialog-DZpgZl9y.js";import"./cross-nwDujSFV.js";import"./svgIconContainer-CFcIosnA.js";import"./useBaseUiId-C50NdykD.js";import"./InternalBackdrop-XKvPUnKv.js";import"./composite-CGwb3jqo.js";import"./index-DK-iGYU_.js";import"./index-ClkWJhJu.js";import"./index-BF61uIwD.js";import"./useEventCallback-CGFFFkW3.js";import"./SkeletonBar-DOhvYthq.js";import"./LoadingCell-BhVc_Ot-.js";import"./ColumnConfigDialog-CBPh_sEx.js";import"./DraggableList-BRKzpJry.js";import"./search-DAKi-R5m.js";import"./Input-CRsXFG3m.js";import"./useControlled-DE2hx_aJ.js";import"./Button-yWAqZOyg.js";import"./small-cross-kY3MxGtM.js";import"./ActionButton-CJdA5_XP.js";import"./Checkbox-Bjy1d07i.js";import"./useValueChanged-FfQ9ockF.js";import"./CollapsiblePanel-Dp6K32AY.js";import"./MultiColumnSortDialog-DGIUavBa.js";import"./MenuTrigger-lziekmwX.js";import"./CompositeItem-Ds6yjvWK.js";import"./ToolbarRootContext-Ck2kYzW4.js";import"./getDisabledMountTransitionStyles-B8mp5Bgl.js";import"./getPseudoElementBounds-DbGLAZdP.js";import"./chevron-down-CuokWr8C.js";import"./index-zNKGDfNB.js";import"./error-7ouMyDWT.js";import"./BaseCbacBanner-DvOVDYvy.js";import"./makeExternalStore-DtGkD75o.js";import"./Tooltip-9gQx4epj.js";import"./PopoverPopup-CgcJU5ml.js";import"./debounce-CxsjR9Qp.js";import"./useOsdkClient-0rxWFgg-.js";import"./tick-ClP-zKk3.js";import"./DropdownField-f3ouS_Ve.js";import"./isEqual-PkqQWSMC.js";import"./withOsdkMetrics-D58QOMrM.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
