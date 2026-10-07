import{f as p,j as e}from"./iframe-CQxG3cCC.js";import{O as i}from"./object-table-CEnnfMHs.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BQhDaTv1.js";import"./Table-DCPdNfEv.js";import"./index-DxGOzCTx.js";import"./Dialog-zCLS7zrb.js";import"./cross-csp5HbTE.js";import"./svgIconContainer-BhtEOhwo.js";import"./useBaseUiId-Dt5sayHU.js";import"./InternalBackdrop-BDvtcNtG.js";import"./composite-UnoLR2xI.js";import"./index-srIEGZLU.js";import"./index-B8ySRxPM.js";import"./index-CevcsHHZ.js";import"./useEventCallback-BWLI-kIT.js";import"./SkeletonBar-D53oWcoz.js";import"./LoadingCell-D065Pqzq.js";import"./ColumnConfigDialog-CfGoxzT9.js";import"./DraggableList-BOE3DziB.js";import"./search-XsOT8fX6.js";import"./Input-IKU9NsaD.js";import"./useControlled-DBmpvbx5.js";import"./Button-D1svI8Md.js";import"./small-cross-Di7hpAGJ.js";import"./ActionButton-DEiZAioH.js";import"./Checkbox-CGOgc_Ub.js";import"./useValueChanged-BuXo7lzh.js";import"./CollapsiblePanel-DXkCbcz8.js";import"./MultiColumnSortDialog-bnt2o6ZC.js";import"./MenuTrigger-DyhMK_-E.js";import"./CompositeItem-D3C5uQt7.js";import"./ToolbarRootContext-Dp2y2zy-.js";import"./getDisabledMountTransitionStyles-BMquo6lw.js";import"./getPseudoElementBounds-DyrNCMLJ.js";import"./chevron-down-C-j45_ex.js";import"./index-DRHTc7Po.js";import"./error-DvI5aFF7.js";import"./BaseCbacBanner-zZK_yycM.js";import"./makeExternalStore-ez4Tjxbk.js";import"./Tooltip-Ci2fxdP1.js";import"./PopoverPopup-eKDhhN4E.js";import"./debounce-BJEoAQfk.js";import"./useOsdkClient-rcUQfTvQ.js";import"./tick-gN8njJQM.js";import"./DropdownField-9ziBfdgv.js";import"./isEqual-CvFNBvPf.js";import"./withOsdkMetrics-CA86lKjW.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
