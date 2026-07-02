import{f as n,j as t}from"./iframe-B5sOYknB.js";import{O as p}from"./object-table-CHPv9jR7.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D9dw2WPS.js";import"./Table-BFyTAKen.js";import"./index-DXa5xaN7.js";import"./Dialog-CXijEAbp.js";import"./cross-C8QYKCz4.js";import"./svgIconContainer-Bm-AvMZM.js";import"./useBaseUiId-Dx-UmPey.js";import"./InternalBackdrop-yHLthWOx.js";import"./composite-Bh5IviOX.js";import"./index-KsrOMrxo.js";import"./index-7_8bNiOK.js";import"./index-DFnpba0h.js";import"./useEventCallback-BPTk_SJQ.js";import"./SkeletonBar-DHRo2ej-.js";import"./LoadingCell-uAg3zkBm.js";import"./ColumnConfigDialog-CgFa-Bv8.js";import"./DraggableList-DIm6pc8i.js";import"./search-DmDl6Qzn.js";import"./Input-DPBiEFk6.js";import"./useControlled-CCPUp8nx.js";import"./Button-g0uUMokr.js";import"./small-cross-CZ0z80oK.js";import"./ActionButton-CTBSe4oh.js";import"./Checkbox-Bp9OBdYB.js";import"./minus-C3pu2Lvz.js";import"./tick-Dc-vLbxO.js";import"./useValueChanged-IJ1e42bV.js";import"./caret-down-DbMUYhpY.js";import"./CollapsiblePanel-DKg2RSo7.js";import"./MultiColumnSortDialog-9j7HsuNb.js";import"./MenuTrigger-BTsc3mhP.js";import"./CompositeItem-BVRs5M7S.js";import"./ToolbarRootContext-CaQpawgI.js";import"./getDisabledMountTransitionStyles-CAEvBXDN.js";import"./getPseudoElementBounds-CCIRnoEX.js";import"./chevron-down-Bfpbv1f0.js";import"./index-Cslg85HU.js";import"./error-C1B8oH3J.js";import"./BaseCbacBanner-Lodu9hcu.js";import"./makeExternalStore-A3NBjC7P.js";import"./Tooltip-DsuPiTGx.js";import"./PopoverPopup-YQW6Ui96.js";import"./toNumber-Czb3XD4o.js";import"./useOsdkClient-B8LMQtTV.js";import"./DropdownField-C9Af1g4H.js";import"./withOsdkMetrics-DNYDo4hY.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(e=r.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const pr=["MarkingColumns"];export{r as MarkingColumns,pr as __namedExportsOrder,ir as default};
