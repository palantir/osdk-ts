import{f as p,j as e}from"./iframe-BdOqqohK.js";import{O as i}from"./object-table-wRfqkctG.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BM9HCPK9.js";import"./Table-BtgtF-3W.js";import"./index-CMkPjfDh.js";import"./Dialog-Cge2Djl4.js";import"./cross-CBN09daJ.js";import"./svgIconContainer-CxQ350M_.js";import"./useBaseUiId-D2aQCoEc.js";import"./InternalBackdrop-D-cRM3dE.js";import"./composite-DBxA_VE8.js";import"./index-CVW6l3Ye.js";import"./index-DYHqv8nl.js";import"./index-DChtCzTr.js";import"./useEventCallback-Kc4Bg8wO.js";import"./SkeletonBar-u4XVZQ3v.js";import"./LoadingCell-hpDbvg2p.js";import"./ColumnConfigDialog-T3sSbJ1i.js";import"./DraggableList-DrRgyrTr.js";import"./search-et-5mZuo.js";import"./Input-BunEo4l4.js";import"./useControlled-BYgnBDE7.js";import"./Button-KdAdTzHS.js";import"./small-cross-BL7aJl_O.js";import"./ActionButton-DMvFJ_VM.js";import"./Checkbox-dzgioJMo.js";import"./useValueChanged-BdYiKPuI.js";import"./CollapsiblePanel-Bb165C_-.js";import"./MultiColumnSortDialog-Dm4JsThE.js";import"./MenuTrigger-DFKWibUL.js";import"./CompositeItem-FJMzn3o4.js";import"./ToolbarRootContext-CpSt7yAh.js";import"./getDisabledMountTransitionStyles-BJoEqB65.js";import"./getPseudoElementBounds-lBQa4hkk.js";import"./chevron-down-DcdLMAVH.js";import"./index-CZ8krK_n.js";import"./error-BfW0iVfX.js";import"./BaseCbacBanner-CxYClwUP.js";import"./makeExternalStore-Cfk45-cb.js";import"./Tooltip-CVkVqWlj.js";import"./PopoverPopup-BHGNAE2t.js";import"./debounce-BNI_uAPu.js";import"./useOsdkClient-12OQM3Gl.js";import"./tick-C7mROKoo.js";import"./DropdownField-B4Q1L6C2.js";import"./isEqual-BHow4tcx.js";import"./withOsdkMetrics-ADnSdXzg.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
