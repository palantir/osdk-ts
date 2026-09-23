import{f as p,j as e}from"./iframe-ClVzwAwQ.js";import{O as i}from"./object-table-CUiDs9Gl.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Cv11LvJP.js";import"./Table-x87G_eww.js";import"./index-BGl-ufsM.js";import"./Dialog-BY-hHL_5.js";import"./cross-DkZeF945.js";import"./svgIconContainer-Bay1n-zA.js";import"./useBaseUiId-DBp6INKz.js";import"./InternalBackdrop-CCEA6-di.js";import"./composite-cy3jdAoe.js";import"./index-CY6w5O7H.js";import"./index-CPJZzp1O.js";import"./index-Blka6ILz.js";import"./useEventCallback-B9S91Yw2.js";import"./SkeletonBar-D5O3BqcP.js";import"./LoadingCell-1iIW1uBJ.js";import"./ColumnConfigDialog-B1vZCJXk.js";import"./DraggableList-Dz-z2ES3.js";import"./search-DY6yvOy6.js";import"./Input-BEJWa7gG.js";import"./useControlled-CYJtKTqW.js";import"./Button-D5bJOK4o.js";import"./small-cross-C_AyMX1J.js";import"./ActionButton-QCwrftMT.js";import"./Checkbox-lhbMJ3q2.js";import"./useValueChanged-C8lzD6_j.js";import"./CollapsiblePanel-CugK17NU.js";import"./MultiColumnSortDialog-DW_PciuZ.js";import"./MenuTrigger-BvUlRi1e.js";import"./CompositeItem-B_fSDSC7.js";import"./ToolbarRootContext-D3yxcxuQ.js";import"./getDisabledMountTransitionStyles-CoM1w8pQ.js";import"./getPseudoElementBounds-DGWwlxa5.js";import"./chevron-down-UByA3gj5.js";import"./index-DL1_yfl9.js";import"./error-BmOSQ-Av.js";import"./BaseCbacBanner-5kmj_Fjj.js";import"./makeExternalStore-Bgk32_hH.js";import"./Tooltip-8hgn-ueX.js";import"./PopoverPopup-Noi5w6Yr.js";import"./debounce-BkQeQk7N.js";import"./useOsdkClient-Dz0dl0jy.js";import"./tick-D0aeUq8y.js";import"./DropdownField-A48OUsRe.js";import"./isEqual-DwB7eFCP.js";import"./withOsdkMetrics-B7DbvHC0.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
