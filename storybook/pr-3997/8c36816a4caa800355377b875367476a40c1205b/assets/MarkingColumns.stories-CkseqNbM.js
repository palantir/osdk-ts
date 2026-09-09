import{f as p,j as e}from"./iframe-SOll1F4-.js";import{O as i}from"./object-table-8Lyto80n.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CZMLvVAf.js";import"./Table-D_kd8VXt.js";import"./index-DrJjeRbc.js";import"./Dialog-Bmx1tS-O.js";import"./cross-BhBNLXbN.js";import"./svgIconContainer-BqIiSSFa.js";import"./useBaseUiId-sLJlVzyX.js";import"./InternalBackdrop-DuO7hhrB.js";import"./composite-DrjuPSYu.js";import"./index-Bz0lLybg.js";import"./index-B_l0ycL7.js";import"./index-BxU0-qmk.js";import"./useEventCallback-DkB0XSt3.js";import"./SkeletonBar-ImB0JjUc.js";import"./LoadingCell-PvqKWmYK.js";import"./ColumnConfigDialog-CxJThB76.js";import"./DraggableList-DnYRjrbD.js";import"./search-DAnTDJ17.js";import"./Input-CD41sKiv.js";import"./useControlled-A2CHlnom.js";import"./Button-Cnjwffgu.js";import"./small-cross-DFG8waLt.js";import"./ActionButton-BED8MEyS.js";import"./Checkbox-B8Uf2TMr.js";import"./useValueChanged-BK4PR_uW.js";import"./CollapsiblePanel-D5QCO8r0.js";import"./MultiColumnSortDialog-DhUgrXVT.js";import"./MenuTrigger-mz_ipzIa.js";import"./CompositeItem-CILt4SmA.js";import"./ToolbarRootContext-C6z7XZRH.js";import"./getDisabledMountTransitionStyles-CqkzNEYE.js";import"./getPseudoElementBounds-DmvT9tik.js";import"./chevron-down-B7EMYXAy.js";import"./index-C1rZZXtv.js";import"./error-C4kcTs-K.js";import"./BaseCbacBanner-t3TVdD0X.js";import"./makeExternalStore-C8WgzvlO.js";import"./Tooltip-D0hmlA59.js";import"./PopoverPopup-BJU9-Q2L.js";import"./debounce-CbpELLX-.js";import"./useOsdkClient-DN1cnskB.js";import"./tick-DfEEUKDP.js";import"./DropdownField-DCmZO5bG.js";import"./isEqual-Cy_MZ2uT.js";import"./withOsdkMetrics-DEguMpFR.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
