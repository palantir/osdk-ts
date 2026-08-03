import{f as p,j as e}from"./iframe-zzdLRRkP.js";import{O as i}from"./object-table-BzoQW25r.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-BjUiZie4.js";import"./index-D834FBro.js";import"./Dialog-nmnWVVXh.js";import"./cross-vN4VZOfj.js";import"./svgIconContainer-Dj084qxv.js";import"./useBaseUiId-CtmDVctP.js";import"./InternalBackdrop-DcGb9eKs.js";import"./composite-Bpyg1XgY.js";import"./index-BtoPQHyd.js";import"./index-Cs6OfdLi.js";import"./index-It3254XJ.js";import"./useEventCallback-BMphHyc_.js";import"./SkeletonBar-23_67DFq.js";import"./LoadingCell-BX0kCZQ3.js";import"./ColumnConfigDialog-BTRijRXv.js";import"./DraggableList-yGuNd3Rm.js";import"./search-DCKy7lD2.js";import"./Input-C0n4iBu6.js";import"./useControlled-7B1FZy-i.js";import"./isEqual-bi7MFZ9t.js";import"./isObject-DobLPpHh.js";import"./Button-CcJGTlv_.js";import"./ActionButton-CF21XwFg.js";import"./Checkbox--n1C5hfs.js";import"./useValueChanged-Bpxae_nB.js";import"./CollapsiblePanel-CX4Wt1HL.js";import"./MultiColumnSortDialog-ggUESPjs.js";import"./MenuTrigger-Cr774_KN.js";import"./CompositeItem-D0JUxwMy.js";import"./ToolbarRootContext-COFb6wXq.js";import"./getDisabledMountTransitionStyles-TAsBM5_j.js";import"./getPseudoElementBounds-BW1YzDPn.js";import"./chevron-down-DAiMDPPn.js";import"./index-CAKjNa2w.js";import"./error-CkMO6fn3.js";import"./BaseCbacBanner-3I2qRQio.js";import"./makeExternalStore-CR1iUPPm.js";import"./Tooltip-BO3ZGQ3g.js";import"./PopoverPopup-CduWOMhP.js";import"./toNumber-CE1YwZfA.js";import"./useOsdkClient-CheHNZLh.js";import"./tick-YiG10Me9.js";import"./DropdownField-DgKKM3bG.js";import"./withOsdkMetrics-DfG4PBxp.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
