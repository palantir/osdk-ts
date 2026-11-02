import{f as p,j as e}from"./iframe-BMD419ka.js";import{O as i}from"./object-table-DklIXUmg.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-CiHZNj21.js";import"./index-kQgthC1n.js";import"./Dialog-Bnf9h6yt.js";import"./cross-C-Zn05Sh.js";import"./svgIconContainer-CHQFiUDX.js";import"./useBaseUiId-BBA3Ojwf.js";import"./InternalBackdrop-BzOsWlKG.js";import"./composite-C219b2sQ.js";import"./index-DoLcuz7h.js";import"./index-CxpxkMGG.js";import"./index-CZl_v7Sd.js";import"./useEventCallback-p3w8y99Z.js";import"./SkeletonBar-DEGMKOtH.js";import"./LoadingCell-CxK7vvT8.js";import"./ColumnConfigDialog-SWCRSzpQ.js";import"./DraggableList-CsKDALQ_.js";import"./search-EKHgMBUJ.js";import"./Input-Bra7C-xN.js";import"./useControlled-7nsHaAUN.js";import"./Button-LjQK0IIe.js";import"./small-cross-Cwk34a2M.js";import"./ActionButton-CTFg_lcv.js";import"./Checkbox-DtJ0hjBX.js";import"./useValueChanged-BsnzqRt6.js";import"./CollapsiblePanel-BRTyuHlQ.js";import"./MultiColumnSortDialog-DYNUSxBw.js";import"./MenuTrigger-BDfHjyma.js";import"./CompositeItem-Bp6sOKGe.js";import"./ToolbarRootContext-COV-S0gg.js";import"./getDisabledMountTransitionStyles-C6hYXqqN.js";import"./getPseudoElementBounds-CHbR_S8R.js";import"./chevron-down-Amjm1ssN.js";import"./index-BRel636c.js";import"./error-3ACxWnPD.js";import"./BaseCbacBanner-BxJHnPjU.js";import"./makeExternalStore-CFbDS87k.js";import"./Tooltip-CS3G91Py.js";import"./PopoverPopup-Cev_zMr-.js";import"./debounce-189bBZdJ.js";import"./useOsdkClient-C_nRFm8v.js";import"./tick-CWpYZ4jJ.js";import"./DropdownField-CJedxo24.js";import"./isEqual-DfX-8s8I.js";import"./withOsdkMetrics-JpL78Mh0.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
