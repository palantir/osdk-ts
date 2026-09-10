import{j as i}from"./iframe-BRGzDqju.js";import{O as p}from"./object-table-CVmc407A.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C38B1WYM.js";import"./preload-helper-5JQdMdM9.js";import"./Table-Qz6pPC3g.js";import"./index-En-TUnJd.js";import"./Dialog-BWxPuvzW.js";import"./cross-CQP7lInb.js";import"./svgIconContainer-BQAEO-7W.js";import"./useBaseUiId-B3wooVnn.js";import"./InternalBackdrop-DyMqQPSD.js";import"./composite-C-AGstI3.js";import"./index-DPkAIY9Y.js";import"./index-Bad5TxyQ.js";import"./index-CuXQ76Km.js";import"./useEventCallback-C_Z8usTd.js";import"./SkeletonBar-DLjlHbja.js";import"./LoadingCell-BwECvniD.js";import"./ColumnConfigDialog-DHzmfXh_.js";import"./DraggableList-Cy_sW6IX.js";import"./search-asFq5N8L.js";import"./Input-DmzPzGey.js";import"./useControlled-DJDqOS1V.js";import"./Button-0cGInffD.js";import"./small-cross-B83ohrdP.js";import"./ActionButton-dpWisjKE.js";import"./Checkbox-BaBpX2iW.js";import"./useValueChanged-BU1nXjKr.js";import"./CollapsiblePanel-BSyt4v6y.js";import"./MultiColumnSortDialog-CEHYLNMt.js";import"./MenuTrigger-DhSK_MRy.js";import"./CompositeItem-q2WRXYZP.js";import"./ToolbarRootContext-67BQ7bpF.js";import"./getDisabledMountTransitionStyles-CIJBF-gX.js";import"./getPseudoElementBounds-Da6NSz-p.js";import"./chevron-down-CLb4G2AF.js";import"./index-CNqdpeI1.js";import"./error-CoQddkwW.js";import"./BaseCbacBanner-BdBuPUT8.js";import"./makeExternalStore-B-5KvZfn.js";import"./Tooltip-BinZmbGp.js";import"./PopoverPopup-BjDJmrK2.js";import"./debounce-BY0A57Za.js";import"./useOsdkClient-BD_HHGJ7.js";import"./tick-B0-Xl9HF.js";import"./DropdownField-YHeguodW.js";import"./isEqual-ySCoOjBB.js";import"./withOsdkMetrics-DO5dBBXm.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
