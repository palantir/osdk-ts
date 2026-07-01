import{f as n,j as t}from"./iframe-DPif3BCt.js";import{O as p}from"./object-table-Iv7prqEu.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BbPxCDmH.js";import"./Table-Demlu3JR.js";import"./index-DlKJyA6f.js";import"./Dialog-BpUk9Kra.js";import"./cross-B3XRATNr.js";import"./svgIconContainer-CMyuo72G.js";import"./useBaseUiId-1LP5pxZR.js";import"./InternalBackdrop-BH3ffLIu.js";import"./composite-Du3vYNL-.js";import"./index-CS7wiWS2.js";import"./index-C2K5BBQe.js";import"./index-Dqv9wJPn.js";import"./useEventCallback-CpZVQ1Ue.js";import"./SkeletonBar-dyl00LAj.js";import"./LoadingCell-B8_QdiuR.js";import"./ColumnConfigDialog-DZ3Manz0.js";import"./DraggableList-BAk8YP9w.js";import"./search-HlRbx8Td.js";import"./Input-ChIFSgLe.js";import"./useControlled-bK4vBxg8.js";import"./Button-DL74wRaw.js";import"./small-cross-2_WpjdP5.js";import"./ActionButton-DOsUHU-M.js";import"./Checkbox-CrlYuceh.js";import"./minus-CWzGHwBR.js";import"./tick-C9OBaJst.js";import"./useValueChanged-9MjCYZh3.js";import"./caret-down-CaHd8l-E.js";import"./CollapsiblePanel-DIrgxipF.js";import"./MultiColumnSortDialog-PYDVMeT7.js";import"./MenuTrigger-BmxDvXRQ.js";import"./CompositeItem-C-6zUN9Y.js";import"./ToolbarRootContext-DNYYxNIX.js";import"./getDisabledMountTransitionStyles-Cp9ZYZ-J.js";import"./getPseudoElementBounds-DuPFuyhJ.js";import"./chevron-down-OrYSk-BY.js";import"./index-CG_fuOXb.js";import"./error-B3gLJ4JV.js";import"./BaseCbacBanner-B0mpa29W.js";import"./makeExternalStore-Dol0aQuG.js";import"./Tooltip-1ooB755L.js";import"./PopoverPopup-B6Vo2Hrh.js";import"./toNumber-GPSVm8kL.js";import"./useOsdkClient-B6Jz84Od.js";import"./DropdownField-Ct3f7Muw.js";import"./withOsdkMetrics-BbG2_MZe.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
