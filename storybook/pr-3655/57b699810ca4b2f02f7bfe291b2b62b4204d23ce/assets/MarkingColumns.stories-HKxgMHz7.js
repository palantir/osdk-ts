import{f as n,j as t}from"./iframe-VIUjn1eL.js";import{O as p}from"./object-table-BIW8hcCk.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-ajOtfN6a.js";import"./Table-BsA31qn1.js";import"./index-Au1uUuUe.js";import"./Dialog-D2DRpcwl.js";import"./cross-CLapw4bX.js";import"./svgIconContainer-ERmnaq0G.js";import"./useBaseUiId-B1kN4XqW.js";import"./InternalBackdrop-C08YOsMb.js";import"./composite-BDYOoxUc.js";import"./index-rsvx8CnG.js";import"./index-DymheiCL.js";import"./index-A9RvTqZN.js";import"./useEventCallback-Ddv_2BmO.js";import"./SkeletonBar-QPQlvQbG.js";import"./LoadingCell-5QHpxaVH.js";import"./ColumnConfigDialog-ItZkdeTE.js";import"./DraggableList-C-9su03e.js";import"./search-CmgKahmk.js";import"./Input-yUu2PjNk.js";import"./useControlled-DegTIbWT.js";import"./Button-DezfWdgT.js";import"./small-cross-4JHj2OC6.js";import"./ActionButton-DCu6Be1w.js";import"./Checkbox-t9bS1h_s.js";import"./useValueChanged-7ncITRpi.js";import"./CollapsiblePanel-0CTMDAI0.js";import"./MultiColumnSortDialog-DmsI9YCY.js";import"./MenuTrigger-CGMEiQe5.js";import"./CompositeItem-DZC3pl9A.js";import"./ToolbarRootContext-Mx44cl2Z.js";import"./getDisabledMountTransitionStyles-C-JS1VCS.js";import"./getPseudoElementBounds-BCMQjBmc.js";import"./chevron-down-DBFJhWrj.js";import"./index-CpLBKENT.js";import"./error-D_2MdKNg.js";import"./BaseCbacBanner--_0KDW9m.js";import"./makeExternalStore-BrmSoAw8.js";import"./Tooltip-C6p-oYbL.js";import"./PopoverPopup-BftsaL2Z.js";import"./toNumber-IO5BMyQA.js";import"./useOsdkClient-arH3PT0K.js";import"./tick-Dy3u5ocZ.js";import"./DropdownField-DOrGRBuZ.js";import"./withOsdkMetrics-DDmeV7Nc.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
  render: args => <div style={{
    height: 480
  }}>
      <ObjectTable {...args} />
    </div>
}`,...(i=(e=r.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const er=["MarkingColumns"];export{r as MarkingColumns,er as __namedExportsOrder,or as default};
