import{f as n,j as t}from"./iframe-D0uRAxcV.js";import{O as p}from"./object-table-CG53ugoM.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-FX778EEz.js";import"./Table-K9YNPjD2.js";import"./index-BEGIPrEn.js";import"./Dialog-BsO-ZbkH.js";import"./cross-DHWrQq2X.js";import"./svgIconContainer-B9j6EW46.js";import"./useBaseUiId-BVKw2tfT.js";import"./InternalBackdrop-BcAsZNsp.js";import"./composite-DwbXUTzX.js";import"./index-DI4wtT1d.js";import"./index-CDEa1l1X.js";import"./index-DvIBZCee.js";import"./useEventCallback-B9hJItNr.js";import"./SkeletonBar-DeLBioP4.js";import"./LoadingCell-C-futUWV.js";import"./ColumnConfigDialog-DDKq0iQ0.js";import"./DraggableList-ChUwa60m.js";import"./search-C2ChGgYx.js";import"./Input-C3XKFpSU.js";import"./useControlled-BIaio_kq.js";import"./Button-DFzOjN4m.js";import"./small-cross-53iaFL1V.js";import"./ActionButton-Ckxi5n-h.js";import"./Checkbox-DYjZx5IQ.js";import"./useValueChanged-Cw83wV8E.js";import"./CollapsiblePanel-GRkkfNfy.js";import"./MultiColumnSortDialog-BxlZLjp0.js";import"./MenuTrigger-DXtsXtg6.js";import"./CompositeItem-CRRd8ka1.js";import"./ToolbarRootContext-Otyhk070.js";import"./getDisabledMountTransitionStyles-DU-my80p.js";import"./getPseudoElementBounds-LimzPFVu.js";import"./chevron-down-ChJRnc9_.js";import"./index-CmySbF-6.js";import"./error-DXQnnYxw.js";import"./BaseCbacBanner-DXsijxPS.js";import"./makeExternalStore-aSVXlUMA.js";import"./Tooltip-DwSm5-VD.js";import"./PopoverPopup-LqIOrq9g.js";import"./toNumber-BVV2vv9J.js";import"./useOsdkClient-Dea8IN9Z.js";import"./tick-DAa1LFSQ.js";import"./DropdownField-B-dhO1WX.js";import"./withOsdkMetrics-DeCTRr7G.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
