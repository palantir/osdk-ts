import{f as p,j as e}from"./iframe-DiGNclSn.js";import{O as i}from"./object-table-Dg4mcHgY.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-_nBZMF1N.js";import"./Table-BCuhh6ge.js";import"./index-DPWCSEHO.js";import"./Dialog-B-fkT72x.js";import"./cross-CbAhiqWN.js";import"./svgIconContainer-BxPJUld6.js";import"./useBaseUiId-D12Lp3G0.js";import"./InternalBackdrop-C1s96-Aj.js";import"./composite-DkuYOO8L.js";import"./index-bfAA9M0x.js";import"./index-DBnYr8W-.js";import"./index-CDg3Jdzj.js";import"./useEventCallback-CnfDq7zw.js";import"./SkeletonBar-DHet2gQG.js";import"./LoadingCell-B5g6mc64.js";import"./ColumnConfigDialog-DUtURtyg.js";import"./DraggableList-5PwJhooe.js";import"./search-CgbFJOiA.js";import"./Input-CGFWWoCB.js";import"./useControlled-BPiHfNKi.js";import"./isEqual-CA7oPY6d.js";import"./isObject-Dy1fxxDP.js";import"./Button-ByuxmoUQ.js";import"./ActionButton-D_77xKTc.js";import"./Checkbox-D7knJomp.js";import"./useValueChanged-CaCE8fH4.js";import"./CollapsiblePanel-D2GcFen2.js";import"./MultiColumnSortDialog-CK2RNh5E.js";import"./MenuTrigger-CoQLOQ4w.js";import"./CompositeItem-BIK6e8lr.js";import"./ToolbarRootContext-CEQ97Tgl.js";import"./getDisabledMountTransitionStyles-C5v_7uXE.js";import"./getPseudoElementBounds-DXECebKL.js";import"./chevron-down-DGDtildZ.js";import"./index-BeDKwvOI.js";import"./error-rMD5wQqr.js";import"./BaseCbacBanner-DgW9P053.js";import"./makeExternalStore-Bv-o0CiQ.js";import"./Tooltip-CAPXE57O.js";import"./PopoverPopup-DmoA5dgd.js";import"./toNumber-BV9q2Ild.js";import"./useOsdkClient-r4NaY58R.js";import"./tick-CFMgnZ5l.js";import"./DropdownField-CUyp9SOg.js";import"./withOsdkMetrics-DSL5Vxy9.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
