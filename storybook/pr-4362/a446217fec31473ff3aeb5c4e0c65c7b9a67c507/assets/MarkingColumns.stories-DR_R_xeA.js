import{f as p,j as e}from"./iframe-D1PWQ8eg.js";import{O as i}from"./object-table-DhPmn3zV.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-ChDiB21Q.js";import"./Table-BjH6ZK7E.js";import"./index-BfN20Yol.js";import"./Dialog-D3A-zY1u.js";import"./cross-DpDhreOD.js";import"./svgIconContainer-BXQnyB7k.js";import"./useBaseUiId-DQZDizk3.js";import"./InternalBackdrop-Cd6fjHcd.js";import"./composite-Dz4PW6bE.js";import"./index-C-gFUxtR.js";import"./index-k_FhLYlw.js";import"./index-BC0Fj6cX.js";import"./useEventCallback-CaQTcD9p.js";import"./SkeletonBar-B9-g2cwM.js";import"./LoadingCell-DFGDcVga.js";import"./ColumnConfigDialog-C8-Xmgyw.js";import"./DraggableList-P95AxxVB.js";import"./search-Bzfmr3Yu.js";import"./Input-DcHTO1Eg.js";import"./useControlled-D21_fOEO.js";import"./Button-DGBWNQgJ.js";import"./small-cross-hiTnrqyw.js";import"./ActionButton-BFBOVnYa.js";import"./Checkbox-BtoYudj8.js";import"./useValueChanged-C8diiUx6.js";import"./CollapsiblePanel-Bw_yq71x.js";import"./MultiColumnSortDialog-B_Wzgvor.js";import"./MenuTrigger-4x01M3QC.js";import"./CompositeItem-DoK1nl1V.js";import"./ToolbarRootContext-DVH0WoOd.js";import"./getDisabledMountTransitionStyles-DTkXPwSS.js";import"./getPseudoElementBounds-DB6IKhjF.js";import"./chevron-down-h_s7BHqv.js";import"./index-BXJyqqou.js";import"./error-CawAj1Hu.js";import"./BaseCbacBanner-CRapjwAS.js";import"./makeExternalStore-C-kCn6EW.js";import"./Tooltip-Bgo0GtJm.js";import"./isObject-Br-jS6Ya.js";import"./debounce-DKSfc2Jx.js";import"./useOsdkClient-BeJmH5-G.js";import"./tick-C3zXPXqC.js";import"./DropdownField-RNzF6eBl.js";import"./isEqual-ZwzT0KOc.js";import"./_baseIsEqual--05v_xkz.js";import"./withOsdkMetrics-DniPK0ul.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const ir=["MarkingColumns"];export{r as MarkingColumns,ir as __namedExportsOrder,nr as default};
