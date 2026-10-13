import{j as i}from"./iframe-DCKvSy3g.js";import{O as p}from"./object-table-BOBMMITQ.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Dg0UfxVz.js";import"./preload-helper-C9_QzmoW.js";import"./Table-BnqpJ3kb.js";import"./index-CjqUtRqG.js";import"./Dialog-CO2HiAWS.js";import"./cross-Bgi1b_0b.js";import"./svgIconContainer-DUPiMOGt.js";import"./useBaseUiId-hGdClsAp.js";import"./InternalBackdrop-31WohGhl.js";import"./composite-Bftlp7o-.js";import"./index-CF-VmLVs.js";import"./index-Dqoie1xV.js";import"./index-VT2qwhQZ.js";import"./useEventCallback-B7A3-78b.js";import"./SkeletonBar-DwIduN_L.js";import"./LoadingCell-GcW2-KWT.js";import"./ColumnConfigDialog-Cifl3j_D.js";import"./DraggableList-CB0fnFNu.js";import"./search-DnxSmR02.js";import"./Input-DAFKBr8O.js";import"./useControlled-23Be6Ua4.js";import"./Button-B8kaenDu.js";import"./small-cross-Cwle5e15.js";import"./ActionButton-Df-iyCXJ.js";import"./Checkbox-CUNIx5wV.js";import"./useValueChanged-Dw4sBVYO.js";import"./CollapsiblePanel-b_i0qiWN.js";import"./MultiColumnSortDialog-BXy1g6m6.js";import"./MenuTrigger-DxP1cL8Z.js";import"./CompositeItem-BaLy62YM.js";import"./ToolbarRootContext-Dfcq71Kx.js";import"./getDisabledMountTransitionStyles-wfE8zBrh.js";import"./getPseudoElementBounds-DdimKXjW.js";import"./chevron-down-CQzxndpd.js";import"./index-BZTMgR5k.js";import"./error-DC-QmFfK.js";import"./BaseCbacBanner-DqXXezVg.js";import"./makeExternalStore-DhsTa73k.js";import"./Tooltip-B14J5KK5.js";import"./PopoverPopup-BnMpvGpN.js";import"./debounce-BpOqmw8g.js";import"./useOsdkClient-BY9Wn_Dg.js";import"./tick-BvA7Cxf1.js";import"./DropdownField-C6HEFrFd.js";import"./isEqual-B9WX-sis.js";import"./withOsdkMetrics-C6hFOzPu.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns
  },
  parameters: {
    docs: {
      description: {
        story: "Minimal setup showing Employee data with default column definitions."
      },
      source: {
        code: \`<ObjectTable objectType={Employee} />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>,
  // Loads data, then opens a column header menu to confirm the default,
  // out-of-the-box header features are all present.
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Wait for the (MSW-mocked) rows to load.
    await canvas.findByText(TARGET_DATA);
    await openHeaderMenu(canvas, "fullName");
    await expect(await screen.findByRole("menuitem", {
      name: "Sort ascending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Sort descending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Pin column"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Configure Columns"
    })).toBeInTheDocument();

    // Dismiss the menu so the story is left in a clean state.
    await userEvent.keyboard("{Escape}");
  }
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const de=["Default"];export{n as Default,de as __namedExportsOrder,ue as default};
