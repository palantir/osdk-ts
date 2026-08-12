import{j as i}from"./iframe-D0keSMdE.js";import{O as p}from"./object-table-XRSPKeAk.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D51c6emF.js";import"./preload-helper-CgWhzYZU.js";import"./Table-_VO1h67p.js";import"./index-BlRIDWUP.js";import"./Dialog-DMYs324-.js";import"./cross-D5Zmda7x.js";import"./svgIconContainer-DmusCROY.js";import"./useBaseUiId-BfGVExes.js";import"./InternalBackdrop-Ia9GDuBc.js";import"./composite-DXaC0pY0.js";import"./index-BEB5yinp.js";import"./index-CPRvGqlK.js";import"./index-Bp5ZfHYq.js";import"./useEventCallback-ethJwitj.js";import"./SkeletonBar-Bc2rCGVb.js";import"./LoadingCell-BnKI4h5Y.js";import"./ColumnConfigDialog-BZ0hPi45.js";import"./DraggableList-ySBav17x.js";import"./search-ZZx32mw4.js";import"./Input-CaL2qwMz.js";import"./useControlled-yw1OI-ys.js";import"./isEqual-BCTdKTnZ.js";import"./isObject-Dx34Yu9O.js";import"./Button-BAAmeZ1M.js";import"./ActionButton-BVPOosnJ.js";import"./Checkbox-BK1SkvvN.js";import"./useValueChanged-DE0ePa0Z.js";import"./CollapsiblePanel-OhRGgboZ.js";import"./MultiColumnSortDialog-DuCRYSUE.js";import"./MenuTrigger-DfDEfgVd.js";import"./CompositeItem-Dcat_OLQ.js";import"./ToolbarRootContext-C7LF38_0.js";import"./getDisabledMountTransitionStyles-eeoeUg8o.js";import"./getPseudoElementBounds-Bs1xhkgH.js";import"./chevron-down-CqaC9B7A.js";import"./index-Ck9HyH0x.js";import"./error-Cs55j0k0.js";import"./BaseCbacBanner-Ctqp3Rus.js";import"./makeExternalStore-BtSZghYs.js";import"./Tooltip-CLb0k3vN.js";import"./PopoverPopup-kbgZB1b0.js";import"./toNumber-BYHut4ds.js";import"./useOsdkClient-B9r7mj-F.js";import"./tick-BbyLm6yV.js";import"./DropdownField-DO3Vqoyf.js";import"./withOsdkMetrics-CKalA1p6.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
