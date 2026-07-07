import{f as n,j as t}from"./iframe-BL-aTQfU.js";import{O as p}from"./object-table-4IqbE3Kb.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BahzRW-X.js";import"./Table-D28Y6N9_.js";import"./index-D4EpUFva.js";import"./Dialog-B-1CxAJ-.js";import"./cross-BHf_rKQH.js";import"./svgIconContainer-BKl1Wdn_.js";import"./useBaseUiId-CJqwJhLG.js";import"./InternalBackdrop-CANpWiTT.js";import"./composite-pMUz-CIe.js";import"./index-CXThrq9Y.js";import"./index-C4s4Nf7W.js";import"./index-CxiMT54f.js";import"./useEventCallback-B79zPgYT.js";import"./SkeletonBar-DRGTJIPz.js";import"./LoadingCell-BaO8Mdzc.js";import"./ColumnConfigDialog-f3hlR6dB.js";import"./DraggableList-Cj66d00D.js";import"./search-CcjCZccz.js";import"./Input-D7P-T4dQ.js";import"./useControlled-CW7M7uym.js";import"./Button-BDE_UIPs.js";import"./small-cross-DHSO_HGS.js";import"./ActionButton-3W4xty1V.js";import"./Checkbox-BG1v9RP-.js";import"./useValueChanged-BlM6kRGL.js";import"./CollapsiblePanel-DUQBDTcI.js";import"./MultiColumnSortDialog-CVDFD3AO.js";import"./MenuTrigger-C0pkO-0L.js";import"./CompositeItem-8Mg0ZdDv.js";import"./ToolbarRootContext-BGWwmius.js";import"./getDisabledMountTransitionStyles-BeJLkvpe.js";import"./getPseudoElementBounds-DBS5-Dmu.js";import"./chevron-down-CuTqKkub.js";import"./index-CWou13Ax.js";import"./error-DTNLJVPi.js";import"./BaseCbacBanner-BVtfHIJ8.js";import"./makeExternalStore-NsBbI9KP.js";import"./Tooltip-BYctmVxk.js";import"./PopoverPopup-Do92RA-Z.js";import"./toNumber-Cz5qwujw.js";import"./useOsdkClient-B7V-DHnl.js";import"./tick-xDYRObnP.js";import"./DropdownField-DutX-pNh.js";import"./withOsdkMetrics-Wvjd9i-y.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
