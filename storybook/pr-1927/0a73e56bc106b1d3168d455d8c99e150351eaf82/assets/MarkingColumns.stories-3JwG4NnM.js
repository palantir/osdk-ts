import{f as p,j as e}from"./iframe-DWzyCbmQ.js";import{O as i}from"./object-table-CuSbRsH6.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-2jyftVZw.js";import"./Table-CldaYRDR.js";import"./index-Cqwfu9kN.js";import"./Dialog-Cn_zgyMr.js";import"./cross-jZI8Hr1l.js";import"./svgIconContainer-BK_aTV-8.js";import"./useBaseUiId-b2rVpvoU.js";import"./InternalBackdrop-QBE1MHKB.js";import"./composite-BeGq1JGD.js";import"./index-BMaMWApL.js";import"./index-DLztW5cy.js";import"./index-aFeDMRyf.js";import"./useEventCallback-D6jFJjCm.js";import"./SkeletonBar-CtISM4-l.js";import"./LoadingCell-Yj4teP7m.js";import"./ColumnConfigDialog-B0uDq8E7.js";import"./DraggableList-CvU5Locf.js";import"./search-Bri7tWXH.js";import"./Input-YoY-WOGN.js";import"./useControlled-BLqnPlES.js";import"./isEqual-CDh5I7Rn.js";import"./isObject-DdD35Osw.js";import"./Button-BSivVUu-.js";import"./ActionButton-OprUQE1o.js";import"./Checkbox-BfZCPL-_.js";import"./useValueChanged-BBo06APQ.js";import"./CollapsiblePanel-CA-wr5VW.js";import"./MultiColumnSortDialog-CkHucyAD.js";import"./MenuTrigger-CEc8SZAK.js";import"./CompositeItem-Cg2la_5O.js";import"./ToolbarRootContext-CVS0gqd_.js";import"./getDisabledMountTransitionStyles-Bc1sqap-.js";import"./getPseudoElementBounds-Dv2ufZV-.js";import"./chevron-down-CbMtKpux.js";import"./index-X_CuuTrt.js";import"./error-CexwmIKl.js";import"./BaseCbacBanner-B-8aAE9P.js";import"./makeExternalStore-B2gIhY2Q.js";import"./Tooltip-C0YkhHOA.js";import"./PopoverPopup-AybO48ar.js";import"./toNumber-DXAgYOST.js";import"./useOsdkClient-IU3Q42Y8.js";import"./tick-DxexBsqd.js";import"./DropdownField-CE6YHtPo.js";import"./withOsdkMetrics-CvyFQccR.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
