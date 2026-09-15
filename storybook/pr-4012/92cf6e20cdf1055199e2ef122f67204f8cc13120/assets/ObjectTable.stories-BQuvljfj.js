import{j as i}from"./iframe-ClXV96ol.js";import{O as p}from"./object-table-CDlU6gyI.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-ClNmBonX.js";import"./preload-helper-GIvq9Fgh.js";import"./Table-Bibtya0A.js";import"./index-BS_93M16.js";import"./Dialog-B1iIak_-.js";import"./cross-DTt9RaJo.js";import"./svgIconContainer-BzIt4vSD.js";import"./useBaseUiId-CeQ_TKpW.js";import"./InternalBackdrop-BOzPpyjM.js";import"./composite-C0Fpedst.js";import"./index-Bkk5ODU2.js";import"./index-CLBh2Emm.js";import"./index-BLOk9I5e.js";import"./useEventCallback-CSmRluI9.js";import"./SkeletonBar-uZMzevzj.js";import"./LoadingCell-DzMkXgiz.js";import"./ColumnConfigDialog-6XQXVFz4.js";import"./DraggableList-Be7V3q25.js";import"./search-C1vc_KSz.js";import"./Input-CzDuGki_.js";import"./useControlled-Bvg52cep.js";import"./Button-DpTMspMt.js";import"./small-cross-DI0ePjHj.js";import"./ActionButton-dXKws96p.js";import"./Checkbox-5mv4ru67.js";import"./useValueChanged-BOSK5wJR.js";import"./CollapsiblePanel-YRb-6JkX.js";import"./MultiColumnSortDialog-sM5RqFSy.js";import"./MenuTrigger-5DVlRwvj.js";import"./CompositeItem-UA3lXUwr.js";import"./ToolbarRootContext-dOFs4mME.js";import"./getDisabledMountTransitionStyles-Dzb55fqZ.js";import"./getPseudoElementBounds-Y4TxrJ4m.js";import"./chevron-down-BtcKUO_9.js";import"./index-BEQyJeIH.js";import"./error-JR-fCQaz.js";import"./BaseCbacBanner-Cw-Inebf.js";import"./makeExternalStore-CMtJRYT9.js";import"./Tooltip-Cp6NNLht.js";import"./PopoverPopup-BfnU-QCF.js";import"./debounce-DTKHa4Ak.js";import"./useOsdkClient-ptfwTLa8.js";import"./tick-CPeibzQx.js";import"./DropdownField-Cf9jSBwq.js";import"./isEqual-D5sVeEdH.js";import"./withOsdkMetrics-CY10LFb-.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
