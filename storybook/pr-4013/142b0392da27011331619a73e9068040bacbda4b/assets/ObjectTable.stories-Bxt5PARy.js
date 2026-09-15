import{j as i}from"./iframe-CpWBydph.js";import{O as p}from"./object-table-BNn1Ll-c.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CdJGXOyl.js";import"./preload-helper-D2EqYees.js";import"./Table-DVh8Ouz0.js";import"./index-DvfucFad.js";import"./Dialog-Cp3umFkg.js";import"./cross-NuddkLO5.js";import"./svgIconContainer-DbE5PrYx.js";import"./useBaseUiId-COtj2_rS.js";import"./InternalBackdrop-BSfinE2G.js";import"./composite-B-otFn75.js";import"./index-DrBBVf0s.js";import"./index-BmfQPoOF.js";import"./index-5xD2A4-R.js";import"./useEventCallback-BLTuArat.js";import"./SkeletonBar-XV3C3ne0.js";import"./LoadingCell-_Kzizub0.js";import"./ColumnConfigDialog-K0YRT_ip.js";import"./DraggableList-CwbCSsnT.js";import"./search-CA9yp1JF.js";import"./Input-CBPVcjqK.js";import"./useControlled-BmS1IvVS.js";import"./Button-CVph9TxQ.js";import"./small-cross-toPDb3Us.js";import"./ActionButton-CSVHMrTJ.js";import"./Checkbox-NGkojnFm.js";import"./useValueChanged-VjU-WqRp.js";import"./CollapsiblePanel-CygfXvb2.js";import"./MultiColumnSortDialog-B4rwN1TP.js";import"./MenuTrigger-CGEbHfg2.js";import"./CompositeItem-nG423aGN.js";import"./ToolbarRootContext-DMifvP-V.js";import"./getDisabledMountTransitionStyles-BccbayF2.js";import"./getPseudoElementBounds-D6k5ZcCj.js";import"./chevron-down-D78fMNFz.js";import"./index-D9R22dHy.js";import"./error-Due8my_O.js";import"./BaseCbacBanner-6xWHfIM4.js";import"./makeExternalStore-C7U98bYJ.js";import"./Tooltip-BhubVngg.js";import"./PopoverPopup-9FwNVPH6.js";import"./debounce-ClJ8DjPv.js";import"./useOsdkClient-OrClxpkO.js";import"./tick-1IBp_A8v.js";import"./DropdownField-Cj_IdBfJ.js";import"./isEqual-D7VM7CcB.js";import"./withOsdkMetrics-CmC654Yj.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
