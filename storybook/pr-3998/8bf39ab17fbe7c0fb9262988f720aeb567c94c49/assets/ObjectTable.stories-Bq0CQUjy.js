import{j as i}from"./iframe-CCEjzOPC.js";import{O as p}from"./object-table-DZQs2MZ-.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BXyNIrgS.js";import"./preload-helper-DImdHWFo.js";import"./Table-B3s4tqwg.js";import"./index-DgoUsAmK.js";import"./Dialog-iEMF0ksL.js";import"./cross-BGMsRd6B.js";import"./svgIconContainer-Coaz20-Z.js";import"./useBaseUiId-j3ufExoT.js";import"./InternalBackdrop-D3oUcg0G.js";import"./composite-C0q05pny.js";import"./index-BilPMlQA.js";import"./index-D9nMHWCp.js";import"./index-DFR7OMHV.js";import"./useEventCallback-C24S9g8A.js";import"./SkeletonBar-IG_FwzYT.js";import"./LoadingCell-CroxuggV.js";import"./ColumnConfigDialog-VHlRkSQk.js";import"./DraggableList-BwMCWSzT.js";import"./search-BPL1vhq_.js";import"./Input-CGqEOpN_.js";import"./useControlled-D5RejEGV.js";import"./Button-2G_ar31r.js";import"./small-cross-47kwWW4U.js";import"./ActionButton-iW7h5mCg.js";import"./Checkbox-DolXhSfQ.js";import"./useValueChanged-BqfQCkU5.js";import"./CollapsiblePanel-VY2LOFCf.js";import"./MultiColumnSortDialog-CrToGM7C.js";import"./MenuTrigger-8_vJ3anI.js";import"./CompositeItem-vBJlJ_jv.js";import"./ToolbarRootContext-CugNg6qm.js";import"./getDisabledMountTransitionStyles-CeC0WSMX.js";import"./getPseudoElementBounds-C4El7Kw5.js";import"./chevron-down-D9MyH17B.js";import"./index-D3oslL3x.js";import"./error-8gbxpDNd.js";import"./BaseCbacBanner-DMeAXQ6o.js";import"./makeExternalStore-CccFVbAZ.js";import"./Tooltip-_l0C6K9V.js";import"./PopoverPopup-BkHPuubJ.js";import"./debounce-pZlXkjc8.js";import"./useOsdkClient-CYh5mGXm.js";import"./tick-CfFnANAV.js";import"./DropdownField-BbmelQYl.js";import"./isEqual-BvaSJKFT.js";import"./withOsdkMetrics-D3mK_z9G.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
