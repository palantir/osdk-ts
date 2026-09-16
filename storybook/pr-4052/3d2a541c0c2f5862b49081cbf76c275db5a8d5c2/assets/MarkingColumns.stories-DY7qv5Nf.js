import{f as p,j as e}from"./iframe-Ca2h9Cb_.js";import{O as i}from"./object-table-Dmtv9nc1.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DAf9eX-V.js";import"./Table-DXXOr3kR.js";import"./index-DWThxo2f.js";import"./Dialog-uKOxAzum.js";import"./cross-kbTjrbem.js";import"./svgIconContainer-Bn-48Fxt.js";import"./useBaseUiId-BeaWeUqC.js";import"./InternalBackdrop-DFUqPzG4.js";import"./composite-BHDhYMvG.js";import"./index-khJGmqWk.js";import"./index-BQgpEwzp.js";import"./index-DH2EreSc.js";import"./useEventCallback-Cy_0PmmR.js";import"./SkeletonBar-BXjaSTgH.js";import"./LoadingCell-iOD7qSli.js";import"./ColumnConfigDialog-H_qZCN29.js";import"./DraggableList-CyBumZSQ.js";import"./search-CuSTqVc7.js";import"./Input-DJ7coF_2.js";import"./useControlled-DgBClk7b.js";import"./Button-DuNKOwnz.js";import"./small-cross-CNAC6Gdk.js";import"./ActionButton-DHMmr5VF.js";import"./Checkbox-CNMBYUqX.js";import"./useValueChanged-ChMbBnhn.js";import"./CollapsiblePanel-XpP7JVfq.js";import"./MultiColumnSortDialog-RYKHJLmS.js";import"./MenuTrigger-CM62vP5e.js";import"./CompositeItem-Bm7sSUUb.js";import"./ToolbarRootContext-Dw75y5NP.js";import"./getDisabledMountTransitionStyles-DBV7Mlk2.js";import"./getPseudoElementBounds-vkG9JlGu.js";import"./chevron-down-BbQxi628.js";import"./index-HOlceD77.js";import"./error-JTYK1w6o.js";import"./BaseCbacBanner-CZE4AAf3.js";import"./makeExternalStore-Toi8vQS6.js";import"./Tooltip-6EC7drX-.js";import"./PopoverPopup-Dbmji2sV.js";import"./debounce-D2v1avI_.js";import"./useOsdkClient-CVjLcUiq.js";import"./tick-Db6JqMoI.js";import"./DropdownField-X-AMgcUu.js";import"./isEqual-DQpKrOAs.js";import"./withOsdkMetrics-BAX4qEws.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
