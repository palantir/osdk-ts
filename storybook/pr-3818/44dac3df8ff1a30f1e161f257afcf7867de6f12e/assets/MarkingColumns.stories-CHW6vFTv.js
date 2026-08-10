import{f as p,j as e}from"./iframe-DDq7u4il.js";import{O as i}from"./object-table-BpfBfRhb.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DchmjQ8j.js";import"./Table-DgOUC1xc.js";import"./index-CRwX66Ho.js";import"./Dialog-H1aqqX4z.js";import"./cross-CnhzJciY.js";import"./svgIconContainer-gjlLDHcU.js";import"./useBaseUiId-DoF2emQC.js";import"./InternalBackdrop-BqfOZCoa.js";import"./composite-24zZeo5k.js";import"./index-wbPw0NdA.js";import"./index-i_VEQr3c.js";import"./index-Dj1wYsHv.js";import"./useEventCallback-CNAdD9HF.js";import"./SkeletonBar-Dmhi5wAM.js";import"./LoadingCell-D4_EgMjp.js";import"./ColumnConfigDialog-DBf4F70r.js";import"./DraggableList-CsH0LNO-.js";import"./search-DW3qWj6H.js";import"./Input-Daps5nhV.js";import"./useControlled-8csFG6-s.js";import"./isEqual-DcN7ZSuF.js";import"./isObject-CNVAtxoQ.js";import"./Button-0qAbUNya.js";import"./ActionButton-BIE8JzJ4.js";import"./Checkbox-DH04k5OL.js";import"./useValueChanged-fBovsQG2.js";import"./CollapsiblePanel-BEveHXGD.js";import"./MultiColumnSortDialog-DFcpSVXu.js";import"./MenuTrigger-Cg7MUzeK.js";import"./CompositeItem-CgZOI2Nx.js";import"./ToolbarRootContext-Cnr8zXiz.js";import"./getDisabledMountTransitionStyles-dF3SUEWY.js";import"./getPseudoElementBounds--4cOuUe2.js";import"./chevron-down-B0rjx85Q.js";import"./index-CyhobMXH.js";import"./error-CVPt2IGW.js";import"./BaseCbacBanner-lUy58fLg.js";import"./makeExternalStore-BGBbZ4XE.js";import"./Tooltip-tEX9kJ8I.js";import"./PopoverPopup-CH6pXruS.js";import"./toNumber-BnYLNr0W.js";import"./useOsdkClient-CqKydsqX.js";import"./tick-BnJ5UWFD.js";import"./DropdownField-wcZcgik2.js";import"./withOsdkMetrics-BzGj8Zi1.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
