import{f as p,j as e}from"./iframe-T8-5O5a7.js";import{O as i}from"./object-table-Cy8zQr_Q.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BmpZImld.js";import"./Table-Cx3ow3Xr.js";import"./index-Bm1P3JuR.js";import"./Dialog-D2DawJKv.js";import"./cross-B2Ff3nzN.js";import"./svgIconContainer-DTQIUstT.js";import"./useBaseUiId-CGT1eYgE.js";import"./InternalBackdrop-CVQt1P3k.js";import"./composite-3G0XmPl8.js";import"./index-CTvYrdTG.js";import"./index-BqFbX9xD.js";import"./index-4D7iDRWN.js";import"./useEventCallback-DcrwhGVh.js";import"./SkeletonBar-aRGi46qm.js";import"./LoadingCell-BCWG_WSo.js";import"./ColumnConfigDialog-9oaVEdY0.js";import"./DraggableList-ClGw9imn.js";import"./search-gRWhsC7a.js";import"./Input-CrYGG830.js";import"./useControlled-DiVYHBT1.js";import"./isEqual-CYj9ZY_T.js";import"./isObject-D4EU1_k1.js";import"./Button-C--AVR5N.js";import"./ActionButton-CZuqOpJr.js";import"./Checkbox-q3zPQoox.js";import"./useValueChanged-B48ahuZx.js";import"./CollapsiblePanel-D6ekH2vN.js";import"./MultiColumnSortDialog-lIFw4Vg5.js";import"./MenuTrigger-Cn9_5pkM.js";import"./CompositeItem-CxOclKWd.js";import"./ToolbarRootContext-D4ao5sDu.js";import"./getDisabledMountTransitionStyles-B3GPhteV.js";import"./getPseudoElementBounds-CZWI-fTU.js";import"./chevron-down-CtzoxwNt.js";import"./index-CtKLFWsO.js";import"./error-C6IIEk7L.js";import"./BaseCbacBanner-D_gnVjwt.js";import"./makeExternalStore-V4YAFWjd.js";import"./Tooltip-Cq4Hmx15.js";import"./PopoverPopup-B5NaVdq-.js";import"./toNumber-BkQhAqa5.js";import"./useOsdkClient-DEG6jAJY.js";import"./tick-BhtMxWAI.js";import"./DropdownField-CXEt8CUB.js";import"./withOsdkMetrics-CswUt8H_.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
