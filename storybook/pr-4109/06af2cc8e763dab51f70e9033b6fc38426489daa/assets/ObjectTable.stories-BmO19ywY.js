import{j as i}from"./iframe-DFLNqEm2.js";import{O as p}from"./object-table-BzCwhrP9.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Ukc0X1W_.js";import"./preload-helper-C4OJk57-.js";import"./Table-Csirv5fL.js";import"./index-fk_tQ1YC.js";import"./Dialog-CfKlKKmV.js";import"./cross-DMqxAY0f.js";import"./svgIconContainer-5792X2so.js";import"./useBaseUiId-f39Vd-uF.js";import"./InternalBackdrop-DsVJKrRk.js";import"./composite-luK9vRGl.js";import"./index-CA9B81mf.js";import"./index-BJjObxmA.js";import"./index-DEOn4aKD.js";import"./useEventCallback-D63bKoHu.js";import"./SkeletonBar-BOr5ioOf.js";import"./LoadingCell-DPPwvS8w.js";import"./ColumnConfigDialog-aRCbvdi3.js";import"./DraggableList-D3byIqUN.js";import"./search-LoblqU0W.js";import"./Input-CsKqmdcW.js";import"./useControlled-BgQ6tJlm.js";import"./Button-BbpsJ4er.js";import"./small-cross-CBeD8iwS.js";import"./ActionButton-B5J36pLX.js";import"./Checkbox-D53VBo_9.js";import"./useValueChanged-C-TRa-z8.js";import"./CollapsiblePanel-C7HlC61M.js";import"./MultiColumnSortDialog-ATzrXawV.js";import"./MenuTrigger-c_Jrk9MS.js";import"./CompositeItem-DHZAlp7N.js";import"./ToolbarRootContext-CH5CakMV.js";import"./getDisabledMountTransitionStyles-Czp6bpN4.js";import"./getPseudoElementBounds-Br4mtL1e.js";import"./chevron-down-CHUZ5wYq.js";import"./index-j4zmBLn_.js";import"./error-C8Ukd2CZ.js";import"./BaseCbacBanner-BeddFxq4.js";import"./makeExternalStore-Coy-sieI.js";import"./Tooltip-QrcynOTk.js";import"./PopoverPopup-CS5MDXSc.js";import"./debounce-B-uclRIy.js";import"./useOsdkClient-ENy8kaW0.js";import"./tick-DZ_zylkj.js";import"./DropdownField-DhjuDgoz.js";import"./isEqual-BUPfKLFl.js";import"./withOsdkMetrics-BaDAnBzc.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
