import{f as p,j as e}from"./iframe-DMLeRer3.js";import{O as i}from"./object-table-BK8IY9k2.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CgrwvKPK.js";import"./Table-DJVdytYB.js";import"./index-uCsQBnfO.js";import"./Dialog-C1PQDsNj.js";import"./cross-BxDqlCZv.js";import"./svgIconContainer-COt-rC22.js";import"./useBaseUiId-C4s8ZVxT.js";import"./InternalBackdrop-CyDdu3ej.js";import"./composite-Cge9zcMx.js";import"./index-XhF3-Ii5.js";import"./index-vxfuwNf-.js";import"./index-Ch7aUkCf.js";import"./useEventCallback-D_QVHtF8.js";import"./SkeletonBar-DCA00Bpr.js";import"./LoadingCell-DnHeKuMK.js";import"./ColumnConfigDialog-_mRyyu4y.js";import"./DraggableList-CSWRiJQo.js";import"./search-C183X4Rd.js";import"./Input-LP4KcDLo.js";import"./useControlled-DG760Vv3.js";import"./Button-DPPusxtK.js";import"./small-cross-gPJdhXBg.js";import"./ActionButton-Dom-ym7d.js";import"./Checkbox-D8cF9L1H.js";import"./useValueChanged-hJ0IWPXR.js";import"./CollapsiblePanel-B-bD3HOB.js";import"./MultiColumnSortDialog-BcIkmaGf.js";import"./MenuTrigger-DKaRJM5B.js";import"./CompositeItem-BKFtY3yw.js";import"./ToolbarRootContext-DJJ5b_fP.js";import"./getDisabledMountTransitionStyles-HfDH4vRh.js";import"./getPseudoElementBounds-V4Y4w-GJ.js";import"./chevron-down-Cn9rULd1.js";import"./index-C9zE8P46.js";import"./error-CtIw9Q7f.js";import"./BaseCbacBanner-7dqz0vdK.js";import"./makeExternalStore-DV-LpRK9.js";import"./Tooltip-C0h78S3t.js";import"./PopoverPopup-C-e8gtkY.js";import"./debounce-DJvA31U4.js";import"./useOsdkClient-Fs_RpKoY.js";import"./tick-CvPk6d_r.js";import"./DropdownField-ajA85Z4P.js";import"./isEqual-BUchmOWF.js";import"./withOsdkMetrics-DV6FYw-u.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
