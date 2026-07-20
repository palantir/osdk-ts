import{f as p,j as e}from"./iframe-p3IeMUNx.js";import{O as i}from"./object-table-DMq60SRr.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dxl9yj2t.js";import"./Table-D26iFsYj.js";import"./index-BULPiBpC.js";import"./Dialog-CwI5bucu.js";import"./cross-DE1acqN6.js";import"./svgIconContainer-C074LzqQ.js";import"./useBaseUiId-9ZghOPbk.js";import"./InternalBackdrop-M1X3fXBu.js";import"./composite-B_sqO-Ol.js";import"./index-0gcP8RHj.js";import"./index-4loaUpxI.js";import"./index-SBDf6jYM.js";import"./useEventCallback-BZXWeOKX.js";import"./SkeletonBar-F3ibf3nT.js";import"./LoadingCell-B48yKaK_.js";import"./ColumnConfigDialog-86LqP4FN.js";import"./DraggableList-DZ6MIpPd.js";import"./search-CIORHShm.js";import"./Input-DHCbfZ9-.js";import"./useControlled-DVFFVC-J.js";import"./isEqual-BmkJe91a.js";import"./isObject-Bjp3zGgI.js";import"./Button-BoSagEuJ.js";import"./ActionButton-BOIm9MhK.js";import"./Checkbox-CGQIQcqE.js";import"./useValueChanged-vXe4PRs_.js";import"./CollapsiblePanel-B7zRzfQn.js";import"./MultiColumnSortDialog-BCSIRLEy.js";import"./MenuTrigger-DKcbrgaU.js";import"./CompositeItem-Dv5btcOe.js";import"./ToolbarRootContext-aK8i6zpw.js";import"./getDisabledMountTransitionStyles-jEkwWXiG.js";import"./getPseudoElementBounds-GbCW81aG.js";import"./chevron-down-CxgEXWSt.js";import"./index-D-b1dQdL.js";import"./error-CvL-VOeT.js";import"./BaseCbacBanner-CtaljxYG.js";import"./makeExternalStore-BM2PidB1.js";import"./Tooltip-B2jVc_zD.js";import"./PopoverPopup-DEFPVWGr.js";import"./toNumber-DxnGe_RM.js";import"./useOsdkClient-Dctg05hc.js";import"./tick-D-F4wiol.js";import"./DropdownField-JMWpNW-e.js";import"./withOsdkMetrics-Djb3i1l3.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
