import{f as p,j as e}from"./iframe-cBiyHty9.js";import{O as i}from"./object-table-DdxHR6gu.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Bv3meVH3.js";import"./Table-DOWOKbmv.js";import"./index-D9svWSdg.js";import"./Dialog-D1e3reXB.js";import"./cross-6ls1LaWh.js";import"./svgIconContainer-BYeKHHBz.js";import"./useBaseUiId-DvsuiOVy.js";import"./InternalBackdrop-CkoiXEVu.js";import"./composite-CzYA3ElD.js";import"./index-BjO7MMv7.js";import"./index-AEP3bJ8p.js";import"./index-irxThoCO.js";import"./useEventCallback-DpA9bV-i.js";import"./SkeletonBar-CFxnwFPu.js";import"./LoadingCell-tIQP5ayH.js";import"./ColumnConfigDialog-D4TY98FM.js";import"./DraggableList-3zVKSQ3j.js";import"./search-BHdPsWbB.js";import"./Input-CUOeqbmp.js";import"./useControlled-CK1iqSKb.js";import"./Button-BcVzWRXY.js";import"./small-cross-Cs_0F4xM.js";import"./ActionButton-CTzhl48y.js";import"./Checkbox-Bbew-0gB.js";import"./useValueChanged-BaN3_QZu.js";import"./CollapsiblePanel-B8M_JZTW.js";import"./MultiColumnSortDialog-BSE3jK1S.js";import"./MenuTrigger-BCGw1eRt.js";import"./CompositeItem-CVN4lZoj.js";import"./ToolbarRootContext-C7-4unHr.js";import"./getDisabledMountTransitionStyles-CI3RAlpb.js";import"./getPseudoElementBounds-CxFqqadz.js";import"./chevron-down-X8NW_OEl.js";import"./index-CBnbMMaT.js";import"./error-Ct0Hv0fs.js";import"./BaseCbacBanner-QnBtoc3l.js";import"./makeExternalStore-CGJamYgh.js";import"./Tooltip-CvHPMZe4.js";import"./PopoverPopup-CUtWkbQa.js";import"./debounce-B191BFcS.js";import"./useOsdkClient-BAx2SljP.js";import"./tick-VSl0kWDd.js";import"./DropdownField-DiamDw4J.js";import"./isEqual-CMnDPE7A.js";import"./withOsdkMetrics-CoTXzMQi.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
