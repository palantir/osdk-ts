import{j as i}from"./iframe-BPocqIVt.js";import{O as p}from"./object-table-BHDuSvAo.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C6x4VzkO.js";import"./preload-helper-DJuEbehX.js";import"./Table-CcZ4FuGS.js";import"./index-D8gxTUyX.js";import"./Dialog-ByPzxqeA.js";import"./cross-CP14YMB5.js";import"./svgIconContainer-lu5MT20R.js";import"./useBaseUiId-DHiAnipM.js";import"./InternalBackdrop-CZva0C0U.js";import"./composite-Bsm441N4.js";import"./index-DUErGcWd.js";import"./index-wB13koOt.js";import"./index-BSp8i_SU.js";import"./useEventCallback-aY1-PS5J.js";import"./SkeletonBar-DHiHMD5H.js";import"./LoadingCell-5yIIwy5g.js";import"./ColumnConfigDialog-BYI69Y6r.js";import"./DraggableList-CQhb22zm.js";import"./search-CPyRqeCk.js";import"./Input-DoB758NI.js";import"./useControlled-Cn9j2jZh.js";import"./Button-BAjtVZWF.js";import"./small-cross-DVc0tIFP.js";import"./ActionButton-5HFO0p1A.js";import"./Checkbox-DjeARGO6.js";import"./useValueChanged-DBh8PZxJ.js";import"./CollapsiblePanel-C4vE3Q24.js";import"./MultiColumnSortDialog-pxPrJnpy.js";import"./MenuTrigger-iVAxRcJM.js";import"./CompositeItem-uae9ym8T.js";import"./ToolbarRootContext-Bx5UxeGF.js";import"./getDisabledMountTransitionStyles-BszX_VbO.js";import"./getPseudoElementBounds-3m_HaT0i.js";import"./chevron-down-DzujtnRS.js";import"./index-QphKDK17.js";import"./error-SprCq_Ye.js";import"./BaseCbacBanner-DToPlCN2.js";import"./makeExternalStore-DNWt0sPl.js";import"./Tooltip-CAhNLUkJ.js";import"./PopoverPopup-BwNEzQB7.js";import"./debounce-CT4AXDLg.js";import"./useOsdkClient-Bm2y0aKf.js";import"./tick-a5SZvQAG.js";import"./DropdownField-CtOmtDd4.js";import"./isEqual-DA-bsXp9.js";import"./withOsdkMetrics-DyR4A0wB.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
