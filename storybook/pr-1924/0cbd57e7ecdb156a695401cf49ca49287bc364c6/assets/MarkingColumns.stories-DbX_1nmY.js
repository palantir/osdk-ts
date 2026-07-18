import{f as p,j as e}from"./iframe-CXhU7t2f.js";import{O as i}from"./object-table-CH4l4I1P.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BDvWwuql.js";import"./Table-DdY-uBrx.js";import"./index-9FYVtP3Z.js";import"./Dialog-DpNpFOkA.js";import"./cross-C5reyL6B.js";import"./svgIconContainer-CTI46h-O.js";import"./useBaseUiId-A4A1Li5V.js";import"./InternalBackdrop-ClxFAGmQ.js";import"./composite-CM3mes3D.js";import"./index-4EH_6cib.js";import"./index-BCoFteCI.js";import"./index-BbS8x_iM.js";import"./useEventCallback-EsnKdqah.js";import"./SkeletonBar-BtarGFJo.js";import"./LoadingCell-BgGB193D.js";import"./ColumnConfigDialog-BBWaoVxB.js";import"./DraggableList-1n_a8UC4.js";import"./search-D4VdaZo6.js";import"./Input-C8ya944S.js";import"./useControlled-PRJV_Jy7.js";import"./isEqual-CG1oMvXQ.js";import"./isObject-Ike8f_7J.js";import"./Button-B7Bo3D3H.js";import"./ActionButton-BvWh4q0Q.js";import"./Checkbox-Dw3DL3fl.js";import"./useValueChanged-Dz55MfZn.js";import"./CollapsiblePanel-DqCzuiRX.js";import"./MultiColumnSortDialog-CmQpSETv.js";import"./MenuTrigger-BJsJesI2.js";import"./CompositeItem-DkmsW7jA.js";import"./ToolbarRootContext-BZmYr3M9.js";import"./getDisabledMountTransitionStyles-G1zfEPaf.js";import"./getPseudoElementBounds-CznvrcKk.js";import"./chevron-down-Dnhj6aRu.js";import"./index-HNPnY-9L.js";import"./error-BrRzAHal.js";import"./BaseCbacBanner-Duxkzg9K.js";import"./makeExternalStore-0ZDPf0CN.js";import"./Tooltip-DJBgjafR.js";import"./PopoverPopup-Qck97i8i.js";import"./toNumber-OQQ8gzvw.js";import"./useOsdkClient-DvGo_U9k.js";import"./tick-hO3Cn5OV.js";import"./DropdownField-DQDwzM3R.js";import"./withOsdkMetrics-DbJ9bW-D.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
