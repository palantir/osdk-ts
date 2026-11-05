import{f as p,j as e}from"./iframe-Cvj3FNL2.js";import{O as i}from"./object-table-C2x3aq5k.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CetzPUwQ.js";import"./Table-CZPtcDN5.js";import"./index-DH-N1YV0.js";import"./Dialog-B5VMx6ZD.js";import"./cross-BgxfwZhF.js";import"./svgIconContainer-2e47raBd.js";import"./useBaseUiId-D4o_acv_.js";import"./InternalBackdrop-CATBYZKD.js";import"./composite-BeeOPu6q.js";import"./index-B2hgVlCo.js";import"./index-DV2RJSrY.js";import"./index-uxZgvSM2.js";import"./useEventCallback-Cqy7o6tW.js";import"./SkeletonBar-262DGPMI.js";import"./LoadingCell-lShAyMqT.js";import"./ColumnConfigDialog-k9C8QYRP.js";import"./DraggableList-Dwjgc3m4.js";import"./search-DUdBrB5_.js";import"./Input-RAe99RCN.js";import"./useControlled-0y2fy9QQ.js";import"./Button-BZDb9IOS.js";import"./small-cross-Cn1GfmeS.js";import"./ActionButton-CFdQScEP.js";import"./Checkbox-BhWtUvjh.js";import"./useValueChanged-D7CgbNdw.js";import"./CollapsiblePanel-BiKanzHS.js";import"./MultiColumnSortDialog-C_dEh5p8.js";import"./MenuTrigger-D8SwBsvq.js";import"./CompositeItem-BgbI3PXY.js";import"./ToolbarRootContext-C86500_m.js";import"./getDisabledMountTransitionStyles-8IEwLVYU.js";import"./getPseudoElementBounds-ebP8vgdz.js";import"./chevron-down-BLip4j8E.js";import"./index-BMbRZnNU.js";import"./error-QqbcWqTY.js";import"./BaseCbacBanner-B5JeFXpe.js";import"./makeExternalStore-Crm20JST.js";import"./Tooltip-wW5BdC1A.js";import"./isObject-FFGALRWz.js";import"./debounce-Yet_dmWM.js";import"./useOsdkClient-BassWPUJ.js";import"./tick-D3nHgBg9.js";import"./DropdownField-_3D3jspy.js";import"./isEqual-uly-B5jb.js";import"./_baseIsEqual-uaL5sXdC.js";import"./withOsdkMetrics-ChCG3pJN.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
