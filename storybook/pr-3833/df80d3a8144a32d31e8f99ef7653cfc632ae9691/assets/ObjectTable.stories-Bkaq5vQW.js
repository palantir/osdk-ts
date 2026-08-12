import{j as i}from"./iframe-Ccflwbci.js";import{O as p}from"./object-table-1GBHejr9.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Dd9YzEjr.js";import"./preload-helper-wr7_iP2o.js";import"./Table-NaYHmXqg.js";import"./index-CpsvpGUe.js";import"./Dialog-02ZWIh_l.js";import"./cross-CMgZFgZF.js";import"./svgIconContainer-Cepk_4ly.js";import"./useBaseUiId-WPl9OK4D.js";import"./InternalBackdrop-BDdhHd1v.js";import"./composite-C9Rp5H4o.js";import"./index-DnQt8rFF.js";import"./index-Ch-qdtZV.js";import"./index-BpTZx_xG.js";import"./useEventCallback-H5sQEvRk.js";import"./SkeletonBar-DuIHYxXR.js";import"./LoadingCell-CM40Krc5.js";import"./ColumnConfigDialog-DDvxuMYz.js";import"./DraggableList-CrxjXnyI.js";import"./search-xzH4WAuR.js";import"./Input-DL3wG5cx.js";import"./useControlled-CPTTGrVV.js";import"./isEqual-Co-8GGGH.js";import"./isObject-C9un3BSS.js";import"./Button-CTcQr_p3.js";import"./ActionButton-CUUK9wbz.js";import"./Checkbox-Dkt7HrQ9.js";import"./useValueChanged-BrNvQ_6w.js";import"./CollapsiblePanel-By2OUVWo.js";import"./MultiColumnSortDialog-C6Z4oQR3.js";import"./MenuTrigger-BemlYMAx.js";import"./CompositeItem-cdsIBR5_.js";import"./ToolbarRootContext-D_-uFHqt.js";import"./getDisabledMountTransitionStyles-DsF9pAEs.js";import"./getPseudoElementBounds-CkiI2b_9.js";import"./chevron-down-DOhdBcS5.js";import"./index-qYGSMIpd.js";import"./error-F0UcLgfA.js";import"./BaseCbacBanner-fukVi_hJ.js";import"./makeExternalStore-B9YW9e1O.js";import"./Tooltip-CHeal-fF.js";import"./PopoverPopup-KX6urh2m.js";import"./toNumber-BVGNT-Nz.js";import"./useOsdkClient-DSEN7giB.js";import"./tick-2IsKUyMz.js";import"./DropdownField-pC7bQq9H.js";import"./withOsdkMetrics-gAWdhCc4.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
