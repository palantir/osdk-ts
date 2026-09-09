import{j as i}from"./iframe-Dhq7AaUP.js";import{O as p}from"./object-table-BsDnAea4.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CoswS1cM.js";import"./preload-helper-B5t1nGT4.js";import"./Table-fHRNdmYO.js";import"./index-505BPbMk.js";import"./Dialog-D9RsVnl0.js";import"./cross-BTExjjDl.js";import"./svgIconContainer-D5rjHQJh.js";import"./useBaseUiId-8_wbyGGA.js";import"./InternalBackdrop-BwExNyw1.js";import"./composite-m_TTOmrH.js";import"./index-5i4D4FjR.js";import"./index-Cn7LZsiB.js";import"./index-Ds9Aeuo4.js";import"./useEventCallback-DrWx2I0p.js";import"./SkeletonBar-Dfu2XLH1.js";import"./LoadingCell-DOFmpZhf.js";import"./ColumnConfigDialog--25Pujtc.js";import"./DraggableList-0_lK1LFX.js";import"./search-D9UNy25Q.js";import"./Input-BLnXCCTA.js";import"./useControlled-CWg50-5h.js";import"./Button-DHokje8p.js";import"./small-cross-C-lwhhcT.js";import"./ActionButton-KqE6rva2.js";import"./Checkbox-C_uTtVWa.js";import"./useValueChanged-Ba8xukC7.js";import"./CollapsiblePanel-B1W1icVw.js";import"./MultiColumnSortDialog-4PH33oyq.js";import"./MenuTrigger-ggSaI92l.js";import"./CompositeItem-CmAuNbAQ.js";import"./ToolbarRootContext-BPtqJH5V.js";import"./getDisabledMountTransitionStyles-CskAKAe0.js";import"./getPseudoElementBounds-DfU8GLtR.js";import"./chevron-down-D4blBvUy.js";import"./index-MT3wqTUP.js";import"./error-_SQQqIaC.js";import"./BaseCbacBanner-CASdGgiJ.js";import"./makeExternalStore-v3dRS4Sg.js";import"./Tooltip-DNpuDERk.js";import"./PopoverPopup-CbuPYz_R.js";import"./debounce-DxmZJnBK.js";import"./useOsdkClient-CIEi34cT.js";import"./tick-BxbL6Sum.js";import"./DropdownField-CfokxXbx.js";import"./isEqual-Bw6Bno3N.js";import"./withOsdkMetrics-CQGMBuHv.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
