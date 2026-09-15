import{j as i}from"./iframe-QP8DFwwe.js";import{O as p}from"./object-table-CkAmmGKV.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CorT5JlY.js";import"./preload-helper-DZ_jViir.js";import"./Table-9EMD1wAM.js";import"./index-BNJVHiwE.js";import"./Dialog-DmXA-7a6.js";import"./cross-CwXi3gtQ.js";import"./svgIconContainer-CfQEGbE2.js";import"./useBaseUiId-D1NpMsZt.js";import"./InternalBackdrop-Df-z6WHD.js";import"./composite-Ikyj3NkG.js";import"./index-CaTuEA2R.js";import"./index-BtfIDQW-.js";import"./index-CDGaQ0T_.js";import"./useEventCallback-D15NkIZA.js";import"./SkeletonBar-CXyCFZte.js";import"./LoadingCell-C7w0zupb.js";import"./ColumnConfigDialog-dwzfqe--.js";import"./DraggableList-BJmmM-Jm.js";import"./search-BhbGsmDO.js";import"./Input-CHlmHTWZ.js";import"./useControlled-206lJMjs.js";import"./Button-B0j0zDqq.js";import"./small-cross-DE9wbwSK.js";import"./ActionButton-DEbkrteD.js";import"./Checkbox-Bh3zQ7I6.js";import"./useValueChanged-DoeB4fKz.js";import"./CollapsiblePanel-BDw9e-7-.js";import"./MultiColumnSortDialog-CKEs3M8C.js";import"./MenuTrigger-Bm32lMoS.js";import"./CompositeItem-BUsTT35Y.js";import"./ToolbarRootContext-CahY9HEa.js";import"./getDisabledMountTransitionStyles-IaA4KMEY.js";import"./getPseudoElementBounds-B5MkDbXv.js";import"./chevron-down-_zkKmv-U.js";import"./index-CVANDjkc.js";import"./error-CwAuvkpD.js";import"./BaseCbacBanner-nEF6sd8M.js";import"./makeExternalStore-8VCBcpFX.js";import"./Tooltip-CJE-g1wt.js";import"./PopoverPopup-D8FRxbTU.js";import"./debounce-ftvaY34_.js";import"./useOsdkClient-D0i8Jm78.js";import"./tick-CXRziisf.js";import"./DropdownField-BgIEC6qN.js";import"./isEqual-xLxyFeNM.js";import"./withOsdkMetrics-B4sVoh8c.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
