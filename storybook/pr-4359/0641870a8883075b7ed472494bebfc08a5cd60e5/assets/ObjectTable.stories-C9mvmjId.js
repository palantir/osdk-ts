import{j as i}from"./iframe-BZzSz7BH.js";import{O as p}from"./object-table-NRkhlIEe.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D9ayMrBZ.js";import"./preload-helper-CNCm3N6L.js";import"./Table-DL08LYN0.js";import"./index-B0_2NaMN.js";import"./Dialog-CENMOXYE.js";import"./cross-DZZxBCNz.js";import"./svgIconContainer-Dhl9__RH.js";import"./useBaseUiId-DkyKYNDq.js";import"./InternalBackdrop-Dz8c766k.js";import"./composite-BTQMDNX2.js";import"./index-BRGRaTrf.js";import"./index-CuHAqEhQ.js";import"./index-B8CHFzHN.js";import"./useEventCallback-s0-nnfm7.js";import"./SkeletonBar-BHiQfJ3N.js";import"./LoadingCell-Cc7BBtdp.js";import"./ColumnConfigDialog-DvyEztzL.js";import"./DraggableList-Bgkxbtf8.js";import"./search-Bp2lXg3F.js";import"./Input-D_wnf1zt.js";import"./useControlled-DTdqQX0O.js";import"./Button-DjbJHqTl.js";import"./small-cross-duhx-2IW.js";import"./ActionButton-CPOmOwV3.js";import"./Checkbox-YrYlJhGX.js";import"./useValueChanged-BTOjYRe_.js";import"./CollapsiblePanel-Cn1JiM3m.js";import"./MultiColumnSortDialog-BhDJP-we.js";import"./MenuTrigger-Cojssmun.js";import"./CompositeItem-B-WQrem9.js";import"./ToolbarRootContext-BbBpvcok.js";import"./getDisabledMountTransitionStyles-CVVnoiuw.js";import"./getPseudoElementBounds-CNHnb_Zs.js";import"./chevron-down-BtcR6Z3d.js";import"./index-CKPZYnP1.js";import"./error-CUMr5i6e.js";import"./BaseCbacBanner-Bb8aDwze.js";import"./makeExternalStore-8dQqHLia.js";import"./Tooltip-DpHxoLtf.js";import"./PopoverPopup-DSpnAg_f.js";import"./debounce-bMnFMRzg.js";import"./useOsdkClient-PElMpwH_.js";import"./tick-DNPnh0Dr.js";import"./DropdownField-squh2G6a.js";import"./isEqual-fKiVWW2e.js";import"./withOsdkMetrics-EMHKCnPx.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
