import{f as p,j as e}from"./iframe-CFV-nnj8.js";import{O as i}from"./object-table-CtxjKN9T.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B6fyfr7c.js";import"./Table-BiYiUmOh.js";import"./index-vmaSH1sB.js";import"./Dialog-m9518HMg.js";import"./cross-QMVU-YJc.js";import"./svgIconContainer-D_-2ttXX.js";import"./useBaseUiId-WVaYu2-M.js";import"./InternalBackdrop-Dexmpq_6.js";import"./composite-DJp6IOoD.js";import"./index-BjUsjKoR.js";import"./index-Dyi_6i64.js";import"./index-BFvHZIyN.js";import"./useEventCallback-M1vMQgZ7.js";import"./SkeletonBar-x6A5LKdf.js";import"./LoadingCell-vaVMC9Zh.js";import"./ColumnConfigDialog-CNQb7nr0.js";import"./DraggableList-gITP3HIV.js";import"./search-DZmS-pfQ.js";import"./Input-KbJwk9Nd.js";import"./useControlled-BOSfLjyK.js";import"./Button-B3yPaUxl.js";import"./small-cross-B17ASmwu.js";import"./ActionButton-DNioPXe_.js";import"./Checkbox-QDGReIJr.js";import"./useValueChanged-DWC6YrTv.js";import"./CollapsiblePanel-TbSN7Ilj.js";import"./MultiColumnSortDialog-J02hCAYj.js";import"./MenuTrigger-B2SznUJx.js";import"./CompositeItem-C3ap8dp1.js";import"./ToolbarRootContext-BsgEetLb.js";import"./getDisabledMountTransitionStyles-DE-GPIVs.js";import"./getPseudoElementBounds-g83biV_s.js";import"./chevron-down-14_leR3A.js";import"./index-DsD3GjJA.js";import"./error-CPA32RNg.js";import"./BaseCbacBanner-DUJz5Dl3.js";import"./makeExternalStore-BLm3eYi3.js";import"./Tooltip-DZQrwu44.js";import"./PopoverPopup-93SM5qMU.js";import"./debounce-DDlfQ6-b.js";import"./useOsdkClient-X9M28KVd.js";import"./tick-DCGGFRpD.js";import"./DropdownField-CFseBlqH.js";import"./isEqual-TFc4XBg9.js";import"./withOsdkMetrics-cGR_rgDD.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
