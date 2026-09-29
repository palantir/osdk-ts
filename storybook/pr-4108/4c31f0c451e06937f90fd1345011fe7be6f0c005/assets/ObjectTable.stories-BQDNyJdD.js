import{j as i}from"./iframe-BjbHRI0z.js";import{O as p}from"./object-table-CRsH42Ki.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-ltnKqwbc.js";import"./preload-helper-BUM7BTsm.js";import"./Table-CjrVb0t9.js";import"./index-CGlA5dXU.js";import"./Dialog-DAdIz198.js";import"./cross-DFCaIKoy.js";import"./svgIconContainer-BQW7jGob.js";import"./useBaseUiId-BfNPJ7-Z.js";import"./InternalBackdrop-44a6AIl-.js";import"./composite-BFEQAufL.js";import"./index-CI8QNR9V.js";import"./index-CiZKopjl.js";import"./index-DLLtCTGJ.js";import"./useEventCallback-C_WUDWdo.js";import"./SkeletonBar-CAHftrLV.js";import"./LoadingCell-E8N45omU.js";import"./ColumnConfigDialog-BDpr2Vqq.js";import"./DraggableList-UwyC-4Gj.js";import"./search-DugTyXej.js";import"./Input-BVornoU9.js";import"./useControlled-rSaw5pb5.js";import"./Button-D9KcyGxn.js";import"./small-cross-CN9po8rh.js";import"./ActionButton-BDL-FgSv.js";import"./Checkbox-BJPUMEsA.js";import"./useValueChanged-ls6nut0P.js";import"./CollapsiblePanel-D9oIVLW-.js";import"./MultiColumnSortDialog-Bj0wdEYx.js";import"./MenuTrigger-EwmqbwYj.js";import"./CompositeItem-BUg5QAEv.js";import"./ToolbarRootContext-BIp7KVlb.js";import"./getDisabledMountTransitionStyles-DIaPn1J1.js";import"./getPseudoElementBounds-Cz_FAddT.js";import"./chevron-down-C9nnJYZM.js";import"./index-D90yLxts.js";import"./error-Cl6EUNrf.js";import"./BaseCbacBanner-CF7bmkgw.js";import"./makeExternalStore-CeeAAQpn.js";import"./Tooltip-B88xm2HD.js";import"./PopoverPopup-DUUESn5Y.js";import"./debounce-B0atJeU8.js";import"./useOsdkClient-EcavFoEZ.js";import"./tick-BUlj9YHj.js";import"./DropdownField-D4-t_biV.js";import"./isEqual-BsA9kd7g.js";import"./withOsdkMetrics-BjQ5Qn0j.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
