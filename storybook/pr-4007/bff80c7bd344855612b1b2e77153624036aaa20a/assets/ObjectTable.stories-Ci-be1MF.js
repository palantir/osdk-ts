import{j as i}from"./iframe-XZT6dXfR.js";import{O as p}from"./object-table-BQSE7qsB.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CJTsz3CQ.js";import"./preload-helper-Bq4RjIN3.js";import"./Table-BS9XaZPa.js";import"./index-DBmC_ZXQ.js";import"./Dialog-B2xCcXCg.js";import"./cross-DhoAWiHd.js";import"./svgIconContainer-CU7rRNTz.js";import"./useBaseUiId-B8UoJpnF.js";import"./InternalBackdrop-CIqXcp3k.js";import"./composite-8to6_dHI.js";import"./index-CNzOt5rB.js";import"./index-DBvBEYmO.js";import"./index-CwmKjwjW.js";import"./useEventCallback-CrcHZf2i.js";import"./SkeletonBar-QCqk1NFT.js";import"./LoadingCell-B5xITLxa.js";import"./ColumnConfigDialog-D5p_98S6.js";import"./DraggableList-B9SHbjAV.js";import"./search-JQ5a7a7P.js";import"./Input-ieeoajuX.js";import"./useControlled-eor914uw.js";import"./Button-CFmpzwcx.js";import"./small-cross-Bs01bh1t.js";import"./ActionButton-tWe0lZ3U.js";import"./Checkbox-CAfM_O_2.js";import"./useValueChanged-BiHw7QxN.js";import"./CollapsiblePanel-B1faMpX3.js";import"./MultiColumnSortDialog-BsF5urer.js";import"./MenuTrigger-BxQzviuH.js";import"./CompositeItem-CFpArZRZ.js";import"./ToolbarRootContext-DmE1Zvel.js";import"./getDisabledMountTransitionStyles-DOuJdwmK.js";import"./getPseudoElementBounds-yKX43mtP.js";import"./chevron-down-7slW-jes.js";import"./index-CAFrt6ka.js";import"./error-CE5bRqvK.js";import"./BaseCbacBanner-Ca9YHGdr.js";import"./makeExternalStore-DkP425EE.js";import"./Tooltip-COCJMSAT.js";import"./PopoverPopup-BDOMby4V.js";import"./debounce-DSg_tuNC.js";import"./useOsdkClient-JmfcqbuF.js";import"./tick-wmOq-VtM.js";import"./DropdownField-r6GmTP-a.js";import"./isEqual-DhcMgsNP.js";import"./withOsdkMetrics-waGd8POl.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
