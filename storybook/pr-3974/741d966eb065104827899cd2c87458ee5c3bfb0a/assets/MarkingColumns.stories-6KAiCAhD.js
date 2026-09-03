import{f as p,j as e}from"./iframe-B_oy6e6M.js";import{O as i}from"./object-table-Du3yIVEE.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CWVJ8YRK.js";import"./Table-DEfKmmNN.js";import"./index-DZJD6sDp.js";import"./Dialog-BBAPdTrB.js";import"./cross-DSgNe7Mr.js";import"./svgIconContainer-C6P8MOfd.js";import"./useBaseUiId-POvatS82.js";import"./InternalBackdrop-Dp2uHLRa.js";import"./composite-ZAoedBeg.js";import"./index-T8MVz2I4.js";import"./index-CS3PWFhc.js";import"./index-D-0Q_ZIA.js";import"./useEventCallback-DYFfeE7x.js";import"./SkeletonBar-D6M-u8eM.js";import"./LoadingCell-BoT4vmnz.js";import"./ColumnConfigDialog-TYSu0W40.js";import"./DraggableList-DGByefv8.js";import"./search-DCED0BUt.js";import"./Input-DTC7T4Cz.js";import"./useControlled-zA33IEOZ.js";import"./Button-CrOvgvfA.js";import"./small-cross-QUZC1axO.js";import"./ActionButton-CH9G9AI1.js";import"./Checkbox-Cim-DUIZ.js";import"./useValueChanged-mZg_qe7l.js";import"./CollapsiblePanel-YftoqHFR.js";import"./MultiColumnSortDialog-BWXP5wwp.js";import"./MenuTrigger-SGHREb-3.js";import"./CompositeItem-C4ZzMkp4.js";import"./ToolbarRootContext-DJgLJnil.js";import"./getDisabledMountTransitionStyles-x7AHHcyr.js";import"./getPseudoElementBounds-DZ3pLnsf.js";import"./chevron-down-rpYvjBzs.js";import"./index-BXsPCItr.js";import"./error-BNXYH_2v.js";import"./BaseCbacBanner-XuLOXO9d.js";import"./makeExternalStore-A3uWrp0V.js";import"./Tooltip-DbdokS7N.js";import"./PopoverPopup-a2ucjmTV.js";import"./debounce-ZroeBVII.js";import"./useOsdkClient-Dux18aMq.js";import"./tick-BcOBtFgu.js";import"./DropdownField--s7bes0M.js";import"./isEqual-CPn_97Mq.js";import"./withOsdkMetrics-C137OdQw.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
