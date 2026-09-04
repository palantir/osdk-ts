import{f as p,j as e}from"./iframe-D8UHlLM-.js";import{O as i}from"./object-table-DriLHpx0.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B2drndpz.js";import"./Table-DIJzy73N.js";import"./index-2pZAxqQ8.js";import"./Dialog-LP3kER3w.js";import"./cross-zCnfpZEf.js";import"./svgIconContainer-Ckme5BEx.js";import"./useBaseUiId-B83MHcbd.js";import"./InternalBackdrop-BiFzgO2t.js";import"./composite-BYq1KtFB.js";import"./index-DrmX_pzR.js";import"./index-BrcjEskR.js";import"./index-CbaYF84n.js";import"./useEventCallback-BoHAEoDT.js";import"./SkeletonBar-BE_VQs-9.js";import"./LoadingCell-BIhXQH6G.js";import"./ColumnConfigDialog-DUp2kRps.js";import"./DraggableList-waEoSKM6.js";import"./search-DmARyhAU.js";import"./Input-BHmmIdQN.js";import"./useControlled-DT-SiHVq.js";import"./Button-SSlA87_g.js";import"./small-cross-LQUt3Gb7.js";import"./ActionButton-BScY58m0.js";import"./Checkbox-DGOEyl7w.js";import"./useValueChanged-BuBsDfgp.js";import"./CollapsiblePanel-CifK208E.js";import"./MultiColumnSortDialog-Cqg1dnup.js";import"./MenuTrigger-BfJ69Gas.js";import"./CompositeItem-DhPX7cGM.js";import"./ToolbarRootContext-Df4LXHpy.js";import"./getDisabledMountTransitionStyles-CbL9qvCd.js";import"./getPseudoElementBounds-Cr-VGz-T.js";import"./chevron-down-B03gIwVp.js";import"./index-CwPCwgJ9.js";import"./error-CsDtSshc.js";import"./BaseCbacBanner-Clb2sC9-.js";import"./makeExternalStore-CDgVz-Cr.js";import"./Tooltip-BSlgHJeE.js";import"./PopoverPopup-Dye_SGlA.js";import"./debounce-DEV0SMqr.js";import"./useOsdkClient-HNKtj353.js";import"./tick-CckWobbk.js";import"./DropdownField-BqKtTUT-.js";import"./isEqual-BKZS-MzX.js";import"./withOsdkMetrics-BtMau99A.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
