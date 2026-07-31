import{j as i}from"./iframe-CtNJDH5G.js";import{O as p}from"./object-table-B52x9VZ2.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CuyNUunH.js";import"./preload-helper-B6Bov_yH.js";import"./Table-Dsg8rYNI.js";import"./index-z2XYq7ra.js";import"./Dialog-CDLtTXw8.js";import"./cross-BmTxvcx-.js";import"./svgIconContainer-C1uz_o6R.js";import"./useBaseUiId-2S0D4Wex.js";import"./InternalBackdrop-qjgvext-.js";import"./composite-B1yphZ5b.js";import"./index-BwJWoqxS.js";import"./index-DpRvis3c.js";import"./index-DSDVI0tN.js";import"./useEventCallback-D2_O1PtJ.js";import"./SkeletonBar-CAViw2Ph.js";import"./LoadingCell-C7DV2Dkh.js";import"./ColumnConfigDialog-CScSLge6.js";import"./DraggableList-CGR_3SSW.js";import"./search-JAqzsTe5.js";import"./Input-BTkkuHQL.js";import"./useControlled-CST_0_q3.js";import"./isEqual-Bvjnl5yW.js";import"./isObject-C2EW0xoh.js";import"./Button-Be9aku2m.js";import"./ActionButton-GN3WMfyu.js";import"./Checkbox-DMeMsCzD.js";import"./useValueChanged-CK9L4fih.js";import"./CollapsiblePanel--WvP7msJ.js";import"./MultiColumnSortDialog-CZB_vWa7.js";import"./MenuTrigger-c3igAaqW.js";import"./CompositeItem-rxULTRxY.js";import"./ToolbarRootContext-p83rW4-4.js";import"./getDisabledMountTransitionStyles-HPK60DLM.js";import"./getPseudoElementBounds-uqHOXtkO.js";import"./chevron-down-BDWvu0E4.js";import"./index-BgHP8oNq.js";import"./error-TzMVm4P5.js";import"./BaseCbacBanner-MPdW9-vk.js";import"./makeExternalStore-ZIQANtwN.js";import"./Tooltip-CFXn8FEX.js";import"./PopoverPopup-DiPuw5VV.js";import"./toNumber-CW-bxiXL.js";import"./useOsdkClient-6noYeR_d.js";import"./tick-DlqKfDkY.js";import"./DropdownField-BMJj-U5h.js";import"./withOsdkMetrics-qjYcIJv8.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
