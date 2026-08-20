import{f as p,j as e}from"./iframe-t1WFPDhw.js";import{O as i}from"./object-table-CM4LWrT7.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Da1tS92Z.js";import"./Table-D9YyYKJG.js";import"./index-B1GoUeLu.js";import"./Dialog-iYk-qLDT.js";import"./cross-Da_GAL_u.js";import"./svgIconContainer-BUiS1VCJ.js";import"./useBaseUiId-DK5GeXHs.js";import"./InternalBackdrop-X4TLWAFu.js";import"./composite-CDJe9A1X.js";import"./index-BzHvcWdE.js";import"./index-Dip6e6D7.js";import"./index-CCSLCfC8.js";import"./useEventCallback-D5whHqAd.js";import"./SkeletonBar-0mKrafZV.js";import"./LoadingCell-CzahNsbw.js";import"./ColumnConfigDialog-VgnAAr63.js";import"./DraggableList-CZWbxLce.js";import"./search-CoPwATRc.js";import"./Input-YG1B-d52.js";import"./useControlled-IVlR0_Jk.js";import"./Button-DqjYckjv.js";import"./small-cross-Y2YAVcxh.js";import"./ActionButton-CSa1amr2.js";import"./Checkbox-XNLLdOyi.js";import"./useValueChanged-DnMgpkTo.js";import"./CollapsiblePanel-C4bYsB-J.js";import"./MultiColumnSortDialog-kqu51bhw.js";import"./MenuTrigger-B4Wp0rdW.js";import"./CompositeItem-LJuZmcxS.js";import"./ToolbarRootContext-B23-OKwl.js";import"./getDisabledMountTransitionStyles-N6Q2XM1y.js";import"./getPseudoElementBounds-DH13kVRk.js";import"./chevron-down-qM8DZerS.js";import"./index-Cro2QC3a.js";import"./error-DceejFAv.js";import"./BaseCbacBanner-DOwOWdTM.js";import"./makeExternalStore-Dd5JFSU6.js";import"./Tooltip-LZicG85w.js";import"./PopoverPopup-DGsDtEIW.js";import"./debounce-VPb6bal0.js";import"./useOsdkClient--18P-rAC.js";import"./tick-D8Y9Kfxj.js";import"./DropdownField-CkzRub5e.js";import"./isEqual-BXF7jnDz.js";import"./withOsdkMetrics-BIBpp3u3.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
