import{f as p,j as e}from"./iframe-C4E-g_Np.js";import{O as i}from"./object-table-BvZY8ks1.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-rW2p5jqX.js";import"./Table-DoTclkzj.js";import"./index-CzqkLMMI.js";import"./Dialog-oOfXzLLB.js";import"./cross-6-c7L2_r.js";import"./svgIconContainer-i3Vzui20.js";import"./useBaseUiId-B-PzIYIN.js";import"./InternalBackdrop-Cc3UyaVF.js";import"./composite-BnlE1__B.js";import"./index-D1JR9Ik6.js";import"./index-BMt0vC51.js";import"./index-1_U-6RN5.js";import"./useEventCallback-B_G8HNu3.js";import"./SkeletonBar-CISy7UuQ.js";import"./LoadingCell-q6GT9Knz.js";import"./ColumnConfigDialog-BxMAye25.js";import"./DraggableList-RigxtXGV.js";import"./search-CfqJuXpO.js";import"./Input-BPR-03z-.js";import"./useControlled-CQT-2p8e.js";import"./Button-kJtgGGYx.js";import"./small-cross-ClQmt7Kl.js";import"./ActionButton-CiCsL3Oo.js";import"./Checkbox-BES1SoPw.js";import"./useValueChanged-DvRoJUac.js";import"./CollapsiblePanel-DIugTpM9.js";import"./MultiColumnSortDialog-DbbTce7i.js";import"./MenuTrigger-NsQDuuGv.js";import"./CompositeItem-DpdLDIC_.js";import"./ToolbarRootContext-DAbASYAb.js";import"./getDisabledMountTransitionStyles-BXneaNn3.js";import"./getPseudoElementBounds-BqbtI_0K.js";import"./chevron-down-CUSU7y7B.js";import"./index-4qPHZMUz.js";import"./error-2WKWP45F.js";import"./BaseCbacBanner-DK52-1P-.js";import"./makeExternalStore-o-ytUCUX.js";import"./Tooltip-YL3zwoBF.js";import"./PopoverPopup-UNHpzLqe.js";import"./debounce-B9bCgoy4.js";import"./useOsdkClient-DuIbV6Tk.js";import"./tick-CrIHxN3X.js";import"./DropdownField-qBxkOplm.js";import"./isEqual-Z4P9dhR-.js";import"./withOsdkMetrics-IbzZIByL.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
