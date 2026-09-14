import{j as i}from"./iframe-NlvaTXdz.js";import{O as p}from"./object-table-sckLgGSi.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CptP3k0u.js";import"./preload-helper-11218VAb.js";import"./Table-tpwkwsOf.js";import"./index-B0X1kouN.js";import"./Dialog-CbrM7LOV.js";import"./cross-3E2um-ab.js";import"./svgIconContainer-Dx3Wsu_D.js";import"./useBaseUiId-Cak_Gf6y.js";import"./InternalBackdrop-81BDBXVN.js";import"./composite-BVOO1HYh.js";import"./index-zA5UJtgN.js";import"./index-BKEieiUG.js";import"./index-CVSwwXpW.js";import"./useEventCallback-DIZPvIjV.js";import"./SkeletonBar-BEPts0M1.js";import"./LoadingCell-ByZgSJdg.js";import"./ColumnConfigDialog-5g3qFlze.js";import"./DraggableList-Dc8tW3gn.js";import"./search-JCoXnDaS.js";import"./Input-ec2719nZ.js";import"./useControlled-Dr03MbeI.js";import"./Button-Cj6didcq.js";import"./small-cross-9qxQlKft.js";import"./ActionButton-D2vkEZRA.js";import"./Checkbox-E09LMdpJ.js";import"./useValueChanged-DDbbsCD3.js";import"./CollapsiblePanel-DnncBNgb.js";import"./MultiColumnSortDialog-B5eU55ys.js";import"./MenuTrigger-CFUy_u8Y.js";import"./CompositeItem--ZMxCD0o.js";import"./ToolbarRootContext-BusYBQnb.js";import"./getDisabledMountTransitionStyles-DMxebDRk.js";import"./getPseudoElementBounds-CgEw87z9.js";import"./chevron-down-dfuDLNdx.js";import"./index-Cub9R0HW.js";import"./error-CV3Wyi-T.js";import"./BaseCbacBanner-BcV7RFqw.js";import"./makeExternalStore-BJZbhgwh.js";import"./Tooltip-Bu2sAhK0.js";import"./PopoverPopup-CVjAB-qP.js";import"./debounce-BGWK8YL4.js";import"./useOsdkClient-FuspldWR.js";import"./tick-DMWwchqI.js";import"./DropdownField-BOcDuARz.js";import"./isEqual-BdTIqhZC.js";import"./withOsdkMetrics-zr1-J277.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
