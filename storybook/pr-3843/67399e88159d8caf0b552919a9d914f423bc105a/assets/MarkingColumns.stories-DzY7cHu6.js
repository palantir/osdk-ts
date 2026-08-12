import{f as p,j as e}from"./iframe-B4fcYJiT.js";import{O as i}from"./object-table-wmuurdSj.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-5Xw9mBMZ.js";import"./Table-BjoSwt71.js";import"./index-vOfuVkgp.js";import"./Dialog-BuJv0oan.js";import"./cross-C_JdOVLy.js";import"./svgIconContainer-DPEA_BLS.js";import"./useBaseUiId-B6WbWpXC.js";import"./InternalBackdrop-htLWR8L5.js";import"./composite-B-tdErfc.js";import"./index-Bt4bJlhP.js";import"./index-CJQLe4j-.js";import"./index-BdBvEu1G.js";import"./useEventCallback-By0kDg3B.js";import"./SkeletonBar-AjIVRhjA.js";import"./LoadingCell-DsaPLpod.js";import"./ColumnConfigDialog-jQja5evH.js";import"./DraggableList-Dnmu7Nmy.js";import"./search-CIBP2gcU.js";import"./Input-DZvTEW1z.js";import"./useControlled-DX4yqe1s.js";import"./isEqual-gV3mdmfB.js";import"./isObject-DxsoYVwo.js";import"./Button-D_oMeqth.js";import"./ActionButton-DhWSTHtc.js";import"./Checkbox-nqjfnWv-.js";import"./useValueChanged-B7hRFktE.js";import"./CollapsiblePanel-80O_QsdD.js";import"./MultiColumnSortDialog-C8QjInzL.js";import"./MenuTrigger-CJ8cgNtT.js";import"./CompositeItem-pQ2K7xcn.js";import"./ToolbarRootContext-y8R4SKxQ.js";import"./getDisabledMountTransitionStyles-B03Bv83z.js";import"./getPseudoElementBounds-CDskDbCj.js";import"./chevron-down-D4_4ihME.js";import"./index-Rk3z2JLL.js";import"./error-BdWXxwFt.js";import"./BaseCbacBanner-D61PQQ1U.js";import"./makeExternalStore-DVTzYonn.js";import"./Tooltip-BTrbcxkb.js";import"./PopoverPopup-xSMzY-FR.js";import"./toNumber-Dh2Swo2H.js";import"./useOsdkClient-CLoYggTB.js";import"./tick-C633aTdz.js";import"./DropdownField-C5BZ1RDL.js";import"./withOsdkMetrics-BoWW8iWH.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
