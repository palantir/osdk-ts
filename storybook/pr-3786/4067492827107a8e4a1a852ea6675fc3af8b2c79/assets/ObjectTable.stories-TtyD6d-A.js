import{j as i}from"./iframe-BzPs2xHz.js";import{O as p}from"./object-table-BjXTcb2K.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BEduTvM0.js";import"./preload-helper-Dn3dBWKD.js";import"./Table-CNOGfrVv.js";import"./index-lf_bX8Ds.js";import"./Dialog-DyjdaCir.js";import"./cross-O7xa3Rso.js";import"./svgIconContainer-DhTEATNC.js";import"./useBaseUiId-BMa9eygA.js";import"./InternalBackdrop-Bc7OL2GY.js";import"./composite-DpdAhGyH.js";import"./index-bYLveQI0.js";import"./index-D7e7z0jb.js";import"./index-BO1yNazz.js";import"./useEventCallback-DKpLD8d5.js";import"./SkeletonBar-ChhBmRnb.js";import"./LoadingCell-CkkDFPXD.js";import"./ColumnConfigDialog-D5TgloPk.js";import"./DraggableList-D1aUyZ11.js";import"./search-CRuJLPg-.js";import"./Input-DTycr8bw.js";import"./useControlled-Cj3uSm2N.js";import"./isEqual-B1msFTbl.js";import"./isObject-Cs-BHMix.js";import"./Button-CbC3WPW_.js";import"./ActionButton-DoVkuwyM.js";import"./Checkbox-C4q84H12.js";import"./useValueChanged-B35CBxnf.js";import"./CollapsiblePanel-BMvzd42c.js";import"./MultiColumnSortDialog-kRDKJnam.js";import"./MenuTrigger-BeLVmjwr.js";import"./CompositeItem-CVol_ESW.js";import"./ToolbarRootContext-CRZmb0il.js";import"./getDisabledMountTransitionStyles-7DfCiWwS.js";import"./getPseudoElementBounds-E9OyDYgJ.js";import"./chevron-down-CrUow07b.js";import"./index-8MCdg044.js";import"./error-DW-Bjygh.js";import"./BaseCbacBanner-CI0k0Xav.js";import"./makeExternalStore-BjwsBrDG.js";import"./Tooltip-BG05sR6Z.js";import"./PopoverPopup-xglJO5RD.js";import"./toNumber-CJYn9s_6.js";import"./useOsdkClient-D6ZxsDuF.js";import"./tick-BtgF0ZkK.js";import"./DropdownField-CuWczfpM.js";import"./withOsdkMetrics-DED3H3a2.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
