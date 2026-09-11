import{j as i}from"./iframe-B9P_guYe.js";import{O as p}from"./object-table-DRHuz0_X.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-qlwxU9cu.js";import"./preload-helper-DZKvLzKM.js";import"./Table-DGeyv1ad.js";import"./index-BmU_yXsT.js";import"./Dialog-jWuaiD-I.js";import"./cross-B0jMy4Xj.js";import"./svgIconContainer-86dgqwTy.js";import"./useBaseUiId-4Ig60Xd8.js";import"./InternalBackdrop-DymGob4l.js";import"./composite-0HTyS9cl.js";import"./index-3EbL4LBn.js";import"./index-CucgTNc9.js";import"./index-BoCFIwDC.js";import"./useEventCallback-4v2rm6Uv.js";import"./SkeletonBar-DQJfJoRc.js";import"./LoadingCell-WwbEycft.js";import"./ColumnConfigDialog-BusJQA3j.js";import"./DraggableList-D2J35TZN.js";import"./search-_dMlLuUD.js";import"./Input-CexEAM7S.js";import"./useControlled-CCs_p_PA.js";import"./Button-BKlQWyYX.js";import"./small-cross-BEzF29wK.js";import"./ActionButton-39cEgkXv.js";import"./Checkbox-CPiNSmDf.js";import"./useValueChanged-BD6-HJ6i.js";import"./CollapsiblePanel-P4ySmzrR.js";import"./MultiColumnSortDialog-DFMlcDqx.js";import"./MenuTrigger-Db1xRho6.js";import"./CompositeItem-G1VIkMjr.js";import"./ToolbarRootContext-CMDQJiC4.js";import"./getDisabledMountTransitionStyles-Bqo4m5rG.js";import"./getPseudoElementBounds-BJ2IJ4R6.js";import"./chevron-down-CL_Pf9bS.js";import"./index-UwB-iCL8.js";import"./error-B_xrvVtR.js";import"./BaseCbacBanner-BTeEBxtL.js";import"./makeExternalStore-B4SarOE2.js";import"./Tooltip-CyCLgWwQ.js";import"./PopoverPopup-Cr6J1DLL.js";import"./debounce-C8ZI9wGu.js";import"./useOsdkClient-BUXnWXUj.js";import"./tick-B8u-WlBN.js";import"./DropdownField-2HC-0Khs.js";import"./isEqual-BER4d_e_.js";import"./withOsdkMetrics-C2y3Ga9u.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
