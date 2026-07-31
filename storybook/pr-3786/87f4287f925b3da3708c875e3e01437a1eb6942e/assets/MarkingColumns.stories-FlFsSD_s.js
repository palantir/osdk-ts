import{f as p,j as e}from"./iframe-DDyklOqc.js";import{O as i}from"./object-table-plfjXVhz.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-zGI7Yyr8.js";import"./Table-CHP-tiia.js";import"./index-Cq1GlceI.js";import"./Dialog-CYMrzqcv.js";import"./cross-cqgsxvxK.js";import"./svgIconContainer-DYYBsVyS.js";import"./useBaseUiId-CL2qao4v.js";import"./InternalBackdrop-Do63knsO.js";import"./composite-DjHmc_aQ.js";import"./index-Hm27E7QB.js";import"./index-NsWDHRkU.js";import"./index-DNqPsVHJ.js";import"./useEventCallback-CiM_Yr5w.js";import"./SkeletonBar-DcAh4PoS.js";import"./LoadingCell-Bi8NE8uS.js";import"./ColumnConfigDialog-BPb1WDDZ.js";import"./DraggableList-DxfKbIWf.js";import"./search-C4C3nIjd.js";import"./Input-D2DBw9lp.js";import"./useControlled-cTNIA0eo.js";import"./isEqual-BVfWVCyt.js";import"./isObject-DBoXRpxl.js";import"./Button-LADwC7On.js";import"./ActionButton-BrPzztGK.js";import"./Checkbox-BFbJNOg7.js";import"./useValueChanged-9WP7sBg-.js";import"./CollapsiblePanel-jsS8Tk9z.js";import"./MultiColumnSortDialog-BWVf6mZp.js";import"./MenuTrigger-RBmJHBav.js";import"./CompositeItem-5eebd8XY.js";import"./ToolbarRootContext-D_6EPlUH.js";import"./getDisabledMountTransitionStyles-Ccd2Ddlb.js";import"./getPseudoElementBounds-CaNVnY9n.js";import"./chevron-down-1ywypSY9.js";import"./index-BCJ7CEmI.js";import"./error-LXH3sKTV.js";import"./BaseCbacBanner-37-ItXHV.js";import"./makeExternalStore-CLRDsfbG.js";import"./Tooltip-CvX6YdpZ.js";import"./PopoverPopup-DoVtkP7T.js";import"./toNumber-Bru-kF0D.js";import"./useOsdkClient-BNFTlwlc.js";import"./tick-BWj2vwKM.js";import"./DropdownField-DwHIJNgc.js";import"./withOsdkMetrics-D9G2IFka.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
