import{f as n,j as t}from"./iframe-DnKJB4tf.js";import{O as p}from"./object-table-C1EFZykX.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CP_4LH1y.js";import"./Table-BxHlqKtI.js";import"./index-DsLBK2rD.js";import"./Dialog-wSWridY8.js";import"./cross-DHc1nhB3.js";import"./svgIconContainer-hyFCaOzG.js";import"./useBaseUiId-c0a-O2p9.js";import"./InternalBackdrop-CUfu8VR0.js";import"./composite-C2dHrzPG.js";import"./index-BpSxxceB.js";import"./index-j9hUGQ3G.js";import"./index-pErbuvTi.js";import"./useEventCallback-D6uXJzwq.js";import"./SkeletonBar-Csc7ye5b.js";import"./LoadingCell-CD4kKy_z.js";import"./ColumnConfigDialog-TqLGX3m0.js";import"./DraggableList-_9im8dfe.js";import"./search-CrLHj3lH.js";import"./Input-B_8ntroz.js";import"./useControlled-B1Myh9nv.js";import"./Button-BWPawo9O.js";import"./small-cross-vh0TUX8p.js";import"./ActionButton-DEVGqOyJ.js";import"./Checkbox-CJ8upm9E.js";import"./useValueChanged-EFrN1WVj.js";import"./CollapsiblePanel-QlGR2gN6.js";import"./MultiColumnSortDialog-BUS2iRVU.js";import"./MenuTrigger-C_MxNlys.js";import"./CompositeItem-CIW_zvxP.js";import"./ToolbarRootContext-BFuYTsvJ.js";import"./getDisabledMountTransitionStyles-C9ZpfH2M.js";import"./getPseudoElementBounds-7RnfUn4Y.js";import"./chevron-down-DxcIi4ej.js";import"./index-CvgbtZHK.js";import"./error-CY06xBhW.js";import"./BaseCbacBanner-D9R3z_bm.js";import"./makeExternalStore-BP2lWOFo.js";import"./Tooltip-BOXvelZX.js";import"./PopoverPopup-Bl30bmsT.js";import"./toNumber-7l8ccKfF.js";import"./useOsdkClient-W6WOMDdE.js";import"./tick-Y9OoKt_9.js";import"./DropdownField-BD-7FPuc.js";import"./withOsdkMetrics-Dg_o3KRg.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
  render: args => <div style={{
    height: 480
  }}>
      <ObjectTable {...args} />
    </div>
}`,...(i=(e=r.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const er=["MarkingColumns"];export{r as MarkingColumns,er as __namedExportsOrder,or as default};
