import{f as p,j as e}from"./iframe-Bb7nZlGl.js";import{O as i}from"./object-table-CtZBle9Q.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-5_2IOymj.js";import"./Table-DFA53aoo.js";import"./index-Ds72fwLq.js";import"./Dialog-jQw37vHq.js";import"./cross-BbGuk08-.js";import"./svgIconContainer-vUElkusf.js";import"./useBaseUiId-gkexnSBj.js";import"./InternalBackdrop-63ir8mIJ.js";import"./composite-B2CTevqe.js";import"./index-COCL-ZTE.js";import"./index-Dfd0f2n1.js";import"./index-BXoUKmrd.js";import"./useEventCallback-B0zZllci.js";import"./SkeletonBar-BGXWiCiL.js";import"./LoadingCell-D762gnJ2.js";import"./ColumnConfigDialog-D2jmUrOi.js";import"./DraggableList-Dw-BX5gx.js";import"./search-bXEtlzR1.js";import"./Input-xAYKVEpU.js";import"./useControlled-DB1jFnZJ.js";import"./isEqual-BTjZRe2t.js";import"./isObject-CQ3JilxR.js";import"./Button-B4bVBPgy.js";import"./ActionButton-Djhe9b2b.js";import"./Checkbox-CEZKgJYE.js";import"./useValueChanged-DnvzeC25.js";import"./CollapsiblePanel-8fEP_8qz.js";import"./MultiColumnSortDialog-BJeN8pFT.js";import"./MenuTrigger-BKRSjLYB.js";import"./CompositeItem-C4TcP1sN.js";import"./ToolbarRootContext-C-Jy6dbc.js";import"./getDisabledMountTransitionStyles-BW80yZdJ.js";import"./getPseudoElementBounds-SnXk6ZE7.js";import"./chevron-down-5D_xsBS1.js";import"./index-DcZR_HTv.js";import"./error-lsghjmGP.js";import"./BaseCbacBanner-dz77SKbE.js";import"./makeExternalStore-Dp2HdhKw.js";import"./Tooltip-nWI-M1JB.js";import"./PopoverPopup-DwjVgw15.js";import"./toNumber-qhHK68iw.js";import"./useOsdkClient-3ofSw2lH.js";import"./tick-BpKOiJSQ.js";import"./DropdownField-D29BtsXj.js";import"./withOsdkMetrics-DRtLXghB.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
