import{j as i}from"./iframe-8W7VgjHd.js";import{O as p}from"./object-table-DdJ9zRzS.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D-g8AyTn.js";import"./preload-helper-DO6s7Vfv.js";import"./Table-C4qtfNE5.js";import"./index-BtBCXImO.js";import"./Dialog-Ch3t_b5I.js";import"./cross-6cERZ-YR.js";import"./svgIconContainer-BTT_9wFe.js";import"./useBaseUiId-CAeqz6cK.js";import"./InternalBackdrop-DfwF-S7u.js";import"./composite-C4cfnDPy.js";import"./index-BOk8n-3F.js";import"./index-DLLXsNTc.js";import"./index-BdDerrdJ.js";import"./useEventCallback-CcBUD0dP.js";import"./SkeletonBar-CNX-DDH1.js";import"./LoadingCell-Csb6dv_d.js";import"./ColumnConfigDialog-v2o9UO3m.js";import"./DraggableList-CM6_ZUT5.js";import"./search-Xd_WCU0c.js";import"./Input-C92p9Vvp.js";import"./useControlled-DJ7vg7ze.js";import"./Button-DqbeFPJh.js";import"./small-cross-SY3kxLTP.js";import"./ActionButton-cxV3QJBQ.js";import"./Checkbox-CnPS01sL.js";import"./useValueChanged-8dBDW2sE.js";import"./CollapsiblePanel-BAo3DGGi.js";import"./MultiColumnSortDialog-Cl_x44Fb.js";import"./MenuTrigger-DXvqC90a.js";import"./CompositeItem-DdqixRyh.js";import"./ToolbarRootContext-BF4G0Oc0.js";import"./getDisabledMountTransitionStyles-DVCYeryT.js";import"./getPseudoElementBounds-dA7mVN4o.js";import"./chevron-down-Bz7OwIBQ.js";import"./index-DmJmV5u2.js";import"./error-BHd5K9Qe.js";import"./BaseCbacBanner-CzNk8lN_.js";import"./makeExternalStore-DqBKfbO3.js";import"./Tooltip-Cg8D7mEU.js";import"./PopoverPopup-BFrPiLZn.js";import"./debounce-r4t9Jw_5.js";import"./useOsdkClient-BAJ4OvKx.js";import"./tick-CUYsCAuC.js";import"./DropdownField-DDsIis61.js";import"./useDebouncedCallback-BgfmWq5o.js";import"./withOsdkMetrics-pAxDRnd3.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
